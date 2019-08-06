import React, { Component } from 'react'

export default class CarouselSlider extends Component {
    render() {
        return (
   
    
       

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
                <ul className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ul>

                 <div className="carousel-inner"  >
                        <div className="carousel-item active">
                            <img src="https://jssorcdn7.azureedge.net/demos/img/gallery/980x380/001.jpg" alt="Los Angeles" className="w-100" height="400"/>
                        </div>
                    
                        <div className="carousel-item">
                            <img src="https://slidervilla.com/smooth-slider/files/2014/05/3.jpg" alt="Chicago" className="w-100" height="400"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://jssorcdn7.azureedge.net/demos/img/gallery/980x380/002.jpg" alt="New York" className="w-100" height="400"/>
                        </div> 
                         <div className="carousel-item">
                            <img src="http://demo.smartaddons.com/extensions/joomla17/cache/mod_sj_content_slider/cc021ca251f443c4a934cba184872eff.jpeg" alt="New York" className="w-100" height="400"/>
                        </div>
                   </div>

                    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                          <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
          </div>
           
        )
    }

    
}
