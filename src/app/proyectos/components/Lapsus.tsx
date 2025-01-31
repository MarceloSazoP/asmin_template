"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, MotionStyle } from "framer-motion";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type FeaturesProps = {
  icon: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  buttons: ButtonProps[];
  features: FeaturesProps[];
};

export type LapsusProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Lapsus = (props: LapsusProps) => {
  const { tagline, heading, buttons, features } = {
    ...props,
    ...LapsusDefaults,
  };

  const featuresContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Efecto para calcular la altura del contenedor de features
  useEffect(() => {
    if (featuresContainerRef.current) {
      setContainerHeight(featuresContainerRef.current.offsetHeight);
    }
  }, [features]);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative" ref={featuresContainerRef}>
            <AnimationSection containerHeight={containerHeight} />
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
                <div className="relative flex flex-col items-center justify-start py-10">
                  <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-12" />
                  </div>
                </div>
                <div className="py-10">
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {feature.heading}
                  </h6>
                  <p dangerouslySetInnerHTML={{ __html: feature.description.replace(/\n/g, "<br />") }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimationSection = ({ containerHeight }: { containerHeight: number }) => {
  const scrollSection = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start end", "end end"], // Ajusta el offset para cubrir toda la altura
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute left-8 right-auto top-0 h-full w-0.5 bg-black/15 md:left-[2.4375rem]">
      <motion.div
        ref={scrollSection}
        className="bg-black"
        style={{ height } as MotionStyle}
      />
    </div>
  );
};

export const LapsusDefaults: Props = {
  tagline: "Pruebas Piloto de Espesamiento, Reología, Transporte y Depositación de Relaves",
  heading: "ASMIN ha participado en pruebas piloto para (12) proyectos de relaves en pasta, ya sea como consultor, contraparte, operador o control metalúrgico",
  buttons: [],
  features: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2012",
      },
      heading: "2012",
      description:
        "Minera Esperanza (2012) Prueba de Espesamiento y Reología. \nEl Abra, Pruebas de espesamiento, transporte y depositación.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2011",
      },
      heading: "2011",
      description:
        "Codelco R. Tomic, Pruebas de espesamiento, transporte y depositación. \nCodelco Norte Talabre, Control metalúrgico de espesamiento, transporte y depositación. \nMantos Blancos, Espesamiento, transporte y depositación.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2010",
      },
      heading: "2010",
      description:
        "CMP - Cerro Negro Norte, Pruebas de espesamiento, transporte y depositación. \nMinera Collahuasi, Control metalúrgico espesador de pasta DEMO. \nMinera Collahuasi, Pruebas de espesamiento y depositación.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2009",
      },
      heading: "2009",
      description:
        "Proyecto Caserones, Pruebas de espesamiento, transporte y depositación lamas/arenas.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2007-2008",
      },
      heading: "2007-2008",
      description:
        "BHP Billiton, Pruebas de espesamiento, transporte y depositación.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2007",
      },
      heading: "2007",
      description:
        "Minera Esperanza, Pruebas de espesamiento, transporte y depositación.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2006",
      },
      heading: "2006",
      description:
        "Minera Collahuasi, Pruebas de espesamiento y depositación.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "2005",
      },
      heading: "2005",
      description:
        "Minera Escondida, Pruebas de espesamiento, desaguado, ciclonaje, depositación, filtración al vacío y presión.",
    },
  ],
};