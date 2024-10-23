"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { FormEvent } from "react";

const contactFormSchema = z.object({
  firstName: z.string({
    message: "Please enter your first name",
  }),
  lastName: z.string({
    message: "Please enter your last name",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  subject: z.string({
    message: "Please enter a subject",
  }),
  message: z.string({
    message: "Please enter a message",
  }),
});

// Use myScheme.safeParse ->
// => { success: true; data: "tuna" } || => { success: false; error: ZodError }
// z.string().email();
function Contact() {
  // Contact Form.
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema.required()),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Submit handler.
  async function onSubmit(
    e: FormEvent<HTMLFormElement>,
    values: z.infer<typeof contactFormSchema>
  ): Promise<void> {
    // async request which may result error
    try {
      // await fetch()
      e.preventDefault();

      console.log("VALUES: ", { values, JSON: JSON.stringify(values) });

      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("Form submitted: ", { ...values, response });
      return response.json();
    } catch (e) {
      // handle your error
      console.log("Form error: ", { e });
    }
  }

  return (
    <div className="flex-row md:flex md:align-middle md:justify-center">
      <div className="left w-2/3 p-8">
        <Form {...contactForm}>
          <form
            // action="/api/send-contact-email"
            // method="post" // default to post
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              onSubmit(e, contactForm.getValues());
            }}
            onError={() => {}} // error response
            className="space-y-8"
          >
            {/* First Name */}
            <FormField
              control={contactForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"First Name"} {...field} />
                  </FormControl>
                  <FormDescription>This is your first name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Last Name */}
            <FormField
              control={contactForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"Last Name"} {...field} />
                  </FormControl>
                  <FormDescription>This is your last name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={contactForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={"example@test.com"} {...field} />
                  </FormControl>
                  <FormDescription>This is your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Subject */}
            <FormField
              control={contactForm.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject: </FormLabel>
                  <FormControl>
                    <Input placeholder={"I would like to..."} {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your email&apos;s subject.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Message */}
            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message...</FormLabel>
                  <FormControl>
                    <Input placeholder={"Let us work together"} {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your intent of contact.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Send</Button>
          </form>
        </Form>
      </div>
      <div className="right border-t-2 mt-4 md:mt-0 md:border-l-2 md:border-t-0 border-foreground p-8 w-1/3">
        Social Dock
      </div>
    </div>
  );
}

export default Contact;
