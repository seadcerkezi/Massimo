import { AgGridReact } from "ag-grid-react";
import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const logedUserId = useSelector((state) => state.user.logedUserId);
  const orders = allUsers.find((user) => user.id === logedUserId).orders;

  const StatusCellRenderer = (params) => {
    return (
      <span
        style={{ color: params.data.status === "Delivered" ? "green" : "red" }}
      >
        {params.data.status}
      </span>
    );
  };

  const columnDefs = [
    {
      headerName: "Order ID",
      field: "orderId",
    },
    {
      headerName: "Date",
      field: "date",
    },
    {
      headerName: "Price",
      field: "price",
    },
    {
      headerName: "Products",
      field: "products",
    },
    {
      headerName: "Status",
      cellRenderer: StatusCellRenderer,
    },
  ];

  const defaultColDef = {
    flex: 1,
    sortable: true,
  };

  return (
    <div style={{ width: "100vw" }}>
      <div
        className="ag-theme-alpine"
        style={{ height: "700px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={orders}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={14}
        />
      </div>
    </div>
  );
};

export default Orders;
