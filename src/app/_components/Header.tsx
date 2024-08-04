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
} from '@nextui-org/react'
import { Computer, Home, Info, Menu, Users, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

//   const menuItems = ['Home', 'Our Services', 'Our Clients', 'About Us']
const menuItems = [{
    name: 'Home',
    icon: <Home />
  },
  {
    name: 'Our Services',
    icon: <Computer />
  },
  {
    name: 'Our Clients',
    icon: <Users />
  },
  {
    name: 'About Us',
    icon: <Info />
}]

  const handleItemClick = (item: string) => {
    setActiveItem(item)
  }

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: ['flex', 'relative', 'h-full', 'items-center'],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
          icon={isMenuOpen ? <X /> : <Menu />}
        />
        <NavbarBrand>
          <p className="text-inherit font-bold tracking-[16px]">SOFTECH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        <NavbarItem
          className={`${
            activeItem === 'Home'
              ? 'text-black duration-300 transition-colors after:scale-x-100'
              : 'after:scale-x-0'
          }`}
        >
          <Link
            href="#"
            className={`font-bold ${
              activeItem === 'Home' ? 'text-black' : 'text-[#60E1CB]'
            } duration-300 transition-colors`}
            aria-current="page"
            onClick={() => handleItemClick('Home')}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            activeItem === 'Our Services'
              ? 'text-black duration-300 transition-colors after:scale-x-100'
              : 'after:scale-x-0'
          }`}
        >
          <Link
            href="#"
            className={`font-bold ${
              activeItem === 'Our Services' ? 'text-black' : 'text-[#60E1CB]'
            } duration-300 transition-colors`}
            onClick={() => handleItemClick('Our Services')}
          >
            Our Services
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            activeItem === 'Our Clients'
              ? 'text-black duration-300 transition-colors after:scale-x-100'
              : 'after:scale-x-0'
          }`}
        >
          <Link
            color="foreground"
            href="#"
            className={`font-bold ${
              activeItem === 'Our Clients' ? 'text-black' : 'text-[#60E1CB]'
            } duration-300 transition-colors`}
            onClick={() => handleItemClick('Our Clients')}
          >
            Our Clients
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            activeItem === 'About Us'
              ? 'text-black duration-300 transition-colors after:scale-x-100'
              : 'after:scale-x-0'
          }`}
        >
          <Link
            color="foreground"
            href="#"
            className={`font-bold ${
              activeItem === 'About Us' ? 'text-black' : 'text-[#60E1CB]'
            } duration-300 transition-colors`}
            onClick={() => handleItemClick('About Us')}
          >
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            radius="full"
            className="bg-[#7BC0E3] font-medium text-secondary-50"
            href="#"
            variant="flat"
          >
            Request A Quote
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full flex items-center gap-2" href="#" size="lg">
                {item.icon}
              <p>{item.name}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
