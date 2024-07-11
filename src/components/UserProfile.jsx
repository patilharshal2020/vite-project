import { UserFavFoods } from './UserFavFoods';
import PropTypes from 'prop-types';
import style from './style.module.css'

export function UserProfile(props) {
    const callMe = () =>{
        console.log('Hey You!!!!!!!!!   ')
    };
  return(
    <>
      <b className={style.username}>User Name: </b><span>{props.userName}</span>
      <br />
      <b className={style.username}>User Id: </b><span>{props.userId}</span>
      <div>
        <b className={style.username}>Email:</b>
        <span>patilharshal675@gmail.com</span>
      </div>
      <b className={style.username}>Age: </b>
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
