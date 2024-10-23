"use client";

import React from "react";
import { Button } from "@react-email/components";

export default function SendEmailButton() {
    console.log("SendEmailButton");
  const sendEmail = async () => {
    console.log("Sending email...");
    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log("Email sent successfully", data);
      } else {
        console.error("Error sending email:", data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Button
      onClick={() => {
        console.log("Button clicked");
        sendEmail();
      }}
      style={{ background: "#000", color: "#fff", padding: "12px 20px", cursor: "pointer" }}
    >
      Send Email
    </Button>
  );
}
