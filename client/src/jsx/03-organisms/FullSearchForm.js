import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'jsx/02-molecules/Select';
import PropTypes from 'prop-types';

const FullSearchForm = ({ defaultValues }) => {
    const history = useHistory();
    let color = ['wszystkie'];
    let size = ['wszystkie'];
    const inputResetColorRef = useRef();
    const inputResetSizeRef = useRef();
 
    const [formData, setFormData] = useState({
        type:"wszystkie",
        shoesType:"wszystkie",
        brand:"wszystkie",
        minPrice:0,
        maxPrice:1000
    });
    const toggleSearchForm = (e) =>{
        if(window.innerWidth >= 700) return;
        e.target.nextElementSibling.classList.toggle('full-search-form--active');
    }
    const handleValuesChange = (e, type) => {
        setFormData({
            ...formData,
            [type]: e.target.value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const { type, shoesType, minPrice, maxPrice, brand } = formData;
        
        const filter = {
            type,
            shoesType,
            brand,
            size,
            color,
            price: { min: minPrice, max: maxPrice }
        };

        history.push({ pathname:'/full-search', state:{ filter }})
    }
  
    const bodyClick = function(e) {
        if(e.target.classList.contains('select__label') || e.target.type ==='checkbox' || e.target.classList.contains('select__close-icon')) return;
        [...document.querySelectorAll('.select')].forEach(item => item.classList.remove('select--active'));
    };

    useEffect(()=>{
        if(!defaultValues) return;

        const { type, shoesType, brand, price, color, size } = defaultValues;
        setFormData({
            ...formData,
            type,
            shoesType,
            brand,
            minPrice: price.min,
            maxPrice: price.max,
        });

        color.forEach(color =>{
            if(color === 'wszystkie') return;
            document.getElementById(color).checked = true;
        });
        size.forEach(size =>{
            if(size === 'wszystkie') return;
            document.getElementById(`size-${size}`).checked = true;
        });
    },[defaultValues]);  
    useEffect(()=>{
        document.body.addEventListener('click',bodyClick);
    },[]);
    return ( 
        <>
            <button className='full-search-form__toggler' onClick={toggleSearchForm} >Zaawansowane wyszukiwanie</button>
           
            <form action="#" className='full-search-form' onSubmit={handleSubmit} >
                <div className='full-search-form__type'>
                    <p className="full-search-form__heading">Typ</p>

                    <select name="type" id="type" className='full-search-from__select' value={formData.type} onChange={(e) =>handleValuesChange(e,'type') }>
                        <option value="wszystkie">wszystkie</option>
                        <option value="meskie">męskie</option>
                        <option value="damskie">damskie</option>
                    </select>
                </div>

                <div>
                    <p className="full-search-form__heading">Rodzaj butów</p>
                   
                    <select name="shoesType" id="shoesType" value={formData.shoesType} className='full-search-form__select' onChange={(e) => handleValuesChange(e, 'shoesType') }>
                        <option value="wszystkie">wszystkie</option>
                        <option value="sneakersy">sneakersy</option>
                        <option value="klapki">klapki</option>
                        <option value="szpilki">szpilki</option>
                        <option value="trampki">trampki</option>
                        <option value="tenisówki">tenisówki</option>
                        <option value="sportowe">sportowe</option>
                    </select>
                </div>
                <div>
                    <p className="full-search-form__heading">Marka</p>
                    <select name="brandselect" id="brandSelect" value={formData.brand} className='full-search-from__select' onChange={e => handleValuesChange(e, 'brand')}>
                        <option value="wszystkie">wszystkie</option>
                        <option value="nike">nike</option>
                        <option value="adidas">adidas</option>
                        <option value="puma">puma</option>
                        <option value="tommy hilfiger">tommy hilfiger</option>
                        <option value="converse">converse</option>
                    </select>
                </div>
               
                <div className='full-search-form__price'>
                    <p className="full-search-form__heading">Cena</p>
                    
                    <div className="full-search-form__price__content">
                        <div className='full-search-form__price-range'>
                            <input  type="number" placeholder="od" name='min-price' id='min-price' min='0' max={formData.maxPrice} value={formData.minPrice} onChange={ e => handleValuesChange(e,'minPrice')}/>
                        </div>
                        <div className='full-search-form__price-range'>
                            <input  type="number" placeholder="do" name='max-price' id='max-price' min={formData.minPrice} max='10000' value={formData.maxPrice} onChange={ e => handleValuesChange(e,'maxPrice')}/>
                        </div>
                    </div>
                </div>

                <div className='select-colors' >
                    <p className="full-search-form__heading">Kolor</p>

                    <Select defaultValues={defaultValues ? defaultValues.color : null} resetInputRef = { inputResetColorRef }>
                        {
                            (toggleColors, colorArr) =>{ 
                                color = colorArr;
                           
                                return (
                                <>
                                    <div className="select-slider__slid"> 
                                        <input className='inp slider__checkbox--reset' type="checkbox" name="color-all" onChange={toggleColors} id="color-all" value='wszystkie' ref ={inputResetColorRef}/> 
                                        <label className='select__label' htmlFor="color-all"> <span className="checkbox-styled"></span> Wszystkie</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="czarny" value='czarny' id="czarny"/> 
                                        <label className='select__label' htmlFor="czarny"> <span className="checkbox-styled"></span> czarny</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="czerwony" value='czerwony' id="czerwony"/> 
                                        <label className='select__label' htmlFor="czerwony"> <span className="checkbox-styled"></span> czerwony</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="niebieski" value='niebieski' id="niebieski"/> 
                                        <label className='select__label' htmlFor="niebieski"> <span className="checkbox-styled"></span> niebieski</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="bordowy" value='bordowy' id="bordowy"/> 
                                        <label className='select__label' htmlFor="bordowy"> <span className="checkbox-styled"></span> bordowy</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="szary" value='szary' id="szary"/> 
                                        <label className='select__label' htmlFor="szary"> <span className="checkbox-styled"></span> szary</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="bialy" value='bialy' id="bialy"/> 
                                        <label className='select__label' htmlFor="bialy"> <span className="checkbox-styled"></span> bialy</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="bezowy" value='bezowy' id="bezowy"/> 
                                        <label className='select__label' htmlFor="bezowy"> <span className="checkbox-styled"></span> bezowy</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="zolty" value='zolty' id="zolty"/> 
                                        <label className='select__label' htmlFor="zolty"> <span className="checkbox-styled"></span> zolty</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="granatowy" value='granatowy' id="granatowy"/> 
                                        <label className='select__label' htmlFor="granatowy"> <span className="checkbox-styled"></span> granatowy</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="czarno-bialy" value='czarno-bialy' id="czarno-bialy"/> 
                                        <label className='select__label' htmlFor="czarno-bialy"> <span className="checkbox-styled"></span> czarno-bialy</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="bialo-czerwony" value='bialo-czerwony' id="bialo-czerwony"/> 
                                        <label className='select__label' htmlFor="bialo-czerwony"> <span className="checkbox-styled"></span> bialo-czerwony</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="kolorowy" value='kolorowy' id="kolorowy"/> 
                                        <label className='select__label' htmlFor="kolorowy"> <span className="checkbox-styled"></span> kolorowy</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="rozowy" value='rozowy' id="rozowy"/> 
                                        <label className='select__label' htmlFor="rozowy"> <span className="checkbox-styled"></span> różowy</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={toggleColors} name="bezowy" value='bezowy' id="bezowy"/> 
                                        <label className='select__label' htmlFor="bezowy"> <span className="checkbox-styled"></span> beżowy</label>                                
                                    </div>
                                </>
                            )}
                        }
                        
                    </Select>
                </div>
                <div className='select-size'>
                    <p className="full-search-form__heading">Rozmiar</p>

                    <Select  defaultValues={defaultValues ? defaultValues.size : null} resetInputRef = { inputResetSizeRef } >
                       
                        {( toggleSize, sizeArr )=>{
                            size = sizeArr;

                            return(
                                <>
                                    <div className="select-slider__slid"> 
                                        <input className='inp slider__checkbox--reset' type="checkbox" name="size-all" onChange={ toggleSize } id="size-all" value='wszystkie' ref = { inputResetSizeRef }/> 
                                        <label className='select__label' htmlFor="size-all"> <span className="checkbox-styled"></span> Wszystkie</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-32" value='32' id="size-32"/> 
                                        <label className='select__label' htmlFor="size-32"> <span className="checkbox-styled"></span>32</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-33" value='33' id="size-33"/> 
                                        <label className='select__label' htmlFor="size-33"> <span className="checkbox-styled"></span>33</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-34" value='34' id="size-34"/> 
                                        <label className='select__label' htmlFor="size-34"> <span className="checkbox-styled"></span>34</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-35" value='35' id="size-35"/> 
                                        <label className='select__label' htmlFor="size-35"> <span className="checkbox-styled"></span>35</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-36" value='36' id="size-36"/> 
                                        <label className='select__label' htmlFor="size-36"> <span className="checkbox-styled"></span>36</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-37" value='37' id="size-37"/> 
                                        <label className='select__label' htmlFor="size-37"> <span className="checkbox-styled"></span>37</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-38" value='38' id="size-38"/> 
                                        <label className='select__label' htmlFor="size-38"> <span className="checkbox-styled"></span>38</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-39" value='39' id="size-39"/> 
                                        <label className='select__label' htmlFor="size-39"> <span className="checkbox-styled"></span>39</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-40" value='40' id="size-40"/> 
                                        <label className='select__label' htmlFor="size-40"> <span className="checkbox-styled"></span>40</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-41" value='41' id="size-41"/> 
                                        <label className='select__label' htmlFor="size-41"> <span className="checkbox-styled"></span>41</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-42" value='42' id="size-42"/> 
                                        <label className='select__label' htmlFor="size-42"> <span className="checkbox-styled"></span>42</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-43" value='43' id="size-43"/> 
                                        <label className='select__label' htmlFor="size-43"> <span className="checkbox-styled"></span>43</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-44" value='44' id="size-44"/> 
                                        <label className='select__label' htmlFor="size-44"> <span className="checkbox-styled"></span>44</label>                                
                                    </div>
                                    <div className="select-slider__slid"> 
                                        <input type="checkbox" onChange={ toggleSize } name="size-45" value='45' id="size-45"/> 
                                        <label className='select__label' htmlFor="size-45"> <span className="checkbox-styled"></span>45</label>                                
                                    </div>
                                </>
                            )}
                        }
                        
                    </Select>
                </div>
                
                <div className="full-search-form__btn-group">
                    <button type='submit' className='full-search-form__btn'>Szukaj</button>
                </div>

            </form>
        </>
     );
}
FullSearchForm.propTypes = {
    defaultValues: PropTypes.object
}

export default FullSearchForm;