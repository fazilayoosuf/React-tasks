function User(props){
  
      return (
        <div className="container">
             <ul className="ul card">
        <li className="list">
        <img src={props.userDetail.avatar} className="list-item circle w3-hide-small" ></img>
        <div className="list-item" onClick={props.onChoosedUser.bind(null,props.userDetail)}>
          <span >{props.userDetail.name}</span>
          <span>{props.userDetail.email}</span>
        </div>
      </li>
      </ul>
      </div>
        
 ) 
}
export default User;