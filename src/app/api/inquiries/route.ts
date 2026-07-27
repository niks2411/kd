import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, interest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields (name, email, message)" }, { status: 400 });
    }

    const inquiry = {
      id: crypto.randomUUID(),
      name,
      email,
      company: company || null,
      phone: phone || null,
      interest: interest || null,
      message,
      created_at: new Date().toISOString(),
    };

    console.log("[INQUIRY RECEIVED]:", inquiry);

    // Optionally forward to FastAPI server if running
    const fastapiUrl = process.env.FASTAPI_URL || "http://localhost:8000/api/inquiries";
    try {
      await fetch(fastapiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, phone, interest, message }),
      });
    } catch {
      // Ignore if FastAPI backend isn't running locally
    }

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
