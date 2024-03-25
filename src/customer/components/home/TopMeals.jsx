import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { meals } from './meals';

const TopMeals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
       // Adjust autoplay speed as needed
    };

    return (
        <div className="mx-auto max-w-screen-lg mb-4">
            <div>
                <h1 className='text-2xl font-bold mb-2'>
                    Eat what makes you happy
                </h1>
            </div>
            <Slider {...settings}>
                {meals.map(meal => (
                    <div key={meal.name} className="px-2 justify-center">
                        <div className="shadow-md p-4">
                            <img src={meal.image} alt={meal.name} className="w-48 h-48 object-cover rounded-full" />
                            <h3 className="text-lg font-semibold text-center font-thin pt-1">{meal.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TopMeals;
