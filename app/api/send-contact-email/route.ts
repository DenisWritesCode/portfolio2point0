import { Resend } from "resend";
export async function POST() {
  console.log("Resend Config: ", { key: process.env.RESEND_API_KEY });
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form Portfolio <contact@denismutinda.com>",
      to: "shamalaallan@gmail.com",
      replyTo: "customeEmailHere@example.com",
      subject: "hello world",
      text: "Email from portfolio contact form works!",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
