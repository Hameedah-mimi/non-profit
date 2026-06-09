import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/NGO-pic1.png";
import volunteer from "../assets/volunteer.jpg";
import outreach from "../assets/medical-outreach.jpg";
import "./Styles/Header.css";

function Header() {
  return (
    <div className="header-page">
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <div className="carousel-wrapper">
            <div>
              <img
                className="header-images d-block w-100"
                src={pic1}
                alt="First slide"
              />
            </div>
            <div className="overlay"></div>
            <Carousel.Caption>
              <h1 className="h1">Bridging communities, changing lives</h1>
              <p className="p">
                Empowering underserved communities through education, support
                and sustainable development
              </p>
              <button className="header-button">
                <a href="/getinvolved">Join Us</a>
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className="carousel-wrapper">
              <img
                className="header-images d-block w-100"
                src={outreach}
                alt="Second slide"
              />
            </div>
            <div className="overlay"></div>
            <Carousel.Caption>
              <h1 className="h1">Every Donation Makes Impact</h1>
              <p className="p">
                Your support helps provides education, healthcare and
                opportunities to those in need
              </p>
              <button className="header-button">
                <a href="/donate">Donate Now</a>
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className="carousel-wrapper">
              <img
                className="header-images d-block w-100"
                src={volunteer}
                alt="Third slide"
              />
            </div>
            <div className="overlay"></div>

            <Carousel.Caption>
              <h1 className="h1">Become a volunteer</h1>
              <p className="p">
                Be a part of a growing network of changemakers creating real
                impact
              </p>
              <button className="header-button">
                {" "}
                <a href="/contact">Get Involved</a>{" "}
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
