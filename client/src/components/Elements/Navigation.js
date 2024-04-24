import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ANIME_ROUTE, INFO_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { Container } from "react-bootstrap";

const Navigation = () => {
    const location = useLocation();
    let page
    switch(location.pathname){
        case(INFO_ROUTE):
            page='ИНФОРМАЦИЯ'
            break;
        case(ANIME_ROUTE):
            page='АНИМЕ'
            break;
        case(SHOP_ROUTE):
            page='КОЛЛЕКЦИИ'
            break;
        default:
            return
    }
  return (
    
    <Container>
        <div className="d-flex">
        <Link className="text-black no-under" to={MAIN_ROUTE}>ГЛАВНАЯ&nbsp; </Link>
        <h5> - </h5>
        <Link className="text-black no-under" to={location.pathname}> &nbsp;{page}</Link>
        </div>
        <h4>{page}</h4>
    </Container>
  );
};
export default Navigation;