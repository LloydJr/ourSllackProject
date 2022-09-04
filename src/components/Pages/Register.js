import { useRef, useState, useEffect } from 'react'
import { faCheck, faInfoCircle, faTimes, foInfoCirciel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import "./Register.css";
// import "./registerStyled.css"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = '/user'



const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [userName, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [password, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(userName)
        console.log(result)
        console.log(userName)
        setValidName(result)
    }, [userName])

    useEffect(() => {
        const result = PWD_REGEX.test(password)
        console.log(result)
        console.log(password)
        setValidPwd(result)
        const match = password === matchPwd
        setValidMatch(match)
    }, [password, matchPwd])


    useEffect(() => {
        setErrMsg('')
    }, [userName, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // if button enabled with JS hack, check to make sure none are false
        const v1 = USER_REGEX.test(userName)
        const v2 = PWD_REGEX.test(password)
        if(!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, {userName: userName, password: password});
                console.log(response?.data)
                console.log(response?.accessToken)
                console.log(JSON.stringify(response))
                setSuccess(true)
                // clear input fields
        } catch (err) {
            if(!err?.response){
                setErrMsg("no server response")
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken')
            } else {
                setErrMsg("Registration Failed")
            }

            errRef.current.focus()
        }
        
    }

    return (
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
        ) : (
        <section className='section text-white'> 
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !userName ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={userName}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            className="text-black"
                        />
                <p id="uidnote" className={userFocus && userName && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !password ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid = {validPwd ? "false" : "true"}
                            aria-describedby = "pwdnote"
                            onFocus = {() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className="text-black"
                        />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon = {faInfoCircle} />
                                    8 to 24 characters.<br/>
                                    Must include uppercase and lowercase letters, a number and a special character <br/>
                                    Allowed special characters: <span aria-label="excalmation mark">!</span>
                                    <span aria-label = "at symbol">@</span> <span aria-label="hashtag">#</span>
                                    <span aria-label = "dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                        <label htmlFor='confirm_pwd'>
                            Confirm Password:
                            <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <input 
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby = "confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className="text-black"
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>   

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}> Sign-Up </button> 
            </form>

            <p>
                Already Registerd?<br />
                <span classname ="line">
                    <a href="#">Sign In</a>
                </span>
            </p>
        </section>
        )}
        </>
    )
}

export default Register
