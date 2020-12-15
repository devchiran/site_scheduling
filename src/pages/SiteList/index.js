import React from 'react'
import { Container } from 'react-bootstrap'
import Fixedbar from '../../components/Fixedbar'
import Refinement from "../../components/Refinement"
import List from "../../components/List"
import './sitelist.css'

const SiteList = () => {
    return (
        <div className="p-0">
            <div className="bg-primary border-dark border-bottom">
                <Fixedbar />
            </div>
            <div className="refinement-wrapper border-dark border-bottom">
                <Container className="p-0">
                    <Refinement />
                </Container>
            </div>
            <Container className="p-0">
                <List />
            </Container>
        </div>
    )
}

export default SiteList;