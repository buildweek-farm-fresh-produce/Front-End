import React, { useEffect } from "react";
import { getProduce } from "../../actions";
import { connect } from "react-redux";
import Product from "./Product";

const LocalProduce = props => {
  useEffect(() => {
    props.getProduce();
  }, []);

  console.log("Products:", props.localProduce);
  return (
    <div className="farms">
      {props.localProduce.map(item => {
        return (
          <div className="productList">
            <Product item={item} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    localProduce: state.localProduce,
    farmer: state.farmer
  };
};

export default connect(
  mapStateToProps,
  { getProduce }
)(LocalProduce);
