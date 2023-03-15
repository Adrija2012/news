import React from 'react'

export default function CardOne({title, description, image, url, date}) {
 return (
<div className='col col-md-3 col-sm-6 col-12' style={{marginTop: "10px"}}>
        <div className="card" style={{ width: "18rem" }}>
  <img height="180px" src={image != null ? image: "https://cdn.wallpapersafari.com/36/75/oM9jZa.jpg"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className='text-muted'> {date} </p>
    <p className="card-text">
      {description && description.substr(0,50)}...
    </p>
    <a target= "_blank" href={url} className="btn btn-primary">
      Read More
    </a>
  </div>
</div>
</div>
  )
}
