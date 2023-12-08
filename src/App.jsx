import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Trending } from './components/Trending';
import { MobileGame } from './components/MobileGame';
import { ReasonsJoin } from './components/ReasonsJoin';
import { FAQs } from './components/FAQS';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';



function App() {
  const desc = "Ready to watch? Enter your email to create or restart your membership.";
  return (
    <div className='bg-black w-full h-full overflow-x-hidden '>
      <div className='netflix-bg lg:p-5 p-4 lg:pt-3'>
        <Header />
        <Hero
          title="Unlimited movies, TV shows, and more"
          desc={desc}
          price_desc="Starts at MAD 35. Cancel anytime." />
      </div>
      <div className='lg:ml-36 lg:p-6 pl-4 pr-4  mt-20 mb-4 lg:space-y-16 space-y-7 lg:mr-16' >
        <Plans />
        <Trending />
        <MobileGame />
        <ReasonsJoin />
        <FAQs />
        <CTA desc={desc} />
        <Footer />

      </div>


    </div>
  )
}

export default App
