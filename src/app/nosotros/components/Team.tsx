
import type { ButtonProps } from "@relume_io/relume-ui";
import {  BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type Footer = {
  heading: string;
  description: string;
  button: ButtonProps;
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  teamMembers: TeamMember[];
  footer: Footer;
};

export type TeamProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Team = (props: TeamProps) => {
  const { tagline, heading, description, teamMembers } = {
    ...TeamDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-5 md:mb-6">
        <img
          src={member.image.src}
          alt={member.image.alt}
          className="size-20 min-h-20 min-w-20 rounded-full object-cover imagen-teams"
        />
      </div>
      <div className="mb-3 md:mb-4 texto-con-borde">
        <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
        <h6 className="md:text-md">{member.jobTitle}</h6>
      </div>
      <p className="text-justify">{member.description}</p>
      <div className="mt-6 flex gap-3.5">
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export const TeamDefaults: Props = {
  tagline: "Equipo",
  heading: "Nuestro equipo",
  description: "Conoce a los profesionales detrás de nuestra empresa.",
  teamMembers: [
    {
      image: {
        src: "/images/lemunao.png",
        alt: "Relume placeholder image 1",
      },
      name: "Alfredo Lemunao Catrian",
      jobTitle: "Sub Gerente General",
      description:
        "Master en gestión de negocios universidad UAI, Ingeniero Comercial (UDLA), Contador Auditor y Postgrado en Planificación Tributaria, con más de 18 años de experiencia en la dirección y supervisión de administración, finanzas y logística. Trabajo 13 años en el Grupo Themco y 2 años en el Colegio Alemán DS. A partir de abril del 2010 se integra ASMIN.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      ],
    },
    {
      image: {
        src: "/images/03 (2).jpg",
        alt: "Relume placeholder image 2",
      },
      name: "Jorge Paredes Benavides",
      jobTitle: "Gerente Técnico y QA/QC",
      description:
        "Ingeniero Ejecución y Civil Metalúrgico (USACH), con más de 28 años de experiencia en: pruebas, estudios y operación de plantas Metalúrgicas. Trabajó 5 años en CIMM, 5 años en Mantos de Oro, 8 años en CIMM-T&S, y 6 años en SGS Lakefield. En Enero del 2012 se integra empresa ASMIN.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      ],
    },
    {
      image: {
        src: "/images/14.jpg",
        alt: "Relume placeholder image 3",
      },
      name: "Manuel Navarrete Rivas",
      jobTitle: "Jefe de Propuestas y Licitaciones",
      description:
        "Ingeniero Ejecución Metalúrgico (USACH), con 10 años de experiencia. Trabajo en 1 año en Molymet, 1 año en Elecmetal, 4 años en Minera Las Cenizas. En Enero 2011 se integra a ASMIN.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      ],
    },
    {
      image: {
        src: "/images/j_unda.png",
        alt: "Relume placeholder image 4",
      },
      name: "Jacqueline Unda Delgado",
      jobTitle: "Gerente de Metalurgia",
      description:
        "Ingeniero Civil Metalúrgico (UdeC), Diplomado Proyectos Mineros y de Infraestructura (UAI). Inicia en Junio 2004 en la empresa CIMM T&S como Ingeniero de Procesos, luego asume el cargo de Jefe de Proyectos y posterior Jefe de Área Flotación Laboratorio, en la empresa participó en proyectos de definición y optimización de condiciones metalúrgicas, proyectos geometalúrgicos entre otros, además de control y administración de personal.En Agosto 2011 se integra a Minera Esperanza del grupo AMSA, desempeñándose como Ingeniero Planta, luego como Ingeniero de procesos y Laboratorios, posterior Administrador de contratos y Jefe de Laboratorios en Faena Minera Centinela. En Octubre del 2014 se integra empresa ASMIN.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      ],
    },
    {
      image: {
        src: "/images/LorenaSfeir1.jpg",
        alt: "Relume placeholder image 5",
      },
      name: "Lorena Sfeir Yazigi",
      jobTitle: "Encargada de Laboratorio",
      description:
        "Químico Laboratorista (Universidad de Chile), con más de 25 años de trabajo en laboratorio químico asociado al ámbito minero. Inicia su experiencia laboral en CIMM en el año 1987 desempeñándose como Químico, posteriormente supervisor, jefe de Laboratorios Químicos- Vitacura y finalmente como Jefe de Proyectos. Entre 2012 y 2016 formo parte del área de Metalurgia de SGS Minerals, desde que CIMM T&S paso a formar parte del Grupo SGS.Encargada de Laboratorios Externos y recepción de muestras.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      ],
    },
    {
      image: {
        src: "/images/MarcoMujica11.jpg",
        alt: "Relume placeholder image 6",
      },
      name: "Marco Mujica R",
      jobTitle: "Jefe de Proyectos",
      description:
        "Ingeniero Civil Metalúrgico (USACH), Egresado de Magister en Metalurgia Extractiva (USACH). Con de 30 años de experiencia, principalmente en Procesos. Trabajó 4 años en JRI Ingeniería, 5 años n Cía. Minera Cerro Negro, 1 año Jacobs Ingeniería, 20 años en Minera Centinela. Principales cargos ocupados: Ingeniero de Procesos, Jefe de Plantas, Jefe de Disciplina de Procesos, Metalurgista de Operaciones, Metalurgista de Proyectos, Metalurgista Largo Plazo, Jefe de Proyectos. Enero de 2019 se integra a la empresa ASMIN.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      ],
    },
  ],
  footer: {
    heading: "We're hiring!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: { title: "Open positions", variant: "secondary" },
  },
};
