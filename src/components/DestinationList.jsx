import React from 'react'
import { useGetAllDestinationQuery } from '../api/DestinationApi'
import Destination from './Destination'

function DestinationList() {
    const {data, isLoading, isSuccess, isError, error}=useGetAllDestinationQuery();

    if(isLoading){
        return <div className="text-center py-4"><span className="spinner-border spinner-border-sm text-success me-2"></span>Loading destinations...</div>;
    }
    if(isError){
        return <div className="alert alert-danger mb-0">{error?.error || error?.data?.message || "Something went wrong loading destinations."}</div>;
    }
    if(isSuccess && data.length === 0){
        return <p className="text-center text-body-secondary py-4 mb-0">No destinations yet — add your first one above.</p>;
    }
    return (
        <ul className="list-group list-group-flush">
            {data.map((destination)=>(
                <Destination destination={destination} key={destination.id}/>
            ))}
        </ul>
    )
}

export default DestinationList