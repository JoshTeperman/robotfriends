import React from 'react'

let Card = ({ name, email, id }) => {
  return (
    <div className="dib pa3 bg-light-green ma2 br3 grow bw2 shadow-5 tc">
      <img className="br-100" alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card




