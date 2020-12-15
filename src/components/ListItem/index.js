import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'
import Image from '../common/image'

const ListItem = ({ id, title, address, contacts, images }) => {
    return (
        <Col xs={12} lg={6} className="border-dark border-bottom">
            <Row className="align-items-center px-3 py-2" key={id} >
                <div className="col-3">
                    <Image type="profile-img" imgsrc={images[0]} alttext={title} />
                </div>
                <div className="item-detail col-7">
                    <span className="sr-only">Name</span>
                    <h6 className="mb-0">{title}</h6>
                    <span className="sr-only">Address</span>
                    <p className="mb-0">{address.city}, {address.country}</p>
                    <span className="sr-only">Contact</span>
                    <p className="mb-0">{contacts.main.phoneNumber}</p>
                </div>
                <div className="col-2 text-right p-0">
                    <Link to={{ pathname: `/info/${id}`, state: { id, title, contacts, address, images } }}>
                        <FontAwesomeIcon icon={faAngleRight} className="text-dark text-large font-weight-light"/>
                    </Link>
                </div>
            </Row>
        </Col>
    )
}

export default ListItem;