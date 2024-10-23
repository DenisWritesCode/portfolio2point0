import { Resend } from "resend";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log("Resend Config: ", { key: process.env.RESEND_API_KEY, request: await request.json() });
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form Portfolio <contact@denismutinda.com>",
      to: "deniswritescode@gmail.com",
      replyTo: "customeEmailHere@example.com",
      subject: "hello world",
      text: "Email from portfolio contact form works!",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ status: 200, ...data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}