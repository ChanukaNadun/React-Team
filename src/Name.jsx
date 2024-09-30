import React from 'react'

function Name(data) {
  return (
    <div>
      <div>{data.firstName} {data.lastName}</div>
      {data.children}
    </div>
  );
}

export default Name
