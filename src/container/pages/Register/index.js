import React, { Component } from 'react'
import firebase from '../../../config/firebase'

class Register extends Component {
    state = {
        email:'',
        password:''
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        //console.log(this.state)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(res => {
            console.log('Success',res)
        } ).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
          
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
                            <input type="text" name="email" className="form-control" onChange={this.dataHandler} />
                        </div>
                        <div className="form-group">
                            <label>Masukan Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.dataHandler} />
                        </div>
                        <input type="submit" value="REGISTER" className="btn btn-info" onClick={this.submitHandler} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Register