"use client";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";

// TODO: Use this fo services later
/**
 * 
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const services = [
  { name: "Graphic Designer", description: "Creating visual concepts using computer software or by hand to communicate ideas that inspire, inform, or captivate consumers." },
  { name: "3D Modeler", description: "Developing three-dimensional models for video games, movies, architecture, and other visual media." },
  { name: "UI/UX Designer", description: "They design the interfaces for websites, apps, and software, ensuring that the user journey is intuitive and engaging. UI/UX Designers conduct user research, create wireframes and prototypes and perform usability testing." },
  { name: "Concept Artist", description: "Producing visual representations of ideas, designs, or moods for use in films, video games, animation, or comic books before final production." },
  { name: "Motion Designer", description: "Bringing graphic design elements to life through animation techniques for various digital platforms." },
]

export default function Component() {
  const [activeService, setActiveService] = useState(2) // UI/UX Designer is active by default

  const handleServiceClick = (index: number) => {
    setActiveService(index)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm mb-2">(Explore Services)</p>
            <h1 className="text-6xl font-bold">MY SERVICES</h1>
          </div>
          <div className="text-right">
            <p className="text-sm mb-2">All of my works are done for<br />my satisfied clients</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Explore All</Button>
          </div>
        </div>
        <div className="flex gap-4">
          {services.map((service, index) => (
            index === activeService ? (
              <Card key={service.name} className="flex-[2] bg-gradient-to-br from-purple-600 to-blue-500">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-center mb-6 text-white">{service.description}</p>
                  <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
                    Click to view
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card 
                key={service.name} 
                className="flex-1 bg-zinc-900 border-zinc-800 cursor-pointer transition-all hover:bg-zinc-800"
                onClick={() => handleServiceClick(index)}
              >
                <CardContent className="p-4 flex items-center justify-between h-full">
                  <div className="flex items-center justify-between w-full h-full">
                    <span className="text-lg font-semibold text-white transform -rotate-90 origin-top-left translate-y-full whitespace-nowrap">
                      {service.name}
                    </span>
                    <ChevronUp className="text-zinc-500 mt-auto" />
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </div>
  )
}
 */


const services = [
  {
    title: "Full-stack Web Development",
    description:
      "Rust, Typescript, React, Angular, Next.js, Node.js, TailwindCSS & Next UI",
  },
  {
    title: "Cross-platform Mobile App Development",
    description: "Flutter & React Native",
  },
  {
    title: "Internet of Things, Robotics & Automation",
    description: "C, C++ & Rust",
  },
  {
    title: "Security Auditing, DevOps and Cloud Services",
    description: "AWS, Kubernetes, Docker & GIT",
  },
];

function Services() {
  return (
    <div
      id="services"
      className="max-w-full overflow-hidden flex flex-col content pb-2 md:pt-24"
    >
      <div className="text-center">
        <p className="text-4xl font-bold underline">Services</p>
        <section className="flex flex-col space-y-5 md:flex-row md:space-x-3 py-5 px-2">
          <div className="left md:w-1/2 md:space-y-3 md:flex md:flex-col md:items-center md:justify-center">
            
            <p>
              With perfection as the end goal, I know I have attained it, not
              when I have nothing to add, rather when there is nothing to
              remove. I iterate over your project for Perfection. By adhering
              strictly to the principle of Iterative Development you are assured
              that not only will I deliver in time but I will also deliver the
              best possible solution.
            </p>
            <p className="">
              We help ambitious businesses succeed by creating high-quality
              products, services, and digital experiences that exceed their
              customers&apos; expectations. This is achieved through generating
              more profits by building awereness, driving user traffic,
              connecting with customers and consequently increasing sales.
            </p>
          </div>
          <div className="md:w-1/2 md:flex md:items-center md:justify-center">
            <Card className="md:py-4">
              <CardHeader>
 
                {/* <CardTitle>Personal Ethos</CardTitle> */}
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  {/* Animate these services loading. */}
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <CheckIcon className="flex h-3 w-3 translate-y-0" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {service.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter> */}
                {/* <Button className="w-full">Mark all as read</Button> */}
              {/* </CardFooter> */}
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
