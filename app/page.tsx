'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, Search, ShoppingBag, ArrowRight, ArrowLeft, Star, Mouse, MoreVertical } from 'lucide-react';

function SunburstIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <g stroke="currentColor" strokeWidth="12" strokeLinecap="square">
        <line x1="50" y1="10" x2="50" y2="25" />
        <line x1="50" y1="75" x2="50" y2="90" />
        <line x1="10" y1="50" x2="25" y2="50" />
        <line x1="75" y1="50" x2="90" y2="50" />
        <line x1="21.7" y1="21.7" x2="32.3" y2="32.3" />
        <line x1="78.3" y1="78.3" x2="67.7" y2="67.7" />
        <line x1="21.7" y1="78.3" x2="32.3" y2="67.7" />
        <line x1="78.3" y1="21.7" x2="67.7" y2="32.3" />
      </g>
      <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="10" />
    </svg>
  );
}

function AsteriskIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <g stroke="currentColor" strokeWidth="12" strokeLinecap="square">
        <line x1="50" y1="15" x2="50" y2="85" />
        <line x1="15" y1="50" x2="85" y2="50" />
        <line x1="25" y1="25" x2="75" y2="75" />
        <line x1="25" y1="75" x2="75" y2="25" />
      </g>
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const topPicks = [
    { name: 'CARGO PANTS', price: '$89', rating: '4.80', reviews: '120', img: 'https://picsum.photos/seed/pants/600/800' },
    { name: 'GRAPHITE STREET JACKET', price: '$129', rating: '4.99', reviews: '100', img: 'https://picsum.photos/seed/jacket/600/800' },
    { name: 'CLASSIC LOGO TEE', price: '$45', rating: '4.70', reviews: '87', img: 'https://picsum.photos/seed/tee/600/800' },
    { name: 'URBAN BEANIE', price: '$29', rating: '4.90', reviews: '210', img: 'https://picsum.photos/seed/beanie/600/800' },
    { name: 'OVERSIZED HOODIE', price: '$75', rating: '4.85', reviews: '156', img: 'https://picsum.photos/seed/hoodie/600/800' },
    { name: 'UTILITY VEST', price: '$110', rating: '4.65', reviews: '42', img: 'https://picsum.photos/seed/vest/600/800' },
    { name: 'STREET SNEAKERS', price: '$150', rating: '4.95', reviews: '320', img: 'https://picsum.photos/seed/sneakers/600/800' },
    { name: 'CROSSBODY BAG', price: '$55', rating: '4.75', reviews: '89', img: 'https://picsum.photos/seed/bag/600/800' },
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 max-w-[1600px] mx-auto w-full">
        <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <div className="text-2xl md:text-3xl font-display tracking-wider flex items-center">
          URBAN<span className="font-sans font-bold tracking-normal ml-1">EDGE</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 hover:bg-gray-100 rounded-full transition-colors hidden md:block border border-gray-200">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-gray-100 rounded-full transition-colors relative border border-gray-200">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-[#FF4500] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F8F8F8]">2</span>
          </button>
          <button className="bg-[#111] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors hidden md:block">
            LOG IN
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="px-6 md:px-12 max-w-[1600px] mx-auto w-full pt-4 pb-12">
        <div className="flex flex-col items-end mb-2">
          <p className="font-display text-xl md:text-2xl tracking-wide uppercase">MINIMAL. BOLD. MADE FOR THE STREETS.</p>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <h1 className="font-display text-[11vw] leading-[0.85] tracking-tight uppercase">STREETWEAR REDEFINED.</h1>
          <SunburstIcon className="w-[8vw] h-[8vw] text-[#FF4500] shrink-0" />
        </div>
        
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110 origin-top">
            <Image src="https://picsum.photos/seed/streetwear1/1920/1080" alt="Streetwear couple" fill className="object-cover" priority />
          </motion.div>
          <div className="absolute inset-0 bg-black/20" />
          
          <motion.div style={{ y: textY, opacity }} className="absolute bottom-0 left-0 p-6 md:p-12 max-w-xl">
            <p className="text-white text-sm md:text-base lg:text-lg mb-8 font-medium leading-relaxed">
              We believe streetwear is more than just clothing—it's an expression of culture, identity, and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Shop New Drops
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                Explore Collections
              </button>
            </div>
          </motion.div>
          
          <motion.div style={{ opacity }} className="absolute bottom-6 right-6 md:bottom-12 md:right-12 hidden md:flex items-center justify-center w-32 h-32">
             <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
               <svg viewBox="0 0 100 100" className="w-full h-full text-white/90 fill-current">
                 <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                 <text fontSize="10.5" letterSpacing="3" fontWeight="500" className="uppercase">
                   <textPath href="#circlePath">Scroll down for more • Scroll down for more • </textPath>
                 </text>
               </svg>
             </div>
             <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-md">
               <Mouse className="w-5 h-5 text-white" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#111] text-white py-5 overflow-hidden flex items-center relative">
        <div className="flex animate-marquee w-max">
          {/* First set */}
          <div className="flex items-center gap-8 font-display text-3xl md:text-4xl tracking-wide uppercase px-4">
            <span>20% OFF LIMITED TIME SALE</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>LATEST TRENDS DROP OFF NOW!</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>2025 WINTER SALE</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>20% OFF LIMITED TIME SALE</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>LATEST TRENDS DROP OFF NOW!</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
          </div>
          {/* Second set for seamless loop */}
          <div className="flex items-center gap-8 font-display text-3xl md:text-4xl tracking-wide uppercase px-4">
            <span>20% OFF LIMITED TIME SALE</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>LATEST TRENDS DROP OFF NOW!</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>2025 WINTER SALE</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>20% OFF LIMITED TIME SALE</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
            <span>LATEST TRENDS DROP OFF NOW!</span>
            <AsteriskIcon className="text-[#FF4500] w-8 h-8 shrink-0" />
          </div>
        </div>
      </div>

      {/* About / Collections Section */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] uppercase tracking-tight">
              REFINED STREETWEAR THAT FEELS EFFORTLESS AND LOOKS UNMISTAKABLY YOURS.
            </h2>
          </div>
          
          <div className="lg:col-span-4 relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="https://picsum.photos/seed/streetwear2/800/1000" alt="Couple back" fill className="object-cover" />
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our collection is built for the streets: oversized fits, sharp cuts, and standout details crafted for those who define their own style.
              </p>
              <button className="bg-[#111] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors">
                Discover Now
              </button>
            </div>
            
            <div className="mt-16 lg:mt-0">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-medium">Our Collections</h3>
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <MoreVertical className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-0">
                {[
                  { name: 'Hoodies', count: '14 Collections' },
                  { name: 'Pants', count: '08 Collections' },
                  { name: 'Jackets', count: '20 Collections' },
                  { name: 'T-Shirts', count: '12 Collections' },
                  { name: 'Accessories', count: '60 Collections' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-5 border-t border-gray-200 group cursor-pointer">
                    <span className="text-lg font-medium group-hover:text-[#FF4500] transition-colors">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 w-full">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto flex items-end justify-between mb-12">
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight leading-none">TOP PICS</h2>
          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollProgress <= 0.01}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollProgress >= 0.99}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="relative w-full">
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-8 gap-6 md:gap-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {topPicks.map((product, i) => (
              <div key={i} className="group cursor-pointer flex-none w-[85vw] sm:w-[calc(50vw-2rem)] lg:w-[calc(25vw-3rem)] max-w-[400px] snap-start">
                <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-2xl bg-gray-100">
                  <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 fill-[#FF4500] text-[#FF4500]" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                <p className="font-bold text-xl">{product.price}</p>
              </div>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-4">
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#111] transition-all duration-300 ease-out rounded-full"
                style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Movement Section */}
      <section className="bg-[#111] text-white py-24 md:py-32 px-6 md:px-12 mt-12">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
                 <div className="aspect-[3/4] relative rounded-xl overflow-hidden mt-12 sm:mt-24">
                   <Image src="https://picsum.photos/seed/move1/400/600" alt="Style" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                   <Image src="https://picsum.photos/seed/move2/400/600" alt="Style" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <div className="aspect-[3/4] relative rounded-xl overflow-hidden mt-24 sm:mt-48">
                   <Image src="https://picsum.photos/seed/move3/400/600" alt="Style" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <div className="aspect-[3/4] relative rounded-xl overflow-hidden mt-8 sm:mt-16">
                   <Image src="https://picsum.photos/seed/move4/400/600" alt="Style" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
              </div>
            </div>
            <div className="flex-shrink-0 text-left lg:text-right relative w-full lg:w-auto">
              <SunburstIcon className="w-20 h-20 text-[#FF4500] absolute -top-12 -left-4 lg:-left-24" />
              <h2 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] uppercase tracking-tight">
                NOT JUST<br className="hidden lg:block"/> CLOTHING.<br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>A MOVEMENT.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-medium">
              These are the drops everyone's chasing. Limited stock, high demand—get yours before they're gone.
            </p>
            <button className="bg-[#111] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-black transition-colors">
              Explore More
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image src="https://picsum.photos/seed/bot1/600/800" alt="Drop" fill className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden mt-12">
              <Image src="https://picsum.photos/seed/bot2/600/800" alt="Drop" fill className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden hidden md:block">
              <Image src="https://picsum.photos/seed/bot3/600/800" alt="Drop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#FF4500] text-white py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl w-full">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-4">
              STAY IN THE LOOP.
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium">
              Sign up for exclusive drops, early access to sales, and streetwear culture straight to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-xl">
            <form className="flex w-full relative" onSubmit={(e) => { e.preventDefault(); }}>
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="w-full bg-transparent border-b-2 border-white py-4 pr-12 text-lg md:text-xl font-medium focus:outline-none placeholder:text-white/60 uppercase"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 bottom-4 hover:translate-x-2 transition-transform"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-8 h-8" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
