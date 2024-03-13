import Link from 'next/link'
import Image from 'next/image'
import logo from '@/images/logos/space.svg'

export function SpaceLogo({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="https://www.spaceforgers.com"
      aria-label="Space"
    >
      <div className="flex items-center mb-4">
      <Image
        src={logo}
        alt=""
        width={40}
        height={40}
      />
        <p className="ml-4 text-gray-950 dark:text-gray-50">Forged by Space</p>
      </div>
    </Link>
  )
}
