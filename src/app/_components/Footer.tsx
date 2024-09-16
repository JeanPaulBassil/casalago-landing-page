import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@nextui-org/input'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@nextui-org/button'

type Props = {}

const Footer = (props: Props) => {
  const socials = [
    {
      icon: '/icons/instagram.png',
      link: 'https://www.instagram.com/casalago.ng'
    },
    {
      icon: '/icons/youtube.svg',
      link: 'https://www.instagram.com/casalago.ng'
    }
  ]

  const sendEmail = async () => {
    'use server'
    // await sendMail({
    //   to: "jean.paul.bassil@outlook.com",
    //   name: "Jean Paul Bassil",
    //   subject: "Hello",
    //   body: "This is a test email",
    // });
  }

  return (
    <div className="text-white flex flex-col gap-4 bg-[#ABC485] px-2 py-4 pt-8 text-[#ffffff] sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex flex-row justify-between gap-12 max-lg:flex-col">
        {/* Emails */}
        <div className="flex flex-col">
          <h1 className="mb-2 text-lg font-semibold">Sign up for exclusive news!</h1>
          <form action="" className="relative min-w-[200px] max-w-[400px] max-sm:w-3/4">
            <Input
              type="email"
              placeholder="Email"
              startContent={<Mail />}
              color='success'
              size='md'
              classNames={{
                input: "bg-[#ABC485] placeholder:text-[#ffffff]",
              }}
              variant="underlined"
              endContent={
                <Button
                  isIconOnly
                  startContent={<ArrowRight color='white'/>}
                  variant="light"
                  size="sm"
                />
              }
            />
          </form>
        </div>
        {/* Our Store */}
        <div>
          <h1 className="mb-2 text-lg font-semibold">Our Store</h1>
          <p>
            40 Adetokunbo Ademola Street <br /> Victoria Island, Lagos <br />
            T 234-814-159 6534 <br /> info@casalago.com
          </p>
        </div>
        {/* Socials */}
        <div>
          <h1 className="mb-2 text-lg font-semibold">Stay Up To Date With The Latest Trends</h1>
          <div className="flex items-center gap-2">
            {socials.map((social, index) => (
              <Link
                target="_blank"
                href={social.link}
                className="border-white flex h-12 w-12 items-center justify-center rounded-full border p-1"
                key={index}
              >
                <Image src={social.icon} height={20} width={20} alt="Social" className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-white w-full border border-x-[#ABC485] border-b-[#ABC485] py-2">
        <p>© 2024 Casalago - All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
