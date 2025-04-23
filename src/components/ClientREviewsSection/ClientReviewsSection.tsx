const ClientReviewsSection: React.FC = () => {
  return (
    <section className="client__Reviews container">
      <h2>What say clients about us</h2>
      <div className="client__Reviews-title">
        <p className="client__Reviews-lineTitle"></p>
        <p>
          It is a long established fact that a reader will be distracted by the
          service.
        </p>
      </div>

      <div className="Reviews__Conteiner">
        <button
          className="reviews__nextButton hidden-mobile"
          title="Next Review"
        >
          Next
        </button>
        <div className="client__Reviews-content">
          <div className="client__Reviews-textContainer">
            <div className="client__Reviews-Avatar">
              <img src="./assets/img/User1Avatar.svg" alt="" />
            </div>
            <div className="client__Reviews-Info">
              <div className="client__Reviews-UserName">
                Mr. Jone Ambrose
                <div className="client__Reviews-Date">20 - 07 - 21</div>
              </div>

              <div className="client__Reviews-textContainer-title">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  to since the 1500s, type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className="client__Reviews-starsContainer">
                <img
                  src="./assets/img/reviewsStar.svg"
                  alt=""
                  className="About_us_icon"
                />
                <img
                  src="./assets/img/reviewsStar.svg"
                  alt=""
                  className="About_us_icon"
                />
                <img
                  src="./assets/img/reviewsStar.svg"
                  alt=""
                  className="About_us_icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="client__Reviews-content">
          <div className="client__Reviews-textContainer">
            <div className="client__Reviews-Avatar">
              <img src="./assets/img/User1Avatar.svg" alt="" />
            </div>
            <div className="client__Reviews-Info">
              <div className="client__Reviews-UserName">
                Mr. Jone Ambrose
                <div className="client__Reviews-Date">20 - 07 - 21</div>
              </div>

              <div className="client__Reviews-textContainer-title">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  to since the 1500s, type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className="client__Reviews-starsContainer">
                <img
                  src="./assets/img/reviewsStar.svg"
                  alt=""
                  className="About_us_icon"
                />
                <img
                  src="./assets/img/reviewsStar.svg"
                  alt=""
                  className="About_us_icon"
                />
                <img
                  src="./assets/img/reviewsStar.svg"
                  alt=""
                  className="About_us_icon"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="reviews__prevButton hidden-mobile"
          title="Prev Review"
        >
          Prev
        </button>
      </div>
    </section>
  );
};
export default ClientReviewsSection;
