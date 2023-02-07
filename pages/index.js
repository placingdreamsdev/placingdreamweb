import Head from "next/head"
import { Navbar, Header, CTA, Possibility, Features, Blog, WhatGPT3, Footer, Courses } from "../components"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.gradient__bg}>
        <Navbar />
        <Header />
      </div>
      <CTA />
      <WhatGPT3 />
      <Possibility />
      <Features />
      <Courses />
      <Blog />
      <Footer />
    </>
  )
}
