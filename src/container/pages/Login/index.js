import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testThunk } from '../../../config/redux/action'

class Login extends Component {
    nameHandler = () => {
        this.props.changeName()
    }
    render() {
        return (
            <div>
                <h1>Page Login {this.props.MyName} </h1>
                <button onClick={this.nameHandler} >UBAH NAMA</button>
            </div>
        )
    }
}

const reduxStore = (state) => ({
    MyName: state.name
})

const reduxDispatch = (dispatch) => ({
    changeName: () => dispatch(testThunk())
})

export default connect(reduxStore, reduxDispatch)(Login) 