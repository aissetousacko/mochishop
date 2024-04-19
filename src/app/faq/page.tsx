import Image from 'next/image'
import React from 'react'

const Faq = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-full">
        <Image
          src="/banner_about.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '648px', objectFit: 'cover' }}
          priority
          alt="Banner about page"
        />

        <h1 className="text-white text-[64px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          À PROPOS
        </h1>
      </div>
    </main>
  )
}

export default Faq
