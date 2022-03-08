export default function NavigationBar() {
  return (
    <div className="navbar">
      <div>{/* <img src="logo" /> */}</div>
      <a href="#Contact" className="navbar-text">
        {/* Always remove those empty spaces */} Contact
      </a>
      <a href="#Technology" className="navbar-text">
        {" "}
        Technology{" "}
      </a>
      <a href="#Portfolio" className="navbar-text">
        {" "}
        Portfolio{" "}
      </a>
      <a href="#About" className="navbar-text">
        About{" "}
      </a>
    </div>
  );
}
