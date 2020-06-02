import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {

    renderHomePage  = () => {
        return (
        <div className="container"> 
            <div class="sect sect--padding-top">
                <div class="row">
                    <div class="col-md-12">
                        <div class="site">
                            <h1 class="homeTitle">Speak IT</h1>
                            <h2 class="homeSubtitle">Learn language with other persons</h2>
                            <div class="boxLinks inFlex">
                                <Link to={'/login'}> <div class="btn">Log in </div> </Link>
                                <Link to={'/register'}> <div class="btn"> Sign up </div> </Link>    
                            </div>
                            <img class="homeImg" alt="img" src="./images/home.jpg"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sect sect--white">
                <div class="row">
                    <h1 class="row__title"> About Speak IT</h1>
                </div>
        
                <div class="row row--margin inFlex">
                    <div class="col-md-6 article-pre__col articleItem">
                        <div class="article-pre__img article-pre__img--first"></div>
                        <h2 class="article-pre__info">
                            <span> Protips </span>
                        </h2>
                        <h1 class="article-pre__title">How to improve analytics using few tools in Bricks </h1>
                    </div>
                    
                    <div class="col-md-6 article-pre__col articleItem">
                        <div class="article-pre__img article-pre__img--second"></div>
                        <h2 class="article-pre__info">
                        <span class="article-pre__cat">Pricing </span>
                        </h2>
                        <h1 class="article-pre__title">Rich Thornett Dan Coderholm about Dribbble in early 2009 </h1>
                    </div>    
                </div>

                <div class="row inFlex">
                    <div class="col-md-6 article-pre__col  articleItem">
                        <div class="article-pre__img article-pre__img--fourth"></div>
                        <h2 class="article-pre__info">
                        <span class="article-pre__cat">Success Stories </span>
                        </h2>
                        <h1 class="article-pre__title">Steward Butterfield told us about his startup Slack </h1>

                    </div>
                    
                    <div class="col-md-6 article-pre__col articleItem">
                        <div class="article-pre__img article-pre__img--third"></div>
                        <h2 class="article-pre__info">
                        <span class="article-pre__cat">Protips </span>
                        </h2>
                        <h1 class="article-pre__title">How to improve analytics using few tools in Bricks </h1>
                    </div>     
                </div>
            </div>
        </div>   
        )
    }

    render(){
        return this.renderHomePage();
    }
}