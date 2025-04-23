import aboutIMG from "../../assets/img/aboutUsImg.svg";
import alibaba from "../../assets/img/Alibaba_logo_PNG4 1.svg";
import amazon from "../../assets/img/Amazon_logo_PNG3 1.svg";
import blueBall from "../../assets/img/Group 22.svg";

const AboutUsSection: React.FC = () => {
  return (
    <section className="conteiner__AboutUs">
      <div className="conteiner__AboutUs-title">
        <h2>Learn About Us</h2>
        <p>_______It’s short title here</p>
      </div>
      <div className="conteiner__AboutUs-content">
        <div className="conteiner__AboutUs-img">
          <img src={aboutIMG} alt="" />
        </div>
        <div className="conteiner__AboutUs-textContainer">
          <div className="conteiner__AboutUs-textContainer-title">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever to
              since the 1500s, type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting. type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting
            </p>
            <button className="conteiner__AboutUs-button">More about us</button>
          </div>

          <div className="conteiner__AboutUs-imgContainer">
            <img src={alibaba} alt="" className="About_us_icon" />
            <img src={amazon} alt="" className="About_us_icon" />
            <img src={blueBall} alt="" className="About_us_icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsSection;
