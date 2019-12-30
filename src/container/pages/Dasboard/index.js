import React, { Component, Fragment } from 'react'
import { addDataToApi, getDataApi } from '../../../config/redux/action'
import { connect } from 'react-redux'

class Dasboard extends Component {
    props = {
        title: '',
        content: '',
        date: ''
    }

    componentDidMount = () => {
        const datas = JSON.parse(localStorage.getItem('login'))
        this.props.getNoted(datas.uid)
    }

    submitHandler = (e) => {
        const datas = JSON.parse(localStorage.getItem('login'))
        const data = {
            title: this.state.title,
            content: this.state.content,
            date: new Date().getTime(),
            userId: datas.uid
        }
        this.props.saveNoted(data)
        console.log(data)
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.props.noted)
        return (
            <div className="container">
                <h1 className="text-center">HALAMAN DASBOARD</h1>
                <br />
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text" className="form-control" name="title" placeholder="Masukan Judul" onChange={this.dataHandler} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="content" onChange={this.dataHandler} ></textarea>
                        </div>
                        <button className="btn btn-info" onClick={this.submitHandler} >Simpan</button>
                        <hr />
                        {
                            this.props.noted.length > 0 ? (
                                //fragment agar javascript bisa dimasukan class
                                <Fragment>
                                    {
                                        this.props.noted.map(note => {
                                            return (
                                                <div value={note.id}>
                                                    <p><b>{note.data.title}</b></p>
                                                    <p>{note.data.content}</p>
                                                    <hr/>
                                                </div>
                                            )
                                        })
                                    }
                                </Fragment>
                            ) : null
                        }

                    </div>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    noted: state.noted
})

const reduxDispatch = (dispatch) => ({
    saveNoted: (data) => dispatch(addDataToApi(data)),
    getNoted: (data) => dispatch(getDataApi(data))
})

export default connect(reduxState, reduxDispatch)(Dasboard) 