type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type FeaturesProps = {
    icon: ImageProps;
    description: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    features: FeaturesProps[];
  };
  
  export type Lapsus2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Lapsus2 = (props: Lapsus2Props) => {
    const { heading, description, features } = {
      ...Lapsus2Defaults,
      ...props,
    };
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
            <div>
              <p className="mb-5 md:mb-6 md:text-md">{description}</p>
              <div className="grid grid-cols-1 gap-4 py-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <img className="size-6" src={feature.icon.src} alt={feature.icon.alt} />
                    </div>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Lapsus2Defaults: Props = {
    heading: "Pruebas Piloto de Molienda y Flotación",
    description:
      "ASMIN dispone de una planta piloto de chancado, molienda y flotación de 100-300 Kg/hr, en donde se han procesado (611) toneladas de (33) muestras de distintos minerales",
    features: [
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 1" },
        description: "(4) Muestras del Proyecto Esperanza. (140 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 2" },
        description: "(6) Muestras de Minera Escondida. (6 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(5) Muestras del Proyecto Mina Ministro Hales. (30 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description:  "(5) Muestras de los Proyectos Chuqui-Subte, Chuqui-Rajo, Mina Ministro Hales y de Radomiro Tomic. (30 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(3) Muestras del Proyecto Mina Ministro Hales. (90 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(2) Muestras del Proyecto Quadra-Sierra Gorda. (30 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(3) Muestras del Proyecto Chuqui-Subte (85 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(1) Muestra del Proyecto Radomiro Tomic, (60 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(2) Muestras del Proyecto El Espino de Pucobre, (10 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(1) Muestra del Proyecto El Abra (130 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(2) Muestras de Minera Esperanza, en ejecución. (100 ton.).",
      },
      {
        icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
        description: "(1) Muestra de proyecto Rodamiro Tomic (100 ton.).",
      },
    ],
  };
  