import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="px-24 py-14 bg-primary-20 navbar grid grid-cols-4 gap-x-2 gap-y-2">
      <Link href="/" className="self-center justify-self-center">
        <Image src="/logo.svg" width={185} height={86} alt="Logo" />
      </Link>

      <ul className="flex flex-col items-center justify-between">
        <li className="px-8">CARTE</li>
        <li className="px-8">QUI SOMMES-NOUS</li>
        <li className="px-8">FAQ</li>
      </ul>

      <ul className="flex flex-col items-center justify-between">
        <li className="px-8">CONTACT</li>
        <li className="px-8">infos@mochishop.fr</li>
        <li className="px-8">+33 1 11 11 11 11</li>
      </ul>

      <ul className="flex flex-col items-center justify-between">
        <li className="px-8">SUIVEZ-NOUS</li>
        <div className="w-full flex justify-evenly">
          <Image
            src="/icons/facebook.svg"
            width={40}
            height={40}
            alt="facebook icon"
          />
          <Image
            src="/icons/instagram.svg"
            width={40}
            height={40}
            alt="instagram icon"
          />
          <Image
            src="/icons/tiktok.svg"
            width={40}
            height={40}
            alt="tiktok icon"
          />
        </div>
      </ul>
    </footer>
  )
}

export default Footer
