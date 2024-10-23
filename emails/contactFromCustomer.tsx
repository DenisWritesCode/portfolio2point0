// "use client";

import { Button, Html } from "@react-email/components";
import { Resend } from 'resend';
import * as React from "react";

async function sendEmail() {
  const resend = new Resend('re_123456789');

  await resend.emails.send({
    from: 'you@example.com',
    to: 'deniswritescode@gmail.com',
    replyTo: 'you@example.com',
    subject: 'hello world',
    text: 'it works!',
  });
}

export default async function Email() {
  return (
    <Html>
      <Button
        onClick={async () => await sendEmail()}
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
