import React from 'react'
import DetailsHeader from '../components/DetailsHeader'
import InfoCard from '../components/InfoCard'

const Details = (props) => {

    return (
        <div className="p-0">
            <DetailsHeader {...props.location.state} />
            <InfoCard {...props.location.state} />
        </div>
    )
}

export default Details;