import firebase from '../../firebase'

export const testThunk = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: "CHANGE_NAME", value: "DICK CORP" })
    }, 2000)
    //terdapat 2 funcion ,pertama fungsi yang kedua digunakan sebagai pemanggilan redux thunk
    //thunk digunakan untuk asyncronus atau butuh waktu untuk callback
}

export const PostRegister = (data) => (dispatch) => {
    dispatch({type:"CHANGE_LOADING",value:true})
    return(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
            console.log('Success', res)
            dispatch({type:"CHANGE_LOADING",value:false})
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type:"CHANGE_LOADING",value:false})
        })
    )
}