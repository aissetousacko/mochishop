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

const Carte = () => {
  const [all, setAll] = useState<Product[]>([])
  const [classique, setClassique] = useState<Product[]>([])
  const [coeur, setCoeur] = useState<Product[]>([])
  const [coffret, setCoffret] = useState<Product[]>([])
  const [selected, setSelected] = useState('all')

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data/data.json')
      const data = await response.json()
      // console.log(data)
      setAll(data.products_data)

      const filteredClassique = data.products_data.filter(
        (item: Product) => item.category === 'classique'
      )
      setClassique(filteredClassique)

      const filteredCoeur = data.products_data.filter(
        (item: Product) => item.category === 'fourree'
      )
      setCoeur(filteredCoeur)

      const filteredCoffret = data.products_data.filter(
        (item: Product) => item.category === 'coffrets'
      )
      setCoffret(filteredCoffret)
    }
    fetchData()
  }, [])

  return (
    <main>
      <h1 className="text-center text-4xl mb-8">NOS MOCHIS</h1>
      <div className="mx-[196px] mb-16 flex justify-between items-center">
        <div>
          <input
            type="radio"
            name="mochiFilter"
            id="all"
            className="hidden"
            value="all"
            defaultChecked
            onChange={onOptionChange}
            checked={selected === 'all'}
          />
          <label htmlFor="all">Tous les mochis</label>
        </div>

        <div>
          <input
            type="radio"
            name="mochiFilter"
            id="classique"
            className="hidden"
            value="classique"
            onChange={onOptionChange}
            checked={selected === 'classique'}
          />
          <label htmlFor="classique">Classiques</label>
        </div>

        <div>
          <input
            type="radio"
            name="mochiFilter"
            id="coeur"
            className="hidden"
            value="coeur"
            onChange={onOptionChange}
            checked={selected === 'coeur'}
          />
          <label htmlFor="coeur">Coeur fourré</label>
        </div>

        <div>
          <input
            type="radio"
            name="mochiFilter"
            id="coffret"
            className="hidden"
            value="coffret"
            onChange={onOptionChange}
            checked={selected === 'coffret'}
          />
          <label htmlFor="coffret">Coffrets</label>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-x-5 gap-y-32 px-24 my-10 w-full">
        {selected === 'all' &&
          all.map((item) => (
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
        {selected === 'classique' &&
          classique.map((item) => (
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
        {selected === 'coeur' &&
          coeur.map((item) => (
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
        {selected === 'coffret' &&
          coffret.map((item) => (
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
      </section>
    </main>
  )
}

export default Carte
