export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <h2 className="contact-h2">Contact</h2>
      <div className="container-contact">
        <p className="contact-description">
          I look forward to hearing from you. Feel free to contact me.
        </p>
        <div className="contact-box">
          <i class="fa-solid fa-at"></i>
          <p className="description">tshepi.lehutjo@gmail.com</p>
        </div>
        <div className="contact-box">
          <i class="fa-solid fa-phone"></i>
          <p className="description">+46 70 820 1087</p>
        </div>
        <div className="contact-box">
          <i class="fa-solid fa-location-dot"></i>
          <p className="description">Sweden,Malmö</p>
        </div>
      </div>
    </div>
  );
}
