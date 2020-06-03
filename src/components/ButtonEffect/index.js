import React from 'react';
import "./styles.scss";

export default  class ButtonEffect extends React.Component {

    renderButtonEffect = () => {
        const { action } = this.props; 
       return (
            <div class="btnEffect" onClick={action}>
                    <svg>
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stop-color="#5f9ea0"/>
                                <stop offset="100%" stop-color="#71c1f7" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span> {this.props.children} </span>
            </div>
        );
    }

    render(){
        return this.renderButtonEffect();
    }
}