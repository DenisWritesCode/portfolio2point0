"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Field } from "react-hook-form";

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
  firstName: z.string().nonempty("Please enter your first name"),
  lastName: z.string().nonempty("Please enter your last name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().nonempty("Please enter a subject"),
  message: z.string().nonempty("Please enter a message"),
});

function Contact() {
  // Contact Form.
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Submit handler.
  async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    const values = contactForm.getValues();
    console.log("VALUES: ", values);

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

      const data = await response.json();
      console.log("Form submitted successfully:", data);
    } catch (e) {
      console.error("Form submission error: ", e);
    }
  }

  return (
    <div className="flex-row md:flex md:align-middle md:justify-center">
      <div className="left w-2/3 p-8">
        <Form {...contactForm}>
          <form
            onSubmit={onSubmit}
            className="space-y-8"
          >
            {/* First Name */}
            <FormField
              control={contactForm.control}
              name="firstName"
              render={({ field }: {field: Field}) => (
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
              render={({ field }: {field: Field}) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
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
              render={({ field }: {field: Field}) => (
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
              render={({ field }: {field: Field}) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
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
              render={({ field }: {field: Field}) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
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
