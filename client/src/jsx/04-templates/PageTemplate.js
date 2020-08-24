import React from 'react';
import PageNav from 'jsx/02-molecules/PageNav';
import PageFooter from 'jsx/02-molecules/PageFooter';
import PropTypes from 'prop-types';

const PageTemplate = ({ children }) => {
    return ( 
        <>
            <div className="center-wrapper">
                <PageNav />
                { children }
                <PageFooter/>
            </div>
        </>
     );
}
PageTemplate.propTypes = {
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
} ;
export default PageTemplate;