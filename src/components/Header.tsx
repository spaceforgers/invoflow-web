'use client'

import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8 align-middle">
          <div className="inline-block align-middle z-10 gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Button href="https://apps.apple.com/es/app/invoflow/id6469032967" className="lg:block">
              Download
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
