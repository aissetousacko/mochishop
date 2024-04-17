'use client'
import { simplifiedProduct } from '@/app/interface'
import { client } from '@/app/lib/sanity'
import React, { useEffect, useState } from 'react'
import Product from './Product'

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"] {
    _id,
      price, name,
      "slug": slug.current,
    "imageUrl": image.asset->url,
      "category": category->name
  }`
  const data = await client.fetch(query)

  return data
}

const Filter = () => {
  const [allData, setAllData] = useState<simplifiedProduct[]>([])
  const [selected, setSelected] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      if (selected === 'all') {
        const query = `*[_type == "product"] {
          _id,
            price, name,
            "slug": slug.current,
          "imageUrl": image.asset->url,
            "category": category->name
        }`
        const data = await client.fetch(query)
        setAllData(data)
        console.log('selected: ' + selected)
      } else {
        const data = await getData(selected)
        setAllData(data)
      }
    }

    fetchData()
  }, [selected])

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

  const filteredData =
    selected === 'all'
      ? allData
      : allData.filter((item: simplifiedProduct) => item.category === selected)

  return (
    <>
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
            value="Classiques"
            onChange={onOptionChange}
            checked={selected === 'Classiques'}
          />
          <label htmlFor="classique">Classiques</label>
        </div>

        <div>
          <input
            type="radio"
            name="mochiFilter"
            id="coeur"
            className="hidden"
            value="Cœur fourrés"
            onChange={onOptionChange}
            checked={selected === 'Cœur fourrés'}
          />
          <label htmlFor="coeur">Coeur fourré</label>
        </div>

        <div>
          <input
            type="radio"
            name="mochiFilter"
            id="coffret"
            className="hidden"
            value="Coffrets"
            onChange={onOptionChange}
            checked={selected === 'Coffrets'}
          />
          <label htmlFor="coffret">Coffrets</label>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-x-5 gap-y-32 px-24 mt-10 mb-24 w-full">
        {filteredData.map((product: simplifiedProduct) => {
          return <Product {...product} key={product._id} />
        })}
      </section>
    </>
  )
}

export default Filter
