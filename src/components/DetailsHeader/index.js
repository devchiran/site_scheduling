import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Image from '../common/image'

const DetailsHeader = ({ title, contacts, address, client }) => {
    return (
        <div className="bg-primary border-dark border-bottom">
            <Container className="px-2 py-2">
                <Row className="align-items-center px-4 py-2 flex-nowrap">
                    <div className="">
                        <Link to='/' className="p-1 mr-3">
                            <FontAwesomeIcon icon={faAngleLeft} className="text-white text-large" />
                        </Link>
                    </div>
                    <div className="pr-4">
                        <Image type="profile-img light" imgsrc={client.logo} alttext={title}/>
                    </div>
                    <div className="item-detail">
                        <span className="sr-only">Name</span>
                        <h5 className="mb-0 text-white">{title}</h5>
                        <span className="sr-only">Address</span>
                        <p className="mb-0">{address.city}, {address.country}</p>
                        <span className="sr-only">Contact</span>
                        <p className="mb-0">{contacts.main.firstName}</p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsHeader;
