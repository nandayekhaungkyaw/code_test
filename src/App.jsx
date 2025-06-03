
import Benefits from "./components/Benefits"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import NavBar from "./components/Navbar"
import OtherPages from "./components/OtherPages"
import Testimonials from "./components/Testimonials"
import TopBanner from "./components/TopBanner"

function App() {
  return (
    <div className="min-h-screen  py-4 px-2 m-auto">

    <div className="   text-[#333] m-auto max-w-[1920px] bg-[#FFF6F3]">
      {/* Top Bar */}
      <TopBanner/>

      {/* Header */}
    <NavBar/>

      {/* Hero Section */}
   <Landing/>


      {/* Benefits */}
    <Benefits/>

      {/* Testimonials */}
     <Testimonials/>

      {/* FAQ */}
     <Faq/>

      {/* Pages */}
  
  <OtherPages/>

      {/* Footer */}
     <Footer/>
    </div>
  


    </div>
  )
}

export default App
