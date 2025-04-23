const Footer: React.FC = () => {
  return (
    <footer className="footerPositivus">
      <div className="footerPositivus__container container">
        <div className="footerPositivus__container-item">
          <h2>SQ R3</h2>
          <div className="footerPositivus-contacts">
            <div className="footerPositivus-contacts-phone">
              <div className="phoneContainer">
                <img src="./assets/img/phone.svg" alt="" />
              </div>
              <p>+1 234 567 890</p>
            </div>
            <div className="footerPositivus-contacts-email">
              <div className="emailConteiner">
                <img src="./assets/img/email.svg" alt="" />
              </div>
              <p>uiuxmdomith@gmail.com</p>
            </div>
          </div>
          <div className="footerPositivus__container-icons">
            <img
              src="./assets/img/facebook.svg"
              alt=""
              className="footerPositivus__container-facebook"
            />
            <img
              src="./assets/img/instageam.svg"
              alt=""
              className="footerPositivus__container-instagram"
            />
            <img
              src="./assets/img/twitter.svg"
              alt=""
              className="footerPositivus__container-twitter"
            />
          </div>
        </div>
        <div className="footerPositivus__container-item">
          <h3>Usefull Links</h3>
          {/* <UseFulLinks/> */}
        </div>
        <div className="footerPositivus__container-item">
          <h3>FAQ</h3>
          <div className="footerPositivus__dataList">
            <div className="footerPositivus__dataList-data">
              {" "}
              Lorem ipsum dolor
            </div>
            <div className="footerPositivus__dataList-data">
              Lorem ipsum dolor
            </div>
            <div className="footerPositivus__dataList-data">
              Lorem ipsum dolor
            </div>
            <div className="footerPositivus__dataList-data">
              Lorem ipsum dolor
            </div>
          </div>
        </div>
        <div className="footerPositivus__container-item">
          <h3>Newsletter</h3>
          <div className="footerPositivus__newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="footerPositivus__newsletter-input"
            />
            <button className="footerPositivus__newsletter-button">Send</button>
          </div>
          <div className="footer__downloadApp">
            <button className="footer__downloadApp-button" type="button">
              Download App
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
