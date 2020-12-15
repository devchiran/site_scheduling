import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Image from '../common/image'

const DetailsHeader = ({ title, contacts, address, images }) => {
    return (
        <div className="bg-primary border-dark border-bottom">
            <Container className="d-flex align-items-center px-2 py-2">
                <div className="text-right p-0">
                    <Link to='/' className="p-1 mx-3">
                        <FontAwesomeIcon icon={faAngleLeft} className="text-white text-large" />
                    </Link>
                </div>
                <div className="pr-4">
                    <Image type="profile-img light" imgsrc={images[0]} alttext={title}/>
                </div>
                <div className="item-detail flex-shrink-0">
                    <span className="sr-only">Name</span>
                    <h5 className="mb-0 text-white">{title}</h5>
                    <span className="sr-only">Address</span>
                    <p className="mb-0">{address.city}, {address.country}</p>
                    <span className="sr-only">Contact</span>
                    <p className="mb-0">{contacts.main.firstName}</p>
                </div>
            </Container>
        </div>
    )
}

export default DetailsHeader;
