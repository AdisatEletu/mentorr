import React from "react";

const Register = () => {
    return (
        <div className={"d-flex align-items-center fullheight"}>
            <div className={"md-4 d-flex align-items-center fullheight"}>
                <img src={require("../../assets/Mentorship.png")} style={{width: "100%", height: "100%"}}
                     className={"image-contain"}/>
            </div>
            <div className={"md-6"}>
                <form method={"POST"} className={""}>
                    <div className={"d-flex"}>
                        <div className={"md-5"}>
                            <label For={"fName"}>FirstName</label>
                            <input id={"fName"} type={"text"} className={'m-input'}/>
                        </div>
                        <div className={"md-5"}>
                            <label htmlFor={"lName"}>Last Name</label>
                            <input id={"lName"} type={"text"} className={'m-input'}/>
                        </div>
                    </div>
                    <div className={" d-flex"}>
                        <div className={"md-5"}>
                            <label For={"email"}>Email</label>
                            <input id={"email"} type={"text"} className={'m-input'}/>
                        </div>
                        <div className={"md-5"}>
                            <label htmlFor={"phone"}>Phone number</label>
                            <input id={"phone"} type={"text"} className={'m-input'}/>
                        </div>
                    </div>

                    <div>
                        <label For={"address"}>Full Address</label>
                        <input id={"address"} type={"text"} className={'m-input'}/>
                    </div>
                    <div>
                        <label For={"fName"}>FirstName</label>
                        <input id={"fName"} type={"text"} className={'m-input'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
