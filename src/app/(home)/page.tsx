import React from 'react'
import Header from '../_components/Header'
import { Button, Image } from '@nextui-org/react'

const page = () => {
  return (
    <div
      className="absolute left-0 top-0 w-full"
      style={{ backgroundImage: "url('/heroWoodBg.png')" }}
    >
      <div className="mt-20 py-16 lg:mt-36">
        <div className="flex w-[80%] flex-row gap-12 bg-[#ffffff] p-16">
          <div className="flex flex-col gap-16">
            <span className="text-6xl">
              SOLID <br /> WOOD <br /> PRODUCTS
            </span>
            <span className="text-xl">
              Oak, beech, ash <br /> and much more
            </span>
            <Button radius="none" className="w-[200px] bg-[#173C6E] font-bold text-[#ffffff]">
              Contact Us
            </Button>
          </div>
          <div className="h-[340px] w-[1px] bg-[#000000]"></div>
          <div className="-mt-20 flex flex-col gap-16">
            <div className='flex w-full items-center justify-center'>
              <Image src="hero/1.png" />
            </div>
            <div className="flex flex-row justify-between gap-32">
              <Image src="hero/2.png" className="relative top-12 left-10" />
              <Image src="hero/3.png" className="relative left-10 bottom-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
