import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: number
  image: string
  product_name: string
  price: string
}

const Product = ({ id, image, product_name, price }: Props) => {
  return (
    <Link href={`/products/${id}`}>
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt="image mochi"
        className="p-[45px] border-solid border-2 border-accent rounded-lg hover:box-shadow"
      />
      <div className="flex mt-4 justify-between">
        <p className="text-xl">{product_name.toUpperCase()}</p>
        <p className="text-xl">{price} €</p>
      </div>
    </Link>
  )
}

export default Product
