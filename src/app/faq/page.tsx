import Dropdown from '@/components/Dropdown'
import Image from 'next/image'
import React from 'react'

const Faq = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-full">
        <Image
          src="/banner_faq.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '648px', objectFit: 'cover' }}
          priority
          alt="Banner about page"
        />

        <h1 className="text-white text-[64px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          FAQ
        </h1>
      </div>

      <div className="px-[200px] my-[100px] w-full relative">
        <Dropdown
          title="Dropdown title"
          content="Pizza ipsum dolor meat lovers buffalo. And spinach sauce mayo onions buffalo. Broccoli beef roll party parmesan parmesan Bianca broccoli sauce. Bell dolor dolor parmesan ham Hawaiian fresh ranch. Bianca black Aussie lasagna melted broccoli mushrooms pie NY. Tomatoes cheese tomatoes pizza bell red personal ranch. Large stuffed ipsum ranch lot and beef deep tossed Hawaiian.
"
        />
        <Dropdown
          title="Dropdown title"
          content="Pizza ipsum dolor meat lovers buffalo. And spinach sauce mayo onions buffalo. Broccoli beef roll party parmesan parmesan Bianca broccoli sauce. Bell dolor dolor parmesan ham Hawaiian fresh ranch. Bianca black Aussie lasagna melted broccoli mushrooms pie NY. Tomatoes cheese tomatoes pizza bell red personal ranch. Large stuffed ipsum ranch lot and beef deep tossed Hawaiian.
"
        />
        <Dropdown
          title="Dropdown title"
          content="Pizza ipsum dolor meat lovers buffalo. And spinach sauce mayo onions buffalo. Broccoli beef roll party parmesan parmesan Bianca broccoli sauce. Bell dolor dolor parmesan ham Hawaiian fresh ranch. Bianca black Aussie lasagna melted broccoli mushrooms pie NY. Tomatoes cheese tomatoes pizza bell red personal ranch. Large stuffed ipsum ranch lot and beef deep tossed Hawaiian.
"
        />
        <Dropdown
          title="Dropdown title"
          content="Pizza ipsum dolor meat lovers buffalo. And spinach sauce mayo onions buffalo. Broccoli beef roll party parmesan parmesan Bianca broccoli sauce. Bell dolor dolor parmesan ham Hawaiian fresh ranch. Bianca black Aussie lasagna melted broccoli mushrooms pie NY. Tomatoes cheese tomatoes pizza bell red personal ranch. Large stuffed ipsum ranch lot and beef deep tossed Hawaiian.
"
        />
      </div>
    </main>
  )
}

export default Faq
