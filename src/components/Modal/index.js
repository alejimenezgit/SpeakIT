import React from 'react';
import "./styles.scss";
 
class Modal extends React.Component {

    renderModal  = () => {
        const {action} = this.props;
        console.log({action})
        return (
            <div className="modal" >
                <button onClick={action} className="modalButton"> x </button>
                <div> {this.props.children} </div>
            </div>
        )
    }

    render(){
        return this.renderModal();
    }
}

export default Modal;