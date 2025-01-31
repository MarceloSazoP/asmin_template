type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    image: ImageProps;
  };
  
  export type Layout2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout2 = (props: Layout2Props) => {
    const { heading, description, image } = {
      ...Layout2Defaults,
      ...props,
    };
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h1>
              <p className="md:text-md text-justify" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br />") }} />
            </div>
            <div>
              <img src={image.src} className="w-full object-cover imagen" alt={image.alt} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Layout2Defaults: Props = {
    heading: "Conoce la historia y evolución de nuestra empresa en el sector industrial",
    description:
      "ASMIN Ltda. es una compañía líder con más de 20 años de experiencia en el sector minero, especializada en el análisis, caracterización y optimización de procesos metalúrgicos. Nos destacamos por ofrecer soluciones innovadoras y de alta precisión a la industria minera, con un equipo de expertos comprometidos en brindar el mejor servicio y asesoría técnica. \nUtilizamos tecnologías de vanguardia como la microscopía electrónica de barrido (QEMSCAN) y la difracción de rayos X (DRX), las cuales nos permiten obtener resultados confiables y detallados para optimizar los procesos de nuestras empresas clientes. Nuestra capacidad técnica y la calidad de nuestros análisis han sido reconocidas por diversas compañías mineras en Chile y Latinoamérica. \nDesde 2022, ASMIN forma parte del prestigioso grupo Alfred H. Knight, lo que refuerza aún más nuestro compromiso con la excelencia y la innovación. Esta alianza estratégica nos permite acceder a una red global de recursos y conocimientos, garantizando un respaldo aún mayor para nuestros clientes.\nA lo largo de los años, hemos logrado importantes hitos que nos han consolidado como líderes en el sector, y seguimos trabajando con dedicación para ofrecer soluciones técnicas de última generación, adaptadas a las necesidades de cada cliente. En ASMIN, nuestra misión es continuar siendo un socio clave para las empresas mineras, optimizando sus procesos y asegurando la calidad y eficiencia en cada uno de ellos.", 
    image: {
      src: "/images/asminoficinastgo.jpg",
      alt: "Relume placeholder image",
    },
  };
  