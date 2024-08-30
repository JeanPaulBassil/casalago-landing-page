'use client'
import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
} from '@nextui-org/react'
import {
  Home,
  Images,
  Info,
  Menu,
  Phone,
  X,
} from 'lucide-react'
import BlurFade from './magic-ui/BlurFade'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  //   const menuItems = ['Home', 'Our Services', 'Our Clients', 'About Us']
  const menuItems = [
    {
      name: 'Home',
      icon: <Home />,
    },
    {
      name: 'Products',
      icon: <Images />,
    },
    {
      name: 'Contact Us',
      icon: <Phone />,
    },
    {
      name: 'About Us',
      icon: <Info />,
    },
  ]

  const handleItemClick = (item: string) => {
    setActiveItem(item)
  }

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
      className="py-2 lg:py-10"
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "after:content-['']",
          'after:absolute',
          'after:bottom-0',
          'after:h-[2px]',
          'after:rounded-[2px]',
          'after:bg-blackHaze-950',
          'after:left-1/2',
          'after:transform',
          'after:-translate-x-1/2',
          'after:w-0',
          'after:transition-all',
          'after:duration-200',
          'after:ease-in-out',
          'data-[active=true]:after:w-full',
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
          icon={isMenuOpen ? <X /> : <Menu />}
        />
        <NavbarBrand>
          <BlurFade inView>
            <Image
              src="logo.png"
              width={100}
              height={100}
              alt="logo"
              className="w-[50px] lg:w-auto"
            />
          </BlurFade>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-10 lg:flex" justify="center">
        {menuItems.map((item, index) => (
          <BlurFade inView delay={0.2 + index * 0.2}>
            <NavbarItem key={`${item}-${index}`} isActive={activeItem === item.name}>
              <Link
                href="#"
                className={`text-black font-bold`}
                onClick={() => handleItemClick(item.name)}
              >
                {item.name}
              </Link>
            </NavbarItem>
          </BlurFade>
        ))}
      </NavbarContent>
      <NavbarMenu
        className="mt-4 lg:mt-20"
        style={{
          backgroundColor: 'transparent',
        }}
      >
        {menuItems.map((item, index) => (
          <BlurFade key={`${item}-${index}`}>
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="flex w-full items-center gap-2"
                href="#"
                size="lg"
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            </NavbarMenuItem>
          </BlurFade>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
