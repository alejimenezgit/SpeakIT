import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";
import ItemHomePage  from '../../components/ItemHomePage'

const firstComp  = { title: 'Serach users by languages', img: 'article-pre__img article-pre__img--first'}
const secondComp = { title: 'Keep Conversations', img: 'article-pre__img article-pre__img--second'}
const thirdComp  = { title: 'Learn anytime, anywhere', img: 'article-pre__img article-pre__img--third'}
const fourthComp = { title: 'Fast communication between users', img: 'article-pre__img article-pre__img--fourth'}

export default class HomePage extends React.Component {

    renderHomePage  = () => {
        return (
        <div className="container"> 
            <div className="sect sect--padding-top">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site">
                            <h1 className="homeTitle">Speak IT</h1>
                            <h2 className="homeSubtitle">Learn language with other persons</h2>
                            <div className="boxLinks inFlex">
                                    <Link to={'/login'}> <div className="btn">Log in </div> </Link>
                                    <Link to={'/register'}> <div className="btn"> Sign up </div> </Link>    
                             </div>
                            <img className="homeImg" alt="img" src="./images/home.jpg"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sect sect--white">
                <div className="row"> <h1 className="row__title"> About Speak IT</h1> </div>
                <div className="row row--margin inFlex">
                    <ItemHomePage title={firstComp.title}  img={firstComp.img}/>
                    <ItemHomePage title={secondComp.title} img={secondComp.img}/>   
                </div>
                <div className="row inFlex">
                    <ItemHomePage title={thirdComp.title}  img={thirdComp.img}/>
                    <ItemHomePage title={fourthComp.title} img={fourthComp.img}/>   
                </div>
            </div>
        </div>   
        )
    }

    render(){
        return this.renderHomePage();
    }
}