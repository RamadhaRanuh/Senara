import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import lembung from './assets/lembung-bottle.svg'
import malam from './assets/malam-bottle.svg'
import teduh from './assets/teduh-bottle.svg'

import raya1 from './assets/raya-1.jpg'
import raya2 from './assets/raya-2.jpg'
import raya3 from './assets/raya-3.jpg' 
import raya4 from './assets/raya-4.jpg'
import raya5 from './assets/raya-5.jpg'

import teduh1 from './assets/teduh-1.jpg'
import teduh2 from './assets/teduh-2.jpg'
import teduh3 from './assets/teduh-3.jpg'
import teduh4 from './assets/teduh-4.jpg'
import teduh5 from './assets/teduh-5.jpg'

import lembung1 from './assets/lembung-1.jpg'
import lembung2 from './assets/lembung-2.jpg'
import lembung3 from './assets/lembung-3.jpg'
import lembung4 from './assets/lembung-4.jpg'
import lembung5 from './assets/lembung-5.jpg'

import malam1 from './assets/malam-1.jpg'
import malam2 from './assets/malam-2.jpg'
import malam3 from './assets/malam-3.jpg'
import malam4 from './assets/malam-4.jpg'
import malam5 from './assets/malam-5.jpg'

import logo from './assets/logo.svg'



