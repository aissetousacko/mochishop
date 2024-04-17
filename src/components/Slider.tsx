'use client'

import { simplifiedProduct } from '@/app/interface'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../css/slider.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

interface Props {
  items: simplifiedProduct[]
}

const Slider: React.FC<Props> = ({ items }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="px-5"
      >
        {items.map((item) => (
          <SwiperSlide key={item._id} className="px-6">
            <Link href={`/products/${item.slug}`} key={item._id}>
              <Image
                src={item.imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="image mochi"
                className="p-[45px] border-solid border-2 border-accent rounded-lg hover:box-shadow object-cover"
              />
              <div className="flex mt-4 justify-between">
                <p className="text-xl text-start">{item.name.toUpperCase()}</p>
                <p className="text-xl">{item.price.toFixed(2)} €</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </>
  )
}

export default Slider
