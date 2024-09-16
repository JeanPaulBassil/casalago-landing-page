import Image from 'next/image'
import Link from 'next/link'
import PlaceListItem from '../_components/ProductCard'

export default function Home() {
  const products = [
    {
      path: '/images/home/products/cc-tapis.jpg',
      title: 'Baxter',
      url: 'https://www.cc-tapis.com/',
    },
    {
      path: '/images/home/products/Edra.jpeg',
      title: 'Cassina',
      url: 'https://www.edra.com/en/home',
    },
    {
      path: '/images/home/products/flexform.jpg',
      title: 'cc-tapis',
      url: 'https://www.flexform.it/en',
    },
    {
      path: '/images/home/products/cassina.jpg',
      title: 'Edra',
      url: 'https://www.cassina.com/ww/en.html',
    },
    {
      path: '/images/home/products/baxter.jpg',
      title: 'Flexform',
      url: 'https://www.baxter.it/en/',
    },
    {
      path: '/images/home/products/henge.jpg',
      title: 'Henge',
      url: 'https://www.henge07.com/',
    },
    {
      path: '/images/home/products/USMModularFurniture.jpg',
      title: 'Paola Lenti',
      url: 'https://us.usm.com/',
    },
    {
      path: '/images/home/products/paoplaLengti.jpg',
      title: 'USM Modular Furniture',
      url: 'https://www.paolalenti.it/en/',
    },
  ]
  // inspirations are 6 images of the products above
  const inspirations = [
    '/images/home/products/baxter.png',
    '/images/home/products/cassina.png',
    '/images/home/products/flexform.png',
    '/images/home/products/tapis.png',
    '/images/home/products/edra.png',
  ]
  return (
    <div className="">
      <Image
        src="/images/home/banner.png"
        alt="banner"
        width={1920}
        height={1080}
        className="w-full"
      />
      {/* Below the banner */}
      <div className="flex w-full items-center py-12 max-lg:flex-col max-lg:gap-4 lg:py-24">
        <h1 className="text-4xl font-bold max-lg:text-center max-lg:text-xl max-sm:text-lg lg:w-1/2 lg:self-start">
          Your Very Own <br /> Personal Living Space.
        </h1>
        <p className="text-xl font-medium max-lg:text-center max-lg:text-lg max-sm:text-base lg:w-1/2">
          Casalago believes that a home is not just a place, but a reflection of who you are.
          Understanding that each home is an individual expression of the people who live in it.{' '}
          <br />
          <br />
          With our carefuly curated design furniture and accessories, we invite you to experience a
          new level of living beter at home.
        </p>
      </div>
      {/* Live Better Feel Better */}
      <div className="flex items-center max-lg:flex-col">
        <Image
          src="/images/home/liveBetter.png"
          alt="Live Better Feel Better"
          width={1920}
          height={1080}
          className="w-[48%] max-lg:w-full"
        />
        <div className="flex w-1/2 flex-col gap-4 px-8 py-12 max-lg:w-full">
          <h2 className="text-4xl font-bold max-lg:text-center max-lg:text-xl max-sm:text-lg">
            Live Better Feel Better
          </h2>
          <p className="text-xl font-medium max-lg:text-center max-lg:text-lg max-sm:text-base">
            We shape your environment to perfectly suit your lifestyle, character and individuality.{' '}
            <br />
            <br /> Creating beautiful living spaces that celebrate lifeí s precious moments, to be
            shared with loved ones or to be enjoyed in peace and quiet.
          </p>
        </div>
      </div>
      {/* Our Products */}
      <div className="lg:py-24">
        <h1 className="text-center text-4xl font-bold max-lg:text-xl max-sm:text-lg">Our brands</h1>
        <div className="my-10 grid w-full md:grid-cols-1 lg:grid-cols-2 grid-flow-row grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-5 max-sm:pb-6 2xl:grid-cols-3 3xl:grid-cols-4">
          {products.map((product, index) => (
            <PlaceListItem
              id={index.toString()}
              key={index}
              {...product}
              imageSrc={product.path}
              name={product.title}
              href={product.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
