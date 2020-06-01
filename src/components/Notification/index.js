import React from 'react';
import styled from 'styled-components'

const NotificationBox = styled.div`
    background-color: #A2D9CE;
    color: black;
    padding: 30px 50px;
    font-size: 25px;
    position: absolute;
    right: 16px;
    z-index: 999;
    border: 1px solid black;
    position: fixed;
    bottom: ${props => props.top}px
`; 

export default class Notification extends React.Component {
    render (){
        return (
            <React.Fragment>
                <NotificationBox top={this.props.bottom}> 
                    {this.props.children} 
                </NotificationBox>
            </React.Fragment>
        )
    }
}