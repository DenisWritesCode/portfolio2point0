"use client";

import { Button } from "@/components/ui/button";
import EducationAndWork from "@/components/ui/EducationNWork";
import Services from "@/components/ui/Services";
import SkillSet from "@/components/ui/SkillSet";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Hello world!
        </h1>
        <div>
          <Button><Link href={"/contact"}>Contact</Link></Button>
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
    </div>
  );
}
