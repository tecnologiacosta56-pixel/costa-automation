import Navbar from "./components/layout/Navbar"
import FAQ from "./components/sections/FAQ"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import WhyChoose from "./components/sections/WhyChoose"
import Technologies from "./components/sections/Technologies"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import CTA from "./components/sections/CTA"
import Footer from "./components/sections/Footer"

function App() {

  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Services />

      <WhyChoose />

      <Technologies />

      <Projects />

<FAQ />

<Contact />

      <CTA />

      <Footer />

    </main>
  )
}

export default App