import delivery from "../../assets/img/delevary.svg";
import bestQuality from "../../assets/img/bestQuality (1).svg";
import saaave from "../../assets/img/saaave.svg";

const ServiceSection: React.FC = () => {
  return (
    <section className="conteinerServices container">
      <div className="conteinerServices-title">
        <h2>We provide that service</h2>
        <p>_______It is a long established fact that a reader</p>
      </div>
      <div className="ourService">
        <div className="ourService-text">
          <button className="ourService-button">
            <img src={delivery} alt="" />
            <h3>Free Delevary</h3>
            <span> It is a long established fact that a </span>
            <span> reader will be the service. </span>
          </button>
          <button className="ourService-button">
            <img src={bestQuality} alt="" />
            <h3>Free Delevary</h3>
            <span> It is a long established fact that a </span>
            <span> reader will be the service. </span>
          </button>
          <button className="ourService-button">
            <img src={saaave} alt="" />
            <h3>Free Delevary</h3>
            <span> It is a long established fact that a </span>
            <span> reader will be the service. </span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
