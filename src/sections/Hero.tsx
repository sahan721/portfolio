"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Blur Effects */}
      <div className="absolute top-40 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl -z-10" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-blue-500 text-lg font-medium mb-4">
              Hi, I'm
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
              Sahan Nimnaka
            </h1>

            <h2 className="text-2xl md:text-4xl text-slate-400 mb-8">
              Software Engineer & Full Stack Developer
            </h2>

            <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10">
              Passionate Computer Science undergraduate focused on
              building scalable applications and solving real-world
              problems through technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button>Contact Me</Button>
              </a>

              <a href="/resume.pdf" download>
                <Button variant="outline">
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-blue-500/50 rounded-full blur-[80px]"></div>

              <Image
                src="/images/profile.png"
                alt="Sahan Nimnaka"
                width={400}
                height={400}
                priority
                className="relative rounded-full object-cover border border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}