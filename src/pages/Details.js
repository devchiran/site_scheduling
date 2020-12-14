import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DetailsHeader from '../components/DetailsHeader'
import InfoCard from '../components/InfoCard'
import Loader from "../components/common/Loader"

const Details = (props) => {
    const [cardinfo, setCardinfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        axios
        .get(`http://localhost:3333/infolist?siteid=${props.location.state.id}`)
        .then(response => {
            setLoading(false)
            setCardinfo(...response.data)
        })
        .catch(error => {
            setLoading(false)
            setError(error.message)
        })
    }, [])
    return (
        <div className="p-0">
            <DetailsHeader {...props.location.state} />
            {
                (loading ? (<Loader />) : error ? (<h2>{error}</h2>) : <InfoCard {...cardinfo} />)
            }
        </div>
    )
}

export default Details;