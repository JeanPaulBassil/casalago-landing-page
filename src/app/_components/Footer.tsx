'use client'

import type { IconProps } from '@iconify/react'

import React from 'react'
import { Divider, Link } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import BlurFade from './magic-ui/BlurFade'
import { Copyright, Home } from 'lucide-react'

type SocialIconProps = Omit<IconProps, 'icon'>

const footerNavigation = {
  services: [
    { name: '40 Adetokunbo Ademola Street', href: '' },
    { name: 'Ikeja, Lagos', href: '' },
    { name: 'T 234-814-168-8534', href: 'tel:+2348141688534' },
    { name: 'info@casalago.com', href: 'mailto:info@casalago.com' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'User Agreement', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:github" />,
    },
  ],
}

export default function Component() {
  const renderList = React.useCallback(
    ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
      <div>
        <BlurFade inView delay={0.5}>
          <h3 className="text-small font-semibold text-default-600">{title}</h3>
        </BlurFade>
        <ul className="mt-6 space-y-4">
          {items.map((item, index) => (
            <BlurFade inView delay={0.7 + 0.2 * index}>
              <li key={item.name}>
                <Link className="text-[#ffffffm]" href={item.href} size="sm">
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
    <footer className="flex w-full flex-col bg-[#ABC485]">
      <div className="max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start">
              <BlurFade inView delay={0.5} className="mt-4 flex gap-2">
                <Home strokeWidth={2.5} />
                <span className="text-xl font-bold">CASALAGO</span>
              </BlurFade>
            </div>
            <BlurFade inView delay={0.7} className="flex items-center gap-2">
            © 2024 Casalago - All rights reserved
            </BlurFade> 
            <div className="flex space-x-6">
              {footerNavigation.social.map((item, index) => (
                <BlurFade inView delay={0.9 + 0.2 * index} key={item.name}>
                  <Link key={item.name} isExternal className="text-[#ffffff]" href={item.href}>
                    <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6" />
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({ title: 'Our Store', items: footerNavigation.services })}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
