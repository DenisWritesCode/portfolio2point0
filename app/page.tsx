"use client";

import { Button } from "@/components/ui/button";
import EducationAndWork from "@/components/ui/EducationNWork";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import Services from "@/components/ui/Services";
import SkillSet from "@/components/ui/SkillSet";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full sticky top-0 left-0 p-8 bg-slate-800">
        <NavBar />
      </header>
      <main className="bg-slate-200 min-h-screen w-full">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Hello world!
        </h1>
        <div>
          <Button>Click me</Button>
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
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
