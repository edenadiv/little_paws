//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Product from './componnents/Product/Product'
import { ProductsProvider } from './contexts/ProductsContext'
import ProfilesProvider from './contexts/ProfilesContext';

import MainLayout from './layouts/MainLayout/MainLayout'

function App() {

    return (
        <>
            <Router>
                <ProfilesProvider>
                    <ProductsProvider>
                        <MainLayout />
                    </ProductsProvider>
                </ProfilesProvider>
            </Router>
        </>
    )
}

//App.defaultProps = {
//}

//App.propTypes = {
//}

export default App