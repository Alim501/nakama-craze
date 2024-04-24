import React from "react";
import { Container, Row } from "react-bootstrap";
import TextCircle from "../../components/Elements/TextCircle";
const countries = [
  "КАЗАХСТАН",
  "РОССИЯ",
  "БЕЛАРУСЬ",
  "КИРГИЗИЯ",
  "КИТАЙ",
  "УЗБЕКИСТАН",
];
const banks = ["KASPI GOLD", "LOREM", "IPSUM", "КИТАЙ", "УЗБЕКИСТАН"];
const Info = () => {
  return (
    <Container>
      <Row xs={1} md={2}>
        <div className="rounded-2 bg-white">
          <h4>ДОСТАВКА</h4>
          <p className="mt-3">
            Теплый и приятный к телу худи из высококачественного хлопка с
            флисовым подкладом. В просторном основном кармане скрывается
            несколько небольших карманов для хранения мелочи, ключей или
            телефона. Принт по мотивам аниме Тетрадь смерти.
          </p>
          <h5 className="text-gray">СТРАНЫ</h5>
          <div className="d-flex">
            {countries.map((country,index) => (
              <TextCircle
                key={index}
                title={country.toUpperCase()}
                color={"#F3F3F2"}
              ></TextCircle>
            ))}
          </div>
          <h5 className="text-gray">СЕРВИС</h5>
          <TextCircle title={"СДЭК"} color={"#F3F3F2"}></TextCircle>
        </div>
        <div>
          <div className="rounded-2 bg-white">
            <h4>ОПЛАТА</h4>
            <p className="mt-3">
              Теплый и приятный к телу худи из высококачественного хлопка с
              флисовым подкладом. В просторном основном кармане скрывается
              несколько небольших карманов для хранения мелочи, ключей или
              телефона. Принт по мотивам аниме Тетрадь смерти.
            </p>
            <h5 className="text-gray">БАНКИ</h5>
            <div className="d-flex">
              {banks.map((bank,index) => (
                <TextCircle
                  key={index}
                  title={bank.toUpperCase()}
                  color={"#F3F3F2"}
                ></TextCircle>
              ))}
            </div>
          </div>
          <div className="rounded-2 py-5 px-2 bg-white d-flex">
            <h4>ВОЗВРАТ</h4>
            <p>
              Теплый и приятный к телу худи из высококачественного хлопка с
              флисовым подкладом. В просторном основном кармане скрывается
              несколько небольших карманов для хранения мелочи, ключей или
              телефона.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default Info;
