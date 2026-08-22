import { NextRequest, NextResponse } from "next/server";
import { ContactFormSchema } from "@/lib/validations/forms";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validationResult = ContactFormSchema.safeParse(body);
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

    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, submissionId: "contact_spam_filtered" });
    }

    let submission;
    try {
      submission = await prisma.contactSubmission.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          businessName: data.businessName || null,
          serviceNeeded: data.serviceNeeded || null,
          message: data.message,
          status: "NEW",
        },
      });

      // Also register as lead
      await prisma.lead.create({
        data: {
          businessName: data.businessName || data.fullName,
          businessType: data.serviceNeeded || "General Inquiry",
          contactPerson: data.fullName,
          phone: data.phone,
          email: data.email,
          message: data.message,
          source: "CONTACT",
          status: "NEW",
        },
      });
    } catch (dbError) {
      console.error("[SETU_CONTACT_DB_ERROR]", dbError);
      const fallbackId = `MSG-${Date.now().toString(36).toUpperCase()}`;
      return NextResponse.json({
        success: true,
        submissionId: fallbackId,
        message: "Message received successfully.",
      });
    }

    return NextResponse.json({
      success: true,
      submissionId: submission.id,
      message: "Message received successfully.",
    });
  } catch (error: unknown) {
    console.error("[SETU_CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
