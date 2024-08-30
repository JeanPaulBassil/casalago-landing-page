'use client'
import React from 'react'
import { Image } from '@nextui-org/react'
import { PhoneCall, Pin } from 'lucide-react'
import BlurFade from './magic-ui/BlurFade'

export default function Footer() {
  return (
    <div className="flex w-full items-center justify-between bg-[#F1DED0] px-20 py-8 mt-10">
        <BlurFade inView delay={0.5}>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </BlurFade>
      <BlurFade inView delay={0.7} className="flex items-center gap-2 text-[#141414]">
        <PhoneCall />
        <p>+961 03 660 844</p>
      </BlurFade>
      <BlurFade inView delay={0.9} className="flex items-center gap-2 text-[#141414]">
        <Pin />
        <p>Kouba, Batroun, Lebanon</p>
      </BlurFade>
    </div>
  )
}
