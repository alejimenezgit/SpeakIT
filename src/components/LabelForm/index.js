import React, { Component } from 'react';

export default class LabelForm extends Component {
        render(){
            const { placeholder, alt} = this.props;
            return <label  placeholder={placeholder} alt={alt}></label>
        }
}
