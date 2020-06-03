import React from 'react';

export default class ItemHomePage extends React.Component {

    renderItemHomePage  = () => {
        const { title , img} = this.props;
        return (
                <div className="col-md-6 article-pre__col articleItem">
                    <div className={img}></div>
                    <h1 className="article-pre__title"> {title} </h1>
                </div>  
        )
    }

    render(){
        return this.renderItemHomePage();
    }
}