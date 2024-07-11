import { UserFavFoods } from './UserFavFoods';
import PropTypes from 'prop-types';

export function UserProfile(props) {
    const callMe = () =>{
        console.log('Hey You!!!!!!!!!   ')
    };
  return(
    <>
      <b>User Name: </b><span>{props.userName}</span>
      <br />
      <b>User Id: </b><span>{props.userId}</span>
      <div>
        <b>Email:</b>
        <span>patilharshal675@gmail.com</span>
      </div>
      <b>Age: </b>
      <span>{props.age}</span>
      <br />
      <UserFavFoods callMe = {callMe}/>
    </>
  )
}

UserProfile.propTypes = {
    userName: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired
}
