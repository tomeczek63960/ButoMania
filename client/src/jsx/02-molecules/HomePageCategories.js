import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import FlexTemplate from 'jsx/04-templates/FlexTemplate';

const HomePageCategories = () => {
    return ( 
        <>
            <FlexTemplate heading="Popularne Kategorie">

                <Link to={{ pathname: '/category/sneakersy', state: { filter: { shoesType: "sneakersy" }, heading: "Kategoria: Sneakersy" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/tomeczek123/image/upload/v1606752974/shoes-webp/ezgif.com-gif-maker_6_vjbkuq.webp" alt="sneakersy"/></div>
                    <h5 className="flex-template__item__heading">Sneakersy</h5>
                </Link>
                <Link to={{ pathname: '/category/szpilki', state: { filter: { shoesType: "szpilki" }, heading: "Kategoria: Szpilki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/tomeczek123/image/upload/v1606752427/shoes-webp/ezgif.com-gif-maker_1_wjcpkh.webp" alt="Buty na obcasie"/></div>
                    <h5 className="flex-template__item__heading">Buty na obcasie</h5>
                </Link>
                <Link to={{ pathname: '/category/klapki', state: { filter: { shoesType: "klapki" }, heading: "Kategoria: Klapki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/tomeczek123/image/upload/v1606754152/shoes-webp/ezgif.com-gif-maker_ja05zb.webp" alt="klapki"/></div>
                    <h5 className="flex-template__item__heading">Klapki</h5>
                </Link>
                <Link to={{ pathname: '/category/tenisówki', state: { filter: { shoesType: "tenisówki" }, heading: "Kategoria: Tenisówki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/tomeczek123/image/upload/v1606751938/shoes-webp/ezgif.com-gif-maker_3_oihb9i.webp" alt="tenisówki"/></div>
                    <h5 className="flex-template__item__heading">Tenisówki</h5>
                </Link>
                <Link to={{ pathname: '/category/trampki', state: { filter: { shoesType: "trampki" }, heading: "Kategoria: Trampki" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/tomeczek123/image/upload/v1606751877/shoes-webp/ezgif.com-gif-maker_2_hrvpjk.webp" alt="Trampki"/></div>
                    <h5 className="flex-template__item__heading">Trampki</h5>
                </Link>
                <Link to={{ pathname: '/category/sportowe', state: { filter: { shoesType: "sportowe" }, heading: "Kategoria: Sportowe" } }} className="flex-template__item">
                    <div className="flex-template__item__img"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/tomeczek123/image/upload/v1606752004/shoes-webp/ezgif.com-gif-maker_1_grcpht.webp" alt="Sportowe"/></div>
                    <h5 className="flex-template__item__heading">Sportowe</h5>
                </Link>
                
            </FlexTemplate>
        </>
     );
}
 
export default HomePageCategories;