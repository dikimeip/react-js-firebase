import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginApi } from '../../../config/redux/action'
import Button from '../../../component/atoms/Button'


class Login extends Component {
    state = {
        email: '',
        password: '',
        error:''
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = async  (e) => {
        e.preventDefault()
        const res = await this.props.loginApi({email:this.state.email,password:this.state.password}).catch(err => err)
        if (res) {
            localStorage.setItem('login',JSON.stringify(res))
            this.props.history.push('/')
            console.log('success')
        } else {
            console.log('gagal')
            this.setState({
                error:"Password or email is wrong"
            })
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Halaman Login</h1>
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
                        <Button onClick={this.submitHandler} title="Login" loading={this.props.isLoading} />
                    </form>
                    <p className="text-center text-danger"> {this.state.error} </p>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading : state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginApi : (data) => dispatch(LoginApi(data))
})

export default connect(reduxState, reduxDispatch)(Login) 