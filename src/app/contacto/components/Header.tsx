import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type Map = {
  url: string;
  image: ImageProps;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  link?: LinkProps;
  button?: ButtonProps;
  description?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
  map: Map;
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: HeaderProps) => {
  const { tagline, heading, description, contacts, map } = {
    ...HeaderDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="rb-12 max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex flex-row">
                    <div className="mr-4 md:mb-4">{contact.icon}</div>
                    <div>
                      <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                        {contact.title}
                      </h3>
                      <p>{contact.description}</p>
                      {contact.title === "Office" && contact.button ? (
                        <div className="mt-5 md:mt-6">
                          <Button {...contact.button}>{contact.button.title}</Button>
                        </div>
                      ) : (
                        contact.link && (
                          <a className="underline" href={contact.link.url}>
                            {contact.link.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <a href={map.url} className="justify-self-end md:w-[321.6px] lg:w-auto">
          <img
            src={map.image.src}
            alt={map.image.alt}
            className="size-full h-[400px] object-cover md:h-[516px] "
          />
        </a>
      </div>
    </section>
  );
};

export const HeaderDefaults: Props = {
  tagline: "",
  heading: "Contáctanos",
  description:
    "Estamos aquí para ayudarte. Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo para resolver cualquier consulta o solicitud.",
  contacts: [
    {
      icon: <BiEnvelope className="size-6" />,
      title: "Email",
      link: {
        label: "contacto@asmin.cl",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-6" />,
      title: "Teléfono",
      link: {
        label: "(+56 2) 2949 36 00",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-6" />,
      title: "Parque Industrial Lo Boza",
      description: "Antillanca Sur N° 561 - Pudahuel – Santiago, Chile",
    },
    {
      icon: <BiMap className="size-6" />,
      title: "Calama, Región de Antofagasta",
      description: "Avenida Las Industrias 455 Sitio 7 - Camino Chiu Chiu, Calama",
    },
  ],
  map: {
    url: "#",
    image: {
      src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg",
      alt: "Relume placeholder map image",
    },
  },
};
