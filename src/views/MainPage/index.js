import React from 'react';
import "./styles.scss";
import Slider from "react-slick";

import { withAuth } from '../../context/authContext';
import  Modal  from '../../components/Modal'

class MainPage extends React.Component {

    state = {
        isRegister: this.props.isRegister,
    }
    closeModal = () => {
        console.log(this.state.isRegister)
        this.setState({
            isRegister: false
        })
    }

    renderMainPage  = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
        const {isRegister} = this.state;
        return (
            <div className="container">
                <div>
                    <h2> Select an idiom </h2>
                    {isRegister &&
                        <div>
                            <div className="modalBG"> </div>
                            <Modal action={this.closeModal}> 
                                Welcome new user :)
                                <br/><br/>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOqvD6s_OYlv9eDaNoWQW0x-3cRKUSlEUgLtXafBnjnJPtU1ou&usqp=CAU" alt="img"/>
                            </Modal> 
                        </div>
                    }
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


export default withAuth(MainPage); 