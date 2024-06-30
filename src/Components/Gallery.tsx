import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <h3 className="font-playfairDisplaySC lg:text-5xl text-3xl uppercase pb-2">
        Gallery
      </h3>
      <h5 className="font-playfairDisplaySC text-xl uppercase pb-1">
        Migrant Mother
      </h5>
      <div className="border-t-[0.5px] border-slate-50 pb-2"></div>
      <div className="grid lg:grid-cols-12 md:grid-cols-10 grid-cols-1 lg:gap-8 md:gap-6' gap-4">
        <Image
          src="/image 1.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-3"
        />
        <Image
          src="/image 3.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-2"
        />
        <Image
          src="/image 4.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-4"
        />
        <Image
          src="/image 5.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-3"
        />
        <Image
          src="/image 6.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-2"
        />
        <Image
          src="/image 7.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-4"
        />
        <Image
          src="/image 8.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-3"
        />
        <Image
          src="/image 9.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-3"
        />
        <Image
          src="/image 10.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-4"
        />
        <Image
          src="/image 11.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-5"
        />
        <Image
          src="/image 2.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-3"
        />
      </div>

      <h5 className="font-playfairDisplaySC text-xl uppercase pb-1">
        The great depression
      </h5>
      <div className="border-t-[0.5px] border-slate-50 pb-2"></div>
      <div className="grid grid-cols-12 gap-8">
        <Image
          src="/image 12.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-4"
        />
        <Image
          src="/image 13.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-3"
        />
        <Image
          src="/image 14.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-5"
        />
        <Image
          src="/image 15.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-3"
        />
        <Image
          src="/image 16.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-5"
        />
        <Image
          src="/image 17.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-4"
        />
        <Image
          src="/image 17.png"
          alt="Migrant Mother"
          width={1000}
          height={600}
          className="w-full h-auto md:col-span-5"
        />
      </div>
    </div>
  );
};

export default Gallery;
