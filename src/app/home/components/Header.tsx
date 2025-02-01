import type { ButtonProps } from "@relume_io/relume-ui";
import "./styles/Home.css"

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: HeaderProps) => {
  const { heading, description, image } = {
    ...HeaderDefaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-text-alternative md:text-md text-justify">{description}</p>
            {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 ">
        <img src={image.src} className="size-full object-cover imagen" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const HeaderDefaults: Props = {
  heading: "Expertos en Soluciones Industriales",
  description:
    "ASMIN AHK es líder en consultoría y laboratorios metalúrgicos a nivel global. Ofrecemos servicios especializados de inspección, análisis y estudios de procesos, con presencia en más de 35 países. Nuestra infraestructura y expertise en áreas como óxidos, sulfuros y biolixiviación brindan soluciones de alta calidad y confiabilidad para tus proyectos.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "/images/asminoficinastgo.jpg",
    alt: "Relume placeholder image",
  },
};
