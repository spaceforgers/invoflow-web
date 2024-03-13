import Image from 'next/image'
import logo from '@/images/logos/invoflowlogo.png'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt=""
        width={50}
        height={50}
      />
        <h1 className="ml-4 font-semibold">Invoflow</h1>
      </div>
  )
}
