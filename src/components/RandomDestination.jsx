import React, {useState} from 'react'
import { useGetAllDestinationQuery } from '../api/DestinationApi'

function RandomDestination() {
    const {data, isLoading, isSuccess} = useGetAllDestinationQuery();
    const [pick, setPick] = useState(0);
    const suggestion = isSuccess && data.length > 0 ? data[pick % data.length] : null;

  return (
    <div className="card bg-body-tertiary border-secondary-subtle shadow-sm mt-4">
        <div className="card-body text-center">
            <h4 className="h6 text-success text-uppercase mb-3">
                <i className="bi bi-shuffle me-1"></i>Random Travel Suggestion
            </h4>
            {isLoading ? (
                <span className="spinner-border spinner-border-sm text-success"></span>
            ) : suggestion ? (
                <p className="fs-5 mb-3">{suggestion.city}, {suggestion.country}</p>
            ) : (
                <p className="text-body-secondary mb-3">Add a destination to get a suggestion.</p>
            )}
            <div>
                <button className="btn btn-sm btn-outline-success" onClick={()=>setPick(Math.floor(Math.random() * (data?.length || 1)))} disabled={!suggestion}>
                    <i className="bi bi-arrow-clockwise me-1"></i>Suggest another
                </button>
            </div>
        </div>
    </div>
  )
}

export default RandomDestination