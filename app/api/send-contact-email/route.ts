import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Read the request body
    const body = await request.json();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact From Portfolio <contact@denismutinda.com>",
      to: "support@caesius.agency",
      replyTo: body.email,
      subject: body.subject,
      text: body.message,
    });

    if (error) {
      return NextResponse.json(
        { error, message: "Error while sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ status: 200, ...data });
  } catch (error) {
    return NextResponse.json(
      { error: String(error), message: "Catch Error" },
      { status: 500 }
    );
  }
}
