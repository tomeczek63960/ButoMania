import React from 'react';
import { Link } from 'react-router-dom';
import FlexTemplate from 'jsx/04-templates/FlexTemplate';

const HomePageCategories = () => {
    return ( 
        <>
            <FlexTemplate heading="Popularne Kategorie">

                <Link to={{ pathname: '/category/sneakersy', state: { filter: { shoesType: "sneakersy" }, heading: "Kategoria: Sneakersy" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><img src="https://res.cloudinary.com/tomeczek123/image/upload/v1597147073/shoes/nike-white_inoyh6.png" alt="sneakersy"/></div>
                    <h5 className="flex-template__item__heading">Sneakersy</h5>
                </Link>
                <Link to={{ pathname: '/category/szpilki', state: { filter: { shoesType: "szpilki" }, heading: "Kategoria: Szpilki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><img src="https://res.cloudinary.com/tomeczek123/image/upload/v1597143616/shoes/gino-rossi2_lp5wfp.png" alt="Buty na obcasie"/></div>
                    <h5 className="flex-template__item__heading">Buty na obcasie</h5>
                </Link>
                <Link to={{ pathname: '/category/klapki', state: { filter: { shoesType: "klapki" }, heading: "Kategoria: Klapki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><img src="https://res.cloudinary.com/tomeczek123/image/upload/v1598114488/shoes/klapki2_lgzny9.png" alt="klapki"/></div>
                    <h5 className="flex-template__item__heading">Klapki</h5>
                </Link>
                <Link to={{ pathname: '/category/tenisówki', state: { filter: { shoesType: "tenisówki" }, heading: "Kategoria: Tenisówki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><img src="https://res.cloudinary.com/tomeczek123/image/upload/v1597137330/shoes/tenis%C3%B3wki_fxpz0i.png" alt="tenisówki"/></div>
                    <h5 className="flex-template__item__heading">Tenisówki</h5>
                </Link>
                <Link to={{ pathname: '/category/trampki', state: { filter: { shoesType: "trampki" }, heading: "Kategoria: Trampki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><img src="https://res.cloudinary.com/tomeczek123/image/upload/v1597075959/shoes/trampki_czerwone_ti3bti.png" alt="Trampki"/></div>
                    <h5 className="flex-template__item__heading">Trampki</h5>
                </Link>
                <Link to={{ pathname: '/category/sportowe', state: { filter: { shoesType: "sportowe" }, heading: "Kategoria: Sportowe" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><img src="https://res.cloudinary.com/tomeczek123/image/upload/v1597076496/shoes/reebok_blue_b77eoc.png" alt="Sportowe"/></div>
                    <h5 className="flex-template__item__heading">Sportowe</h5>
                </Link>
                
            </FlexTemplate>
        </>
     );
}
 
export default HomePageCategories;