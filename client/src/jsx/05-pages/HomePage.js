import React from 'react';

import PageHero from 'jsx/02-molecules/PageHero';
import HomePageSlider from 'jsx/02-molecules/HomePageSlider';
import HomePageCategories from 'jsx/02-molecules/HomePageCategories';
import HomeShoes from 'jsx/02-molecules/HomeShoes';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import FullSearchForm from 'jsx/03-organisms/FullSearchForm';

const HomePage = () => {
    return ( 
        <>  
            <PageTemplate>
                <PageHero/>

                <main>
                    <FullSearchForm/>
                    <HomePageSlider />
                    <HomePageCategories />
                    <HomeShoes/>
                </main>

            </PageTemplate>
        </>
     );
}
 
export default HomePage;