import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import heroBg1 from 'assets/hero2.webp';
import heroBg2 from 'assets/hero3.webp';
import heroBg3 from 'assets/hero.webp';

import heroBg1Sm from 'assets/hero-sm.webp';
import heroBg2Sm from 'assets/hero-2-sm.webp';
import heroBg3Sm from 'assets/hero-3-sm.webp';

const PageHero = () => {
    let [ activeSlide, setActiveSlide ] = useState(); 
    let interval; 

    useEffect(()=>{
        interval = setInterval(()=>{
            if(activeSlide === 2){
                setActiveSlide(0);
            }else{
                setActiveSlide( activeSlide + 1 );
            }
        },7500);
        return () => clearInterval(interval);
    });
    useEffect(()=>{
        setActiveSlide(0)
    },[]);

    return ( 
        <>
                 
            <header className="page-hero">
                <div className="page-hero__bg" >
                    <div className="page-hero__bg__slid" >
                        {
                            window.innerWidth <= 600 ? 
                            <img  src={heroBg3Sm} alt="Nike shoes"/>
                            :
                            <img  src={heroBg3} alt="Nike shoes"/>
                        }
                    </div>
                    <div className={`page-hero__bg__slid ${activeSlide === 0 && "page-hero__bg__slid--active" }`}>
                        <div className="page-hero__bg__content">
                            <h3 className='page-hero__bg__heading'>Bogata oferta <br/> butów Nike</h3>
                            <Link to={{pathname:'/filter',state: { filter: { brand: "nike" } } }} className='page-hero__bg__btn' >Zobacz</Link>
                        </div>
                        {
                            window.innerWidth <= 600 ? 
                            <img  src={heroBg3Sm} alt="Nike shoes"/>
                            :
                            <img  src={heroBg3} alt="Nike shoes"/>
                        }
                    </div>
                    <div className={`page-hero__bg__slid ${activeSlide === 1 && "page-hero__bg__slid--active" }`}>
                        <div className="page-hero__bg__content">
                            <h3 className='page-hero__bg__heading'>Powtrót do szkoły <br/> ze stylem</h3>
                            <Link to={{pathname:'/filter',state: { filter: { shoesType: "tenisówki" } } }} className='page-hero__bg__btn' >Zobacz</Link>
                        </div>
                        {
                              window.innerWidth <= 600 ? 
                              <img  src={heroBg1Sm} alt="Nike shoes"/>
                              :
                              <img  src={heroBg1} alt="Nike shoes"/>
                        }
                    </div>
                    <div className={`page-hero__bg__slid ${activeSlide === 2 && "page-hero__bg__slid--active" }`}>
                        <div className="page-hero__bg__content">
                            <h3 className='page-hero__bg__heading'>Najlepsze buty <br/> do biegania</h3>
                            <Link to={{pathname:'/filter',state: { filter: { shoesType: "sneakersy" } } }} className='page-hero__bg__btn' >Zobacz</Link>
                        </div>
                        {
                            window.innerWidth <= 600 ? 
                            <img  src={heroBg2Sm} alt="Nike shoes"/>
                            :
                            <img  src={heroBg2} alt="Nike shoes"/>
                        }
                    </div>
                </div>

                <div className="page-hero__pagination">
                    <span className='page-hero__pagination__span' onClick ={()=> setActiveSlide(0) }>
                        <span className={`page-hero__pagination__span__progress ${activeSlide === 0 && 'page-hero__pagination__span__progress--active'}`} ></span>
                    </span>
                    <span className='page-hero__pagination__span' onClick ={()=> setActiveSlide(1) }>
                        <span className={`page-hero__pagination__span__progress ${activeSlide === 1 && 'page-hero__pagination__span__progress--active'}`}  ></span>
                    </span>
                    <span className='page-hero__pagination__span' onClick ={()=> setActiveSlide(2) }>
                        <span className={`page-hero__pagination__span__progress ${activeSlide === 2 && 'page-hero__pagination__span__progress--active'}`}  ></span>
                    </span>
                </div>
              
            </header>
        </>
     );
}
 
export default PageHero;