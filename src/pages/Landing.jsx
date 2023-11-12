import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { Text } from "../components";
import main from "../assets/images/main3.png";

export default function Landing() {
  return (
    <Wrapper>
      <main>
        <nav>
          <Text width="150px" />
        </nav>
        <div className="container page">
          {/* info*/}
          <div className="info">
            <h1>
              Car <span>Rental</span> App
            </h1>
            <p>
              Welcome to our application, you can choose the car you want. There
              are more than 40 cars to choose from and more than 30 provinces.
              Thank you for choosing our service. If you encounter a problem,
              you can contact us through the social media channels of our
              service.
            </p>
            <Link to="/register" className="btn btn-hero shadow">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
}
