import React from "react";
import TextCircle from "./TextCircle";
const Rectangle = (variation) => {
  const countries = [
    "Казахстан",
    "Россия",
    "Беларусь",
    "Киргизия",
    "Китай",
    "Узбекистан",
  ];
  return (
    <div className="rounded-2 py-5 px-2 bg-white">
      <h4>ДОСТАВКА</h4>
      <p className="mt-3">
        Теплый и приятный к телу худи из высококачественного хлопка с флисовым
        подкладом. В просторном основном кармане скрывается несколько небольших
        карманов для хранения мелочи, ключей или телефона. Принт по мотивам
        аниме Тетрадь смерти.
      </p>
      <h5 className="text-gray">СТРАНЫ</h5>
      <div className="d-flex">
        {countries.map((country) => (
          <TextCircle
            title={country.toUpperCase()}
            color={"#F3F3F2"}
          ></TextCircle>
        ))}
      </div>
      <h5 className="text-gray">СЕРВИС</h5>
      <TextCircle title={"СДЭК"} color={"#F3F3F2"}></TextCircle>
    </div>
  );
};
export default Rectangle;
