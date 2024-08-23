'use client'
import React, { useState, useEffect } from 'react'
import Header from '../_components/Header'
import { Button, Image } from '@nextui-org/react'
import { Check, X } from 'lucide-react'
import ShineBorder from '../_components/magic-ui/ShineBorder'
import BlurFade from '../_components/magic-ui/BlurFade'
import TextRevealByWord from '../_components/magic-ui/TextReveal'
import WordPullUp from '../_components/magic-ui/WordPullUp'
import ShimmerButton from '../_components/magic-ui/ShimmerButton'
import TypingAnimation from '../_components/magic-ui/TypingAnimation'

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
          <BlurFade>
            <ShineBorder className="w-[70%] flex-row bg-[#ffffff] p-10 lg:flex lg:w-[80%] lg:gap-12">
              <div className="flex flex-col md:gap-12 lg:gap-16">
                <div className="flex flex-col gap-12 md:gap-12 lg:gap-16">
                  <span className="text-3xl lg:text-4xl xl:text-6xl">
                    <BlurFade>
                      SOLID <br /> WOOD <br /> PRODUCTS
                    </BlurFade>
                  </span>
                  <BlurFade delay={0.2}>
                    <span className="text-base lg:text-lg xl:text-xl">
                      Oak, beech, ash <br /> and much more
                    </span>
                  </BlurFade>
                  <BlurFade delay={0.4}>
                    <Button
                      radius="none"
                      className="w-[120px] bg-[#173C6E] font-bold text-[#ffffff] md:w-[150px] lg:w-[200px]"
                    >
                      Contact Us
                    </Button>
                  </BlurFade>
                </div>
              </div>
              <BlurFade delay={0.6}>
                <div className="mt-0 hidden h-[1px] w-[80%] bg-[#000000] sm:-mt-28 md:-mt-40 lg:mt-0 lg:block lg:h-[340px] lg:w-[1px]"></div>
              </BlurFade>
              <div className="relative">
                <BlurFade>
                  <Image
                    src="hero/1.png"
                    className="relative bottom-80 left-72 w-[150px] lg:bottom-0 lg:w-[200px]"
                    hidden={!isLgScreen}
                  />
                </BlurFade>
                <BlurFade delay={0.2}>
                  <Image
                    src="hero/2.png"
                    className="relative bottom-32 w-[150px] lg:bottom-0 lg:left-10 lg:top-10 lg:w-[200px]"
                    hidden={!isLgScreen}
                  />
                </BlurFade>
                <BlurFade delay={0.4}>
                  <Image
                    src="hero/3.png"
                    className="relative bottom-10 left-72 w-[150px] lg:w-[200px]"
                    hidden={!isLgScreen}
                  />
                </BlurFade>
              </div>
            </ShineBorder>
          </BlurFade>
        </div>
      </div>
      <div className="p-10 lg:p-16">
        <span className="text-3xl lg:text-4xl xl:text-6xl">
          <BlurFade inView={true}>
            THE WOOD WE <br /> WORK WITH
          </BlurFade>
        </span>
      </div>
      <div className="flex flex-col items-center gap-10 md:items-start">
        <BlurFade inView={true}>
          <div
            style={{ backgroundImage: "url('woodWeWorkWith/1.png')" }}
            className="flex h-auto w-auto flex-col items-center gap-4 rounded-xl px-10 pb-10 shadow-xl md:h-[150px] md:w-[100%] md:flex-row md:px-0 md:pb-0 lg:h-[220px] lg:w-[80%] lg:gap-10 xl:w-[1026px]"
          >
            <BlurFade inView={true}>
              <div className="flex w-full items-center justify-center rounded-md bg-[#ffffff] px-7 py-2 xs:w-auto lg:px-16 lg:py-5">
                <p className="text-base font-bold md:text-lg lg:text-xl">Oak</p>
              </div>
            </BlurFade>
            <div className="flex w-full flex-col justify-center gap-2 xs:flex-row md:gap-10 lg:gap-20">
              <div className="flex w-full flex-col justify-between gap-2 px-2 md:flex-row md:gap-0 lg:px-10">
                <div className="flex items-center gap-2">
                  <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                  <p className="text-base text-[#ffffff] lg:text-xl">Waterproof</p>
                </div>
                <BlurFade inView={true} delay={0.4}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#ffffff] lg:text-xl">Durability</p>
                  </div>
                </BlurFade>
                <BlurFade inView={true} delay={0.6}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#ffffff] lg:text-xl">Elegant</p>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <div
            style={{ backgroundImage: "url('woodWeWorkWith/2.png')" }}
            className="flex h-auto w-auto flex-col items-center gap-4 rounded-xl px-12 pb-10 shadow-xl md:h-[150px] md:w-[100%] md:flex-row md:px-0 md:pb-0 lg:h-[220px] lg:w-[80%] lg:gap-10 xl:w-[1026px]"
          >
            <BlurFade>
              <div className="flex w-full items-center justify-center rounded-md bg-[#825843] bg-opacity-50 px-7 py-2 xs:w-auto lg:px-16 lg:py-5">
                <p className="text-base font-bold text-[#ffffff] md:text-lg lg:text-xl">Buk</p>
              </div>
            </BlurFade>
            <div className="flex w-full flex-col justify-center gap-2 px-2 xs:flex-row md:gap-10 lg:gap-20">
              <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:gap-0 lg:px-10">
                <BlurFade inView={true} delay={0.2}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#000000] lg:text-xl">Density</p>
                  </div>
                </BlurFade>
                <BlurFade inView={true} delay={0.4}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#000000] lg:text-xl">Grain</p>
                  </div>
                </BlurFade>
                <BlurFade inView={true} delay={0.6}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#000000] lg:text-xl">Versatile</p>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <div
            style={{ backgroundImage: "url('woodWeWorkWith/3.png')" }}
            className="flex h-auto w-auto flex-col items-center gap-4 rounded-xl px-10 pb-10 shadow-xl md:h-[150px] md:w-[100%] md:flex-row md:gap-0 md:px-0 md:pb-0 lg:h-[210px] lg:w-[80%] lg:gap-10 xl:w-[1026px]"
          >
            <BlurFade>
              <div className="flex w-full items-center justify-center rounded-md bg-[#825843] bg-opacity-50 px-7 py-2 xs:w-auto lg:px-16 lg:py-5">
                <p className="text-base font-bold text-[#ffffff] md:text-lg lg:text-xl">Ash</p>
              </div>
            </BlurFade>
            <div className="flex w-full flex-col justify-center gap-2 px-2 xs:flex-row md:gap-10 lg:gap-20">
              <div className="flex h-full w-full flex-col justify-between gap-2 md:flex-row md:gap-0 lg:px-10">
                <BlurFade inView={true} delay={0.2}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#000000] lg:text-xl">Strength</p>
                  </div>
                </BlurFade>
                <BlurFade inView={true} delay={0.4}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#000000] lg:text-xl">Grain</p>
                  </div>
                </BlurFade>
                <BlurFade inView={true} delay={0.6}>
                  <div className="flex items-center gap-2">
                    <Check color="#79BF33" size={isLgScreen ? 35 : 25} />
                    <p className="text-base text-[#000000] lg:text-xl">Workability</p>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
      <div
        style={{ backgroundImage: "url('/heroWoodBg.png')" }}
        className="mt-5 flex w-full items-center justify-end py-20"
      >
        <BlurFade inView className="w-[80%]">
          <ShineBorder className="bg-[#ffffff]">
            <div className="flex flex-col gap-10 p-5 md:p-10 lg:p-16">
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
                <BlurFade inView>
                  ADVANTAGES OF <br /> OF WORKING WITH US
                </BlurFade>
              </span>
              <div className="flex flex-col gap-[5%] lg:flex-row">
                <BlurFade inView delay={0.2}>
                  <Image
                    src="advantagesPicture.png"
                    className="hidden h-full object-cover lg:block xl:w-[100%]"
                  />
                </BlurFade>
                <BlurFade inView delay={0.2}>
                  <Image
                    src="advantagesPicture.png"
                    className="block max-h-[200px] object-cover lg:hidden xl:w-[100%]"
                  />
                </BlurFade>
                <div className="mt-5 flex h-full flex-col justify-between gap-5 text-center lg:mt-0 lg:gap-10 lg:text-start">
                  <BlurFade inView delay={0.2}>
                    <p className="text-base lg:text-lg xl:text-2xl">
                      Personalized solutions prioritize your satisfaction.
                    </p>
                  </BlurFade>
                  <BlurFade inView delay={0.4}>
                    <p className="text-base lg:text-lg xl:text-2xl">
                      Premium materials ensure exceptional results.
                    </p>
                  </BlurFade>
                  <BlurFade inView delay={0.6}>
                    <p className="text-base lg:text-lg xl:text-2xl">
                      Over 40 years of industry excellence.
                    </p>
                  </BlurFade>
                </div>
              </div>
              <BlurFade inView delay={0.8} className="m-auto">
                <Button
                  radius="sm"
                  className="m-auto max-w-[300px] bg-[#728BAD] px-5 font-bold text-[#ffffff] sm:px-10 lg:m-0"
                >
                  Receive A Quote
                </Button>
              </BlurFade>
            </div>
          </ShineBorder>
        </BlurFade>
      </div>

      <div className='relative'>
        <BlurFade inView className="mt-16 w-full">
          <ShineBorder className="w-[70%] lg:w-[90%] 2xl:w-[75%] bg-[#F1DED0] flex flex-col gap-10 items-start px-10 lg:pl-16 py-5 lg:py-20">
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
              <BlurFade inView delay={0.2} >ABOUT US</BlurFade>
            </span>
            <BlurFade inView delay={0.5}>
              <p className="max-w-[300px] lg:max-w-[350px] xl:max-w-[470px] text-sm md:text-base lg:text-lg xl:text-2xl">
                Al Mouhawess Wood - We specialize in crafting high-quality wood products tailored to
                your specifications. From custom furniture like chairs, tables, and wardrobes to
                unique architectural elements, our workshop is equipped with state-of-the-art
                industrial equipment to bring your visions to life.
              </p>
            </BlurFade>
          </ShineBorder>
        </BlurFade>
        <BlurFade inView delay={0.4} className="absolute left-[67%] 2xl:left-[57%] top-[10%]">
          <Image src="AboutUs/2.png" className="h-[100px] lg:h-[150px] xl:h-full object-cover xl:w-[100%] lg:block hidden" />
        </BlurFade>
        <BlurFade inView delay={0.8} className="absolute left-[50%] 2xl:left-[40%] top-[25%]">
          <Image src="AboutUs/1.png" className="h-[200px] lg:h-[250px] xl:h-[300px] object-cover xl:w-[100%] lg:block hidden" />
        </BlurFade>
        <BlurFade inView delay={1} className="absolute left-[65%] 2xl:left-[55%] top-[60%]">
          <Image src="AboutUs/3.png" className="h-[100px] lg:h-[150px] xl:h-full object-cover xl:w-[100%] lg:block hidden" />
        </BlurFade>
      </div>
    </div>
  )
}

export default page
