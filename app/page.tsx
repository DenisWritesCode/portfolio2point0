"use client";

import { Button } from "@/components/ui/button";
import EducationAndWork from "@/components/ui/EducationNWork";
import Services from "@/components/ui/Services";
import SkillSet from "@/components/ui/SkillSet";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 text-foreground">
      <h1 className="text-3xl font-bold underline bg-primary text-primary-foreground">
        Hello world!
      </h1>
      <div>
        <Button>
          <Link href={"/contact"}>Contact</Link>
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>Hello, world from Framer Motion!</p>
        <Services />
        <SkillSet />
        <EducationAndWork />
        <div id="toolsNskills" className="about bg-gray-800 text-gray-100 p-5 pb-32 md:relative">
          <h1 className="text-3xl font-semibold text-center tracking-wider">
            Skillset
          </h1>
          <p className="text-xl md:w-2/3 text-center mx-auto">
            With perfection as the end goal, I know I have attained it, not when
            I have nothing to add, rather when there is nothing to remove. I
            iterate over your project for <strong>Perfection</strong>.
          </p>
          <p className="text-xl md:w-2/3 text-center mx-auto">
            By adhering strictly to the principle of{" "}
            <span className="italic underline">Iterative Development</span> you
            are assured that not only will I delvier in time but I will also
            deliver the best possible solution.
          </p>
          <div className="relative top-1/3 mt-5 flex align-center justify-center md:absolute md:mt-24 md:left-1/2 z-10">
            <a
              href="https://github.com/DenisWritesCode/"
              className="flex align-center justify-center text-xl text-gray-800 bg-gray-100 font-semibold rounded-2xl p-3"
            >
              Github{" "}
              <svg
                className="w-6 h-6 ml-2"
                role="img"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
        <div className="skills-wrapper flex flex-col md:flex-row md:w-11/12 mx-auto">
          <div className="skill mb-5 -mt-20 pt-1 md:w-1/3 md:pt-0">
            <div className="skill-contents flex flex-col items-center px-5 -mt-16 relative">
              <Image
                src={"/logos/WhiteOnBlack.png"}
                alt={"Client Image"}
                width={250}
                height={250}
              />
              <div className="p-6 bg-gray-100 text-gray-800 shadow-2xl mx-auto flex-col flex rounded-t-lg">
                <h2 className="mx-auto text-2xl text-gray-800 pt-14 pb-1 font-semibold uppercase tracking-wider">
                  Web Development
                </h2>
                <p className="text-lg">
                  With a technical knowledge in HTML, CSS, Vanilla Javascript
                  and various Javascript frameworks like React and NodeJs, you
                  can be sure your project will be developed for real world use.
                </p>
                <div className="stack">
                  <h3 className="mt-2 mb-1 text-xl font-semibold text-center">
                    Web Technologies Used
                  </h3>
                  <p>
                    <span className="font-semibold text-lg">Front-End - </span>
                    HTML, CSS, Tailwind CSS, Bootstrap, Vanilla Javascript &
                    React.
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Back-End - </span>
                    NodeJS, Flask & Django
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill pt-3 md:w-1/3 md:pt-2">
            <div className="skill-contents flex flex-col items-center px-5 -mt-16 md:-mt-24 relative">
              <Image
                src={"/logos/WhiteOnBlack.png"}
                alt={"Client Image"}
                width={250}
                height={250}
              />
              <div className=" p-6 bg-gray-100 text-gray-800 shadow-2xl mx-auto flex-col flex rounded-t-lg">
                <h2 className="mx-auto text-2xl text-gray-800 pt-14 pb-1 font-semibold uppercase tracking-wider">
                  Mobile Development
                </h2>
                <p className="text-lg">
                  Be it writing native code for a single codebase or even
                  cross-platform mobile development, you can rest assured that
                  Denis has got you.
                </p>
                <div className="stack">
                  <h3 className="mt-2 mb-1 text-xl font-semibold text-center">
                    Technologies Used
                  </h3>
                  <p>
                    <span className="font-semibold text-lg">
                      Cross-Platform -{" "}
                    </span>{" "}
                    Flutter & React-Native.
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Native - </span>
                    Kotlin & Java.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill mb-5 md:-mt-20 md:w-1/3 md:pt-0">
            <div className="skill-contents flex flex-col items-center px-5 -mt-10 md:-mt-16 relative">
              <Image
                src={"/logos/WhiteOnBlack.png"}
                alt={"Client Image"}
                width={250}
                height={250}
              />
              <div className=" p-6 bg-gray-100 text-gray-800 shadow-2xl mx-auto flex-col flex rounded-t-lg">
                <h2 className="mx-auto text-2xl text-gray-800 pt-14 pb-1 font-semibold uppercase tracking-wider">
                  Robotics
                </h2>
                <p className="text-lg">
                  With the experience of representing Kenya in the 2019 FIRST
                  Global Robotics competition, you know that all your automation
                  needs will be solved with impeccable quality and in record
                  times as well.
                </p>
                <div className="stack">
                  <h3 className="mt-2 mb-1 text-xl font-semibold text-center">
                    Platforms Used
                  </h3>
                  <p>
                    <span className="font-semibold text-lg">Automation - </span>
                    Arduino & other Microcontrollers, Raspberry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider md:-mt-28">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill="#1f2739"
              fill-opacity="1"
              d="M0,224L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <section
          id="testimonials"
          className="resume bg-gray-800 text-gray-100 pb-2"
        >
          <div className="resume-content px-5">
            <div className="resume-intro text-center pb-5">
              <h1 className="text-3xl tracking-wider text-semibold font-semibold text-center">
                Projects and Testimonials
              </h1>
              <p className="text-lg">
                I will let the people I have previously worked with convince you
                I am the right fit to work on your project for you.
              </p>
              <p className="text-lg">
                Here is a list of some of the people I have being fortunate
                enough to work with and what they had to say of their experience
                of working with me.
              </p>
            </div>
            <div className="testimonial-container">
              <div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
                <div className="client hidden md:block mx-3">
                  <Image
                    src={"/logos/WhiteOnBlack.png"}
                    alt={"Client Image"}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
                  <div className="photo my-auto mx-auto md:w-1/5">
                    <Image
                      src={"/logos/WhiteOnBlack.png"}
                      alt={"Client Image"}
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="words flex flex-col ml-3 pt-1 my-auto md:w-4/5">
                    <p className="review text-gray-900 font-semibold text-lg">
                      <span className="text-3xl">“</span>
                      Denis is the very definition of dedicated customer
                      service. Over the course of multiple projects I&apos;ve
                      worked with him on, his diligence, commitment and
                      expertise have continuously proved invaluable in ensuring
                      the timely delivery of said projects while always
                      maintaining his characteristic quality standards. He is
                      quite the fast learner and his intellectual curiosity is
                      perhaps one of the most priceless assets he brings into
                      any developer team.
                      <span className="text-3xl">”</span>
                    </p>
                    <figcaption className="pl-5 text-lg font-medium p-1 md:flex md:justify-between">
                      <div className="left">
                        <p className="name  text-gray-700">Cedrique Wekesa</p>
                        <p className="title text-gray-500 text-sm">
                          Co-Founder & CEO of Logicae Science
                        </p>
                      </div>
                      <div className=" right text-gray-800 pr-5">
                        <a href="https://logicae.science/">View Work</a>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
              <div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
                <div className="client hidden md:block mx-3">
                  <Image
                    src={"/logos/WhiteOnBlack.png"}
                    alt={"Client Image"}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
                  <div className="photo my-auto mx-auto md:w-1/5">
                    <Image
                      src={"/logos/WhiteOnBlack.png"}
                      alt={"Client Image"}
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="words flex flex-col ml-3 pt-1 my-auto md:w-4/5">
                    <p className="review text-gray-900 font-semibold text-lg">
                      <span className="text-3xl">“</span>I recently worked with
                      Denis to improve my company&apos;s web app. He delivered
                      everything I asked for in a timely manner .He is extremely
                      helpful in guiding through the whole process and overall,
                      I am beyond pleased with Denis&apos;s impeccable service.
                      <span className="text-3xl">”</span>
                    </p>
                    <figcaption className="pl-5 text-lg font-medium p-1 md:flex md:justify-between">
                      <div className="left">
                        <p className="name  text-gray-700">Lumona Mulengwa</p>
                        <p className="title text-gray-500 text-sm">
                          CTO Sekani
                        </p>
                      </div>
                      <div className=" right text-gray-800 pr-5">
                        <a href="https://sekani.tech/">View Work</a>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
