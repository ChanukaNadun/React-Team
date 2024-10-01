import React from 'react'

function Map() {
   const data = [
        {
            id:1,
            name:"jone",
            gender:"male",
        },

        {
            id:2,
            name:"james",
            gender:"male",
        },

        {
            id:3,
            name:"jenny",
            gender:"female",
        }

]
  return (
    <div>
      {
        data.map((user =>(
            <div>
                <div>{user.name}</div>
                <div>{user.gender} </div>
            </div>
            
        )))
      }
    </div>
  )
}

export default Map
// rafce