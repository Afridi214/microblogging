import React from "react";
import { Link } from 'react-router-dom';
import '../assets/css/style.css';





const Profile = () => {
    return (

        <div className="mainbody log_bg">
            <div clclassNameass=""></div>
            <div className="login_area">
                <h1>Login</h1>
                <div className="tablearea">
                    <div className="log-box">
                        <form action="timeline.html">
                            <div className="frm-row">
                                <input type="text" className="inputarea" placeholder="Email address" />
                            </div>
                            <div className="frm-row">
                                <input type="password" className="inputarea" placeholder="Password" />
                            </div>
                            <div className="frm-row btl"><label><input type="checkbox" /> Remember me</label>
                                <Link type="submit" class="btns roundshape full" to="/user/timeline">LOGIN</Link>
                            </div>
                        </form>
                        <p>If you have no sign up yet! <Link to="user/add"><strong>Sign Up</strong></Link></p>
                        <p><small>Note: Daque ipsa quae ab illo inventore veritatis et quasi architecto</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;