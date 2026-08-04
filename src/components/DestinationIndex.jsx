import React from 'react'
import AddDestination from './AddDestination'
import DestinationList from './DestinationList'

function DestinationIndex() {
  return (
    <div className="card bg-body-tertiary border-secondary-subtle shadow-sm">
        <div className="card-header d-flex align-items-center gap-2">
            <i className="bi bi-list-ul text-success"></i>
            <h3 className="h5 mb-0">Travel List</h3>
        </div>
        <div className="card-body">
            <AddDestination/>
            <DestinationList/>
        </div>
    </div>
  )
}

export default DestinationIndex