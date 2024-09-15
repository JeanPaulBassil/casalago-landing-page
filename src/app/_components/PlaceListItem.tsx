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
    const [isLiked, setIsLiked] = React.useState(false)

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-full flex-none flex-col gap-3',
          {
            'rounded-none bg-background shadow-none': removeWrapper,
          },
          className
        )}
        {...props}
      >
        <Image
          isBlurred
          isZoomed
          alt={name}
          className="aspect-square w-full hover:scale-110"
          isLoading={isLoading}
          src={imageSrc}
          radius="sm"
          width="100%"
          height="auto"
        />

        <div className="mt-1 flex flex-col gap-2 px-1">
          <div className="flex items-center justify-between gap-1 border-b border-gray-200 py-2 border-t">
            <h3 className="text-small font-medium text-default-700">{name}</h3>
            <Link href={href}>
              <Button isIconOnly startContent={<ArrowRight />} variant='light' size='sm'></Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
)

PlaceListItem.displayName = 'PlaceListItem'

export default PlaceListItem
