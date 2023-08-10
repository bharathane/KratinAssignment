import { Component } from "react";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

class Profile extends Component {
  state = {
    height: 160,
    weight: 51,
    errorWeight: false,
    errorHeight: false,
    bmi: "",
    text: "",
  };

  componentDidMount() {
    this.CalculateBmi();
  }

  CalculateBmi = () => {
    const { weight, height } = this.state;

    if (height.length === 0) {
      this.setState({ errorHeight: true, errorWeight: false });
    } else if (weight.length === 0) {
      this.setState({ errorWeight: true, errorHeight: false });
    } else {
      // Fixing upto 2 decimal places
      const value = (weight / ((height / 100) * (height / 100))).toFixed(2);
      let text;
      if (value < 18.6) {
        text = "Under Weight";
      } else if (value >= 18.6 && value < 24.9) {
        text = "Normal";
      } else {
        text = "Over Weight";
      }

      this.setState({
        bmi: value,
        text,
        errorHeight: false,
        errorWeight: false,
      });
    }
  };

  ChangeHeight = (event) => {
    console.log(event.target.value);
    this.setState({ height: event.target.value }, this.CalculateBmi);
  };

  ChangeWeight = (event) => {
    this.setState({ weight: event.target.value }, this.CalculateBmi);
  };

  render() {
    const { text, bmi, errorHeight, errorWeight, height, weight } = this.state;

    return (
      <div>
        <Header />
        <div className="profileContainer">
          <div className="Container">
            <div className="profileImageContainer">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="profile"
                className="personProfile"
              />
              <h1>Sunita Sharma</h1>
            </div>
            <div className="AboutAndReportContainer">
              <div className="AboutContainer">
                <div className="AboutName">
                  <MdPersonOutline size="24" />
                  <h1 className="headingAbout">About</h1>
                </div>
                <div className="AboutDetailsContainer">
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">Full Name</h1>
                    <h4 className="AboutHeadingDetail">Sunita Sharma</h4>
                  </div>
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">Husband Name</h1>
                    <h4 className="AboutHeadingDetail">Pavan Sharma</h4>
                  </div>
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">Gender</h1>
                    <h4 className="AboutHeadingDetail">Female</h4>
                  </div>
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">Contact No.</h1>
                    <h4 className="AboutHeadingDetail">+91 8519931XXX</h4>
                  </div>
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">Current Address</h1>
                    <h4 className="AboutHeadingDetail">
                      House No:- 45-3, Hi-tech City, 100 Feet Road, Hyderabad,
                      500008
                    </h4>
                  </div>
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">Permanent Address</h1>
                    <h4 className="AboutHeadingDetail">
                      House No:- 45-3, Hi-tech City, 100 Feet Road, Hyderabad,
                      500008
                    </h4>
                  </div>
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">Email</h1>
                    <h4 className="AboutHeadingDetail">
                      SunitaSharma@Healthify.com
                    </h4>
                  </div>
                  <div className="textContainerAbout">
                    <h1 className="HeadingAbout">DOB</h1>
                    <h4 className="AboutHeadingDetail">Dec 24,1965</h4>
                  </div>
                </div>
              </div>
              <div className="AboutContainer">
                <div className="AboutName">
                  <HiOutlineDocumentText size="24" />
                  <h1 className="headingAbout">Report</h1>
                </div>
                <p>
                  <TiTick /> Verified by Vishal Pathology
                </p>
                <div>
                  <h1 className="HeadingAbout">Diabetes</h1>
                  <p className="AboutHeadingDetail">
                    Fasting Blood Sugar - 110mg/dL
                  </p>
                </div>
                <div>
                  <h1 className="HeadingAbout">Blood Pressure</h1>
                  <p className="AboutHeadingDetail">120/80 mmHg</p>
                </div>
                <div>
                  <h1 className="HeadingAbout">Cholesterol Level</h1>
                  <p className="AboutHeadingDetail">210 mg/dL</p>
                </div>
                <div>
                  <h1 className="HeadingAbout">Vision</h1>
                  <p className="AboutHeadingDetail">20/40 </p>
                </div>
                <hr />

                <div className="inputContainer">
                  <h1 htmlFor="height" className="HeadingAbout">
                    Height
                  </h1>
                  <p className="AboutHeadingDetail">(in cms)</p>
                  <input
                    type="number"
                    id="height"
                    onChange={this.ChangeHeight}
                    value={height}
                  />
                  {errorHeight && <p>Provide Correct Height.</p>}
                </div>
                <div className="inputContainer">
                  <h1 className="HeadingAbout">Weight</h1>
                  <p className="AboutHeadingDetail">(in kgs)</p>
                  <input
                    type="number"
                    onChange={this.ChangeWeight}
                    value={weight}
                  />
                  {errorWeight && <p>Provide Correct Weight.</p>}
                </div>

                <div>
                  <h1 className="HeadingAbout">BMI</h1>
                  <div className="bmiContainer">
                    <p className="AboutHeadingDetail">
                      {text} : {bmi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
