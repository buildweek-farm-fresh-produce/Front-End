import React, { useEffect } from "react";
import "../../App.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const OrderDetail = props => {
  console.log("OrderDeet", props);

  useEffect(() => {}, []);

  return (
    <div className="orderDetail">
      <p>{props.purchase_date}</p>
      <p>{props.delivered}</p>
      <p>{props.consumer_id}</p>
      {idumbs.map(item => {
        return (
          <div className="itemList" key={item.consumer_id}>
            <p>{item.quantity}</p>
            <p>{item.produce_item_id}</p>
            <p>{item.farm_id}</p>
            <p>{item.order_id}</p>
            <div className="button">Edit</div>
            <div className="button">Delete</div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    consumer: state.consumer
  };
};

const idumbs = [
  {
    quantity: 25,
    produce_item_id: 1,
    order_id: "supersecret1",
    farm_id: 1,
    consumer_id: 1
  },
  {
    quantity: 25,
    produce_item_id: 2,
    order_id: "supersecret1",
    farm_id: 2,
    consumer_id: 1
  },
  {
    quantity: 25,
    produce_item_id: 3,
    order_id: "supersecret1",
    farm_id: 3,
    consumer_id: 1
  },
  {
    quantity: 25,
    produce_item_id: 2,
    order_id: "supersecret12",
    farm_id: 3,
    consumer_id: 1
  },
  {
    quantity: 25,
    produce_item_id: 3,
    order_id: "supersecret12",
    farm_id: 3,
    consumer_id: 2
  },
  {
    quantity: 25,
    produce_item_id: 4,
    order_id: "supersecret123",
    farm_id: 2,
    consumer_id: 3
  },
  {
    quantity: 25,
    produce_item_id: 5,
    order_id: "supersecret123",
    farm_id: 4,
    consumer_id: 3
  },
  {
    quantity: 25,
    produce_item_id: 3,
    order_id: "supersecret123",
    farm_id: 4,
    consumer_id: 3
  },
  {
    quantity: 25,
    produce_item_id: 3,
    order_id: "supersecret12345",
    farm_id: 4,
    consumer_id: 2
  },
  {
    quantity: 25,
    produce_item_id: 6,
    order_id: "supersecret12346",
    farm_id: 2,
    consumer_id: 3
  },
  {
    quantity: 25,
    produce_item_id: 7,
    order_id: "supersecret1234",
    farm_id: 2,
    consumer_id: 1
  },
  {
    quantity: 25,
    produce_item_id: 8,
    order_id: "supersecret1234",
    farm_id: 1,
    consumer_id: 1
  },
  {
    quantity: 25,
    produce_item_id: 9,
    order_id: "supersecret1",
    farm_id: 1,
    consumer_id: 1
  },
  {
    quantity: 25,
    produce_item_id: 1,
    order_id: "supersecret1",
    farm_id: 3,
    consumer_id: 1
  }
];

export default connect(
  mapStateToProps,
  {}
)(withRouter(OrderDetail));
