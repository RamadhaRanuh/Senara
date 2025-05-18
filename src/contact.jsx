import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg'
import kimia from './assets/kimia.jpg';

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <>
      <div className={`flex flex-col md:flex-row min-h-screen md:h-234 transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{fontFamily: 'Glacial Indifference'}}>
        <div className="flex flex-col w-full md:w-11/20 justify-start md:justify-center text-center p-4 md:px-15 md:py-0">
          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-center md:justify-end px-2 md:px-0 mb-6 pb-6 md:mb-28 order-2 md:order-1">
            <div className="flex flex-row justify-center gap-6 md:gap-16 md:mr-11">
              <p className="z-10"><Link to="/product" className="text-base cursor-pointer hover:underline z-10" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>Our Products</Link></p>
              <p className="z-10"><Link to="/contact" className="text-base cursor-pointer hover:underline z-10" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>Contact</Link></p>
              <p className="z-10"><Link to="/#our-values" className="text-base cursor-pointer hover:underline z-10" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>About Us</Link></p>
            </div>
          </div>
          
          {/* Logo */}
          <div className="flex justify-center items-center h-24 md:h-100 mb-6 md:pt-35 md:pr-90 overflow-hidden md:scale-125 order-0 md:order-2">
            <img src={logo} alt="logo" className="w-32 md:w-150 object-contain"/>
          </div>
          
          {/* Contact Information */}
          <div className="text-left text-lg md:text-[26px] mb-6 md:mb-6 flex flex-col gap-3 md:gap-2 px-4 md:px-0 order-3 md:order-3">
            <span className="text-xl md:text-2xl font-bold">Contact Us</span>
            <div className="flex flex-col gap-2">
              <span className="flex items-center">
                <span className="w-20 md:w-22 font-semibold">IG:</span>
                <a href="https://www.instagram.com/senararituals?igsh=dGtrcTV3YWxsYzM5" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>senararituals</a>
              </span>
              <span className="flex items-center">
                <span className="w-20 md:w-22 font-semibold">Email:</span>
                <a href="mailto:scentofnusantara@gmail.com" className="hover:underline transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>scentofnusantara@gmail.com</a>
              </span>
            </div>
          </div>

          {/* Address */}
          <p className="text-left md:text-justify text-lg md:text-[26px] px-4 md:px-0 order-4 md:order-3">
            POJ Avenue Kav.3 C, POJ City  Tawangsari (kawasan Marina, BINUS University @Semarang, Semarang Barat, Semarang City, Central Java 50144)
          </p>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-9/20 h-100 md:h-auto mt-6 md:mt-0">
          <img src={kimia} alt="kimia" className="w-full h-full object-cover" /> 
        </div>
      </div>
    </>
  )
}

export default Contact;