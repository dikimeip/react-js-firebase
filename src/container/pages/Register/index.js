import React, { Component } from 'react'
import Button from '../../../component/atoms/Button'
import { connect } from 'react-redux'
import { PostRegister } from '../../../config/redux/action'

class Register extends Component {
    state = {
        email: '',
        password: '',
        message:''
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = async (e) => {
        e.preventDefault()
        const res = await this.props.RegisterApi({email:this.state.email,password:this.state.password}).catch(err=>err)
        if (res === true) {
             this.setState({
                email:'',
                password:''
            })
            this.setState({
                message:"Register Success"
            }) 
        } else {
            this.setState({
                message:"Register Failed"
            })
        }
       
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Halaman Register</h1>
                <br />
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <label>Masukan email</label>
                            <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.dataHandler} />
                        </div>
                        <div className="form-group">
                            <label>Masukan Password</label>
                            <input type="password" name="password" value={this.state.password} className="form-control" onChange={this.dataHandler} />
                        </div>
                        <Button onClick={this.submitHandler} title="Register" loading={this.props.isLoading} />
                    </form>
                    <p className="text-info text-center"> {this.state.message} </p>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading : state.isLoading
})

const reduxDispatch = (dispatch) => ({
    RegisterApi : (data) => dispatch(PostRegister(data))
})

export default connect(reduxState,reduxDispatch)(Register)