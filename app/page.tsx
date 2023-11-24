"use client"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from "@/app/landing_page"
import IntroductionPage from "@/app/introduction"
import Product from "@/app/products"
// import NavBar from "@/app/navbar"
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <main data-aos="fade-up">
      {/* <NavBar /> */}
      <LandingPage />
      <IntroductionPage />
      <Product />

    </main>
  )
}
