import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({
      total: leads.length,
      leads,
    });
  } catch (error: unknown) {
    console.error("[SETU_GET_LEADS_ERROR]", error);
    return NextResponse.json({ total: 0, leads: [] });
  }
}
