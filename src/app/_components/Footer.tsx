'use client'

import type { IconProps } from '@iconify/react'

import React from 'react'
import { Button, Divider, Image, Input, Link } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import BlurFade from './magic-ui/BlurFade'
import { Copyright, Home, Instagram, Mail } from 'lucide-react'

type SocialIconProps = Omit<IconProps, 'icon'>

const footerNavigation = {
  services: [
    { name: '40 Adetokunbo Ademola Street', href: '' },
    { name: 'Ikeja, Lagos', href: '' },
  ],
  legal: [
    { name: '0814 159 6534', href: 'tel:+2348141596534' },
    { name: 'info@casalago.com', href: 'mailto:info@casalago.com' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/casalago.ng/',
      icon: (props: SocialIconProps) => <Instagram size={24} />,
    },
  ],
}

export default function Component() {
  const renderList = React.useCallback(
    ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
      <div>
        <BlurFade inView delay={0.5}>
          <h3 className="text-small font-semibold text-[#ffffff]">{title}</h3>
        </BlurFade>
        <ul className="mt-6 space-y-4">
          {items.map((item, index) => (
            <BlurFade inView delay={0.7 + 0.2 * index}>
              <li key={item.name}>
                <Link className="text-[#ffffff]" href={item.href} size="sm">
                  {item.name}
                </Link>
              </li>
            </BlurFade>
          ))}
        </ul>
      </div>
    ),
    []
  )

  return (
    <footer className="flex w-full flex-col bg-[#ABC485] px-4 py-4">
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-3 xl:col-span-3 xl:mt-0">
        <div className="space-y-2 lg:space-y-8 md:pr-8">
          <div className="flex items-end justify-start">
            <BlurFade inView delay={0.5} className="mt-4 flex gap-2">
              <Image src="/logo.png" alt="Casalago" width={30} height={30} radius="none" />
              <span className="h-7 text-2xl font-bold text-[#000000]">CASALAGO</span>
              {footerNavigation.social.map((item, index) => (
                <Link key={item.name} isExternal className="text-[#000000] ml-4" href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6" />
                </Link>
              ))}
            </BlurFade>
          </div>
          <BlurFade inView delay={0.7} className="flex items-center gap-2 text-[#ffffff]">
            © 2024 Casalago - All rights reserved
          </BlurFade>
          <div className="flex space-x-6"></div>
        </div>
        <div className="mt-4 md:grid md:gap-8">
          <div>{renderList({ title: 'Our Store', items: footerNavigation.services })}</div>
        </div>
        <div className="mt-4 md:grid md:gap-8">
          <div>{renderList({ title: 'Contact us', items: footerNavigation.legal })}</div>
        </div>
      </div>
      <div className="mt-4 rounded-medium bg-default-200/20 p-4 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-2">
        <div>
          <h3 className="text-small font-semibold text-default-600">Subscribe to our newsletter</h3>
          <p className="mt-2 text-small text-[#ffffff]">
            Receive weekly updates with the newest insights, trends, and tools, straight to your
            email.
          </p>
        </div>
        <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
          <Input
            isRequired
            variant="bordered"
            placeholder="Enter your email"
            startContent={<Mail color="grey" />}
            type="email"
            classNames={{
              inputWrapper: 'bg-[#ffffff]',
            }}
          />
          <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <Button color="primary" type="submit">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </footer>
  )
}
