import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [ShowContaint, setShowContaint] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    tl.to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContaint(true);
          this.kill();
        }
      }
    })
  })
  useGSAP(() => {
    if (!ShowContaint) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.easeInOut",
    });
    gsap.to(".building", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1  ,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.easeInOut",
    });
    gsap.to(".boy", {
      scale: 0.4,
      x: "-50%",
      bottom: "-80%",
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 30
      const yMove = (e.clientY / window.innerWidth - 0.5) * 30

      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
        y: `${yMove * 0.4}%`
      })
      gsap.to(".imagesdiv .sky", {
        x: `${xMove * 0.1}%`,
        y: `${yMove * 0.1}%`
      })
      gsap.to(".imagesdiv .building", {
        x: `${xMove * 0.3}%`,
        y: `${yMove * 0.3}%`
      })
    })
  }, [ShowContaint])
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className=''>
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  SL
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./images/bg2.png"
            width="100%"
            height="100%"
            opacity={100}
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
          <image
            href="./images/image.jpg"
            width="100%"
            height="100%"
            opacity={0.5}
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {ShowContaint && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className="landing overflow-hidden relative w-full h-screen bg-[#1c2a3a]">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-5 px-5 ">

              <div className="logo flex gap-4  font-bold">

                <div className="lines flex flex-col gap-1">
                  <div className="line w-9 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                  <div className="line w-4 h-1 bg-white"></div>
                </div>
                <h3 className='text-2xl -mt-[5px] leading-none text-white'>Jinwhoo</h3>
              </div>

            </div>
            <div className='imagesdiv overflow-hidden relative w-full h-screen'>

              <img className='absolute sky scale-[1.5] rotate-[-20deg]  top-0 left-0 w-full h-full object-cover' src="./images/image.jpg" alt="" />
              <img className='building scale-[2] rotate-[-15deg] absolute top-0 left-0 w-full h-full object-cover' src="./images/bg2.png" alt="" />

              <div className='text absolute top-10 left-1/2 -translate-x-1/2 text-white scale-[2] rotate-[20deg]'>
                <h1 className='text-7xl -ml-19 leading-none'>Watch</h1>
                <h1 className='text-7xl ml-16 leading-none text-red-900 drop-shadow-red-600 drop-shadow-2xl'>Solo</h1>
                <h1 className='text-7xl -ml-19 leading-none text-blue-600 drop-shadow-white drop-shadow-2xl'>Leveling</h1>
              </div>

              <img className='absolute boy -bottom-[150%] scale-[3] rotate-[-20deg] -translate-x-1/2 left-1/2 object-cover' src="./images/boy.png" alt="" />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-5 px-5 bg-gradient-to-t from-black to-transparent">

              <div className='flex items-center gap-2'>
                <i className="ri-arrow-down-line text-2xl"></i>
                <h3 className='text-xl font-[Helvetica_Now_Display]'>Scroll Down</h3>
              </div>

              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45px]' src="./images/ps5.png" alt="" />
            </div>

          </div>

          <div className='w-full h-screen flex items-center justify-center bg-black'>

            <div className="cntr flex w-full h-[80%] ">
              <div className='limg relative w-1/2 h-full'>

                <img className='absulute scale-[1] top-1/2 left-1/2 ' src="./images/img.png" alt="" />
              </div>

              <div className='rg text-white w-[40%] py-5'>
                <h1 className='text-5xl font-bold'>Still Running,</h1>
                <h1 className='text-5xl font-bold'>Not Hunting</h1>
                <p className='mt-3 text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima assumenda voluptate iste sit iure eos numquam cupiditate illo eum repellendus dolores expedita, qui exercitationem nisi, quam unde modi reiciendis?
                </p>
                <p className='mt-3 text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam minima voluptatem aperiam quas dicta vel dolores tempore assumenda adipisci?
                </p>
                <button className='bg-yellow-500 px-5 py-5 text-xl mt-4'>Download Now</button>
              </div>
            </div>


          </div>
        </div>
      )}
    </>
  )
}

export default App
