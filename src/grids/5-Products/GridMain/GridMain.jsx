//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import Product from '../../../componnents/Product/Product'

function GridMain( {collection} ) {
    const [allProducts,setAllProducts] = useState(JSON.parse(sessionStorage.getItem('products')))
    return (
        <>
            <div>
                <div style={{display: 'flex', justifyContent: 'spaceEvenly'}}>
                    {allProducts.map((item) => { if (item.collection === collection)
                        return <Product id={item.id} />
                    })}
                </div>
            </div>
        </>
    )
}

//GridMain.defaultProps = {
//}

//GridMain.propTypes = {
//}

export default GridMain