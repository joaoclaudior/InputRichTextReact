import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputRichText from '../components/InputRichText/InputRichText'

export class FormExemple extends Component {

    handleSubmit = values => {
        
    }

    printValues = value => {
        console.log(JSON.stringify(value))
        console.log(value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputRichText onChange={this.printValues} width="100%" heigth="300px"/>
                <button type="submit">Submit</button>
            </form>
        )
    }


}

FormExemple = reduxForm({
    form: 'formeDeTeste'
})(FormExemple)




export default FormExemple;
