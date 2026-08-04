import React from 'react'
import { useGetAllDestinationQuery } from '../api/DestinationApi'
import Destination from './Destination'

function DestinationList() {
    const {data, isLoading, isSuccess, isError, error}=useGetAllDestinationQuery();
    
    let content;
    if(isLoading){
        content = <p>Loading...</p>;
        } else if (isSuccess) {
            content =data.map((destination)=>{
                return(
                    <Destination destination={destination}  key={destination.id}/>
                )
            })
        }else if(isError){
            content= <p>{error?.error || error?.data?.message || "Something went wrong loading destinations."}</p>
        }
  return (
    <div className='pt-3'>{content}</div>
  )
}

export default DestinationList