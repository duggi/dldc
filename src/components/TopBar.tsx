'use client'

import Image from 'next/image'
import Link from 'next/link'
import HomeLogo from '@/public/dldc-logo-circuit.svg'

export default function TopNav() {
  return (
    <>
    <section className="
      relative
      w-full
      max-w-[var(--breakpoint-2xl)]
      mx-auto
    ">
      <header className="
        fixed top-0
        z-50
        left-[max(env(safe-area-inset-left),calc((100vw-90rem)/2))]
        m-6
      ">
        <div className="mx-auto flex items-center justify-between rounded-lg bg-white px-6 py-4 shadow-md">
          <Link href="#top-section" scroll={true}>
            <Image
              className="
                w-20 min-w-20 md:w-24
              "
              src={HomeLogo}
              alt="DLDC logo"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex gap-4 ml-6">
            <Link href="#about-section" scroll={true} className="text-link">About</Link>
            <Link href="#projects-section" scroll={true} className="text-link">Projects</Link>
            <Link href="/contact" className="text-link">Contact</Link>
          </nav>
        </div>
      </header>
    </section>
    </>
  )
}
