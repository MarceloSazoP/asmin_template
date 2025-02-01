// 

import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: HeaderProps) => {
  const { tagline, heading, description} = {
    ...HeaderDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md text-justify" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br />") }} />
      </div>
    </section>
  );
};

export const HeaderDefaults: Props = {
  tagline: "ASMIN LTDA.",
  heading: "Nuestra Historia",
  description:
    "ASMIN Ltda. es una empresa con más de 20 años de experiencia en el sector minero, especializada en análisis, caracterización y optimización de procesos metalúrgicos. Su equipo de expertos utiliza tecnologías de vanguardia, como microscopía electrónica de barrido (QEMSCAN) y difracción de rayos X (DRX), para brindar soluciones precisas y confiables a la industria. Desde 2022, ASMIN forma parte del grupo Alfred H. Knight, lo que refuerza su compromiso con la excelencia y la innovación en el análisis de minerales. La empresa ha trabajado con diversas compañías mineras en Chile y Latinoamérica, destacándose por su enfoque en la calidad, eficiencia y soporte técnico especializado.",
  buttons: [
    {
      title: "Button",
    },
    {
      title: "Button",
      variant: "secondary",
    },
  ],
};

//import { Button } from "@relume_io/relume-ui";
// import type { ButtonProps } from "@relume_io/relume-ui";

// type Props = {
//   tagline: string;
//   heading: string;
//   description: string;
//   buttons: ButtonProps[];
// };

// export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// export const Header = (props: HeaderProps) => {
//   const { heading, description, buttons, tagline } = {
//     ...HeaderDefaults,
//     ...props,
//   };
//   return (
//     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
//       <div className="container">
//         <div className="w-full max-w-lg">
//           <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
//           <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
//           <p className="md:text-md">{description}</p>
//           {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
//             {buttons.map((button, index) => (
//               <Button key={index} {...button}>
//                 {button.title}
//               </Button>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export const HeaderDefaults: Props = {
//   tagline: "ASMIN LTDA.",
//   heading: "Nuestra Historia",
//   description:
//     "ASMIN Ltda. es una empresa con más de 20 años de experiencia en el sector minero, especializada en análisis, caracterización y optimización de procesos metalúrgicos. Su equipo de expertos utiliza tecnologías de vanguardia, como microscopía electrónica de barrido (QEMSCAN) y difracción de rayos X (DRX), para brindar soluciones precisas y confiables a la industria. Desde 2022, ASMIN forma parte del grupo Alfred H. Knight, lo que refuerza su compromiso con la excelencia y la innovación en el análisis de minerales. La empresa ha trabajado con diversas compañías mineras en Chile y Latinoamérica, destacándose por su enfoque en la calidad, eficiencia y soporte técnico especializado.",
//   buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
// };