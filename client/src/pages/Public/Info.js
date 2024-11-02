import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import TextCircle from "../../components/Elements/TextCircle";
import { getAllSizes } from "../../http/AdminApi/SizesApi";
import Loading from "../../components/Elements/Loading";
const countries = [
  "КАЗАХСТАН",
  "РОССИЯ",
  "БЕЛАРУСЬ",
  "КИРГИЗИЯ",
  "КИТАЙ",
  "УЗБЕКИСТАН",
];
const banks = ["KASPI GOLD", "БАНКИ ДРУГИХ СТРАН", "БАНКИ РОССИИ"];

const Info = () => {
  const [state, setState] = useState({
    sizes: [],
    isLoading: true,
    error: null,
  });
  const formatValue = (value) => {
    return parseFloat(value) % 1 === 0 ? parseInt(value, 10) : value;
  };
  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const sizes = await getAllSizes();
        const groupedSizes = groupByCategory(sizes);
        setState({ sizes: groupedSizes, isLoading: false, error: null });
      } catch (err) {
        setState({ sizes: [], isLoading: false, error: err.message });
      }
    };

    fetchSizes();
  }, []);

  const { sizes, isLoading, error } = state;

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>Error loading sizes: {error}</div>;
  }

  return (
    <Container className="px-0">
      <Row xs={1} md={2} className="my-3">
        <div className="pe-4 ps-0 ">
          <div className="rounded-4 bg-white p-5 pb-0 h-100">
            <h2 className="font-weight-normal">ДОСТАВКА</h2>
            <p className="my-3">
              Доставка по Алматы осуществляется с помощью сервиса Яндекс,
              обеспечивая оперативность и удобство получения заказа. Для
              отправки товаров в другие города Казахстана, а также в страны СНГ,
              указанные ниже, мы используем надежные услуги курьерской службы
              CDEK.
            </p>
            <h4 className="text-gray">СТРАНЫ</h4>
            <div className="d-flex flex-wrap">
              {countries.map((country, index) => (
                <TextCircle
                  key={index}
                  title={country.toUpperCase()}
                  color={"#F3F3F2"}
                ></TextCircle>
              ))}
            </div>
            <h4 className="text-gray">СЕРВИС</h4>
            <TextCircle title={"СДЕК"} color={"#F3F3F2"}></TextCircle>
          </div>
        </div>
        <div className="ps-4 pe-0 d-grid justify-between">
          <div className="rounded-4 bg-white p-5">
            <h2 className="font-weight-normal">ОПЛАТА</h2>
            <p className="my-3">
              Для жителей Республики Казахстан оплата осуществляется через Kaspi
              Gold.
              <br /> Для жителей России поддерживаются карты российских банков.
              <br />
              Для держателей карт из других стран оплата производится через
              платежную систему Visa.
            </p>
            <h4 className="text-gray">БАНКИ</h4>
            <div className="d-flex">
              {banks.map((bank, index) => (
                <TextCircle
                  key={index}
                  title={bank.toUpperCase()}
                  color={"#F3F3F2"}
                ></TextCircle>
              ))}
            </div>
          </div>

          <div className="rounded-4 p-5 mt-5 bg-white d-flex">
            <h2 className="font-weight-normal">ВОЗВРАТ</h2>
            <ul>
              <li>Обнаружен заводской брак изделия.</li>
              <li>
                Получен товар, не соответствующий заказу по вине магазина.
              </li>
            </ul>
          </div>
        </div>
      </Row>
      <div className="rounded-2 p-5 mt-5 bg-white d-flex">
        <div className="me-5">
          <h2 className="font-weight-normal">РАЗМЕРНАЯ</h2>
          <h2 className="font-weight-normal my-3">СЕТКА</h2>
          <h2 className="font-weight-normal">ОДЕЖДЫ</h2>
        </div>
        <Table responsive="xl">
          <tbody>
            {sizes.map((categorySize, idx) => (
              <tr key={idx}>
                <td>
                  <h2 className="text-light-gray me-3 mb-5 mt-2">
                    {categorySize[0].category.title}
                  </h2>
                </td>
                {categorySize.map((size) => (
                  <td key={size.id}>
                    <div className="d-flex align-items-start">
                      <div className=" ms-5">
                        <h1 className="display-2 line-height-8">{size.code}</h1>
                      </div>
                      <div className="d-flex">
                        <div className="border-left-solid my-2 mx-3"></div>
                        <div>
                          <h4 className="font-weight-thin">
                            ДЛИНА{" "}
                            <span className="font-weight-normal">
                              {formatValue(size.length)}
                            </span>
                          </h4>
                          <h4 className="font-weight-thin">
                            ГРУДЬ{" "}
                            <span className="font-weight-normal">
                              {formatValue(size.chest)}
                            </span>
                          </h4>
                        </div>
                        <div className="border-left-solid my-2 mx-3"></div>
                        <div>
                          <h4 className="font-weight-thin">
                            ПЛЕЧО{" "}
                            <span className="font-weight-normal">
                              {formatValue(size.shoulder)}
                            </span>
                          </h4>
                          <h4 className="font-weight-thin">
                            РУКАВ{" "}
                            <span className="font-weight-normal">
                              {formatValue(size.sleeve)}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
const groupByCategory = (sizes) => {
  return Object.values(
    sizes.reduce((acc, size) => {
      const categoryTitle = size.category.title;
      if (!acc[categoryTitle]) {
        acc[categoryTitle] = [];
      }
      acc[categoryTitle].push(size);
      return acc;
    }, {})
  );
};
export default Info;
