'use client'
import { Input } from '@nextui-org/input'
import React from 'react'
import PlaceListItem from '../_components/ProductCard'
import { ProductApi } from '@/api/product.api'
import { Product } from '@/api/model/Product'
import { ServerError } from '@/api/utils'
import { useQuery } from '@tanstack/react-query'
import useOrderedQueries from '../hooks/useQueries'
import { Spinner } from '@nextui-org/react'
import { Search } from 'lucide-react'
import BlurFade from '../_components/magic-ui/BlurFade'
import useDebouncedCallback from '../hooks/useDebounceCallback'

type Props = {}

const page = (props: Props) => {
  const productApi = new ProductApi()
  const { get: getQueries, set: setQueries } = useOrderedQueries<{
    search: string
  }>({
    search: '',
  })

  const debounceSearch = useDebouncedCallback((value: string) => {
    setQueries({ search: value })
  }, 500)

  console.log(getQueries())
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], ServerError>({
    queryKey: ['products', getQueries()],
    queryFn: async () => {
      const response = await productApi.getProducts({ queries: getQueries() })
      return response.payload
    },
  })
  return (
    <div>
      <Input
        variant="bordered"
        radius="sm"
        size="md"
        placeholder="Search"
        startContent={<Search className="text-default-500" />}
        className="mx-auto mt-5 max-w-[500px]"
        onChange={(e) => debounceSearch(e.target.value)}
        isClearable
        onClear={() => debounceSearch('')}
      />
      <div className="grid w-full grid-cols-1 gap-5 p-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {isLoading && (
          <div className="flex h-screen w-screen items-center justify-center">
            <Spinner />
          </div>
        )}

        {isError && (
          <div className="flex h-screen w-screen items-center justify-center">
            <p>Error: {error.message}</p>
          </div>
        )}

        {products &&
          products.map((product, index) => (
            <BlurFade inView delay={0.5 + 0.2 * index}>
              <PlaceListItem
                key={product.id}
                {...product}
                imageSrc={product.images[0] || 'placeholder.png'}
                className="w-full"
              />
            </BlurFade>
          ))}

        {products && products.length === 0 && (
          <div className="flex h-screen w-screen items-center justify-center">
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
