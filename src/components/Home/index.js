import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Actives from "../Items";
import { Components } from "./styledComponent";
import "./index.css";

const menuList = [
  { id: 1, activity: "Jogging", time: "5:00 AM", value: false },
  { id: 2, activity: "Yoga", time: "6:00 Am", value: false },
  { id: 3, activity: "BreakFast", time: "9:00 Am", value: false },
  { id: 4, activity: "Walk 10 min", time: "9:30 Am", value: false },
  { id: 5, activity: "Lunch", time: "12:30 Pm", value: false },
  { id: 6, activity: "Walk 15 min", time: "1:00 Pm", value: false },
  { id: 7, activity: "Evening Walk", time: "6:00 Pm", value: false },
  { id: 8, activity: "Snack", time: "6:30 Pm", value: false },
  { id: 9, activity: "Dinner", time: "8:00 Pm", value: false },
  { id: 10, activity: "Walk 20 min", time: "8:30 Pm", value: false },
];

class Home extends Component {
  state = { count: 0, List: menuList, date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  renderTime = () => {
    const { date } = this.state;
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const time = date.toLocaleTimeString("en", options);

    return <p className="time">{time}</p>;
  };

  ActiveActivity = (id) => {
    const { List } = this.state;
    const values = List.filter((each) => each.id !== id);
    const item = List.filter((each) => each.id === id);
    const newItem = item.map((each) => {
      if (each.value === true) {
        this.setState((prevState) => ({ count: prevState.count - 10 }));
        return { ...each, value: false };
      }
      this.setState((prevState) => ({ count: prevState.count + 10 }));
      return { ...each, value: true };
    });
    const newList = [...values, newItem[0]];

    this.setState({ List: newList });
  };

  render() {
    const { count, List } = this.state;
    List.sort((a, b) => a.id - b.id);

    const containerClass = count === 0 ? "#ffffff" : "#000000";

    return (
      <div>
        <Footer />
        <div className="home-container">
          <Header />
          <div className="container">
            <div className="HomeContainer">
              <div className="activePercent">
                <h1>Sunita Sharma</h1>
                <div className="percentageContainer">
                  <h1 className="percentageText">{count}%</h1>
                  <Components color={containerClass} bgWidth={count}>
                    %
                  </Components>
                  <h1 className="percentageText">Todays Progress</h1>
                </div>
              </div>
              <div className="TodoList">
                {this.renderTime()}
                <p className="time">ToDo List</p>
                <ul className="activesList">
                  {List.sort().map((each) => (
                    <Actives
                      each={each}
                      key={each.id}
                      ActiveActivity={this.ActiveActivity}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
