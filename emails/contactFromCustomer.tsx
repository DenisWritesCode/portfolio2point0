// "use server";

import { Html } from "@react-email/components";
import EmailClient from "@/components/sendEmailButton";

export default function Email() {
  return (
    <Html>
      <EmailClient />
    </Html>
  );
}
