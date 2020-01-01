import firebase,{database} from '../../firebase'

export const testThunk = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: "CHANGE_NAME", value: "DICK CORP" })
    }, 2000)
    //terdapat 2 funcion ,pertama fungsi yang kedua digunakan sebagai pemanggilan redux thunk
    //thunk digunakan untuk asyncronus atau butuh waktu untuk callback
}

export const PostRegister = (data) => (dispatch) => {
    return new Promise((resolve,reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true })
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
                console.log('Success', res)
                dispatch({ type: "CHANGE_LOADING", value: false })
                resolve(true)
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({ type: "CHANGE_LOADING", value: false })
                reject(false)
            })
    })

}

export const LoginApi = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true })
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res => {
            console.log('Success', res)
            const data = {
                email: res.user.email,
                uid: res.user.uid,
                emailVerified: res.user.emailVerified
            }
            dispatch({ type: "CHANGE_LOADING", value: false })
            dispatch({ type: "CHANGE_LOGIN", value: true })
            dispatch({ type: "CHANGE_USER", value: data })
            resolve(data)
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({ type: "CHANGE_LOADING", value: false })
            dispatch({ type: "CHANGE_LOGIN", value: false })
            reject(false)
        })
    })

}


export const addDataToApi = (data) => (dispatch) => {
    database.ref('node/'+data.userId).push({
        title : data.title,
        date : data.date,
        content : data.content
    })
}

export const getDataApi =  (userId) => (dispatch) => {
    const EndPoint = database.ref('node/'+userId)
    return new Promise((resolve,reject) => {
        EndPoint.on('value',function(snapshot){
            //convert agar hasilnya berbentuk array
            const data = []
            Object.keys(snapshot.val()).map(key => {
                data.push({
                    id : key,
                    data : snapshot.val()[key]
                })
            })
            dispatch({ type:"CHANGE_NODE",value:data })
        })
    })
}

export const UpdateDataApi = (data) => (dispatch) => {
    const EndPoint = database.ref('node/'+data.userId+'/'+data.noteId)
    return new Promise((resolve,reject) => {
        EndPoint.set({
            title : data.title,
            date : data.date,
            content : data.content
        },(err) => {
            if (err) {
                reject(err)
            } else {
                resolve(err)
            }
        })
    })
}

export const DeleteDataApi = (data) => (dispatch) => {
    const EndPoint = database.ref('node/'+data.userId+'/'+data.noteId)
    return new Promise((resolve,reject) => {
        EndPoint.remove();
    })
}