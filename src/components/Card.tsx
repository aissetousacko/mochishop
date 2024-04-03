import Image from 'next/image'

const Card = () => {
  return (
    <div>
      <Image
        src="/mochis/mochi_fraise.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt="image mochi"
        className="p-[45px] border-solid border-2 border-accent rounded-lg"
      />
      <div className="flex mt-4 justify-between">
        <p className="text-xl">MOCHI À LA FLEUR DE CERISIER</p>
        <p className="text-xl">13, 50 €</p>
      </div>
    </div>
  )
}

export default Card
