'use client'

import type { NavbarProps } from '@nextui-org/react'

import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Divider,
} from '@nextui-org/react'
import { cn } from '@nextui-org/react'
import { Home, Menu, X } from 'lucide-react'
import BlurFade from './magic-ui/BlurFade'
const menuItems = ['Home', 'Products']

export default function Component(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn('border-default-100', {
          'bg-default-200/50 dark:bg-default-100/50': isMenuOpen,
        }),
        wrapper: 'w-full justify-center',
        item: 'hidden md:flex',
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <BlurFade inView delay={0.5} className="mt-4 flex gap-2">
          <Home strokeWidth={2.5} />
          <span className="text-xl font-bold">CASALAGO</span>
        </BlurFade>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-default-500" href="/products" size="sm">
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        className="text-default-400 md:hidden"
        icon={isMenuOpen ? <X /> : <Menu color="black" />}
      />

      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-default-500" href="#" size="md">
              {item}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
