import React, { Fragment } from 'react';
import CtaTop from '../components/ctaTop/CtaTop';
import Header from '../components/header/Header';
import ProductSlider from '../components/productSlider/ProductSlider';

const Landing = () => {
    return (
        <Fragment>
            <Header />
            <CtaTop />
            <ProductSlider />
        </Fragment>
    )
}

export default Landing;