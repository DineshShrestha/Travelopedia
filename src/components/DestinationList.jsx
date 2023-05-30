import React from 'react'
import { useGetAllDestinationQuery } from '../api/DestinationApi'
import { useDeleteDestinationMutation } from '../api/DestinationApi';
function DestinationList() {
    const {data, isLoading, isSuccess, isError, error}=useGetAllDestinationQuery();
    const [deleteDestination] = useDeleteDestinationMutation();
    let content;
    if(isLoading){
        content = <p>Loading...</p>;
        } else if (isSuccess) {
            content =data.map((destination)=>{
                return(
                    <div className='row py-1' style={{borderBottom: '1px solid #333', borderTop:'1px solid #333'}} key={destination.id}>
                        <div className="col-3 offset-3">
                                {destination.city}, {destination.country}                           
                        </div>
                        <div className='col-1 text-warning'>
                            {destination.daysNeeded} days     
                        </div>
                        <div className='col-2'>
                        <button className='btn btn-danger form-control' onClick={()=>deleteDestination({id: destination.id})}>Delete</button>
                        </div>
                    </div>
                )
            })
        }else if(isError){
            content= <p>{error}</p>
        }
  return (
    <div className='pt-3'>{content}</div>
  )
}

export default DestinationList