import { FaXTwitter } from "react-icons/fa6";
import "./styles/Footer.css"
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type FooterProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer = (props: FooterProps) => {
  const { logo, footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...FooterDefaults,
    ...props,
  };
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 text-[var(--text-200)]">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href={logo.url} className="lg:justify-self-start">
            <img src={logo.src} alt={logo.alt} className="inline-block xl:bg-transparent" />
          </a>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold">
                  <a  className="text-[var(--text-100)] hover:text-[var(--primary-200)]">
                  {/* <a href={link.url}>{link.title}</a> */}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a  target="_blank" key={index} href={link.url} className="text-[var(--text-100)] hover:text-[var(--primary-100)] texto-con-borde_footer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-[var(--primary-200)]" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline decoration-[var(--primary-200)] underline-offset-1 hover:text-[var(--primary-200)]">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const FooterDefaults: Props = {
  logo: {
    url: "/home",
    src: "/images/asminlogo.png",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "Parque Industrial Lo Boza", url: "" },
        { title: "Antillanca Sur N° 561 -", url: "" },
        { title: "Pudahuel -", url: "" },
        { title: "Santiago -", url: "" },
        { title: "Chile", url: "" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "https://www.facebook.com/p/Asmin-industrial-100076074250253/?locale=es_LA", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "https://www.instagram.com/asmin_industrial", icon: <BiLogoInstagram className="size-6" /> },
    { url: "https://x.com/asminindustrial", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "https://www.linkedin.com/company/asmin-industrial-limitada/", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "https://www.youtube.com/@asminindustrial", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2025 ASMIN INDUSTRIAL LTDA. Todos los derechos reservados.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
