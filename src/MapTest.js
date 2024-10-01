import React from 'react'

const MapTest = () => {
    const data =[
        {
            id:1,
            name:"Jane",
            gender:"M"
        },
        {
            id:1,
            name:"Jone",
            gender:"f"
        },
        {
            id:3,
            name:"Jenny",
            gender:"f"
        },
    ]
  return (
    <div>
      {
        data.map((user)=>
            <div>{user.name}</div>
        )
      }
    </div>
  )
}

export default MapTest
