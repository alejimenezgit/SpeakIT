import React from 'react';
import "./styles.css";

export default class ButtonLiquid extends React.Component {

    renderHeader  = () => {
        const { children, styles } = this.props;
        return (
            <button className={styles}> { children } </button>
        );
    }

    render(){
        return this.renderHeader();
    }
}