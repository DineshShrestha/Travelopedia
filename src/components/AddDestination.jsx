import React, {useState} from 'react'
import { useAddDestinationMutation} from '../api/DestinationApi';
function AddDestination() {
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");
    const [addDestinationMutation, {isLoading}] = useAddDestinationMutation();

    const handelSubmit = (e)=>{
        e.preventDefault();
        addDestinationMutation({
            id: Math.random()*100,
          city: newCity,
          country: newCountry,
          daysNeeded: parseInt(Math.random() * 10) + 1,
        });
        setNewCity("");
        setNewCountry("");
    }
  return (
    <form onSubmit={handelSubmit} className="row g-2 mb-4">
        <div className="col-md-5">
            <div className="form-floating">
                <input type="text" id="newCity" className="form-control" placeholder="City" value={newCity} onChange={e=>setNewCity(e.target.value)} required/>
                <label htmlFor="newCity">City</label>
            </div>
        </div>
        <div className="col-md-5">
            <div className="form-floating">
                <input type="text" id="newCountry" className="form-control" placeholder="Country" value={newCountry} onChange={e=>setNewCountry(e.target.value)} required/>
                <label htmlFor="newCountry">Country</label>
            </div>
        </div>
        <div className="col-md-2">
            <button className="btn btn-success w-100 h-100 d-flex align-items-center justify-content-center gap-1" disabled={isLoading}>
                <i className="bi bi-plus-lg"></i> Add
            </button>
        </div>
    </form>
  )
}

export default AddDestination