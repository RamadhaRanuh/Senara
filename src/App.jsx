import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
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
  const [activeModal, setActiveModal] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Refs for sections
  const rayaSpicesRef = useRef(null);
  const visionRef = useRef(null);
  const bodycareRef = useRef(null);
  const valuesRef = useRef(null);
  const botanicalsRef = useRef(null);
  const noteRef = useRef(null);

  // Animation states
  const [visionVisible, setVisionVisible] = useState(false);
  const [bodycareVisible, setBodycareVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [botanicalsVisible, setBotanicalsVisible] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);

  const totalSlides = isMobile ? 6 : 2;
  const slidesPerView = isMobile ? 1 : 1;
  const maxSlides = totalSlides - slidesPerView;

  const botanicals = [
    {
      image: candlenut,
      title: "candlenut",
      description: "rich in omega fatty acids, this traditional Indonesian oil deeply nourishes dry, sensitive skin and helps restore the skin's natural barrier."
    },
    {
      image: turmeric,
      title: "turmeric",
      description: "a powerful anti-inflammatory used in lulur rituals, turmeric helps brighten skin, reduce redness, and promote healing from within."
    },
    {
      image: vetiver,
      title: "vetiver",
      description: "known for its cooling and grounding properties, vetiver soothes irritation, supports regeneration, and calms stressed, overheated skin."
    },
    {
      image: cinnamon,
      title: "cinnamon",
      description: "naturally antimicrobial and antioxidant-rich, cinnamon enhances circulation and supports skin clarity while delivering a warm, sensorial lift."
    },
    {
      image: gera,
      title: "geranium",
      description: "Balancing and soothing, geranium helps regulate sebum, calm inflammation, and promote skin clarity—ideal for stressed or hormonal skin."
    },
    {
      image: teduh3,
      title: "patchouli",
      description: "Patchouli is a powerful essential oil known for its skin-regenerating, anti-inflammatory, and antibacterial properties. It helps soothe irritated skin, support healing of wounds or scars, and regulate oily or acne-prone skin."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);
    
    // Initial animation trigger
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Create intersection observers for each section with improved mobile options
    const observerOptions = {
      threshold: isMobile ? 0.1 : 0.2, // Lower threshold for mobile
      rootMargin: isMobile ? '20px' : '0px' // Add some margin on mobile
    };

    const observers = [
      { ref: visionRef, setter: setVisionVisible },
      { ref: bodycareRef, setter: setBodycareVisible },
      { ref: valuesRef, setter: setValuesVisible },
      { ref: botanicalsRef, setter: setBotanicalsVisible },
      { ref: noteRef, setter: setNoteVisible }
    ].map(({ ref, setter }) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setter(true);
            // Don't unobserve on mobile to prevent scroll issues
            if (!isMobile) {
              observer.unobserve(entry.target);
            }
          }
        });
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    // Add passive touch listeners for better mobile scrolling
    const touchOptions = { passive: true };
    document.addEventListener('touchstart', () => {}, touchOptions);
    document.addEventListener('touchmove', () => {}, touchOptions);
    document.addEventListener('touchend', () => {}, touchOptions);

    return () => {
      window.removeEventListener('resize', handleResize);
      observers.forEach(observer => observer.disconnect());
      document.removeEventListener('touchstart', () => {}, touchOptions);
      document.removeEventListener('touchmove', () => {}, touchOptions);
      document.removeEventListener('touchend', () => {}, touchOptions);
    };
  }, [isMobile]); // Add isMobile as dependency

  const handleSlide = (direction) => {
    const slider = document.getElementById('slider');
    if (!slider) return;

    if (direction === 'left' && currentSlide > 0) {
      setCurrentSlide(prev => {
        const newSlide = prev - 1;
        const slideWidth = isMobile ? slider.children[0].offsetWidth + 32 : (slider.children[0].offsetWidth + 32) * slidesPerView;
        slider.style.transform = `translateX(-${newSlide * slideWidth}px)`;
        return newSlide;
      });
    } else if (direction === 'right' && currentSlide < maxSlides) {
      setCurrentSlide(prev => {
        const newSlide = prev + 1;
        const slideWidth = isMobile ? slider.children[0].offsetWidth + 32 : (slider.children[0].offsetWidth + 32) * slidesPerView;
        slider.style.transform = `translateX(-${newSlide * slideWidth}px)`;
        return newSlide;
      });
    }
  };

  const handleCardClick = (cardName) => {
    if (window.innerWidth < 768) {
      setActiveModal(activeModal === cardName ? null : cardName);
    }
  };

  return (
    <>
      <div className={`overflow-x-hidden w-full relative transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              <div ref={rayaSpicesRef} class="h-55 md:h-135">
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
          <div ref={visionRef} className={`flex flex-col transition-all duration-1000 ease-out transform ${visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{background: '#c33c09'}}>
            <div class="flex flex-col m-4 md:m-10 rounded-4xl" style={{background: '#f6f2e7'}}>
              <p class="text-left text-[32px] md:text-[48px] ml-6 md:ml-10 mt-6 md:mt-10" style={{fontFamily: 'Glacial Indifference Bold'}}>our vision and mission</p>
              
              <div class="flex flex-col md:flex-row gap-6 md:gap-10 justify-center p-4 md:p-10">
                <div className={`relative w-full md:w-1/3 h-[300px] md:h-125 cursor-pointer group transition-transform duration-300 ${activeModal === 'connect' ? 'md:transform-none transform scale-105 z-50' : ''}`} onClick={() => handleCardClick('connect')}>
                  <img src={connect} alt="connect" class="w-full rounded-4xl h-full object-cover" />
                  <div class={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center rounded-4xl transition-opacity duration-300 ${activeModal === 'connect' ? 'opacity-0' : 'md:group-hover:opacity-0'}`}>
                    <h3 class="text-[24px] md:text-[30px] font-bold text-white text-center">connect</h3>
                  </div>
                  <div class={`absolute inset-0 bg-black/70 rounded-4xl flex flex-col justify-center px-4 md:px-6 transition-opacity duration-300 ${activeModal === 'connect' ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    <p class="text-xs md:text-sm text-white text-center">
                      We build meaningful relationships between people, nature, and purpose. "Connect" stands for our commitment to fostering bonds that transcend products or services. It's about empathy, inclusivity, and creating spaces—physical or emotional—where people feel seen, heard, and understood.
                    </p>
                  </div>
                </div>

                <div className={`relative w-full md:w-1/3 h-[300px] md:h-125 cursor-pointer group transition-transform duration-300 ${activeModal === 'provide' ? 'md:transform-none transform scale-105 z-50' : ''}`} onClick={() => handleCardClick('provide')}>
                  <img src={provide} alt="provide" class="w-full rounded-4xl h-full object-cover" />
                  <div class={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center rounded-4xl transition-opacity duration-300 ${activeModal === 'provide' ? 'opacity-0' : 'md:group-hover:opacity-0'}`}>
                    <h3 class="text-[24px] md:text-[30px] font-bold text-white text-center">provide</h3>
                  </div>
                  <div class={`absolute inset-0 bg-black/70 rounded-4xl flex flex-col justify-center px-4 md:px-6 transition-opacity duration-300 ${activeModal === 'provide' ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    <p class="text-xs md:text-sm text-white text-center">
                      We are dedicated to providing high-quality, sustainable products that honor Indonesian traditions while meeting modern wellness needs. Our commitment extends beyond products to providing education, transparency, and genuine value to our community.
                    </p>
                  </div>
                </div>

                <div className={`relative w-full md:w-1/3 h-[300px] md:h-125 cursor-pointer group transition-transform duration-300 ${activeModal === 'protect' ? 'md:transform-none transform scale-105 z-50' : ''}`} onClick={() => handleCardClick('protect')}>
                  <img src={protect} alt="protect" class="w-full rounded-4xl h-full object-cover" />
                  <div class={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center rounded-4xl transition-opacity duration-300 ${activeModal === 'protect' ? 'opacity-0' : 'md:group-hover:opacity-0'}`}>
                    <h3 class="text-[24px] md:text-[30px] font-bold text-white text-center">protect</h3>
                  </div>
                  <div class={`absolute inset-0 bg-black/70 rounded-4xl flex flex-col justify-center px-4 md:px-6 transition-opacity duration-300 ${activeModal === 'protect' ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    <p class="text-xs md:text-sm text-white text-center">
                      We are committed to protecting both our environment and our cultural heritage. This means sustainable sourcing, eco-friendly practices, and preserving traditional Indonesian wellness wisdom for future generations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlay for mobile */}
              {activeModal && (
                <div 
                  className="fixed inset-0 bg-black/60 z-40 md:hidden"
                  onClick={() => setActiveModal(null)}
                />
              )}
            </div>
          </div>
          <div ref={bodycareRef} className={`flex flex-col md:flex-row h-auto md:h-275 transition-all duration-1000 ease-out transform ${bodycareVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          <div ref={valuesRef} className={`flex flex-col transition-all duration-1000 ease-out transform ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{background: '#c33c09'}}>
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
          <div ref={botanicalsRef} className={`flex flex-col px-4 md:px-10 relative transition-all duration-1000 ease-out transform ${botanicalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p class="py-10 text-left text-[32px] md:text-[48px] w-106" style={{fontFamily: 'Glacial Indifference Bold'}}>powered by proven botanicals.</p>
            <img 
              src={Buttonleft} 
              alt="Previous" 
              class={`absolute left-2 md:left-5 top-100 w-12 md:w-20 h-12 md:h-20 z-10 cursor-pointer ${currentSlide === 0 ? 'opacity-50' : 'opacity-100'}`} 
              onClick={() => handleSlide('left')}
            />
            <img 
              src={Buttonright} 
              alt="Next" 
              class={`absolute right-2 md:right-5 top-100 w-12 md:w-20 h-12 md:h-20 z-10 cursor-pointer ${currentSlide === maxSlides ? 'opacity-50' : 'opacity-100'}`} 
              onClick={() => handleSlide('right')}
            />
            <div class="flex items-center mx-11 md:mx-23">
              <div class="flex overflow-x-hidden relative w-full">
                <div class="flex transition-transform duration-300 ease-in-out mb-15" id="slider">
                  {botanicals.map((botanical, index) => (
                    <div key={index} class="flex-none w-64 mx-4">
                      <img src={botanical.image} alt={botanical.title} class="w-full h-64 object-cover rounded-lg" />
                      <h3 class="mt-4 text-2xl font-bold" style={{fontFamily: 'Glacial Indifference Bold'}}>{botanical.title}</h3>
                      <p class="mt-2 text-sm text-justify">{botanical.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div ref={noteRef} className={`flex flex-col pb-10 md:pb-20 transition-all duration-1000 ease-out transform ${noteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{background: '#c33c09'}}>
            <img src={note} alt="note" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  const location = useLocation();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure the DOM is ready
    setTimeout(() => {
      if (location.hash === '#our-values') {
        const element = document.getElementById('our-values');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setPageLoaded(true);
    }, 100);
  }, [location]);

  return (
    <div className={`transition-all duration-1000 ease-out transform ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Routes>
        <Route path="/" element={<MainPageLayout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