function Product() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Refs for sections
    const ourProductsRef = useRef(null);
    const expoSaleRef = useRef(null);
    const rayaSpicesRef = useRef(null);
    const teduhRef = useRef(null);
    const lembungRef = useRef(null);
    const malamRef = useRef(null);

    // Animation states
    const [ourProductsVisible, setOurProductsVisible] = useState(false);
    const [expoSaleVisible, setExpoSaleVisible] = useState(false);
    const [rayaSpicesVisible, setRayaSpicesVisible] = useState(false);
    const [teduhVisible, setTeduhVisible] = useState(false);
    const [lembungVisible, setLembungVisible] = useState(false);
    const [malamVisible, setMalamVisible] = useState(false);

    useEffect(() => {
        // Initial page load animation
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Create intersection observers for each section
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observers = [
            { ref: ourProductsRef, setter: setOurProductsVisible },
            { ref: expoSaleRef, setter: setExpoSaleVisible },
            { ref: rayaSpicesRef, setter: setRayaSpicesVisible },
            { ref: teduhRef, setter: setTeduhVisible },
            { ref: lembungRef, setter: setLembungVisible },
            { ref: malamRef, setter: setMalamVisible }
        ].map(({ ref, setter }) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setter(true);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            if (ref.current) {
                observer.observe(ref.current);
            }

            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    const products = [
        {
            name: "MALAM BODY WASH",
            image: malam,
            description: "Nourishing and aromatic, this body wash cleanses without stripping moisture. Enriched with natural oils to soothe skin and awaken the senses."
        },
        {
            name: "TEDUH SHAMPOO",
            image: teduh,
            description: "A gentle, botanical-rich cleanser that refreshes the scalp and softens hair with every wash. Crafted to leave your hair clean, light, and delicately scented."
        },
        {
            name: "LEMBUNG HAND WASH",
            image: lembung,
            description: "A hydrating hand cleanser made with skin-loving ingredients and essential oils. Leaves hands clean, soft, and subtly perfumed."
        },
        {
            name: "MALAM SHAMPOO",
            image: malam,
            description: "Infused with calming cinnamon, vanilla, and lavender oils, this gentle shampoo soothes the scalp and unwinds the senses—perfect for your evening wind-down ritual."
        },
        {
            name: "TEDUH HAND WASH",
            image: teduh,
            description: "Crafted with lavandin, geranium, and patchouli, this hand wash brings a grounding cleanse that refreshes your skin while offering a moment of stillness in your day."
        },
        {
            name: "LEMBUNG BODY WASH",
            image: lembung,
            description: "Wake up your body with a crisp clarity of lemongrass, pomelo, and kaffir lime. This invigorating body wash refreshes and energizes from the first lather."
        },
        {
            name: "MALAM HAND WASH",
            image: malam,
            description: "A soothing cleanse with warm notes of cinnamon, vanilla, and lavender. Perfect for quiet evenings, this hand wash relaxes both skin and senses."
        },
        {
            name: "TEDUH BODY WASH",
            image: teduh,
            description: "Grounded in lavandin, geranium, and patchouli, this body wash offers a deeply calming experience that leaves your skin fresh, soft, and centered."
        },
        {
            name: "LEMBUNG SHAMPOO",
            image: lembung,
            description: "Energize your scalp with the zesty blend of lemongrass, pomelo, and kaffir lime. A revitalizing shampoo that awakens the senses and purifies the roots."
        }
        
    ];

    return (
        <>
            <div className={`relative overflow-x-hidden h-full md:h-full transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{fontFamily: 'Glacial Indifference'}}>
                <img src={malam} alt="malam" class="absolute top-95 md:-top-150 left-6 md:left-10 transform md:rotate-[20deg] scale-70 md:scale-75 w-48 md:w-auto" />
                <img src={lembung} alt="lembung" class="absolute top-93 md:-top-50 left-26 md:left-0 transform md:-rotate-[10deg] scale-67 md:scale-75 w-48 md:w-auto" />
                <img src={teduh} alt="teduh" class="absolute top-94 md:top-50 left-48 md:left-20 transform md:rotate-[30deg] scale-70 md:scale-75 w-48 md:w-auto" />
                <div className="flex flex-col justify-between">
                <div class="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8">
                    <div class="overflow-hidden h-24 md:h-32">
                        <img src={logo} alt="logo" class="w-40 md:w-50 -mt-5 -ml-5"/>
                    </div>
                    <div class="flex flex-row gap-8 md:gap-16 justify-between mr-4 md:mr-18 mt-4 md:mt-0">
                        <p class="z-10"><Link to="/product" className="cursor-pointer hover:underline z-10 transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>Our Products</Link></p>
                        <p class="z-10"><Link to="/contact" className="cursor-pointer hover:underline z-10 transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>Contact</Link></p>
                        <p class="z-10"><Link to="/#our-values" className="cursor-pointer hover:underline z-10 transition-colors duration-200" style={{color: '#c33c09'}} onMouseOver={(e) => e.target.style.color = '#8b2a06'} onMouseOut={(e) => e.target.style.color = '#c33c09'}>About Us</Link></p>
                    </div>
                    </div>

                    {/* Our Products Section */}
                    <div ref={ourProductsRef} className={`flex justify-end transition-all duration-1000 ease-out transform ${ourProductsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="flex flex-col w-full md:w-1/2 px-4 md:pr-20 pt-10 md:pt-20 gap-6 md:gap-10">
                            <p className="text-4xl md:text-[118px] font-bold text-center" style={{fontFamily: 'Glacial Indifference Bold'}}>our products.</p>
                            <p className="text-[14px] md:text-[22px] text-justify">Senara Raya Spices Travel Size Shampoo, Body Wash, and Hand Wash invites you into a warm, aromatic journey rooted in Indonesian tradition. Infused with a comforting blend of cinnamon, clove, nutmeg, and star anise, this gentle formula cleanses the scalp while indulging the senses in the festive richness of local spices. Perfectly sized for travel (100 ml), each bottle brings the nostalgic essence of homecoming wherever you go — leaving your body and hair soft, refreshed, and delicately scented.</p>
                        </div>
                    </div>

                    {/* Expo Sale Section */}
                    <div ref={expoSaleRef} className={`flex justify-end transition-all duration-1000 ease-out transform ${expoSaleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{fontFamily: 'Glacial Indifference Bold'}}>
                        <div className="flex flex-col w-full md:w-1/2 px-4 md:pr-30 pt-50 md:pt-100 gap-0 justify-center">
                            <p className="text-2xl md:text-[32px] text-center md:text-center">EXPO SALE</p>
                            <p className="text-2xl md:text-[32px] text-center md:text-center">ALL TRAVEL SIZE VARIANT RP 45K/PCS</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 px-4 md:px-8 pt-10 md:pt-20">
                        {products.map((product, index) => (
                            <div key={index} className="relative bg-[#c33c09] rounded-2xl md:rounded-3xl p-4 md:p-6 text-white">
                                <span className="absolute top-2 md:top-4 left-2 md:left-4 bg-white text-[#c33c09] px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm">
                                    travel size
                                </span>
                                <div className="flex justify-center my-4 md:my-25">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-32 md:w-40 pt-10 h-auto transform transition-transform duration-300 scale-125 hover:scale-150 md:scale-200 md:hover:scale-220 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-justify" style={{fontFamily: 'Glacial Indifference Bold'}}>{product.name}</h3>
                                <p className="text-xs md:text-sm leading-relaxed text-justify" style={{fontFamily: 'Glacial Indifference'}}>{product.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Raya Spices Section */}
                    <div ref={rayaSpicesRef} className={`transition-all duration-1000 ease-out transform ${rayaSpicesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <h3 className="text-center text-3xl text-[45px] md:text-[180px] pt-6 md:pt-20 px-4 md:px-0" style={{fontFamily: 'Glacial Indifference Italic'}}>raya spices variants</h3>
                        <div className="overflow-hidden w-full h-60 md:h-120">
                            <div className="flex animate-carousel gap-4 md:gap-4 infinite-scroll">
                                <img src={raya1} alt="raya1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya2} alt="raya2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya3} alt="raya3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya4} alt="raya4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya5} alt="raya5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                {/* Duplicate images for seamless loop */}
                                <img src={raya1} alt="raya1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya2} alt="raya2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya3} alt="raya3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya4} alt="raya4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={raya5} alt="raya5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                            </div>
                        </div>
                        <style jsx>{`
                            @keyframes scroll {
                                0% {
                                    transform: translateX(0);
                                }
                                100% {
                                    transform: translateX(-100%);
                                }
                            }
                            .animate-carousel {
                                animation: scroll 30s linear infinite;
                            }
                            .infinite-scroll {
                                width: 200%;
                            }
                        `}</style>
                    </div>

                    {/* Teduh Section */}
                    <div ref={teduhRef} className={`transition-all duration-1000 ease-out transform ${teduhVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h3 className="text-left text-[48px] md:text-[220px] pt-8 md:pt-30 px-4 md:pl-8" style={{fontFamily: 'Glacial Indifference'}}>TEDUH</h3>
                        <div className="overflow-hidden w-full h-60 md:h-120 md:-mt-10">
                            <div className="flex animate-carousel-reverse gap-4 md:gap-4 infinite-scroll">
                                <img src={teduh1} alt="teduh1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh2} alt="teduh2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh3} alt="teduh3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh4} alt="teduh4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh5} alt="teduh5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                {/* Duplicate images for seamless loop */}
                                <img src={teduh1} alt="teduh1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh2} alt="teduh2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh3} alt="teduh3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh4} alt="teduh4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={teduh5} alt="teduh5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                            </div>
                        </div>
                        <p className="text-justify text-base md:text-[24px] pt-6 md:pt-8 px-4 md:px-50" style={{fontFamily: 'Glacial Indifference'}}>Teduh captures the tranquility of shaded gardens and quiet forests. With calming notes of lavandin, geranium, patchouli, and vetiver, this scent offers a sense of stillness and deep connection. It gently wraps you in serenity, restoring balance after a long day. Teduh is a breath of calm in the middle of life's rush—a return to inner peace.</p>
                        <style jsx>{`
                            @keyframes scroll-reverse {
                                0% {
                                    transform: translateX(-100%);
                                }
                                100% {
                                    transform: translateX(0);
                                }
                            }
                            .animate-carousel-reverse {
                                animation: scroll-reverse 30s linear infinite;
                            }
                        `}</style>
                    </div>

                    {/* Lembung Section */}
                    <div ref={lembungRef} className={`transition-all duration-1000 ease-out transform ${lembungVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h3 className="text-right text-[48px] md:text-[220px] pt-8 md:pt-30 px-4 md:pr-8" style={{fontFamily: 'Glacial Indifference'}}>LEMBUNG</h3>
                        <div className="overflow-hidden w-full h-60 md:h-120 md:-mt-10">
                            <div className="flex animate-carousel gap-4 md:gap-4 infinite-scroll">
                                <img src={lembung1} alt="lembung1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung2} alt="lembung2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung3} alt="lembung3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung4} alt="lembung4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung5} alt="lembung5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                {/* Duplicate images for seamless loop */}
                                <img src={lembung1} alt="lembung1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung2} alt="lembung2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung3} alt="lembung3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung4} alt="lembung4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={lembung5} alt="lembung5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                            </div>
                        </div>
                        <p className="text-justify text-base md:text-[24px] pt-6 md:pt-8 px-4 md:px-50" style={{fontFamily: 'Glacial Indifference'}}>Inspired by the crisp air of morning dew and sunlit citrus groves, Lembung is a refreshing blend of lemongrass, pomelo, kaffir lime, and local botanicals. Its bright, zesty aroma awakens the senses and leaves a lasting feeling of clarity and freshness. Designed to energize your ritual, Lembung invites you to start the day with a clear mind and a grounded spirit.</p>
                    </div>

                    {/* Malam Section */}
                    <div ref={malamRef} className={`transition-all duration-1000 ease-out transform ${malamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h3 className="text-left text-[48px] md:text-[220px] pt-8 md:pt-30 px-4 md:pl-8" style={{fontFamily: 'Glacial Indifference'}}>MALAM</h3>
                        <div className="overflow-hidden w-full h-60 md:h-120 md:-mt-10">
                            <div className="flex animate-carousel-reverse gap-4 md:gap-4 infinite-scroll">
                                <img src={malam1} alt="malam1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam2} alt="malam2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam3} alt="malam3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam4} alt="malam4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam5} alt="malam5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                {/* Duplicate images for seamless loop */}
                                <img src={malam1} alt="malam1" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam2} alt="malam2" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam3} alt="malam3" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam4} alt="malam4" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                                <img src={malam5} alt="malam5" className="w-3/5 md:w-1/5 min-w-[40%] md:min-w-[20%] h-60 md:h-120 object-cover rounded-lg md:rounded-none" />
                            </div>
                        </div>
                        <p className="text-justify text-base md:text-[24px] pt-6 md:pt-8 py-10 md:py-10 px-4 md:px-50" style={{fontFamily: 'Glacial Indifference'}}>Malam is a warm and indulgent blend of cinnamon, vanilla, lavender, and sandalwood—crafted to soothe the body and quiet the mind. Inspired by slow evenings and intimate rituals, it evokes the feeling of comfort, nostalgia, and deep relaxation. Let Malam guide you into rest and reflection, wherever the night finds you.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;