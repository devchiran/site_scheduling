import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'
import Image from '../common/image'

const ListItem = ({ id, title, address, contacts, client, images }) => {
    return (
        <Col xs={12} lg={6} className="border-dark border-bottom">
            <Row className="align-items-center px-4 py-2 flex-nowrap" key={id} >
                <div className="pr-4">
                    <Image type="profile-img" imgsrc={client.logo} alttext={title} />
                </div>
                <div className="item-detail pr-4 flex-grow-1">
                    <span className="sr-only">Name</span>
                    <h6 className="mb-0">{title}</h6>
                    <span className="sr-only">Address</span>
                    <p className="mb-0">{address.city}, {address.country}</p>
                    <span className="sr-only">Contact</span>
                    <p className="mb-0">{contacts.main.phoneNumber}</p>
                </div>
                <div className="text-right pr-3">
                    <Link to={{ pathname: `/info/${id}`, state: { id, title, contacts, address, client, images } }}>
                        <FontAwesomeIcon icon={faAngleRight} className="text-dark text-large font-weight-light"/>
                    </Link>
                </div>
            </Row>
        </Col>
    )
}

export default ListItem;