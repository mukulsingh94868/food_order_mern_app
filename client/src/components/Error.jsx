import React from 'react'

const Error = ({ error }) => {
    return (
        <div>
            <div className='alert alert-danger w-100' role='alert'>
                {error}
            </div>
        </div>
    )
}

export default Error