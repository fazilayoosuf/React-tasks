function User(props){
    return (
        <div className="container">
             <ul className="ul card">
        <li className="list">
        <img src={props.src} className="list-item circle w3-hide-small" ></img>
        <div className="list-item">
          <span >{props.name}</span>
          <span>{props.email}</span>
        </div>
      </li>
      </ul>
      </div>
        
 ) 
}
export default User;