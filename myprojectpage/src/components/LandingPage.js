import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import Portfolio from "./Portfolio";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpg"

function LandingPage() {
    return <>
        <div id="#home" className="mx-auto container-fluid topSection">
            <div className="row">
                <div className="col-sm-6">
                    <div className="container">
                        <div className="row mx-auto my-3">
                            <h1 className="text-center">Hello, my name is Joshua Igwe</h1>
                            <h3 className="my-3 typewriter">Full Stack Software Engineer</h3>
                            <p className="">I am a software engineer with two years of experience in the Banking Industry</p>
                            <div className="row my-3 mx-auto">
                                <i className="fa-brands fa-2xl mx-1 fa-react"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-js"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-java"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-aws"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-docker"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-bootstrap"></i>
                            </div>
                        </div>
                        <div className="row mx-auto my-5">
                            <Link className="btn btn-danger" to="/myprojectpage/contactForm">Contact me</Link>
                        </div>

                    </div>

                </div>
                <div className="col-sm-6">
                    <img className="mx-auto rounded d-block" src={profile} alt="profile picture of Joshua" />
                </div>
            </div>
        </div>
    </>

}
export default LandingPage;