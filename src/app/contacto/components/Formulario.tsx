"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
  Textarea,
  Button,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type FormularioProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Formulario = (props: FormularioProps) => {
  const { tagline, heading, description, button } = {
    ...FormularioDefaults,
    ...props,
  };

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedRadio] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms] = useState<boolean | "indeterminate">(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput,
      selectedItem,
      selectedRadio,
      messageInput,
      acceptTerms,
    });
  };

  const selectItems = [
    { value: "presupuesto", label: "Presupuesto" },
    { value: "servicio", label: "Servicio" },
    { value: "consulta", label: "Consulta" },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                Nombre
              </Label>
              <Input
                type="text"
                id="firstName"
                value={firstNameInput}
                onChange={(e) => setFirstNameInput(e.target.value)}
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Apellido
              </Label>
              <Input
                type="text"
                id="lastName"
                value={lastNameInput}
                onChange={(e) => setLastNameInput(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Teléfono de Contacto
              </Label>
              <Input
                type="text"
                id="phone"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
              />
            </div>
          </div>

          <div className="grid w-full items-center">
            <Label className="mb-2">Selecciona tu solicitud</Label>
            <Select onValueChange={setSelectedItem}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                {selectItems.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">Which best describes you?</Label>
            <RadioGroup
              className="grid grid-cols-2 gap-x-6 gap-y-3.5"
              onValueChange={setSelectedRadio}
            >
              {radioItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={item.value} id={item.value} />
                  <Label htmlFor={item.value}>{item.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div> */}

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Por favor, detalla tu consulta o solicitud..."
              className="min-h-[11.25rem] overflow-auto"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          {/* <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the{" "}
              <a className="text-link-primary underline" href="#">
                Terms
              </a>
            </Label>
          </div> */}

          <div className="text-center texto-con-borde_footer">
            <Button {...button}>{button.title}</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const FormularioDefaults: Props = {
  tagline: "",
  heading: "Envíanos tu Consulta o Solicitud",
  description: "",
  button: { title: "Enviar" },
};
