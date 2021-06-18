import React from 'react';
import PropTypes from 'prop-types';

const Profile =(props) => {

    return(
        <>
            {props.children}
            <h1 style={{color:'#F50057'}}>{props.fullName}</h1> 
            <h2 style={{color:'#00BFA6'}}> {props.profession}</h2>
            <h3>Who Is {props.fullName}?</h3>           
            
            <p style={{padding:"0 180px", textAlign: "justify"}}> {props.bio}</p>
            <button onClick={() => props.handleName(props.fullName)}>
                Alert
            </button>
        </>
    )
}
Profile.defaultProps = {
    fullName:"Haddaji Refka",
    bio:"...",
    profession:"full-stack developer"
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
  };
export default Profile;