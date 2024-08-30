'use client'
import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
} from '@nextui-org/react'
import {
  Computer,
  GalleryHorizontal,
  Home,
  Images,
  Info,
  Menu,
  Phone,
  PhoneCall,
  Pin,
  Users,
  X,
} from 'lucide-react'
import BlurFade from './magic-ui/BlurFade'

export default function Header() {
  return (
    <footer className="w-full bg-[#F1DED0]">
      <div className="flex items-center justify-between">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <div className="flex items-center gap-2 text-[#141414]">
          <PhoneCall />
          <p>+961 03 660 844</p>
        </div>
        <div className="flex items-center gap-2 text-[#141414]">
          <Pin />
          <p>Kouba, Batroun, Lebanon</p>
        </div>
      </div>
    </footer>
  )
}
