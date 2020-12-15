import React from 'react'
import Image from '../common/image'
import { ListGroup, Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'
import Slide from "../Slide"

const DetailsList = ({ title, contacts, images }) => {
    return (
        <Container className="p-0">
            <Row>
                <Col xs={12} md={6} className="p-0 border-dark border-bottom">
                    {/* <Image type="summary-img" imgsrc={images[0]} alttext={title} /> */}
                    <Slide imgUrls={images} />
                </Col>
                <div className="col-12 col-md-6">
                    <ListGroup>
                        <ListGroup.Item className="d-flex mt-3 py-3 border-0">
                            <div className="col-2 text-center">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="item-detail col-10 flex-grow-1">
                                <h6 className="mb-1 sd-title">{contacts.main.firstName} {contacts.main.lastName}</h6>
                                <p className="mb-0 text-muted sd-subtitle">{contacts.main.jobTitle}</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex py-3 border-0">
                            <div className="col-2 text-center">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            <div className="item-detail col-10 flex-grow-1">
                                <p className="mb-1 sd-title">{contacts.main.phoneNumber}</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex py-3 border-0">
                            <div className="col-2 text-center">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="item-detail col-10 flex-grow-1">
                                <p className="mb-1 sd-title">{contacts.main.email}</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex py-3 border-0">
                            <div className="col-2 text-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="item-detail col-10 flex-grow-1">
                                <p className="mb-1 sd-title">
                                    {contacts.main.address.street},<br />
                                    {contacts.main.address.city},<br />
                                    {contacts.main.address.state},<br />
                                    {contacts.main.address.country}<br />
                                    Zip Code-{contacts.main.address.zipCode}
                                </p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Row>
        </Container>
    )
}

export default DetailsList;
