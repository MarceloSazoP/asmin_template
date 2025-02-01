import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: HeaderProps) => {
  const { tagline, heading, description } = {
    ...HeaderDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
      </div>
    </section>
  );
};

export const HeaderDefaults: Props = {
  tagline: "",
  heading: "Clientes con Proyectos en ejecución",
  description:
    ".",
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
