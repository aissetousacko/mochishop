'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Product {
  id: number
  image: string
  product_name: string
  price: string
  category: string
  description: string
  best_seller: boolean
}

const Home = () => {
  const [filteredData, setFilteredData] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data/data.json')
      const data = await response.json()
      // console.log(data)
      const filtered = data.products_data.filter(
        (item: Product) => item.best_seller
      )
      setFilteredData(filtered)
    }
    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-full">
        <Image
          src="/banner_home.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '648px', objectFit: 'cover' }}
          priority
          alt="Banner homepage"
        />

        <h1 className="text-white text-[64px] font-bold absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          MOCHISHOP
        </h1>
        <h3 className="text-white text-2xl font-bold absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          Des douceurs venus d&apos;ailleurs
        </h3>

        <button className="px-4 py-3 text-white bg-primary rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          VOIR LA CARTE
        </button>
      </div>

      <section className="px-24 my-10 w-full">
        <h1 className="text-4xl text-center mb-8">BEST SELLERS</h1>
        <div className="grid grid-cols-3 gap-x-5">
          {filteredData.map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="image mochi"
                className="p-[45px] border-solid border-2 border-accent rounded-lg hover:box-shadow"
              />
              <div className="flex mt-4 justify-between">
                <p className="text-xl">{item.product_name.toUpperCase()}</p>
                <p className="text-xl">{item.price} €</p>
              </div>
            </div>
          ))}
          {/* <div>
            <Image
              src="/mochis/mochi_fraise.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="image mochi"
              className="p-[45px] border-solid border-2 border-accent rounded-lg"
            />
            <div className="flex mt-4 justify-between">
              <p className="text-xl">MOCHI À LA FLEUR DE CERISIER</p>
              <p className="text-xl">13, 50 €</p>
            </div>
          </div>
          <div>
            <Image
              src="/mochis/mochi_fraise.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="image mochi"
              className="p-[45px] border-solid border-2 border-accent rounded-lg"
            />
            <div className="flex mt-4 justify-between">
              <p className="text-xl">MOCHI À LA FLEUR DE CERISIER</p>
              <p className="text-xl">13, 50 €</p>
            </div>
          </div>
          <div>
            <Image
              src="/mochis/mochi_fraise.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="image mochi"
              className="p-[45px] border-solid border-2 border-accent rounded-lg"
            />
            <div className="flex mt-4 justify-between">
              <p className="text-xl">MOCHI À LA FLEUR DE CERISIER</p>
              <p className="text-xl">13, 50 €</p>
            </div>
          </div> */}
        </div>
      </section>

      <div className="px-[284px] py-20 my-10 border-solid border-4 border-primary-20 rounded-[35px] bg-section-home object-cover flex flex-col items-center">
        <h2 className="title-2 text-center">
          UNE DOUCEUR VENUE <br /> D&apos;AILLEURS
        </h2>
        <p className="py-6 text-center">
          De délicieux gâteaux de riz gluant élaborés à la main, <br />
          garnis d’une mousse délicate de différentes saveurs
        </p>
        <button className="px-4 py-3 text-white bg-primary rounded-lg">
          VOIR LA CARTE
        </button>
      </div>

      <div className="w-full bg-secondary-50 px-16 py-12 my-14 grid grid-cols-3 gap-x-2 gap-y-2">
        <div className="flex items-start p-4">
          <Image
            src="/icons/france.svg"
            width={111}
            height={111}
            alt="france icon"
            className="pr-4"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl">Des mochis Made in France</h3>
            <p className="text-xl">
              Nos mochis sont confectionnés à la main dans notre atelier
            </p>
          </div>
        </div>
        <div className="flex items-start p-4">
          <Image
            src="/icons/medal.svg"
            width={111}
            height={111}
            alt="medal icon"
            className="pr-4"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl mb-1">Des produits de qualité</h3>
            <p className="text-xl">
              Chaque ingrédient est sélectionné avec soin
            </p>
          </div>
        </div>
        <div className="flex items-start p-4">
          <Image
            src="/icons/package.svg"
            width={111}
            height={111}
            alt="package icon"
            className="pr-4"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl mb-1">Un colis de confiance</h3>
            <p className="text-xl">
              Nos mochis sont parfaitement conditionnés pour les expéditions
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-24 flex items-center flex-col my-32">
        <h1 className="title-1 text-center mb-14">
          INSCRIVEZ-VOUS À LA NEWSLETTER POUR NE RIEN RATER !
        </h1>

        <div className="flex flex-row w-4/5 justify-evenly">
          <div className="flex border-solid border-2 border-accent rounded-lg w-2/3 ">
            <span className="flex items-center mx-6 py-2">
              <Image
                src="/icons/mail.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="mail icon"
              />
            </span>

            <input
              type="email"
              name="email"
              id="email"
              className="bg-background w-full rounded-lg outline-none focus:outline-none"
            />
          </div>

          <button className="px-4 py-3 text-white bg-primary rounded-lg">
            S&apos;INSCRIRE
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home
