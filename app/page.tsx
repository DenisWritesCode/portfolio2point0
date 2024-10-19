"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
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
      </motion.div>
    </>
  );
}
