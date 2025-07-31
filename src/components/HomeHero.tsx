export default function HomeHero() {
  return (
    <>
      <section className="
        w-full
        px-8 pt-8 pb-0
        md:px-16
      ">
      {/* grid */}
      <div className="
        max-h-screen sm:max-h-auto
        my-auto mx-auto
        max-w-[90rem]
        grid grid-cols-1 grid-rows-2
        md:grid-cols-2 md:grid-rows-1
        md:grid-cols-[minmax(22rem,45%)_minmax(0px,55%)]
      ">

        {/* grid-cell picture */}
        <div className="
          order-2 md:order-1
          flex items-end justify-center
          pt-8 sm:pt-0
        ">
          <div className="
            w-full
          ">
            <img
              src="/home-hero-doug.png"
              alt="Description 1"
              className="
              block
              mx-auto px-4 xl:mx-0
              min-w-48 max-w-112 md:max-w-120
              w-full h-full
              object-scale-down
            "/>
          </div>
        </div>

        {/* grid-cell hero copy */}
        <div className="
          pt-6
          px-12 sm:px-18 md:px-2
          lg:pl-2 lg:pr-24
          order-1 md:order-2
        ">
          {/* hero copy */}
          <div className="
            text-center md:text-left">
            <h1 className="
              text-3xl
              font-black tracking-tight text-balance
              text-gray-900
            ">
              Doug Lee Dot Co 👋
            </h1>
            <p className="
              mt-8
              text-xl/8 sm:text-2xl/8
              font-normal
              text-pretty text-gray-900
            ">
              Hi, welcome to my website — thank you for stopping by.
              This place is about my projects and work, along with hobbies and interests.
            </p>
          </div>

          <blockquote className="
            mt-8 mb-12 mx-auto
            md:pr-10
            text-center
          ">
            <hr className="
              w-[65%]
              my-6 mx-auto
              text-gray-500
            "/>
            <p className="
              mb-1
              font-serif text-gray-600 text-lg
            ">
              “Make things as simple as possible, but no simpler”
            </p>
            <cite className="
              font-serif text-base text-gray-500
            ">
              — Theoretical Physicist
            </cite>
            <hr className="
              w-[65%]
              my-6 mx-auto
              text-gray-500
            "/>
          </blockquote>
        </div>
      </div>
    </section>
    </>
  )
}


function Blob() {
  return (
    <>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#8090fa] to-[#80ccfa] opacity-30 sm:left-[calc(90%-30rem)] sm:w-[102.1875rem]"
      />
    </div>
    </>
  )
}
