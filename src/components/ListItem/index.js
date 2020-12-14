import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'
import Image from '../common/image'

const ListItem = ({ id, name, contact, city, country, image }) => {
    return (
        <Col xs={12} lg={6} className="border-dark border-bottom">
            <Row className="align-items-center px-3 py-2" key={id} >
                <div className="col-3">
                    <Image type="profile-img" imgsrc={image} alttext={name} />
                </div>
                <div className="item-detail col-7">
                    <span className="sr-only">Name</span>
                    <h6 className="mb-0">{name}</h6>
                    <span className="sr-only">Address</span>
                    <p className="mb-0">{city}, {country}</p>
                    <span className="sr-only">Contact</span>
                    <p className="mb-0">{contact}</p>
                </div>
                <div className="col-2 text-right p-0">
                    <Link to={{ pathname: `/info/${id}`, state: { id, name, contact, city, country, image } }}>
                        <FontAwesomeIcon icon={faAngleRight} className="text-dark text-large font-weight-light"/>
                    </Link>
                </div>
            </Row>
        </Col>
    )
}

export default ListItem;