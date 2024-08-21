'use client'
import React, { useState, useEffect } from 'react'
import Header from '../_components/Header'
import { Button, Image } from '@nextui-org/react'
import { Check, X } from 'lucide-react'

const page = () => {
  const [isLgScreen, setIsLgScreen] = useState(false)
  const [isBelowSmScreen, setIsBelowSmScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 768)
      setIsBelowSmScreen(window.innerWidth < 375)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute left-0 top-0 h-screen w-full lg:h-auto">
      <div style={{ backgroundImage: "url('/heroWoodBg.png')" }}>
        <div className="mt-20 py-16 lg:mt-36">
          <div className="w-[70%] lg:w-[80%] flex-row bg-[#ffffff] p-10 lg:flex lg:gap-12 lg:p-16">
            <div className="flex flex-col md:gap-12 lg:gap-16">
              <div className="flex flex-col gap-12 md:gap-12 lg:gap-16">
                <span className="text-3xl lg:text-4xl xl:text-6xl">
                  SOLID <br /> WOOD <br /> PRODUCTS
                </span>
                <span className="text-base lg:text-lg xl:text-xl">
                  Oak, beech, ash <br /> and much more
                </span>
                <Button
                  radius="none"
                  className="w-[120px] bg-[#173C6E] font-bold text-[#ffffff] md:w-[150px] lg:w-[200px]"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="mt-0 hidden h-[1px] w-[80%] bg-[#000000] sm:-mt-28 md:-mt-40 lg:mt-0 lg:block lg:h-[340px] lg:w-[1px]"></div>
            <Image
              src="hero/1.png"
              className="relative bottom-48 left-72 w-[150px] lg:bottom-0 lg:left-0 lg:top-52 lg:w-[200px]"
              hidden={!isLgScreen}
            />
            <Image
              src="hero/2.png"
              className="relative bottom-32 w-[150px] lg:bottom-0 lg:left-10 lg:top-10 lg:w-[200px]"
              hidden={!isLgScreen}
            />
            <Image
              src="hero/3.png"
              className="relative bottom-52 left-64 w-[150px] lg:bottom-0 lg:left-0 lg:right-20 lg:top-80 lg:w-[200px]"
              hidden={!isLgScreen}
            />
          </div>
        </div>
      </div>
      <div className="p-10 lg:p-16">
        <span className="text-3xl lg:text-4xl xl:text-6xl">
          THE WOOD WE <br /> WORK WITH
        </span>
      </div>
      <div className="flex flex-col items-center md:items-start gap-10">
        <div
          style={{ backgroundImage: "url('woodWeWorkWith/1.png')" }}
          className="flex h-auto w-auto md:w-[100%] px-4 flex-col items-center gap-5 rounded-xl pb-10 shadow-xl md:h-[150px] md:flex-row md:pb-0 lg:h-[220px] lg:w-[80%] lg:gap-10 xl:w-[1026px]"
        >
          <div className="flex w-full xs:w-auto items-center justify-center rounded-md bg-[#ffffff] px-10 py-2 lg:px-16 lg:py-5">
            <p className="text-base font-bold md:text-lg lg:text-xl">Oak</p>
          </div>
          <div className="flex w-full px-2 flex-col xs:flex-row justify-center gap-2 md:gap-10 lg:gap-20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#ffffff] lg:text-xl">Durability</p>
              </div>
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#ffffff] lg:text-xl">Elegant</p>
              </div>
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#ffffff] lg:text-xl">Waterproof</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#ffffff] lg:text-xl">Expensive</p>
              </div>
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#ffffff] lg:text-xl">Heavy</p>
              </div>
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#ffffff] lg:text-xl">Stainable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Refactored Buk Section */}
        <div
          style={{ backgroundImage: "url('woodWeWorkWith/2.png')" }}
          className="flex h-auto w-auto md:w-[100%] px-4 flex-col items-center gap-5 rounded-xl pb-10 shadow-xl md:h-[150px] md:flex-row md:pb-0 lg:h-[220px] lg:w-[80%] lg:gap-10 xl:w-[1026px]"
        >
          <div className="flex w-full xs:w-auto items-center justify-center rounded-md bg-[#825843] bg-opacity-50 px-10 py-2 lg:px-16 lg:py-5">
            <p className="text-base font-bold md:text-lg lg:text-xl text-[#ffffff]">Buk</p>
          </div>
          <div className="flex w-full px-2 flex-col xs:flex-row justify-center gap-2 md:gap-10 lg:gap-20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Density</p>
              </div>
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Grain</p>
              </div>
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Versatile</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Warping</p>
              </div>
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Absorbent</p>
              </div>
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Heavy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Refactored Ash Section */}
        <div
          style={{ backgroundImage: "url('woodWeWorkWith/3.png')" }}
          className="flex h-auto w-auto md:w-[100%] px-4 flex-col items-center gap-5 rounded-xl pb-10 shadow-xl md:h-[150px] md:flex-row md:pb-0 lg:h-[220px] lg:w-[80%] lg:gap-10 xl:w-[1026px]"
        >
          <div className="flex w-full xs:w-auto items-center justify-center rounded-md bg-[#825843] bg-opacity-50 px-10 py-2 lg:px-16 lg:py-5">
            <p className="text-base font-bold md:text-lg lg:text-xl text-[#ffffff]">Ash</p>
          </div>
          <div className="flex w-full px-2 flex-col xs:flex-row justify-center gap-2 md:gap-10 lg:gap-20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Strength</p>
              </div>
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Grain</p>
              </div>
              <div className="flex items-center gap-2">
                <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Workability</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Decay</p>
              </div>
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Pests</p>
              </div>
              <div className="flex items-center gap-2">
                <X color="#FD6200" size={isLgScreen ? 35 : 25} />
                <p className="text-base text-[#000000] lg:text-xl">Scarcity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
