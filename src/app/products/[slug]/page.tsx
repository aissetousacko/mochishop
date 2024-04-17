import { Product, simplifiedProduct } from '@/app/interface'
import { client } from '@/app/lib/sanity'
import Slider from '@/components/Slider'
// import Slider2 from '@/components/Slider2'
import Image from 'next/image'

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
      "imageUrl": image.asset->url,
      price, name,
      "slug": slug.current, 
      description
    
  }`
  const data = await client.fetch(query)

  return data
}

async function getAllData() {
  const query = `*[_type == "product"] {
    _id,
      price, name,
      "slug": slug.current,
    "imageUrl": image.asset->url
  }`
  const data = await client.fetch(query)

  return data
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: Product = await getData(params.slug)
  const allData: simplifiedProduct[] = await getAllData()
  // console.log('allData product: ' + allData)

  return (
    <main className="flex flex-col items-center justify-between px-24 mt-5">
      <div className="w-full grid grid-cols-2 gap-x-32">
        <div>
          <Image
            src={data.imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="image mochi"
            className="px-[100px] py-[115px] border-solid border-2 border-accent rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="text-4xl">{data.name.toUpperCase()}</h1>
          <p>{data.price.toFixed(2)} €</p>
          <p className="text-xl">{data.description}</p>

          <div className="flex justify-between">
            <div className="border border-solid border-accent rounded-lg divide-x divide-solid divide-accent">
              <button className="text-accent w-[54px] border-none rounded-l-lg bg-accent-10 p-4">
                -
              </button>
              <span className="p-5 ">1</span>
              <button className="text-accent w-[54px] border-none rounded-r-lg bg-accent-10 p-4">
                +
              </button>
            </div>

            <button className="px-4 py-3 text-white bg-primary rounded-lg">
              AJOUTER AU PANIER
            </button>
          </div>

          <div>
            <div className="font-bold text-xl flex items-center justify-between">
              <p>Allergènes</p>
              <span>-</span>
            </div>

            <p className="text-[16px]">
              Susceptible de contenir des traces de gluten, de fruits secs et
              d’œuf
            </p>
          </div>
        </div>
      </div>

      <section className="my-36 w-full">
        <h1 className="text-4xl text-center mb-8">VOUS AIMEREZ AUSSI</h1>
        <Slider items={allData} />
      </section>
    </main>
  )
}

export default ProductPage
