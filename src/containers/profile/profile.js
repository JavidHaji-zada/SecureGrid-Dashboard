import React from 'react';
import { Image } from 'react-bootstrap';
const Profile = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <Image src={require('../../assets/profile-picture.jpg')} roundedCircle/>
            <p className="mt-3">Dummy Name</p>
            <p className="mt-3">Dummy Email</p>
            <p className="mt-3">+905555555555</p>
        </div>
    )
}

export default Profile