import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <div className="text-center mt-3">
            <Spinner animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
