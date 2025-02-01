
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons: ButtonProps[];
};

export type LayoutProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout = (props: LayoutProps) => {
  const { heading, description, sections } = {
    ...props,
    ...LayoutDefaults,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
  <div className="container">
    <div className="flex flex-col items-start">
      <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
        <div className="transition-all duration-300 text-black hover:text-primary-200">
          {/* <p className="mb-3 font-semibold md:mb-4">{tagline}</p> */}
          <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl text-center">{heading}</h2>
        </div>
        <p className="md:text-md transition-all duration-300 text-black hover:text-primary-200 text-justify">{description}</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className="transition-all duration-300 text-black hover:text-primary-200 texto-con-borde_home"
          >
            {/* <div className="rb-5 mb-5 md:mb-6">
              <img
                src={section.icon.src}
                className="size-12 transition-all duration-300 hover:fill-current hover:text-primary-200" // Cambiar color del icono
                alt={section.icon.alt}
              />
            </div> */}
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl hover:text-primary-200">
              {section.heading}
            </h3>
            <p className="transition-all duration-300 hover:text-primary-200">{section.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
        {buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div> */}
    </div>
  </div>
</section>


  );
};

export const LayoutDefaults: Props = {
  tagline: "Servicios",
  heading: "Soluciones Innovadoras para tu Empresa",
  description:
    "Ofrecemos una gama de análisis avanzados para la caracterización y optimización de procesos metalúrgicos. Nuestro enfoque se basa en la precisión y tecnología de vanguardia, asegurando resultados confiables. Descubre cómo nuestros estudios pueden impulsar la eficiencia y el rendimiento de tus operaciones mineras.",
  sections: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Análisis Minerales de Alta Precisión",
      description:
        " Aplicamos tecnología avanzada para caracterizar con exactitud tus muestras.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "Optimización de Procesos Metalúrgicos",
      description:
        "Mejoramos la eficiencia y recuperación en tus operaciones mineras.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Resultados Confiables y Certificados",
      description:
        "Garantizamos análisis rigurosos respaldados por estándares internacionales.",
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};
