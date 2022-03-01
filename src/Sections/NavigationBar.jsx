//import logo from "../Images/myLogo.png";

export default function NavigationBar() {
  return (
    <div className="navbar">
      <div>{/* <img src="logo" /> */}</div>
      <a href="#About" className="navbar-text">
        About{" "}
      </a>
      <a href="#Portfolio" className="navbar-text">
        {" "}
        Portfolio{" "}
      </a>
      <a href="#TechStack" className="navbar-text">
        {" "}
        TechStack{" "}
      </a>
      <a href="#Contact" className="navbar-text">
        {" "}
        Contact
      </a>
    </div>
  );
}
