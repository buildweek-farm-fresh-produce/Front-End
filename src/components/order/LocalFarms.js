import React, { useEffect } from "react";
import { getFarms } from "../../actions";
import { connect } from "react-redux";
import Farm from "./Farm";

const LocalFarms = props => {
  useEffect(() => {
    props.getFarms();
  }, []);

  console.log("Farms:", props.localFarms);
  return (
    <div className="farms">
      {props.localFarms.map(item => {
        return (
          <div className="farmList">
            <Farm item={item} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    localFarms: state.localFarms,
    farmer: state.farmer
  };
};

export default connect(
  mapStateToProps,
  { getFarms }
)(LocalFarms);
