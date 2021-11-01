import React from 'react'

const Message = ({msg}) => {
    return (
        <div className="alert alert-danger">
            <h3>{msg.status}</h3>
            <small>{msg.statusText} </small>
        </div>
    )
}

export default Message
