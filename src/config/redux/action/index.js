export const testThunk = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: "CHANGE_NAME", value: "DICK CORP" })
    }, 2000)
    //terdapat 2 funcion ,pertama fungsi yang kedua digunakan sebagai pemanggilan redux thunk
    //thunk digunakan untuk asyncronus atau butuh waktu untuk callback
}