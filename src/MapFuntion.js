import React from 'react'

const MapFuntion = () => {
    const userDetails =[
        {
            id:1,
            name:"Gayashn",
            gender:"Male",
            town:"Galle"  
        },
        {
            id:2,
            name:"Samith",
            gender:"Male"  
          },
          {
            id:3,
            name:"Kaveesha",
            gender:"Female"  
          },
    ]
  return (
    <div>
      {
        userDetails.map((data =>
            <div>
            <div>{data.name}</div>
            <div>{data.gender}</div>
            <div>{data.town}</div>
            </div>
            
        )
        )
      }
    </div>
  )
}

export default MapFuntion

