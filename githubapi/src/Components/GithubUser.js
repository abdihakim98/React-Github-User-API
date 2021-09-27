import React from "react"

function GithubUser(props) {

  console.log("MyData", props)

  return (
     //Mapping

      <div>
        
        {props.myUsers.map(user => (
          
            <div className="card">

          <img src={user.avatar_url} alt={user.name}/>
       
          <div>
          <h3>Name: {user.name}</h3>
          <h3>Bio: {user.bio}</h3>
          <h3>Followers: {user.followers}</h3>
          </div>
          </div>
))} 
        
      </div>
  )
}

export default GithubUser