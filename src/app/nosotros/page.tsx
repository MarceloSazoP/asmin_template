import { Gallery } from "./components/Gallery";
import { Layout1 } from "./components/Layout1";
import { Layout2 } from "./components/Layout2";
import { PortaFolio } from "./components/Portafolio";
import { Team } from "./components/Team";

export default function Page() {
    return (
      <div>
        
        <Layout2 />
        <Layout1 />
        <Gallery />
        <PortaFolio />      
        <Team />
      </div>
    );
  }