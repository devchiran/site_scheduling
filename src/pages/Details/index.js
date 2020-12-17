import React, { useEffect } from 'react'
import DetailsHeader from '../../components/DetailsHeader'
import InfoCard from '../../components/InfoCard'

    const Details = (props) => {
        useEffect(() => {
            window.scrollTo(0, 0)
        }
    , [])
    return (
        <div className="p-0">
            <DetailsHeader {...props.location.state} />
            <InfoCard {...props.location.state} />
        </div>
    )
}

export default Details;