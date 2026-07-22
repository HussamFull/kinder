import React from 'react'
import Hero from './Hero.jsx'
import About from '../../components/about/About.jsx'
import Services from '../../components/services/Services.jsx'
import Portfolio from '../../components/portfolio/Portfolio.jsx'
import Team from '../../components/team/Team.jsx'
import Contact from '../../components/contact/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      </main>
    </>
  )
}
