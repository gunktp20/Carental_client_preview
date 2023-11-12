import Text from "../assets/images/text.png";

const LogoAlt = ({width}) => {
  return (
    <img
      src={Text}
      alt="carental"
      className="logo"
      width={width ? width : "100%"}
    ></img>
  );
};

export default LogoAlt;
