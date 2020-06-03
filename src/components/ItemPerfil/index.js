import React from 'react';

export default class ItemPerfil extends React.Component {

    renderItemPerfil= () => {
        let { title, value } = this.props;
        return (
            <div>
                <div className="dateUser">
                    <h1> {title}: </h1> 
                    {value}
                </div>
                <div className="line"></div>
            </div>

        );
    }

    render(){
        return  this.renderItemPerfil()
    }
}