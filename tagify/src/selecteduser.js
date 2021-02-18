function SelectedUser(props) {
  return (
    <span className="tag">
      <img
        src={props.userDetail.avatar}
        className="img"
      ></img>
      <div className="spanList" >
        <span>{props.userDetail.name}</span><br></br>
        <span>{props.userDetail.email}</span>
      </div>
      <i  className="closeBtn"  onClick={props.onDelete.bind(null, props.userDetail)}>&times;</i>
    </span>
  );
}
export default SelectedUser;
