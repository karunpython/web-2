import React from 'react'
import '../../css/stylesheet.css'
import CarouselSlider from './CarouselSlider'
import Services from './Services'
import Course from './Course'
import Team from './Team'
import ContactUs from './ContactUs'

function Navigation() {
    return (
        <div className="mt-5"> 
            <CarouselSlider/>
            <Course/>
            <Team/>
            <ContactUs/>
        </div>
    )
}

export default Navigation
