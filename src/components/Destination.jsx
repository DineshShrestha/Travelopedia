import React, {useState} from 'react'
import { useDeleteDestinationMutation, useUpdateDestinationMutation} from '../api/DestinationApi';
function Destination({destination}) {
    const [deleteDestination] = useDeleteDestinationMutation();
    const [isUpdating, setIsUpdating] = useState(false);
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");
    const [updateDestination] = useUpdateDestinationMutation();
    
    const handleUpdate=()=>{
        updateDestination({
            id: destination.id,
            city: newCity || destination.city,
            country: newCountry || destination.country,
            daysNeeded: destination.daysNeeded
        });
        setNewCity("");
        setNewCountry("");
        setIsUpdating(false);
    };
  return (
    <li className="list-group-item d-flex align-items-center gap-3 flex-wrap py-3">
        <i className="bi bi-geo-alt-fill text-success fs-5"></i>
        <div className="flex-grow-1 row g-2">
            <div className="col-6">
                {isUpdating ?(<input type='text' placeholder='City' className='form-control form-control-sm'
                    defaultValue={destination.city}
                    onChange={e=>setNewCity(e.target.value)}/>):(
                        <span className="fw-semibold">{destination.city}</span>
                    )}
            </div>
            <div className="col-6">
                {isUpdating ?(<input type='text' placeholder='Country' className='form-control form-control-sm'
                    defaultValue={destination.country}
                    onChange={e=>setNewCountry(e.target.value)}/>):(
                        <span className="text-body-secondary">{destination.country}</span>
                    )}
            </div>
        </div>
        <span className="badge text-bg-warning">{destination.daysNeeded} days</span>
        <div className="d-flex gap-1">
            <button className="btn btn-sm btn-outline-warning" onClick={()=>setIsUpdating(!isUpdating)} title={isUpdating ? "Cancel" : "Edit"}>
                <i className={`bi bi-${isUpdating ? "x-lg" : "pencil"}`}></i>
            </button>
            {isUpdating && (
                <button className="btn btn-sm btn-primary" onClick={handleUpdate} title="Save">
                    <i className="bi bi-check-lg"></i>
                </button>
            )}
            <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteDestination({id: destination.id})} title="Delete">
                <i className="bi bi-trash"></i>
            </button>
        </div>
    </li>
  )
}

export default Destination