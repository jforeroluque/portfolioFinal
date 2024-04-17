import { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bx-scatter-chart services__icon"></i>
            <h3 className="services__title">
              AI <br /> Implementation
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="bx bx-x services__modal-close"
              ></i>

              <h3 className="services__modal-title">Data Scientist</h3>
              <p className="services__modal-description">
                10 years of implementation of data strategies and development of AI products.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I understand the problem and define clear objectives.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">Collect relevant data from various sources</p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experiment with different ML or DL algorithms.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Assess the performance of the model.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Track its perfomrance in production.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bxs-analyse services__icon"></i>
            <h3 className="services__title">
              Strategic <br /> Planning
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="bx bx-x services__modal-close"
              ></i>

              <h3 className="services__modal-title">Strategic Planning Consultant</h3>
              <p className="services__modal-description">
                +450 hours of consulting businesses in tech strategies and general strategic planning.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conduct research and analysis of competitive landscape.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">Facilitate workshops and discussions with the company leadership.</p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop strategic plans and initiatives.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Define key performance indicators and tracking metrics.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Support the company in implementing strategic initiatives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bx-map-alt services__icon"></i>
            <h3 className="services__title">
              Product <br /> Development
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="bx bx-x services__modal-close"
              ></i>

              <h3 className="services__modal-title">Product Owner</h3>
              <p className="services__modal-description">
                Create compelling product that not only meet user needs but also drive business growth and differentiation in the market.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborate with stakeholders to define problem statements and ideate solutions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">Define key requirements, features and functionalities.</p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Create wireframes, mockups, and prototypes using Figma.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Act as a liason between design, development and other cross-functional teams.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-badge-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop a strong brand identity for the product.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
