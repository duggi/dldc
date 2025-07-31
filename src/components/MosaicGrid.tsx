export default function MosaicGrid() {
  return (
    <>
    <section className="
      w-full
      px-8 py-8
      md:px-16
    ">
      <div className="
        max-w-[var(--breakpoint-2xl)]
        min-w-48
        mx-auto
        grid
        gap-2
        auto-rows-[minmax(0px,1fr)]
        grid-cols-[repeat(1,minmax(4rem,1fr))]
        grid-rows-[repeat(1,minmax(4rem,1fr))]
        md:grid-cols-[repeat(6,minmax(6rem,1fr))]
        md:grid-rows-[repeat(3,minmax(6rem,1fr))]
        xl:grid-cols-[repeat(8,minmax(6rem,1fr))]
        xl:grid-rows-[repeat(2,minmax(2rem,1fr))]
        justify-center
        ">

        {/* 1 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-4 md:row-span-2 md:row-start-1
          xl:col-span-3 xl:row-span-4 xl:row-start-1
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[2/1]
            xl:aspect-[3/4]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-2 md:row-span-2 md:row-start-1
          xl:col-span-5 xl:row-span-2 xl:row-start-1
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[1/1]
            xl:aspect-[2/1]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 3 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-3 md:row-span-3 md:row-start-3
          xl:col-span-3 xl:row-span-2 xl:row-start-3
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[1/1]
            xl:aspect-[2/1]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 4 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-3 md:row-span-3 md:row-start-3
          xl:col-span-2 xl:row-span-2 xl:row-start-3
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[1/1]
            xl:aspect-[2/2]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover
            "/>
          </div>
        </div>

        {/* 5 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-4 md:row-span-2 md:row-start-6
          xl:col-span-4 xl:row-span-3 xl:row-start-5
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[2/1]
            xl:aspect-[4/3]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 6 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-2 md:row-span-2 md:row-start-6
          xl:col-span-4 xl:row-span-3 xl:row-start-5
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[1/1]
            xl:aspect-[4/3]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 7 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-2 md:row-span-3 md:row-start-8
          xl:col-span-2 xl:row-span-3 xl:row-start-8
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[2/3]
            xl:aspect-[2/3]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 8 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-4 md:row-span-3 md:row-start-8
          xl:col-span-3 xl:row-span-3 xl:row-start-8
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[4/3]
            xl:aspect-[3/3]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 9 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-3 md:row-span-2 md:row-start-11
          xl:col-span-3 xl:row-span-5 xl:row-start-8
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[3/2]
            xl:aspect-[3/5]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 10 */}
        <div className="
          col-span-1 row-span-1
          md:col-span-3 md:row-span-2 md:row-start-11
          xl:col-span-5 xl:row-span-2 xl:row-start-11
        ">
          <div className="
            h-full w-full overflow-hidden rounded-lg
            aspect-square
            md:aspect-[3/2]
            xl:aspect-[5/2]
          ">
            <img
              src="/stub.png"
              alt="Description 1"
              className="w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
