import React from "react";
import './Profile.css'
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/profile.php?id=100082081639777">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/vikar_maulana_/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC0JrqVB8-NKbr2gMlPwfdIw">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://github.com/vikarmaulanaarrisyad">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">Vikar Maulana Arrisyad</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Programmer",
                    3000,
                    "Full Stack Developer",
                    3000,
                    "MERN Stack Dev",
                    3000,
                    "Mobile Programmer",
                    3000,
                    "Laravel/CI Dev",
                    3000,
                    "React/React Native Dev",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and end operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="ehizcv.pdf" download="Contoh cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
