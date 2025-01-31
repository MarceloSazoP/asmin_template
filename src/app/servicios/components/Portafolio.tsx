import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import "./styles/Servicios.css"

type ImageProps = {
  src: string;
  alt?: string;
};

type Tag = {
  label: string;
  url: string;
};

type ProjectProps = {
  title: string;
  description: string;
  image: ImageProps;
  url: string;
  button: ButtonProps;
  tags: Tag[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type PortafolioProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portafolio = (props: PortafolioProps) => {
  const { tagline, heading, description, projects, button } = {
    ...PortafolioDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </header>
        <div>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <footer className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          {/* <Button {...button}>{button.title}</Button> */}
        </footer>
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({ title, description, image, url, button, tags }) => (
  <article className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[4.9rem] lg:py-12">
    <div>
      <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
        <a href={url}>{title}</a>
      </h3>
      <div>
        {description.split("\n").map((item, index) => (
          <p key={index} className="flex items-center gap-2">
            <BiChevronRight className="w-4 h-4 text-gray-500" />
            <span dangerouslySetInnerHTML={{ __html: item }}></span>
          </p>
        ))}
      </div>
    </div>
    <div>
      <a href={url} className="flex aspect-[4/3] w-full">
        <img src={image.src} className="w-full object-cover imagen" alt={image.alt} />
      </a>
    </div>
  </article>
);

const project1: ProjectProps = {
  title: "Pruebas de separación magnética",
  description:
    "El Separador Magnético es un equipo, que se utiliza para la separación de minerales, donde el elemento de interés a recuperar es el Fe magnético. \nEn este equipo, se realizan pruebas a nivel de laboratorio, con separaciones magnéticas primarias y de limpieza",
  image: {
    src: "/images/Separador-magnetico1 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project2: ProjectProps = {
  title: "Pruebas de Laboratorio para Plantas Concentradoras",
  description:
    "Test Starkey. \nTest de Bond bolas (BWi).\nTest JK drop weight (DWT).\nTest de abrasión de Bond (Ai).\nTest SAG Mill Conminution (SMC).\nTest de impacto de baja energía (LEIT).\nPruebas de Neutralización y coagulación.\nPruebas de Filtración al vacío, presión, y otras.\nPruebas de Flotación, cinéticas, test de ciclos abierto y cerrado.\nPruebas de Sedimentación y reología de pulpas, relaves y concentrados.\nPruebas de Espesamiento tipo convencional, alta capacidad, alta densidad y pasta.\nTest de Bond Barras",
  image: {
    src: "/images/01 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project3: ProjectProps = {
  title: "Pruebas Piloto para Plantas Concentradoras",
  description:
    "Pruebas de molienda en molino piloto SAG (6’x2’).\nPlanta piloto de chancado con chancadores de mandíbula primario (12”x14”) secundario (10”x12”) y de cono (2 pies).\nPruebas de flotación en planta piloto de 100 a 500 kg/hr, con celdas tipo Denver de 2.7, 1,9 y 0,5 pie3 cada celda. \nPruebas espesamiento en espesadores piloto de alta capacidad (1m diám. x 1,3m alto), alta densidad y pasta o cono profundo (1m diám. x 6 m alto). \nPruebas de depositación en canaletas (1x1x14m) y cancha de depositación (4m ancho x 10m largo).  \nPruebas de transporte en Loop de bombeo de 50 m de largo, 8 m de alto, tuberías impulsión de 6”, 8” y 10”, tubería retorno de 8” y pendiente variable de 1 a 15%, bomba centrifuga de 250 HP con VDF y estaciones control de presión y flujómetro SonarTrac y Doppler.\nPruebas Piloto de Chancador HRC (HOGR) de METSO ",
  image: {
    src: "/images/02 (2).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project4: ProjectProps = {
  title: "Pruebas para Plantas de Lixiviación",
  description:
    "Chancado y molienda. \nAnálisis granulométrico. \nDiagnóstico y evaluación de pilas. \nPruebas de aglomeración y curado. \nDeterminación de contenido y tipo de arcillas. \nTest Iso-pH: \nCinéticas de extracción, Cu, Fe e impurezas. \nCinéticas de consumo de ácido. \nBalances de Cu por sólido y solución. \nSeguimiento de potencial electroquímico. \nPruebas en columnas con y sin recirculación. \nEvaluación de aditivos aglomerantes y lixiviantes. \nPruebas de laboratorio en botellas y percoladores. \nCianuración en columnas, botellas y por agitación.",
  image: {
    src: "/images/03 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project5: ProjectProps = {
  title: "Pruebas Geometalúrgicas de Sulfuros",
  description:
    "Preparación de muestras. \nPruebas de chancado a un P80 determinado. \nCurvas de molienda y consumos de cal. \nDeterminación de Work Index (WI). \nPruebas estándares de flotación, cinéticas y a tiempo fijo. \nPruebas de sedimentación y mediciones de reología a los relaves.",
  image: {
    src: "/images/04 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project6: ProjectProps = {
  title: "Pruebas Geometalúrgicas de Óxidos",
  description:
    "Preparación de muestras. \nPruebas de chancado a un tamaño determinado. \nClasificación de la muestra. \nTest de permeabilidad. \nTest de columna. \nTest de Botella. \nTest de Iso-pH.",
  image: {
    src: "/images/05 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project7: ProjectProps = {
  title: "Análisis Químicos",
  description:
    "ASMIN en asociación con HIDROLAB (NCh-ISO 17025.Of2005) dispone de un laboratorio químico METALAB, que se encuentra en proceso de acreditación de la misma norma. \nMETALAB opera en las dependencias de HIDROLAB, estando habilitado, equipado y capacitado para realizar caracterizaciones y análisis químico de productos metalúrgicos.",
  image: {
    src: "/images/06 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project8: ProjectProps = {
  title: "Diagnóstico y Optimización de Espesadores",
  description:
    "Diagnóstico, optimización y operación de espesadores de alta capacidad, alta densidad y pasta. \nPruebas a escala laboratorio y piloto de espesadores convencionales, alta capacidad, alta densidad y pasta. \nSelección y optimización de la preparación, dilución y adición de floculantes. \nDimensionamiento y selección de espesadores. \nDeterminación de áreas unitarias y capacidades de espesamiento.",
  image: {
    src: "/images/07 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project9: ProjectProps = {
  title: "Diagnóstico y Optimización de Plantas",
  description:
    "Diagnóstico de operación de plantas de chancado, molienda y flotación. \nMuestreos de mineral, concentrados y relaves en cada etapa del proceso. \nBalances metalúrgicos globales o por etapa de proceso. \nDeterminación de puntos críticos de cada circuito. \nOptimización de los circuitos y/o operaciones unitarias.",
  image: {
    src: "/images/08 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project10: ProjectProps = {
  title: "Software para Medición de Inventarios de Espesadores de Concentrado",
  description:
    "Muestreo a distintas distancias y niveles del espesador.\nDeterminaciones de densidad de pulpa, análisis granulométricos, gravedad especifica y análisis químicos a cada muestra. \nEl Software entrega la siguiente información: masa de sólidos, masa de finos, gradiente de concentración, gradiente granulométrico y leyes totales y por zona del espesador de concentrado.",
  image: {
    src: "/images/09 (1).jpg",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
const project11: ProjectProps = {
  title: "Mineralogía QEMSCAN",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  image: {
    src: "/images/analisis_mineral (1).png",
    alt: "Relume placeholder image",
  },
  url: "#",
  button: {
    title: "View project",
    variant: "link", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "link",
    iconRight: <RxChevronRight />,
  },
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};


export const PortafolioDefaults: Props = {
  tagline: "",
  heading: "SERVICIOS",
  description: "ASMIN Industrial ofrece análisis avanzados de minerales con tecnología de punta, incluyendo microscopía electrónica y difracción de rayos X.",
  projects: [project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11],
  button: {},
};