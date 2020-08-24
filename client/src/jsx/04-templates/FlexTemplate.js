import React from 'react';
import PropTypes from 'prop-types';

const FlexTemplate = ({ children, heading }) => {
    return ( 
        <>
            <section className="flex-template">
                <h3 className="flex-template__heading">{ heading }</h3>

                <div className="flex-template__container">
                    {children}
                </div>
            </section>
        </>
     );
}
FlexTemplate.propTypes = {
    children:  PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    heading: PropTypes.string
};

export default FlexTemplate;