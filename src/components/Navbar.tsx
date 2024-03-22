import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="px-24 py-4 flex justify-between items-center text-2xl navbar">
      <Link href="/">
        <Image src="/logo.svg" width={185} height={86} alt="Logo" />
      </Link>
      <ul className="flex justify-between">
        <li className="px-8">CARTE</li>
        <li className="px-8">QUI SOMMES-NOUS</li>
        <li className="px-8">FAQ</li>
      </ul>
      <div className="flex">
        <Image
          src="/icons/user.svg"
          width={44}
          height={44}
          alt="user icon"
          className="mx-2"
        />
        <Image
          src="/icons/cart.svg"
          width={48}
          height={48}
          alt="cart icon"
          className="mx-2"
        />
      </div>
    </nav>
  )
}

export default Navbar
