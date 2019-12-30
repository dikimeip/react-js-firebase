import React,{Component} from 'react'
import { addDataToApi } from '../../../config/redux/action'
import { connect } from 'react-redux'

class Dasboard extends Component {
    props = {
        title : '',
        content : '',
        date : ''
    }

    submitHandler = (e) => {
        const data = {
            title : this.state.title,
            content : this.state.content,
            date : new Date().getTime(),
            userId : this.props.userData.uid
        }
        this.props.saveNoted(data)
        console.log(data)
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <h1 className="text-center">HALAMAN DASBOARD</h1>
                <br/>
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
                        <hr/>
                        <p>Judul</p>
                        <p>Tanggal</p>
                        <p>Isi</p>
                    </div>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData : state.user
})

const reduxDispatch = (dispatch) => ({
    saveNoted : (data) => dispatch(addDataToApi(data))
})

export default connect(reduxState,reduxDispatch)(Dasboard) 