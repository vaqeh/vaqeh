import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Bot from "@/components/Bot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hireme from "@/components/Hireme";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
