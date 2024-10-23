'use client'

import React from 'react'
import { Button, Image, Link, Skeleton } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import { cn } from '@nextui-org/react'
import { ArrowRight } from 'lucide-react'

export type PlaceListItemColor = {
  name: string
  hex: string
}

export type PlaceItem = {
  id: string
  name: string
  href?: string
  isNew?: boolean
  rating?: number
  ratingCount?: number
  description?: string
  imageSrc: string
}

export type PlaceListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> & {
  isPopular?: boolean
  isLoading?: boolean
  removeWrapper?: boolean
} & PlaceItem

const PlaceListItem = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
  ({ name, isLoading, imageSrc, removeWrapper, className, href, ...props }, ref) => {

    return (
      <div ref={ref} className="relative flex w-full flex-none flex-col gap-3">
        <Image
          isZoomed
          alt={name}
          className="aspect-rectangle max-h-[300px] md:h-[300px] w-full hover:scale-110 shadow-none"
          isLoading={isLoading}
          src={imageSrc}
          radius="none"
          width="100%"
          height="auto"
        />

        <div className="mt-1 flex flex-col gap-2">
          <div className="border-gray-200 flex items-center justify-between gap-1 border-b border-t">
            <h3 className="text-[16px] font-medium text-default-700">{name}</h3>
            <Link href={href}>
              <Button isIconOnly startContent={<ArrowRight color='grey' />} variant="light" size="sm"></Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
)

PlaceListItem.displayName = 'PlaceListItem'

export default PlaceListItem
