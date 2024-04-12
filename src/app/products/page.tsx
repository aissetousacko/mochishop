'use client'
import Product from '@/components/Product'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import data from '../../data/data.json'

const productsData: {
  products_data: Product[]
} = require('../../data/data.json')

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
  const [selected, setSelected] = useState('all')

  const all = productsData.products_data
  const classique = productsData.products_data.filter(
    (product: Product) => product.category === 'classique'
  )
  const coeur = productsData.products_data.filter(
    (product: Product) => product.category === 'fourree'
  )
  const coffret = productsData.products_data.filter(
    (product: Product) => product.category === 'coffrets'
  )

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

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

      <section className="grid grid-cols-3 gap-x-5 gap-y-32 px-24 mt-10 mb-24 w-full">
        {selected === 'all' &&
          all.map((item) => <Product {...item} key={item.id} />)}

        {selected === 'classique' &&
          classique.map((item) => <Product {...item} key={item.id} />)}

        {selected === 'coeur' &&
          coeur.map((item) => <Product {...item} key={item.id} />)}

        {selected === 'coffret' &&
          coffret.map((item) => <Product {...item} key={item.id} />)}
      </section>
    </main>
  )
}

export default Carte
