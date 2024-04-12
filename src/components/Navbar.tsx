'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'carte', href: '/products' },
  { name: 'qui sommes-nous', href: '/about' },
  { name: 'faq', href: '/faq' },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="px-24 py-4 navbar hidden lg:flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.svg" width={185} height={86} alt="Logo" />
      </Link>

      <nav className="flex text-2xl ">
        {links.map((link, idx) => (
          <div key={idx}>
            {pathname === link.href ? (
              <Link href={link.href} className="px-8 text-primary">
                {link.name.toUpperCase()}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="px-8 text-black transition duration-100 hover:text-primary"
              >
                {link.name.toUpperCase()}
              </Link>
            )}
          </div>
        ))}
        {/* <ul className="flex justify-between">
          <Link href="/products" className="px-8">
            CARTE
          </Link>
          <li className="px-8">QUI SOMMES-NOUS</li>
          <li className="px-8">FAQ</li>
        </ul> */}
      </nav>
      <div className="flex">
        <button className="border-none">
          <Image
            src="/icons/user.svg"
            width={44}
            height={44}
            alt="user icon"
            className="mx-2"
          />
        </button>

        <button className="border-none">
          <Image
            src="/icons/cart.svg"
            width={48}
            height={48}
            alt="cart icon"
            className="mx-2"
          />
        </button>
      </div>
    </header>
  )
}

export default Navbar
