import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form, Button } from 'react-bootstrap'

const Refinement = () => {
    return (
        <div className="refinement d-flex bg-white">
            <div className="refinement-filters col-5 p-0">
                <Form>
                    <Form.Group controlId="siteSelect">
                        <Form.Label className="sr-only">Site filter</Form.Label>
                        <Form.Control as="select" size="sm" className="border-0 font-weight-bold">
                            <option>All site</option>
                            <option>Active sites</option>
                            <option>Primium sites</option>
                            <option>Regular sites</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            <div className="refinement-filters col-7 text-right  p-0">
                <Button className="btn-light btn-sm bg-transparent border-0">
                    <span className="sortbar my-1"></span>
                    <span className="sortbar my-1"></span>
                    <span className="sortbar my-1"></span>
                </Button>
                <Button className="btn-light btn-sm bg-transparent border-0">
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </div>
        </div>
    )
}

export default Refinement;
