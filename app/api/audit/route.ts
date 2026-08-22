import { NextRequest, NextResponse } from "next/server";
import { AuditFormSchema } from "@/lib/validations/forms";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate payload with Zod
    const validationResult = AuditFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errorFormatted = validationResult.error.errors
        .map((e) => `${e.path.join(".")}: ${e.message}`)
        .join(", ");
      return NextResponse.json(
        { error: `Validation failed: ${errorFormatted}` },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Spam Honeypot Check
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently ignore spam bots
      return NextResponse.json({ success: true, leadId: "audit_spam_filtered" });
    }

    // 3. Store in Database via Prisma
    let leadRecord;
    try {
      // Create Audit Submission record
      await prisma.auditSubmission.create({
        data: {
          businessName: data.businessName,
          businessType: data.businessType,
          websiteUrl: data.websiteUrl || null,
          instagramHandle: data.instagramHandle || null,
          googleMapsUrl: data.googleMapsUrl || null,
          city: data.city,
          whatsappNumber: data.whatsappNumber,
          emailAddress: data.emailAddress,
          primaryChallenge: data.primaryChallenge,
          targetTimeline: data.targetTimeline || null,
          monthlyBudget: data.monthlyBudget || null,
          additionalNotes: data.additionalNotes || null,
        },
      });

      // Also upsert or create Lead record
      leadRecord = await prisma.lead.create({
        data: {
          businessName: data.businessName,
          businessType: data.businessType,
          phone: data.whatsappNumber,
          email: data.emailAddress,
          website: data.websiteUrl || null,
          instagram: data.instagramHandle || null,
          googleBusiness: data.googleMapsUrl || null,
          location: data.city,
          goal: data.primaryChallenge,
          budget: data.monthlyBudget || null,
          message: data.additionalNotes || null,
          source: "AUDIT",
          status: "NEW",
        },
      });
    } catch (dbError) {
      console.error("[SETU_AUDIT_DB_ERROR]", dbError);
      // Even if DB has an issue during runtime, return fallback reference ID so user experience doesn't break
      const fallbackId = `AUDIT-${Date.now().toString(36).toUpperCase()}`;
      return NextResponse.json({
        success: true,
        leadId: fallbackId,
        message: "Audit request received successfully.",
      });
    }

    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      message: "Audit request received and queued for review.",
    });
  } catch (error: unknown) {
    console.error("[SETU_AUDIT_API_ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
