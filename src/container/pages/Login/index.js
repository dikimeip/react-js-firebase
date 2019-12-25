import React,{Component} from 'react'
import {connect} from 'react-redux'

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Page Login {this.props.MyName} </h1>
            </div>
        )
    }
}

const storeRedux = (state) => ({
    MyName : state.name
})

export default connect(storeRedux,null)(Login) 