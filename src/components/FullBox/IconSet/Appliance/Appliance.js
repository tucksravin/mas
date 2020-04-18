import React from "react"
import classes from "./Appliance.module.css"
import washer from "../../../../images/appliance-icons/svg/dryer.svg"
import dryer from "../../../../images/appliance-icons/svg/dryer.svg"
import dishwasher from "../../../../images/appliance-icons/svg/dishwasher.svg"
import fridge from "../../../../images/appliance-icons/svg/fridge.svg"
import stove from "../../../../images/appliance-icons/svg/gas-stove.svg"
import freezer from "../../../../images/appliance-icons/svg/freezer.svg"


const Appliance = props => {

  let which = null;

  switch(props.whichApp){
    case "washer":
    which = (
      <div className={classes.left}>
      <img src={washer} alt="a washer" />
      <h3>Washers</h3>
      </div>
    );
    break;

    case "dryer":
    which = (
      <div className={classes.center}>
      <img src={dryer} alt="a dryer" />
      <h3>Dryers</h3>
      </div>
    );
    break;

    case "dishwasher":
    which = (
      <div className={classes.center}>
      <img src={dishwasher} alt="a dishwasher" />
      <h3>Dishwashers</h3>
      </div>
    );
    break;

    case "fridge":
    which = (
      <div className={classes.right}>
      <img src={fridge} alt="a fridge" />
      <h3>Refridgerators</h3>
      </div>
    );
    break;

    case "stove":
    which = (
      <div className={classes.left}>
      <img src={stove} alt="a stove" />
      <h3>Stoves</h3>
      </div>
    );
    break;

    case "freezer":
    which = (
      <div className={classes.right}>
      <img src={freezer} alt="a freezer" />
      <h3>Freezers</h3>
      </div>
    );
    break;



    default:
    which = null;
  }

return which;
}

export default Appliance
