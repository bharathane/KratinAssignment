import "./index.css";

const Actives = (props) => {
  const { each, ActiveActivity } = props;

  const onChangeActivity = () => ActiveActivity(each.id);
  const textClass = each.value ? "active" : "activeOff";
  return (
    <li onChange={onChangeActivity} className="listItemContainer">
      <div className="ContainerItem">
        <div>
          <input type="checkbox" className="checkBox-input" />
        </div>
        <div className="containerText">
          <p className={textClass}>{each.activity}</p>
          <p className="time">{each.time}</p>
        </div>
      </div>
    </li>
  );
};

export default Actives;
