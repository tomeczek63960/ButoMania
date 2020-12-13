import React from 'react';

const PageHero = React.lazy(() => import('jsx/02-molecules/PageHero'));
const HomePageSlider = React.lazy(() => import('jsx/02-molecules/HomePageSlider'));
const HomePageCategories = React.lazy(() => import('jsx/02-molecules/HomePageCategories.js'));
const HomeShoes = React.lazy(() => import('jsx/02-molecules/HomeShoes.js'));
const PageTemplate = React.lazy(() => import('jsx/04-templates/PageTemplate.js'));
const FullSearchForm = React.lazy(() => import('jsx/03-organisms/FullSearchForm.js'));

const HomePage = () => {
    return ( 
        <>  
            <React.Suspense fallback={<div>Wczytuje dane ...</div>}>
                <PageTemplate>
                    <PageHero/>

                    <main>
                        <FullSearchForm/>
                        <HomePageSlider />
                        <HomePageCategories />
                        <HomeShoes/>
                    </main>

                </PageTemplate>
            </React.Suspense>
        </>
     );
}
 
export default HomePage;