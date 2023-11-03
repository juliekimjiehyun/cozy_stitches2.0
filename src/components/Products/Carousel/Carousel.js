import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';
import commerce from '../../../lib/commerce';


const ProductCarousel = (args) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === featuredProducts.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? featuredProducts.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await commerce.products.list({ category_slug: ['featured'] });
            setFeaturedProducts(response.data);
        };
        fetchProducts();
    }, []);
    
    
    const slides = featuredProducts.map((product) => {
        return (
            <CarouselItem
                key={`${product.id}-${product.name}`}  
                tag='div'
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={product.image.url} alt={product.name}/>
            </CarouselItem>
        );
    });

      return (
        <div>
            <style>
                {`.custom-tag {
              max-width: 100%;
              height: 45rem;
              margin-left: auto;
              margin-right: auto;
              display: block;
            }`}
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

export default ProductCarousel;