import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import logo from './assets/logo.svg'
import rayaspices from './assets/rayaspices.svg'
import baliwoman from './assets/bali-woman.jpg'
import connect from './assets/connect.jpg'
import provide from './assets/provide.jpg'
import protect from './assets/protect.jpg'
import skin from './assets/skin.jpg'
import candlenut from './assets/candlenut.jpg'
import turmeric from './assets/turmeric.jpg'
import vetiver from './assets/vetiver.jpg'
import cinnamon from './assets/cinnamon.jpg'
import gera from './assets/gera.jpg'
import note from './assets/note.png'
import quality from './assets/quality.svg'
import harmony from './assets/harmony.svg'
import heritage from './assets/heritage.svg'
import healing from './assets/healing.svg'
import authentic from './assets/authentic.svg'
import ContactPage from './contact'
import ProductPage from './product'
import Buttonleft from './assets/button-left.svg'
import Buttonright from './assets/button-right.svg'
import teduh3 from './assets/teduh-3.jpg'

function MainPageLayout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const totalSlides = 6;
  
  // Calculate different widths for mobile and desktop
  const getCardWidth = () => {
    if (isMobile) {
      return window.innerWidth - 127; // Subtract margins (40px on each side)
    }
    return 288; // Desktop width (256px + 32px margins)
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Update position when screen size changes
      const slider = document.getElementById('slider');
      if (slider) {
        slider.style.transform = `translateX(-${currentSlide * getCardWidth()}px)`;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  const handleSlide = (direction) => {
    const slider = document.getElementById('slider');
    if (!slider) return;

    const maxSlides = isMobile ? totalSlides - 1 : 1; // 5 slides on mobile, 1 slide on desktop

    if (direction === 'left' && currentSlide > 0) {
      setCurrentSlide(prev => {
        const newSlide = prev - 1;
        slider.style.transform = `translateX(-${newSlide * getCardWidth()}px)`;
        return newSlide;
      });
    } else if (direction === 'right' && currentSlide < maxSlides) {
      setCurrentSlide(prev => {
        const newSlide = prev + 1;
        slider.style.transform = `translateX(-${newSlide * getCardWidth()}px)`;
        return newSlide;
      });
    }
  };

  return (
    <>
      <div class="flex flex-col justify-between" style={{fontFamily: 'Glacial Indifference'}}>
        <div class="flex flex-col md:flex-row">  {/* Stack on mobile, row on medium screens and up */}
          <div class="flex flex-col w-full md:w-11/20">  {/* Full width on mobile, 11/20 on medium up */}
            <div class="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8">
              <div class="overflow-hidden h-24 md:h-32">
                <img src={logo} alt="logo" class="w-40 md:w-50 -mt-5 -ml-5"/>
              </div>
              <div class="flex flex-row gap-8 md:gap-16 justify-between mr-4 md:mr-18 mt-4 md:mt-0">
                <p class="z-10"><Link to="/product" className="cursor-pointer hover:underline z-10 transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>Our Products</Link></p>
                <p class="z-10"><Link to="/contact" className="cursor-pointer hover:underline z-10 transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>Contact</Link></p>
                <p class="z-10"><Link to="#our-values" className="cursor-pointer hover:underline z-10 transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>About Us</Link></p>
              </div>
            </div>
            <div class="h-55 md:h-135">
              <img src={rayaspices} alt="rayaspices" class="w-full md:w-2000 object-contain md:scale-175"/>
            </div>
            <p class="w-full md:w-125 text-justify px-4 md:ml-auto md:mr-20 text-base md:text-lg mt-0 md:mt-0">
              Discover the warm embrace of tradition with Senara Raya Spices Edition. A luxurious celebration of Indonesia's rich culinary heritage, reimagined into an aromatic self-care ritual. Infused with the comforting essence of spices like cinnamon, clove, nutmeg, and star anise, this limited edition awakens the senses and soothes the soul. Crafted to evoke the festive spirit of togetherness and homecoming, Raya Spices invites you to slow down, breathe deeply, and indulge in a moment of mindful relaxation — wherever you are.
            </p>
          </div>
          <div class="flex flex-col w-full md:w-9/20 mt-8 md:mt-0 h-[1000px]">
            <img src={baliwoman} alt="baliwoman" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="flex flex-col" style={{background: '#c33c09'}}>
          <div class="flex flex-col m-4 md:m-10 rounded-4xl" style={{background: '#f6f2e7'}}>
            <p class="text-left text-[32px] md:text-[48px] ml-6 md:ml-10 mt-6 md:mt-10" style={{fontFamily: 'Glacial Indifference Bold'}}>our vision and mission</p>
            
            <div class="flex flex-col md:flex-row gap-6 md:gap-10 justify-center p-4 md:p-10">
              <div class="relative w-full md:w-1/3 h-[300px] md:h-125 cursor-pointer group">
                <img src={connect} alt="connect" class="w-full rounded-4xl h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center rounded-4xl transition-opacity duration-300 group-hover:opacity-0">
                  <h3 class="text-[24px] md:text-[30px] font-bold text-white text-center">connect</h3>
                </div>
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-4 md:px-6 rounded-4xl">
                  <p class="text-xs md:text-sm text-white text-center">
                    We build meaningful relationships between people, nature, and purpose. "Connect" stands for our commitment to fostering bonds that transcend products or services. It's about empathy, inclusivity, and creating spaces—physical or emotional—where people feel seen, heard, and understood.
                  </p>
                </div>
              </div>

              <div class="relative w-full md:w-1/3 h-[300px] md:h-125 cursor-pointer group">
                <img src={provide} alt="provide" class="w-full rounded-4xl h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center rounded-4xl transition-opacity duration-300 group-hover:opacity-0">
                  <h3 class="text-[24px] md:text-[30px] font-bold text-white text-center">provide</h3>
                </div>
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-4 md:px-6 rounded-4xl">
                  <p class="text-xs md:text-sm text-white text-center">
                    We are dedicated to providing high-quality, sustainable products that honor Indonesian traditions while meeting modern wellness needs. Our commitment extends beyond products to providing education, transparency, and genuine value to our community.
                  </p>
                </div>
              </div>

              <div class="relative w-full md:w-1/3 h-[300px] md:h-125 cursor-pointer group">
                <img src={protect} alt="protect" class="w-full rounded-4xl h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center rounded-4xl transition-opacity duration-300 group-hover:opacity-0">
                  <h3 class="text-[24px] md:text-[30px] font-bold text-white text-center">protect</h3>
                </div>
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-4 md:px-6 rounded-4xl">
                  <p class="text-xs md:text-sm text-white text-center">
                    We are committed to protecting both our environment and our cultural heritage. This means sustainable sourcing, eco-friendly practices, and preserving traditional Indonesian wellness wisdom for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row h-auto md:h-275">
          <img src={skin} alt="skin" class="w-full md:w-1/2 h-auto md:h-auto object-contain md:object-cover" />
          <div class="flex flex-col w-full md:w-1/2 justify-center text-center px-6 md:px-15 py-8 md:py-0">
            <p class="text-left text-[32px] md:text-[56px] mb-4 md:mb-6" style={{fontFamily: 'Glacial Indifference Bold'}}>
              intentional bodycare.
            </p>
            <p class="text-justify text-[18px] md:text-[32px]">
              Senara is a line of self-care essentials inspired by Indonesian botanicals. Thoughtfully formulated for all skin types, each product blends high-performance ingredients with sensorial rituals to restore, soothe, and elevate your daily wellness journey.
            </p> 
          </div>
        </div>
        <div class="flex flex-col" style={{background: '#c33c09'}}>
          <div id="our-values" class="flex flex-col m-4 md:m-10 rounded-4xl pl-4 md:pl-10" style={{background: '#f6f2e7'}}>
            <p class="text-center text-[32px] md:text-[48px] mt-5 text-left" style={{fontFamily: 'Glacial Indifference Bold'}}>our values.</p>
            <p class="text-center text-[24px] md:text-[32px] text-left w-90 md:w-210">At Senara, we are grounded in purpose and rooted in care. We believe in:</p>
            <div class="relative h-[400px] md:h-[550px] w-full py-10">
              <img src={quality} alt="quality" class="absolute top-0 right-10 md:right-[5%] w-28 md:w-48 object-contain p-0 m-0 [&>*]:w-full [&>*]:h-full" style={{transform: 'scale(3.0)'}} />
              <img src={harmony} alt="harmony" class="absolute top-[20%] right-[20%] md:right-[25%] w-28 md:w-48 object-contain p-0 m-0 [&>*]:w-full [&>*]:h-full" style={{transform: 'scale(3.0)'}} />
              <img src={heritage} alt="heritage" class="absolute top-[38%] left-[32%] md:left-[45%] w-28 md:w-48 object-contain p-0 m-0 [&>*]:w-full [&>*]:h-full" style={{transform: 'scale(3.0)'}} />
              <img src={healing} alt="healing" class="absolute bottom-[28%] md:bottom-[25%] left-[20%] md:left-[25%] w-28 md:w-48 object-contain p-0 m-0 [&>*]:w-full [&>*]:h-full" style={{transform: 'scale(3.0)'}} />
              <img src={authentic} alt="authentic" class="absolute bottom-10 left-12 md:left-[5%] w-28 md:w-48 object-contain p-0 m-0 [&>*]:w-full [&>*]:h-full" style={{transform: 'scale(3.0)'}} />
            </div>
          </div>
        </div>
        <div class="flex flex-col px-4 md:px-10 relative">
          <p class="py-10 text-left text-[32px] md:text-[48px] w-106" style={{fontFamily: 'Glacial Indifference Bold'}}>powered by proven botanicals.</p>
          <img src={Buttonleft} alt="Previous" class="absolute left-2 md:left-5 top-100 w-12 md:w-20 h-12 md:h-20 z-10 cursor-pointer" onClick={() => handleSlide('left')}/>
          <img src={Buttonright} alt="Next" class="absolute right-2 md:right-5 top-100 w-12 md:w-20 h-12 md:h-20 z-10" onClick={() => handleSlide('right')}/>
          <div class="flex items-center mx-11 md:mx-23">
            <div class="flex overflow-x-hidden relative w-full">
              <div class="flex transition-transform duration-300 ease-in-out mb-15" id="slider">
                <div class="flex-none w-64 mx-4">
                  <img src={candlenut} alt="candlenut" class="w-full h-64 object-cover rounded-lg" />
                  <h3 class="mt-4 text-2xl font-bold" style={{fontFamily: 'Glacial Indifference Bold'}}>candlenut</h3>
                  <p class="mt-2 text-sm text-justify">rich in omega fatty acids, this traditional Indonesian oil deeply nourishes dry, sensitive skin and helps restore the skin's natural barrier.</p>
                </div>
                
                <div class="flex-none w-64 mx-4">
                  <img src={turmeric} alt="turmeric" class="w-full h-64 object-cover rounded-lg" />
                  <h3 class="mt-4 text-2xl font-bold" style={{fontFamily: 'Glacial Indifference Bold'}}>turmeric</h3>
                  <p class="mt-2 text-sm text-justify">a powerful anti-inflammatory used in lulur rituals, turmeric helps brighten skin, reduce redness, and promote healing from within.</p>
                </div>
                
                <div class="flex-none w-64 mx-4">
                  <img src={vetiver} alt="vetiver" class="w-full h-64 object-cover rounded-lg" />
                  <h3 class="mt-4 text-2xl font-bold" style={{fontFamily: 'Glacial Indifference Bold'}}>vetiver</h3>
                  <p class="mt-2 text-sm text-justify">known for its cooling and grounding properties, vetiver soothes irritation, supports regeneration, and calms stressed, overheated skin.</p>
                </div>
                
                <div class="flex-none w-64 mx-4">
                  <img src={cinnamon} alt="cinnamon" class="w-full h-64 object-cover rounded-lg" />
                  <h3 class="mt-4 text-2xl font-bold" style={{fontFamily: 'Glacial Indifference Bold'}}>cinnamon</h3>
                  <p class="mt-2 text-sm text-justify">naturally antimicrobial and antioxidant-rich, cinnamon enhances circulation and supports skin clarity while delivering a warm, sensorial lift.</p>
                </div>
                
                <div class="flex-none w-64 mx-4">
                  <img src={gera} alt="gera" class="w-full h-64 object-cover rounded-lg" />
                  <h3 class="mt-4 text-2xl font-bold" style={{fontFamily: 'Glacial Indifference Bold'}}>geranium</h3>
                  <p class="mt-2 text-sm text-justify">Balancing and soothing, geranium helps regulate sebum, calm inflammation, and promote skin clarity—ideal for stressed or hormonal skin.</p>
                </div>

                <div class="flex-none w-64 mx-4">
                  <img src={teduh3} alt="teduh3" class="w-full h-64 object-cover rounded-lg" />
                  <h3 class="mt-4 text-2xl font-bold" style={{fontFamily: 'Glacial Indifference Bold'}}>patchouli</h3>
                  <p class="mt-2 text-sm text-justify">Patchouli is a powerful essential oil known for its skin-regenerating, anti-inflammatory, and antibacterial properties. It helps soothe irritated skin, support healing of wounds or scars, and regulate oily or acne-prone skin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col pb-10 md:pb-20" style={{background: '#c33c09'}}>
          <img src={note} alt="note" class="w-full h-full object-cover"/>
        </div>
      </div>
    </>
  )
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure the DOM is ready
    setTimeout(() => {
      if (location.hash === '#our-values') {
        const element = document.getElementById('our-values');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  )
}

export default App
