"use client"
import About from "./about/page";
import Accessories from "./accessories/page";
import Bestsale from "./bestsale/page";
import Contact from "./contect/page";
import Hero from "./hero/page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Chat from "./../chat"

export default function Home() {

   useEffect(() => {
     AOS.init();
  }, []);

  return (
    <>
  <Hero/>
  <Accessories/>
  <About/>
  <Bestsale/>
  <Contact/>
  <Chat/>
    </>
  );
}
