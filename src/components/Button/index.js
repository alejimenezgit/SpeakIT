import React from 'react';
import "./styles.scss";

export default class ButtonLiquid extends React.Component {

    renderHeader  = () => {
        const { children, styles, action } = this.props;
        return (
            <button onClick={action} className={styles}> { children } </button>
        );
    }

    render(){
        return this.renderHeader();
    }
}