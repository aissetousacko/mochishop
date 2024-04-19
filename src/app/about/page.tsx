import Image from 'next/image'
import React from 'react'

const About = () => {
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

      <section className="px-24 my-10 w-full text-center">
        <h1 className="text-4xl mb-4">MOCHISHOP : UN OASIS DE DÉLICES</h1>
        <p className="text-center">
          Depuis plus de vingt ans, nous nous consacrons à l&apos;art délicat de
          la fabrication de ces délicieuses pâtisseries japonaises. Notre shop
          est un véritable hommage au Japon, avec des mochis confectionnés dans
          les règles de l’art, avec des ingrédients soigneusement choisis et des
          parfums variés.
        </p>
      </section>

      <section className="px-24 my-10 w-full relative">
        <Image
          src="/about_section1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          priority
          alt="image section 1 about page"
        />

        <div className="bg-primary-20 px-6 py-10 w-[500px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl mb-4 leading-relaxed">
            EXPLOREZ LES SAVEURS DES CRÉATIONS DE MOCHISHOP
          </h1>

          <p className="text-xl">
            Des classiques comme la pâte de haricots rouges et le matcha aux
            créations innovantes comme la mangue, la noix de coco et le sésame
            noir, le menu ravit les papilles avec une gamme variée de saveurs.
          </p>
        </div>
      </section>

      <section className="bg-secondary-50 rounded-[35px] mx-24 my-10 p-20 flex items-center">
        <div className="text-start w-1/2 flex flex-col justify-between">
          <h2 className="title-2">DES MOCHIS FAITS MAISON</h2>
          <p className="py-6 text-xl text-justify">
            Que vous soyez un passionné de mochi chevronné ou un nouveau venu
            curieux, Mochishop offre une délicieuse évasion dans le monde
            enchanteur de la confiserie japonaise, où chaque bouchée est un
            moment de bonheur à savourer.
          </p>
        </div>

        <div className="w-1/2">
          <Image
            src="/about_section2.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            priority
            alt="image section 2 about page"
          />
        </div>
      </section>

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

export default About
