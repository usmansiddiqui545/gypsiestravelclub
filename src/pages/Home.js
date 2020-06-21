import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from "../components/Services";
import Discount from "../components/Discount";

export default function Home() {
 return (
  <> 
         <Hero>
         <Banner 
         title="Welcome!" 
         subtitle=" Enjoy your vacation like never before">
         </Banner>
        </Hero>
        
        <Discount />
        <Services />
  </>
    );
}
