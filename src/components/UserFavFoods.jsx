import PropTypes from 'prop-types';
export function UserFavFoods(props){
   return(
     <>
        <b>Favorite Foods:</b>
        <ul>
            <li>Sushi</li>
            <li>Pizza</li>
            <li>Burger</li>
        </ul>
        <br />
        <button onClick={props.callMe}>Click Me</button>
    </>
   )
}

UserFavFoods.propTypes = {
    callMe: PropTypes.func.isRequired,
}