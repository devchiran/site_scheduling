import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import Loader from "../common/Loader"
import ListItem from '../ListItem'
import { fetchContacts } from '../../redux'
import { Waypoint } from 'react-waypoint';

function List({ contactData, fetchContacts }) {
    useEffect((contactData) => {
        fetchContacts(contactData.pageNumber, contactData.recordsLength);
    }, [fetchContacts])

    const fetchMoreContacts = () => {
        fetchContacts(contactData.pageNumber, contactData.recordsLength);
    }
    let listFooter = ""
    if (contactData.contactslist.length) {
        listFooter = <Waypoint onEnter={fetchMoreContacts}><div><Loader /></div></Waypoint>
    } else {
        listFooter = <Loader />
    }

    return (
        <>
            <div className="site-list d-flex flex-wrap" value={ contactData.hasContacts || ""}>
                {
                    contactData && contactData.contactslist && contactData.contactslist.map(item => (
                        <ListItem {...item} key={item.id} />
                    ))
                }
            </div>
            { contactData.hasContacts && (
                listFooter
            )}
            {contactData.error && <Alert variant={'danger'}>{contactData.error}</Alert>}
        </>
    )
}
const mapStateToProps = state => {
    return {
        contactData: state.contacts
    }
}

const mapDispatchtToProps = dispatch => {
    return {
        fetchContacts: (pageNumber, recordsLength) => dispatch(fetchContacts(pageNumber, recordsLength))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtToProps
)(List)
