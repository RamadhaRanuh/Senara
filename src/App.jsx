import { useState } from 'react'
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
import note from './assets/note.svg'

function App() {
  const [count, setCount] = useState(0)

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
                <p>Our Products</p>
                <p>Contact</p>
                <p>About Us</p>
              </div>
            </div>
            <div class="h-55 md:h-135">
              <img src={rayaspices} alt="rayaspices" class="w-full md:w-2000 object-contain md:scale-175"/>
            </div>
            <p class="w-full md:w-125 text-justify px-4 md:ml-auto md:mr-20 text-base md:text-lg mt-0 md:mt-0">
              Discover the warm embrace of tradition with Senara Raya Spices Edition. A luxurious celebration of Indonesia's rich culinary heritage, reimagined into an aromatic self-care ritual. Infused with the comforting essence of spices like cinnamon, clove, nutmeg, and star anise, this limited edition awakens the senses and soothes the soul. Crafted to evoke the festive spirit of togetherness and homecoming, Raya Spices invites you to slow down, breathe deeply, and indulge in a moment of mindful relaxation — wherever you are.
            </p>
          </div>
          <div class="flex flex-col w-full md:w-9/20 mt-8 md:mt-0">
            <img src={baliwoman} alt="baliwoman" class="w-full"/>
          </div>
        </div>
        <div class="flex flex-col" style={{background: '#c33c09'}}>
          <div class="flex flex-col m-20" style={{background: '#f6f2e7'}}>
            <p class="text-center text-2xl font-bold">our vision and mission</p>
            <div class="flex flex-row">
              <img src={connect} alt="connect" class="w-1/3" />
              <img src={provide} alt="provide" class="w-1/3" />
              <img src={protect} alt="protect" class="w-1/3" />
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <img src={skin} alt="skin" class="w-1/3" />
          <div class="flex flex-col">
            <p>Intentional bodycare</p>
            <p>Senara is a line of  self-care essentials inspired by Indonesian botanicals. Thoughtfully formulated for all skin types, each product blends high-performance ingredients with sensorial rituals to restore, soothe, and elevate your daily wellness journey.</p> 
          </div>
        </div>
        <div class="flex flex-col">
          <p>our values</p>
          <p>At Senara, we are grounded in purpose and rooted in care. We believe in:</p>
          <div>
            <p>quality</p>
            <p>harmony</p>
            <p>heritage</p>
            <p>healing</p>
            <p>authentic</p>
          </div>
        </div>
        <div class="flex flex-col">
          <p>powered by proven botanicals.</p>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <img src={candlenut} alt="candlenut" class="w-1/5" />
              <p>candlenut</p>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div class="flex flex-col">
              <img src={turmeric} alt="turmeric" class="w-1/5" />
              <p>candlenut</p>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div class="flex flex-col">
              <img src={vetiver} alt="vetiver" class="w-1/5" />
              <p>candlenut</p>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div class="flex flex-col">
              <img src={cinnamon} alt="cinnamon" class="w-1/5" />
              <p>candlenut</p>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div class="flex flex-col">
              <img src={gera} alt="gera" class="w-1/5" />
              <p>candlenut</p>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img src={note} alt="note"/>
        </div>
      </div>
    </>
  )
}

export default App
