import React from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const LoaderComponent = () => {

    const authLoadin = useSelector(state => state.authReducer.loading);
    const productLoading = useSelector(state => state.productReducer.loading);
    const basketLoading = useSelector(state => state.basketReducer.loading);
    
    return ( 
      ( authLoadin || productLoading || basketLoading ) ? 
        <div className='loader-wrapper'>
          <Loader
              type="TailSpin"
              color="#00BFFF"
              height={100}
              width={100}
          />
      </div>
      : ''

     );
}
 
export default LoaderComponent;