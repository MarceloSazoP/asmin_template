type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo = (props: Logo5Props) => {
  const { logos } = {
    ...LogoDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 pb-2 pt-4 sm:items-start sm:justify-start md:py-2">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-14" />
          ))}
        </div>
      </div>
    </section>
  );
};
  
  export const LogoDefaults: Props = {
    heading: "Clientes con Proyectos en ejecución",
    logos: [
      { src: "https://www.asmin.cl/wp-content/uploads/2014/07/promining.png", alt: "Webflow logo 1" },
      { src: "/images/BASF-logo.jpg", alt: "Relume logo 1" },
      { src: "/images/alquimiaconceptos.png", alt: "Webflow logo 2" },
      { src: "/images/CMLP.png", alt: "Relume logo 2" },
      { src: "/images/sierragorda.png", alt: "Relume logo 2" },
      { src: "/images/im2.png", alt: "Relume logo 2" },
      { src: "/images/ecovalue.png", alt: "Relume logo 2" },
      { src: "/images/lomasbayas.png", alt: "Relume logo 2" },
      { src: "/images/mineriaspencebhp.png", alt: "Relume logo 2" },
      { src: "/images/codelcodivisionchuquicamata.png", alt: "Relume logo 2" },
      { src: "/images/yamanagold.png", alt: "Relume logo 2" },
      { src: "/images/codelcogerenciarelaves.png", alt: "Relume logo 2" },
      { src: "/images/bureauveritas.png", alt: "Relume logo 2" },
      { src: "/images/capmineria.png", alt: "Relume logo 2" },
      { src: "/images/cmdic.png", alt: "Relume logo 2" },
     
    ],
  };
  