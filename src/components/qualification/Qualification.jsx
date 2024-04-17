import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MSc Data Science & Artificial Intelligence</h3>
                <span className="qualification__subtitle">
                  UK - University of London
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Designing and Building AI Products and Services</h3>
                <span className="qualification__subtitle">
                  Colombia - MIT professional Education
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mechanical Engineering</h3>
                <span className="qualification__subtitle">
                  Colombia - Universidad de América
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2008 - 2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Master in Data Science / AI</h3>
                <span className="qualification__subtitle">
                  Colombia - DEV.F
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master in Coding</h3>
                <span className="qualification__subtitle">
                  Colombia - DEV.F
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">IBM applied AI professional certificate</h3>
                <span className="qualification__subtitle">
                  Colombia - IBM, Coursera
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div>


            
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technological Innovation Director</h3>
                <span className="qualification__subtitle">
                  FMHOUSE S.L. - Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Principal Co-founder</h3>
                <span className="qualification__subtitle">
                  Propert-i - Colombia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Research and Development Director</h3>
                <span className="qualification__subtitle">Accuro S.A.S. - Colombia</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
