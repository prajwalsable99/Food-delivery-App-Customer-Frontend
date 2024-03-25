import React from 'react'
import Banner from '../../components/home/Banner'
import RestaurantsList from "../../components/home/RestaurantsList";
import TopMeals from '../../components/home/TopMeals';
import Footer from '../../components/home/Footer';
const Homepage = () => {
  return (
    <div>
      {/* banner */}
      <Banner/>
{/* top meals */}
     
     <TopMeals/>
      {/* restutants list */}
     

     <RestaurantsList/>

     <Footer/>
    </div>
  )
}

export default Homepage
