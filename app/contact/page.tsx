"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, type FormEvent } from "react";

const contactFormSchema = z.object({
  clientName: z.string().nonempty("Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  emailSubject: z.string().nonempty("Please enter an email subject"),
  emailMessage: z.string().nonempty("Please enter the email message"),
});

function Contact() {
  // Contact Form.
  const [isLoading, setIsLoading] = useState(false);
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      clientName: "",
      email: "",
      emailSubject: "",
      emailMessage: "",
    },
  });

  // Submit handler.
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = contactForm.getValues();
    setIsLoading(true);
    try {
      const response: Response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status !== 200) {
        throw new Error(`Error: ${response.status}`);
      }

      await response.json();
      contactForm.reset();

      // Call conversion tracking after successful submission.
      // @ts-expect-error - gtag inside react
      gtag_report_conversion("https://denismutinda.dev/contact");
    } catch (e) {
      console.error("Form submission error: ", e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Event snippet for Submit lead form conversion */}
      <Script id="conversion-snippet" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-394829124/HbOyCPeAweMZEMS6orwB',
              'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
      <div className="flex-row w-full md:flex md:items-center md:justify-center">
        <div className="left md:w-2/3 p-8">
          <Form {...contactForm}>
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Client Name */}
              <FormField
                control={contactForm.control}
                name="clientName"
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder={"Full Name"} {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your full name.
                    </FormDescription>
                    <section className="hidden">
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                      {formState.isDirty && (
                        <p className="text-sm text-green-500">
                          You&apos;ve modified the form.
                        </p>
                      )}
                      {!formState.isValid && (
                        <p className="text-sm text-red-500">
                          Please correct the errors above.
                        </p>
                      )}
                    </section>
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder={"example@test.com"} {...field} />
                    </FormControl>
                    <FormDescription>This is your email.</FormDescription>
                    <section className="hidden">
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                      {formState.isDirty && (
                        <p className="text-sm text-green-500">
                          You&apos;ve modified the form.
                        </p>
                      )}
                      {!formState.isValid && (
                        <p className="text-sm text-red-500">
                          Please correct the errors above.
                        </p>
                      )}
                    </section>
                  </FormItem>
                )}
              />
              {/* Email  */}
              <FormField
                control={contactForm.control}
                name="emailSubject"
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={"RE: ..."}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Kindly provide a brief description of what you have in
                      mind.
                    </FormDescription>
                    <section className="hidden">
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                      {formState.isDirty && (
                        <p className="text-sm text-green-500">
                          You&apos;ve modified the form.
                        </p>
                      )}
                      {!formState.isValid && (
                        <p className="text-sm text-red-500">
                          Please correct the errors above.
                        </p>
                      )}
                    </section>
                  </FormItem>
                )}
              />
              {/* Email Message */}
              <FormField
                control={contactForm.control}
                name="emailMessage"
                render={({ field, fieldState, formState }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={"Hi Denis, I would like to discuss..."}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      More information
                    </FormDescription>
                    <section className="hidden">
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                      {formState.isDirty && (
                        <p className="text-sm text-green-500">
                          You&apos;ve modified the form.
                        </p>
                      )}
                      {!formState.isValid && (
                        <p className="text-sm text-red-500">
                          Please correct the errors above.
                        </p>
                      )}
                    </section>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="hidden right border-t-2 mt-4 md:mt-0 md:border-l-2 md:border-t-0 border-foreground p-8 w-1/3">
          Social Dock
        </div>
      </div>
    </>
  );
}

export default Contact;
