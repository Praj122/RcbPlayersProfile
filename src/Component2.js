import React from 'react'
import './component2.css'
function Component2({imageUrl,name,age,country,content})
{
    return(
    <div>
    <div className="container">
    <img src={imageUrl} height={250} width={250}></img>
    <p><strong>Name: </strong>{name}</p>
    <p><strong>Age: </strong>{age}</p>
    <p><strong>Gender: </strong> Male</p>
    <p><strong>Country: </strong>{country}</p>
    <button onClick={() => alert(content)}>Load more</button>
    </div>
    </div>
    )
}

export default Component2
