import { Header } from "./components/Header";
import { Lapsus } from "./components/Lapsus";
import { Lapsus2 } from "./components/Lapsus2";


import { Logo } from "./components/Logo";




export default function Page() {
    return (
      <div>
        <Header />
        <Logo />
        <Lapsus2 />
        <Lapsus />
        <Lapsus2 />
      </div>
    );
  }