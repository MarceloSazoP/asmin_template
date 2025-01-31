type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    logos: ImageProps[];
  };
  
  export type LogoProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Logo = (props: LogoProps) => {
    const { heading, logos } = {
      ...LogoDefaults,
      ...props,
    };
    return (
      <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20 bg-200 ">
        <div className="container">
          <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
            {heading}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2">
            {logos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-14 mix-blend-multiply" />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export const LogoDefaults: Props = {
    heading: "Colaboradores Principales",
    logos: [
      { src: "/images/codelco.jpg", alt: "Webflow logo 1" },
      { src: "/images/anglo.jpg", alt: "Webflow logo 1" },
      { src: "/images/caserones.jpg", alt: "Webflow logo 1" },
      { src: "/images/huasi.jpg", alt: "Webflow logo 1" },
      { src: "/images/sierragorda (1).png", alt: "Webflow logo 1" },
      { src: "/images/esperanza.jpg", alt: "Webflow logo 1" },
      { src: "/images/escondida.jpg", alt: "Webflow logo 1" },
      { src: "/images/cenizas.jpg", alt: "Webflow logo 1" },
      { src: "/images/abra.jpg", alt: "Webflow logo 1" },
      { src: "/images/cap.jpg", alt: "Webflow logo 1" },
      { src: "/images/candelaria.jpg", alt: "Webflow logo 1" },
      { src: "/images/florida.jpg", alt: "Webflow logo 1" },
      { src: "/images/mantos.jpg", alt: "Webflow logo 1" },
      { src: "/images/enami.jpg", alt: "Webflow logo 1" },
      { src: "/images/antofagasta.jpg", alt: "Webflow logo 1" },
      { src: "/images/lomasbayas (1).png", alt: "Webflow logo 1" },
      { src: "/images/bhp.jpg", alt: "Webflow logo 1" },
      { src: "/images/Hatch-Corporate-Logo.png", alt: "Webflow logo 1" },
      { src: "/images/amec.gif", alt: "Webflow logo 1" },
      { src: "/images/yamanagold (1).png", alt: "Webflow logo 1" },
      { src: "/images/SNC-Logo_Desktop.png", alt: "Webflow logo 1" },
      
    ],
  };
  