import React from 'react';
import "./styles.scss";
import Slider from "react-slick";

export default class MainPage extends React.Component {

    renderMainPage  = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
        return (
            <div className="container">
                <div>
                    <h2> Select an idiom </h2>
                    <Slider {...settings}>
                    <div>
                        <h3> Ingles </h3>
                    </div>
                    <div>
                        <h3> Español </h3>
                    </div>
                    <div>
                        <h3> Japones </h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                    </Slider>
                </div>
              <div className="box">
                <div className="">

                </div>
              </div>
            </div>
            
        );
    }

    render(){
        return this.renderMainPage();
    }
}