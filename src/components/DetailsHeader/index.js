import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Image from '../common/image'

const DetailsHeader = ({ name, contact, city, country, image }) => {
    return (
        <div className="bg-primary border-dark border-bottom">
            <Container className="d-flex align-items-center px-2 py-2">
                <div className="text-right p-0">
                    <Link to='/' className="p-1 mx-3">
                        <FontAwesomeIcon icon={faAngleLeft} className="text-white text-large" />
                    </Link>
                </div>
                <div className="pr-4">
                    <Image type="profile-img light" imgsrc={image} alttext={name}/>
                </div>
                <div className="item-detail flex-shrink-0">
                    <span className="sr-only">Name</span>
                    <h5 className="mb-0 text-white">{name}</h5>
                    <span className="sr-only">Address</span>
                    <p className="mb-0">{city}, {country}</p>
                    <span className="sr-only">Contact</span>
                    <p className="mb-0">{contact}</p>
                </div>
            </Container>
        </div>
    )
}

export default DetailsHeader;
