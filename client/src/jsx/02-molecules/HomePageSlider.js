import React from 'react';
import { Link } from 'react-router-dom';
import img1 from 'assets/brands/adidas.png';
import img2 from 'assets/brands/converse.png';
import img3 from 'assets/brands/guess.png';
import img4 from 'assets/brands/new-balance.png';
import img5 from 'assets/brands/reebok.png';
import img6 from 'assets/brands/tommy-hilfiger.png';
import img7 from 'assets/brands/puma.png';
import img8 from 'assets/brands/umbro.png';


const HomePageSlider = () => {
    return ( 
        <>
            <section className="home__slider-wrapper">
                <h4 className="home__slider__heading">Popularne Marki</h4>

                <div className="home__slider">
                    
                    <Link to={{ pathname:"/brand/adidas", state: { filter: { brand: "adidas" }, heading: "Marka: Adidas" } }} className='home__slider__img'><div > <img src={img1} alt="adidas"/> </div></Link>
                    <Link to={{ pathname:"/brand/converse", state: { filter: { brand: "converse" }, heading: "Marka: Converse" } }} className='home__slider__img'><div > <img src={img2} alt="converse"/> </div></Link>
                    <Link to={{ pathname:"/brand/guess", state: { filter: { brand: "guess" }, heading: "Marka: Guess" } }} className='home__slider__img'><div > <img src={img3} alt="guess"/> </div></Link>
                    <Link to={{ pathname:"/brand/new balance", state: { filter: { brand: "new balance" }, heading: "Marka: New Balance" } }}  className='home__slider__img'><div > <img src={img4} alt="new balance"/> </div></Link>
                    <Link to={{ pathname:"/brand/reebok", state: { filter: { brand: "reebok" }, heading: "Marka: Reebok" } }} className='home__slider__img'><div > <img src={img5} alt="reebok"/> </div></Link>
                    <Link to={{ pathname:"/brand/tommy hilfiger", state: { filter: { brand: "tommy hilfiger" }, heading: "Marka: Tommy Hilfiger" } }}  className='home__slider__img home__slider__img--large'> <div ><img src={img6} alt="tommy hilfiger"/> </div> </Link> 
                    <Link to={{ pathname:"/brand/puma", state: { filter: { brand: "puma" }, heading: "Marka: Puma" } }} className='home__slider__img'><div > <img src={img7} alt="puma"/> </div></Link>
                    <Link to={{ pathname:"/brand/umbro", state: { filter: { brand: "umbro" }, heading: "Marka: Umbro" } }} className='home__slider__img'><div > <img src={img8} alt="umbro"/> </div></Link>
                </div>

            </section>
        </>
     );
}
 
export default HomePageSlider;