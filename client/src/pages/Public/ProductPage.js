import React, { Suspense } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ProductCarousel from "../../components/Product/ProductCarousel";
import ProductInfo from "../../components/Product/ProductInfo";
import { getOneProducts } from "../../http/ProductApi";
import { Await, defer, useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const { product } = useLoaderData();

  return (
    <Container>
      <Row>
        <Suspense fallback={<Spinner animation="grow"></Spinner>}>
          <Await resolve={product}>
            {(resolvedProduct) => {
              let objImg = { img: resolvedProduct.icon };
              resolvedProduct.imgs.push(objImg);
              return (
                <>
                  <ProductCarousel imgs={resolvedProduct.imgs} />
                  <ProductInfo product={resolvedProduct} />
                </>
              );
            }}
          </Await>
        </Suspense>
      </Row>
    </Container>
  );
};

const ProductLoader = async ({ params }) => {
  return defer({
    product: getOneProducts(params.id),
  });
};

export { ProductPage, ProductLoader };
