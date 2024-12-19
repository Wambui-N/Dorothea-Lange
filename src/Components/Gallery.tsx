"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

interface SectionProps {
  title: string;
  images: Array<{ src: string; alt: string; colSpan: string }>;
  gridClasses: string;
}

const Section: React.FC<SectionProps> = ({ title, images, gridClasses }) => (
  <>
    <h5 className="font-playfairDisplaySC text-xl uppercase pb-1">{title}</h5>
    <div className="border-t-[0.5px] border-slate-50 pb-2"></div>
    <div className={`grid ${gridClasses} gap-8`}>
      {images.map((image, index) => (
        <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.1,
        }}
        viewport={{ once: true }}
        key={index}
        className={`${image.colSpan}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={600}
            className={`w-full h-auto `}
          />
        </motion.div>
      ))}
    </div>
  </>
);

const Gallery = () => {
  const migrantMotherImages = [
    { src: "/image 1.png", alt: "Migrant Mother", colSpan: "md:col-span-3" },
    { src: "/image 3.png", alt: "Migrant Mother", colSpan: "md:col-span-2" },
    { src: "/image 4.png", alt: "Migrant Mother", colSpan: "md:col-span-4" },
    { src: "/image 5.png", alt: "Migrant Mother", colSpan: "md:col-span-3" },
    { src: "/image 6.png", alt: "Migrant Mother", colSpan: "md:col-span-2" },
    { src: "/image 7.png", alt: "Migrant Mother", colSpan: "md:col-span-4" },
    { src: "/image 8.png", alt: "Migrant Mother", colSpan: "md:col-span-3" },
    { src: "/image 9.png", alt: "Migrant Mother", colSpan: "md:col-span-3" },
    { src: "/image 10.png", alt: "Migrant Mother", colSpan: "md:col-span-4" },
    { src: "/image 11.png", alt: "Migrant Mother", colSpan: "md:col-span-5" },
    { src: "/image 2.png", alt: "Migrant Mother", colSpan: "md:col-span-3" },
  ];

  const greatDepressionImages = [
    {
      src: "/image 12.png",
      alt: "The Great Depression",
      colSpan: "md:col-span-4",
    },
    {
      src: "/image 13.png",
      alt: "The Great Depression",
      colSpan: "md:col-span-3",
    },
    {
      src: "/image 14.png",
      alt: "The Great Depression",
      colSpan: "md:col-span-5",
    },
    {
      src: "/image 15.png",
      alt: "The Great Depression",
      colSpan: "md:col-span-3",
    },
    {
      src: "/image 16.png",
      alt: "The Great Depression",
      colSpan: "md:col-span-5",
    },
    {
      src: "/image 17.png",
      alt: "The Great Depression",
      colSpan: "md:col-span-4",
    },
    {
      src: "/image 17.png",
      alt: "The Great Depression",
      colSpan: "md:col-span-5",
    },
  ];

  return (
    <div>
      <h3 className="font-playfairDisplaySC lg:text-5xl text-3xl uppercase pb-2">
        Gallery
      </h3>
      <Section
        title="Migrant Mother"
        images={migrantMotherImages}
        gridClasses="lg:grid-cols-12 md:grid-cols-10 grid-cols-1"
      />
      <Section
        title="The Great Depression"
        images={greatDepressionImages}
        gridClasses="grid-cols-12"
      />
    </div>
  );
};

export default Gallery;
