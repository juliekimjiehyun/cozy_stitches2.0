import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption,
    CarouselIndicators
} from 'reactstrap';
import commerce from '../../../lib/commerce';
import './styles.css'


const ProductCarousel = (args) => {

    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
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
    
    
    const slides = featuredProducts.map((product, index) => {
        return (
            <CarouselItem
                className="carousel-item"
                key={index}  
                tag='div'
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={product.image.url} alt={product.name} className="position-absolute top-50 start-50 translate-middle"/>
            </CarouselItem>
        );
    });

      return (
        <Carousel
        className="carousel"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        >
      <CarouselIndicators
        items={featuredProducts}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
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
  );
}

export default ProductCarousel;