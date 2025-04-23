import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instageam.svg";
import twitter from "../../assets/img/twitter.svg";

const MainSection: React.FC = () => {
  return (
    <>
      <section className="mainSection__container">
        <div className="mainSection__container-messenger">
          <div className="mainSection__container-list">
            <img
              src={facebook}
              alt=""
              className="mainSection__container-item"
            />
            <img
              src={instagram}
              alt=""
              className="mainSection__container-item"
            />
            <img src={twitter} alt="" className="mainSection__container-item" />
          </div>
        </div>
        <div className="mainSection__container-content">
          <div className="mainSection__blurBox">
            <div className="mainSection__blurBox-content">
              <h1>Enjoy your life in our luxurious furniture</h1>
              <p>
                If you are looking for a furniture then you have come to the
                right place.
              </p>
              <button className="header__menu-button">Order Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="viewsSection__container">
        <div className="viewsSection__container-zero"></div>
        <div className="viewsSection__container-list">
          <div className="viewsSection__container-stats">
            <div className="viewsSection__container-statItem">
              <h2>120 k</h2>
              <p>Furniture Sale</p>
            </div>
            <div className="viewsSection__container-statItem">
              <h2>98 k</h2>
              <p>Review ⭐ (4.5)</p>
            </div>
            <div className="viewsSection__container-statItem">
              <h2>125</h2>
              <p>Furniture Categories</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainSection;
