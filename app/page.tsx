import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Hero1 from "@/components/hero1";
import ChooseUs from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero1 />
      <Quote />
      <ChooseUs />
      <Testimonial />
      <Hero3 />
      <Footer />
    </div>
  );
}
