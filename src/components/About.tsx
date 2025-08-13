import Link from 'next/link';

export default function About() {
  return (
    <>
      <section id="about-section" className="
        w-full
        px-8
        md:px-16
        bg-[var(--color-dldc-accent)]
      ">
      <div className="
        max-w-[var(--breakpoint-2xl)]
        min-w-48
        mx-auto
        p-18 md:p-24
        bg-white
        rounded-lg
      ">
        <div className="bg-[var(--color-dldc-purple)] text-white font-bold uppercase px-6 py-2 inline-block">
          About
        </div>
        <div className="text-3xl/10 mt-8 mb-12">
          <p className="mb-6">I am product focused and dedicated to the craft. Products should exist to make our lives easier, more pleasant, and more productive.</p>

          <p>Above all I value simplicity and aesthetics. I like making stuff that “just works” and looks really, really good doing it.</p>
        </div>
        <Link
          className="text-xl text-link"
          href="/about">
          More about me
        </Link>
      </div>
    </section>
  </>
  )
}
