import React from 'react'

const Button = ({onClick,title,loading}) => {
    if (loading === true) {
       return <button className="btn btn-secondary" onClick={onClick} disabled > {title} </button>
    }
    return(
        <button className="btn btn-info" onClick={onClick} > {title} </button>
    )
}

export default Button