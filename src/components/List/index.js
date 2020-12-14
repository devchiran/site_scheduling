import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loader from "../common/Loader"
import ListItem from '../ListItem'
import { fetchContacts } from '../../redux'

function List({ contactData, fetchContacts }) {
    useEffect(() => {
        fetchContacts()
    }, [])

    return (contactData.loading ? (
        <Loader />
    ) : contactData.error ? (
        <h2>{contactData.error}</h2>
    ) : (
        <div className = "site-list d-flex flex-wrap" >
            {
                contactData && contactData.contactslist && contactData.contactslist.map(item => (
                    <ListItem {...item} key={item.id} />
                ))
            }
        </div>)
    )
}

const mapStateToProps = state => {
    return {
        contactData: state.contacts
    }
}

const mapDispatchtToProps = dispatch => {
    return {
        fetchContacts: () => dispatch(fetchContacts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtToProps
)(List)
