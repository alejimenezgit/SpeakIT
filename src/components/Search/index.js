import React from 'react';
import "./styles.scss";

import apiClientLanguage from "../../services/language";
import apiClientUser from "../../services/users";

import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

class Search extends React.Component {

    state = {
        allLanguages: [],
        isloading: false,
        error: false,
        showLanguage: true,
    }

    convertObject = (languages) => {
        let languagesCombo = languages.map((lan,index) => {
            const { language, _id } = lan;
            return {value:_id, label:language}
        })
        return languagesCombo;
    }

    componentDidMount(){
        this.setState({isloading: true,});
        apiClientLanguage
            .allLanguages()
            .then((language) => {
                this.setState({
                    allLanguages: this.convertObject(language.data),
                    isloading: false,
                });
            })
            .catch(() => {
                this.setState({ error: true });
            });
    }

    selectLanguage = (a) => {
        console.log(a)
        apiClientUser
            .allbyUser({a})
            .then((users) => {
                console.log(users);
            })
            .catch(()=>{
                console.log('error')
            })
    }

    renderAllLanguages = () =>{
        return this.state.allLanguages.map((lan, index) => {
            return <div key={index} onClick={() => this.selectLanguage(lan.value)}> 
                        <h3> {lan.label} </h3> 
                    </div>
        });
    }

    renderSearch = () => {
        const {showLanguage} = this.state;
        return (
            <div>
                <div>
                    <h1> Choose a Language </h1>
                    <Slider {...settings}>
                        {this.renderAllLanguages()}
                    </Slider>
                    <div className="box">
                        <div className="selectBox pdl-25">
                            <h2> Users  by Language </h2>
                        </div>

                        {showLanguage && <div> show </div>}
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const {isloading, error} = this.state;
        return  (
            <div>
                {isloading && !error ? <div> espera </div> : this.renderSearch()}
                {error && <div> error </div>}
            </div>
        )
    }
}


export default Search; 