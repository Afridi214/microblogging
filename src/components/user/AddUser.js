import React from "react";
import {Link} from 'react-router-dom';

const AddUser = () => {
    return (
        <div className="container-fluid">
            
                <div className="mainbody">
                    <div className="wrapper register">
                        <h1>Sign Up</h1>
                        <div class="reg-box">
                            <form>
                                <div className="row">
                                    <input type="text" className="inputarea" placeholder="Your name" />
                                </div>
                                <div className="row">
                                    <input type="text" className="inputarea" placeholder="Your email" />
                                </div>
                                <div className="row">
                                    <input type="password" className="inputarea" placeholder="Password" />
                                </div>
                                <div className="row">
                                    <input type="password" className="inputarea" placeholder="Confirm password" />
                                </div>
                                <div className="row">
                                    <Link type="submit" to="/" className="btns roundshape full">SIGN UP</Link>
                                </div>
                            </form>
                            <p>If you have already sign in! <Link to="/"><strong>Login Now</strong></Link></p>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default AddUser;