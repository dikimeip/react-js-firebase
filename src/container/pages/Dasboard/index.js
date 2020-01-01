import React, { Component, Fragment } from 'react'
import { addDataToApi, getDataApi, UpdateDataApi, DeleteDataApi } from '../../../config/redux/action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dasboard extends Component {
    state = {
        title: "",
        content: "",
        date: "",
        noted: "",
        button: "SIMPAN"
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
        if (this.state.button === "SIMPAN") {
            this.props.saveNoted(data)
        } else {
            data.noteId = this.state.noteId
            this.props.updateNoted(data)
        }

        console.log(data)
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateNoted = (note) => {
        this.setState({
            noteId: note.id,
            title: note.data.title,
            content: note.data.content,
            button: "UPDATE"
        })
    }

    cancelHandler = () => {
        this.setState({
            title: "",
            content: "",
            button: "SIMPAN"
        })
    }

    deleteHandler = (e, note) => {
        e.stopPropagation()
        e.preventDefault()
        if (window.confirm('Hapus Data..?')) {
            const datas = JSON.parse(localStorage.getItem('login'))
            const data = {
                userId : datas.uid ,
                noteId : note.id
            }
            this.props.deleteNoted(data)
        }

    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">HALAMAN DASBOARD</h1>
                <br />
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.title} name="title" placeholder="Masukan Judul" onChange={this.dataHandler} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="content" onChange={this.dataHandler} value={this.state.content} ></textarea>
                        </div>
                        <button className="btn btn-info" onClick={this.submitHandler} >{this.state.button}</button>
                        {
                            this.state.button === "UPDATE" ? (
                                <button className="btn btn-warning" onClick={this.cancelHandler} >Cancel</button>
                            ) : <div />
                        }
                        <hr />
                        {
                            this.props.noted.length > 0 ? (
                                //fragment agar javascript bisa dimasukan class
                                <Fragment>
                                    {
                                        this.props.noted.map(note => {
                                            return (
                                                <div value={note.uid} onClick={() => this.updateNoted(note)} >
                                                    <Link>
                                                        <p><b>{note.data.title}</b></p>
                                                        <p>{note.data.content}</p>
                                                        <button className="btn btn-danger" onClick={(e) => this.deleteHandler(e, note)} >DELETE</button>
                                                    </Link>
                                                    <hr />
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
    getNoted: (data) => dispatch(getDataApi(data)),
    updateNoted: (data) => dispatch(UpdateDataApi(data)),
    deleteNoted: (data) => dispatch(DeleteDataApi(data)),
})

export default connect(reduxState, reduxDispatch)(Dasboard) 