import { simplifiedProduct } from '@/app/interface'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({ _id, imageUrl, name, price, slug }: simplifiedProduct) => {
  return (
    <Link href={`/products/${slug}`} key={_id}>
      <Image
        src={imageUrl}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt="image mochi"
        className="p-[45px] border-solid border-2 border-accent rounded-lg hover:box-shadow"
      />
      <div className="flex mt-4 justify-between">
        <p className="text-xl text-start">{name.toUpperCase()}</p>
        <p className="text-xl">{price.toFixed(2)} €</p>
      </div>
    </Link>
  )
}

export default Product
