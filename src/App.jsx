import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SignupModal from "./components/SignupModal";

function App() {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <Navbar />

      <Hero onGetStarted={() => setSignupOpen(true)} />

      <TrustedBy />
      <Features />
      <About />
      <HowItWorks />
      <Stats />
      <Solutions />
      <Testimonials />
      <Pricing onGetStarted={() => setSignupOpen(true)} />
      <FAQ />
      <CTA onGetStarted={() => setSignupOpen(true)} />
      <Footer />

      {signupOpen && (
        <SignupModal
          onClose={() => setSignupOpen(false)}
        />
      )}
    </>
  );
}

export default App;