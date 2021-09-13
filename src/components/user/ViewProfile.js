import React from "react";
import '../../assets/css/style.css';

const ViewProfile = () => {
    return (


        <div className="container">
            <div className="row">
                <div className="col-md-8 pfl-pnl">
                    <h1>Afridi sk <span>(afridi.blog)</span></h1>
                    <section className="img-box">
                        <h5>Photo:</h5>
                        <div className="row prfl_picrow">
                            <label><span className="prfl_pic log_bg" ></span>

                                <samp> Change Photo</samp></label>
                        </div>
                    </section>
                    <section className="dtl-box">
                        <h6>Email ID: </h6>
                        <div className="row p-2">afridi@gamil.com</div>
                        <div className="inpt">
                            <input type="text" className="inputarea" placeholder="email" value="afridi@gamil.com" />
                        </div>
                    </section>
                    <section className="dtl-box">
                        <h6>About myself: </h6>
                        <div className="row p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        <div className="inpt">
                            <textarea className="inputarea" placeholder="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                        </div>
                    </section>
                </div>



                <div className="col-md-4">
                    <div class="box chgpass">
                        <h5>Change Password:</h5>
                        <form className="p-2">
                            <div className="row">
                                <input type="password" className="inputarea" placeholder="Old Password" />
                            </div>
                            <div className="row">
                                <input type="password" className="inputarea" placeholder="New Password" />
                            </div>
                            <div className="row">
                                <input type="password" className="inputarea" placeholder="Confirm Password" />
                            </div>
                            <div className="row">
                                <button type="submit" className="btns full roundshape">Change Password</button>
                            </div>
                        </form>
                    </div>
                    <div className="flows">
                        <div className="tablearea">
                            <div className="cell">
                                <p><a href="#following" className="open-popup-link"><h6>Following</h6></a>
                                </p><p>50</p></div>
                            <div className="cell">
                                <p><a href="#follower" className="open-popup-link"><h6>Followers</h6></a></p><p>100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ViewProfile;