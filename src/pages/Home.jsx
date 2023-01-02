import heroImg from "../assets/hero-image.png";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Home() {
  return(
    <>
      <Header />

      <div className="w-[1120px] h-[260px] mx-auto mt-[164px] flex items-center bg-gradient-to-b from-blue-500 to-blue-700 rounded-md">
        <img
          className="mb-32 ml-[-72px]" 
          src={heroImg} 
          alt="Ingredientes de deliciosos pratos dispostos no ar" 
        />
        <div>
          <h1 className="font-heading font-medium text-[40px]">
            Sabores inigualáves
          </h1>
          <p className="font-heading font-normal text-base">
            Sinta o cuidado do preparo com ingredientes selecionados
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}