'use client'
import React from 'react'
import { Button, Image } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'

import AppScreenshotSkewed from '../_components/AppScreenShotSkewed'
import BlurFade from '../_components/magic-ui/BlurFade'

export default function Component() {
  return (
    <>
      <main className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
        <section className="z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
          <LazyMotion features={domAnimation}>
            <m.div
              animate="kick"
              className="flex flex-col gap-6"
              exit="auto"
              initial="auto"
              transition={{
                duration: 0.25,
                ease: 'easeInOut',
              }}
              variants={{
                auto: { width: 'auto' },
                kick: { width: 'auto' },
              }}
            >
              <AnimatePresence mode="wait">
                <m.div
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="text-start text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 2 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 10,
                    duration: 0.8 + 0.1 * 8,
                    type: 'spring',
                  }}
                >
                  <div className="bg-hero-section-title text-transparent bg-clip-text dark:from-[#FFFFFF] dark:to-[#FFFFFF66]">
                    Discover Our Exclusive <br /> Collection of Luxury Furniture
                  </div>
                </m.div>

                <m.div
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="text-start font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 3 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 30,
                    duration: 0.8 + 0.1 * 9,
                    type: 'spring',
                  }}
                >
                  Casalago is a furniture company that specializes in creating high-quality, stylish
                  furniture for the home and office. We are committed to providing our customers
                  with the best possible experience.
                </m.div>

                <m.div
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 4 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 50,
                    duration: 0.8 + 0.1 * 10,
                    type: 'spring',
                  }}
                >
                  <Button
                    className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
                    radius="full"
                  >
                    Get To Know Us
                  </Button>
                  <Button
                    className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
                    endContent={
                      <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                        <Icon
                          className="text-default-500 [&>path]:stroke-[1.5]"
                          icon="solar:arrow-right-linear"
                          width={16}
                        />
                      </span>
                    }
                    radius="full"
                    variant="bordered"
                  >
                    View Our Products
                  </Button>
                </m.div>
              </AnimatePresence>
            </m.div>
          </LazyMotion>
        </section>
      </main>

      <div className="mt-4 flex w-full flex-col justify-between gap-4 bg-[#ABC485] p-4 md:mt-72 md:flex-row md:gap-0 md:p-24">
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              className="absolute top-[23%] w-full"
              initial={{ filter: 'blur(16px)', opacity: 0, y: 300 }}
              transition={{
                bounce: 0,
                delay: 0.01 * 10,
                duration: 0.8 + 0.1 * 8,
                type: 'spring',
              }}
            >
              <AppScreenshotSkewed className="hidden w-full md:block" />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
        <BlurFade inView delay={0.5} className="w-full md:w-1/2">
          <h1 className="z-50 px-4 text-center text-3xl font-bold text-[#ffffff] md:px-24 md:text-start">
            Your very own personal living space.
          </h1>
        </BlurFade>
        <BlurFade inView delay={0.7} className="w-full md:w-1/2">
          <p className="z-50 px-4 text-center text-[#ffffff] md:px-24 md:text-start">
            Casalago believes that a home is not just a place, but a reflection of who you are.
            Understanding that each home is an individual expression of the people who live in it.
            With our carefuly curated design furniture and accessories, we invite you to experience
            a new level of living beter at home.
          </p>
        </BlurFade>
      </div>
      <div className="mt-10 flex w-full flex-col justify-between gap-4 p-4 md:flex-row md:gap-0">
        <BlurFade inView delay={0.5} className="w-full md:w-1/2">
          <Image
            src="liveBetter.webp"
            radius="sm"
            alt="image-1"
            width={700}
            height={700}
            className="h-[400px] w-[600px] object-cover"
          />
        </BlurFade>
        <div className="flex w-full flex-col justify-center gap-4 md:w-1/2">
          <BlurFade inView delay={0.5}>
            <h1 className="text-3xl font-bold">Live better, feel better.</h1>
          </BlurFade>
          <BlurFade inView delay={0.7}>
            <p>
              Casalago believes that a home is not just a place, but a reflection of who you are.
              Understanding that each home is an individual expression of the people who live in it.
              With our carefuly curated design furniture and accessories, we invite you to
              experience a new level of living beter at home.
            </p>
          </BlurFade>
        </div>
      </div>
    </>
  )
}
