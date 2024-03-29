import React from "react";
import TextCircle from "./TextCircle";
const TwoRectangle = (variation) => {
  const banks = ["Kaspi Gold", "Банки других стран", "Банки России"];
  return (
    <div>
      <div className="rounded-2 py-5 px-2 bg-white">
        <h4>ОПЛАТА</h4>
        <p className="mt-3">
          Теплый и приятный к телу худи из высококачественного хлопка с флисовым
          подкладом. В просторном основном кармане скрывается несколько
          небольших карманов для хранения мелочи, ключей или телефона. Принт по
          мотивам аниме Тетрадь смерти.
        </p>
        <h5 className="text-gray">БАНКИ</h5>
        <div className="d-flex">
          {banks.map((bank) => (
            <TextCircle
              title={bank.toUpperCase()}
              color={"#F3F3F2"}
            ></TextCircle>
          ))}
        </div>
      </div>
      <div className="rounded-2 py-5 px-2 bg-white d-flex mt-3">
        <h4>ВОЗВРАТ</h4>
        <p>
          Теплый и приятный к телу худи из высококачественного хлопка с флисовым
          подкладом. В просторном основном кармане скрывается несколько
          небольших карманов для хранения мелочи, ключей или телефона.
        </p>
      </div>
    </div>
  );
};
export default TwoRectangle;
