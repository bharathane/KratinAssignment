import { Component } from "react";
import { TbAward } from "react-icons/tb";
import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

class Doctor extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="drCon">
          <h1>NearBy Doctors</h1>
          <div className="DoctorDetailsContainer">
            <img
              src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1691491281/dp7mtpxcggyns0uzdxcr.jpg"
              alt="Sunil"
              className="profileImg"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. joseph almedry</h1>
              <p className="study">
                MBBS, MS (Ortho), MRCS, CCBST, MSc (Tr & Ortho), MCH (Ortho),
                FRCS (Tr & Ortho)
              </p>
              <p className="designation">Speciality : Bones (Orthopaedics)</p>
              <p className="para">6 Years Of Experience</p>
              <p className="designation">
                Senior Consultant Orthopedic Joint Replacement & Arthroscopic
                Surgeon
              </p>
              <div className="awardCon">
                <TbAward size="24" />
                <p className="award">3 awards</p>
              </div>
              <div>
                <button type="button" className="outlineBtn">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="DoctorDetailsContainer">
            <img
              src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1691491372/nwbziswimq9sqlvgxdnj.jpg"
              alt="Geethu"
              className="profileImg"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. kathrin vam</h1>
              <p className="study">BDS, MDS</p>
              <p className="designation">Speciality : Dentist (Endodontics)</p>
              <p className="para">7 Years Of Experience</p>
              <p className="designation">Endodontics</p>
              <div className="awardCon">
                <TbAward size="24" />
                <p className="award">3 awards</p>
              </div>
              <div>
                <button type="button" className="outlineBtn">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="DoctorDetailsContainer">
            <img
              src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1691491506/dfqq4d6xfq3kwk1jrfom.jpg"
              alt="Indumathy"
              className="profileImg"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Indumathy Ramachandran</h1>
              <p className="study">MBBS, DO, DNB (Opthal), FICO</p>
              <p className="designation">Speciality : Eyes (Opthalmology)</p>
              <p className="para">2 Years Of Experience</p>
              <p className="designation">
                Laser Refractive Surgeon, Fellowship in Cornea and External
                Disease and Refractive Surgery.
              </p>
              <div className="awardCon">
                <TbAward size="24" />
                <p className="award">2 awards</p>
              </div>
              <div>
                <button type="button" className="outlineBtn">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="DoctorDetailsContainer">
            <img
              src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1691491611/yobxodswjhdtdfwfhj4q.jpg"
              alt="Mahita"
              className="profileImg"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Mahita Reddy A</h1>
              <p className="study">MBBS, MD(Obs & Gyn), DGO, FICOG</p>
              <p className="designation">
                Speciality : Gynecology & Obstetrics
              </p>
              <p className="para">2 Years Of Experience</p>
              <p className="designation">Obstetrics & Gynecology</p>
              <div className="awardCon">
                <TbAward size="24" />
                <p className="award">3 awards</p>
              </div>
              <div>
                <button type="button" className="outlineBtn">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="DoctorDetailsContainer">
            <img
              src="https://cdn.yashodahospitals.com/wp-content/uploads/Dr.-Nagendra-Mahendra.jpg"
              alt="Nagendra"
              className="profileImg"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Nagendra Mahendra</h1>
              <p className="study">MBBS, DLO, DNB (ENT)</p>
              <p className="designation">Speciality : Endoscopic (ENT)</p>
              <p className="para">40 Years Of Experience</p>
              <p className="designation">
                Micro Ear Surgery, Phono Surgery, Laryngotracheal Surgery,
                Endoscopic Surgery, Endoscopic Skull Base
              </p>
              <div className="awardCon">
                <TbAward size="24" />
                <p className="award">3 awards</p>
              </div>
              <div>
                <button type="button" className="outlineBtn">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="DoctorDetailsContainer">
            <img
              src="https://cdn.yashodahospitals.com/wp-content/uploads/Dr-T-Sashikanth-Cardiologist-in-hyderabad.jpg"
              alt="Sashikanth"
              className="profileImg"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. T. Sashikanth</h1>
              <p className="study">MD, DM, Fellow ICPS (Paris)</p>
              <p className="designation">Speciality : Cardiologist (Heart)</p>
              <p className="para">24 Years Of Experience</p>
              <p className="designation">
                Interventional Cardiologist, Director-CathLab & HOD
              </p>
              <div className="awardCon">
                <TbAward size="24" />
                <p className="award">2 awards</p>
              </div>
              <div>
                <button type="button" className="outlineBtn">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Doctor;
