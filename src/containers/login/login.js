import React, { useState } from 'react'
import { Image, InputGroup, FormControl, Button } from 'react-bootstrap'
import { COLORS } from '../../constants/colors'
import './login.css'

const Login = () => {

    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    const [usernameErr, setUsernameErr] = useState('');
    const [passErr, setPassErr] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        if (usernameErr)
            setUsernameErr('')
    }

    const handlePasswordChange = (e) => {
        setPass(e.target.value)
        if (passErr)
            setPassErr('')
    }

    const buttonOnClick = () => {
        console.log("Button Pressed")
        if (!username)
            setUsernameErr('Username cannot be empty!')
        if (!pass)
            setPassErr('Password cannot be empty!')
        else {
            // TODO: connect to backend for login
            console.log("login with credentials ", username, pass)
        }
    }

    return (
        <div className="d-flex border flex-column justify-content-center align-items-center" style={{ height: '100vh', overflow: 'hidden', padding: 20, backgroundColor: COLORS.GREEN_MAIN }}>
            <Image src={require('../../assets/login_chart.svg')} className='chart-img' />
            <div className="login-card">
                <InputGroup>
                    <div className="d-flex flex-row align-items-center" style={{ width: '100%' }}>
                        <Image src={require('../../assets/profile_pic_ic.png')} className="icon" />
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="err">{usernameErr}</div>
                </InputGroup>
                <InputGroup className='margin-top'>
                    <div className="d-flex flex-row align-items-center" style={{ width: '100%' }}>
                        <Image src={require('../../assets/lock.svg')} className="icon" />
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="err">{passErr}</div>
                </InputGroup>

                <div className="margin-top d-flex justify-content-center">
                    <Button
                        style={{ backgroundColor: COLORS.GREEN_MAIN, color: 'white', width: '100%', border: 0 }}
                        onClick={buttonOnClick}>
                        See Dashboard
                    </Button>
                </div>
                <div className="d-flex justify-content-center">
                    <Button
                        className='forgot-pass'
                        style={{ color: COLORS.GREEN_MAIN, }}>
                        Forgot password?
                </Button>
                </div>

            </div>
        </div>

    )
}

export default Login