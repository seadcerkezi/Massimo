import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.card.orders);

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return <Table dataSource={orders} columns={columns} />;
};

export default Orders;
