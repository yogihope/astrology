import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { parentName, whatsapp, dob, tob, pob, gender, consultationType, source } = body;

    if (!parentName || !whatsapp || !dob || !pob || !source) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const inquiry = await prisma.inquiry.create({
      data: { parentName, whatsapp, dob, tob: tob || null, pob, gender: gender || null, consultationType: consultationType || null, source },
    });

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (err) {
    console.error("Inquiry submit error:", err);
    return NextResponse.json({ error: "Failed to save inquiry" }, { status: 500 });
  }
}
