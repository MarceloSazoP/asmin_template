type Props = {
    heading: string;
    description: string;
  };
  
  export type Layout1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout1 = (props: Layout1Props) => {
    const { heading, description } = {
      ...Layout1Defaults,
      ...props,
    };
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
            <p className="md:text-md  text-justify">{description}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export const Layout1Defaults: Props = {
    heading: "Alfred H. Knight Group Inc.: Comprometidos con la calidad y la innovación.",
    description:
      "Alfred H. Knight Group Inc. se destaca por su dedicación a ofrecer soluciones de alta calidad en el sector industrial. Nuestra misión es proporcionar servicios innovadores que superen las expectativas de nuestros clientes, garantizando siempre la excelencia. Nuestros valores fundamentales, como la integridad y el compromiso con la sostenibilidad, son el corazón de nuestra identidad.",
  };
  