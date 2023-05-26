import React from 'react'
import AddDestination from './AddDestination'
import DestinationList from './DestinationList'

function DestinationIndex() {
  return (
    <div className="text-white-50">
        <h3 className="text-success">Travel List</h3>
        <AddDestination/>
        <DestinationList/>
    </div>
  )
}

export default DestinationIndex