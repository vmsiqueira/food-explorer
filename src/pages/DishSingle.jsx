import { useState } from "react";
import { Minus, Plus, Receipt } from "phosphor-react";

import saladImg from "../assets/salad.png";

import { HeaderButton } from "../components/HeaderButton";

export function DishSingle() {
  const [amount, setAmount] = useState(1);

  function increaseDishAmount() {
    setAmount(amount + 1);
  } 

  function decreaseDishAmount() {
    if(amount === 0) {
      return;
    }

    setAmount(amount - 1);
  }
  return (
    <div className="h-screen max-w-[1120px] mx-auto mt-6  bg-red-500">
      <a href="#" className="font-heading font-medium text-2xl">
        &lt; voltar
      </a>

      <div className="flex items-center gap-10 mt-10">
        <img 
          className="w-[389px]"
          src={saladImg} 
          alt="Main dish picture" 
        />

        <div>
          <h2 className="font-heading font-medium text-[40px]">
            Salada Ravanello
          </h2>
          <p className="font-heading font-regular text-2xl mt-2 mb-6">
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <div className="flex items-center justify-start gap-4">
            <div>
              <img 
                className="w-[59px]"
                src={saladImg} 
                alt="Ingrediente do prato principal" 
              /> 
              <span className="font-heading text-md">
                Ingredient
              </span>
            </div>
            <div>
              <img 
                className="w-[59px]"
                src={saladImg} 
                alt="Ingrediente do prato principal" 
              /> 
              <span className="font-heading text-md">
                Ingredient
              </span>
            </div>
            <div>
              <img 
                className="w-[59px]"
                src={saladImg} 
                alt="Ingrediente do prato principal" 
              /> 
              <span className="font-heading text-md">
                Ingredient
              </span>
            </div>
          </div>

          <div className="flex items-center mt-12 gap-14">
            <h3 className="font-regular text-3xl text-cyan-500">
              R$ 25,97
            </h3>
            <div className="flex items-center justify-end gap-8">
              <div  className="flex items-center gap-[14px]">
                <Minus 
                  size={24} 
                  onClick={decreaseDishAmount}
                />
                <span className="font-bold text-xl">
                  {amount}
                </span>
                <Plus 
                  size={24}
                  onClick={increaseDishAmount} 
                />
              </div>
              <HeaderButton type="button" icon={<Receipt size={32} />} title="Incluir" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}