
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from 'react';
import './styles/About.css';

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

export type PortaFolioProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PortaFolio = (props: PortaFolioProps) => {
  const { projects } = {
    ...PortaFolioDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </header> */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        {/* <footer className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button {...button}>{button.title}</Button>
        </footer> */}
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({ title, description, image, url, button, tags }) => (
  <article>
    <div className="mb-5 md:mb-6">
      <a href={url}>
        <img src={image.src} className="w-full object-cover imagen-profesional" alt={image.alt} />
      </a>
    </div>
    <h3 className="mb-2 text-xl font-bold md:text-2xl">
      <a href={url}>{title}</a>
    </h3>
    {/* <p>{description}</p>
    <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
      {tags.map((tag, index) => (
        <li key={index} className="flex">
          <a href={tag.url} className="bg-background-secondary px-2 py-1 text-sm font-semibold">
            {tag.label}
          </a>
        </li>
      ))}
    </ul>
    <Button {...button} asChild className="mt-5 md:mt-6">
      <a href={url}>{button.title}</a>
    </Button> */}
  </article>
);

const project1: ProjectProps = {
  title: "Terreno: 11500 m2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  image: {
    src: "/images/instalaciones_terreno.jpg",
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
  title: "Laboratorios: 600 m2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  image: {
    src: "/images/instalaciones_laboratorio.jpg",
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
  title: "Oficinas: 150 m2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  image: {
    src: "/images/asmin_recepcion.png",
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
export const PortaFolioDefaults: Props = {
  tagline: "PortaFolio",
  heading: "Instalaciones",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  projects: [project1, project2, project3],
  button: {
    title: "View all",
    variant: "secondary", // Asegúrate de que este valor coincida con los valores permitidos en ButtonProps
    size: "primary",
  },
};