import React from "react";
import "./home.css"

const HomeJxs = () => (
    <div className="">
        <div className={"home-wrapper white-ft d-flex justify-content-center flex-column align-items-center"}>
            <div className={"fs-20 m-center-text margin-bottom-30 md-5"}>
                “One of the greatest values of mentors is the ability to see ahead what others cannot see and to help
                them
                navigate a course to their destination.” — John C. Maxwell
            </div>
            <div className={"md-5 d-flex justify-content-center align-items-center"}>
                <div className={"md-5"}>
                    <input className={"m-input"} type={"text"} placeholder={"Search for a mentor"}/>
                </div>
                <div className={"md-3"}>
                    <select defaultValue={"default"} className={"m-input"} placeholder={"Search for a mentor"}>
                        <option value={"default"} disabled>
                            --Select a category--
                        </option>
                        <option>
                            Education
                        </option>
                        <option>
                            Fashion
                        </option>
                        <option>
                            Technology
                        </option>
                        <option>
                            Career
                        </option>
                        <option>
                            Entertainment
                        </option>
                        <option>
                            Business
                        </option>
                        <option>
                            Finance
                        </option>
                        <option>
                            Catering
                        </option>
                    </select>
                </div>
                <div className={"md-2"}>
                    <button type={"submit"} className={"primary-button"}>Find a Mentor</button>
                </div>
            </div>
        </div>
    </div>
);

export default HomeJxs;
