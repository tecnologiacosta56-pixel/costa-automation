import Navbar from "./components/layout/Navbar"

import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Technologies from "./components/sections/Technologies"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import CTA from "./components/sections/CTA"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <main className="bg-[#050816] text-white w-full min-h-screen relative">

      <Navbar />

      <Hero />

      <Services />

      <Technologies />

      <Projects />

      <Contact />

      <CTA />

      <Footer />

    </main>
  )
}

export default App