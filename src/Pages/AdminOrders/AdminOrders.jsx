import { AgGridReact } from "ag-grid-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { changeStatus } from "../../redux/user/userActions";

const AdminOrders = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const orders = allUsers.map((user) => user.orders).flatMap((item) => item);

  const dispatch = useDispatch();

  const StatusCellRenderer = (params) => {
    return (
      <span
        style={{ color: params.data.status === "Delivered" ? "green" : "red" }}
      >
        {params.data.status}
      </span>
    );
  };

  const ActionsCellRenderer = (params) => {
    return (
      <div className="settings-buttons">
        {params.data.status !== "Delivered" ? (
          <Button
            type="primary"
            shape="round"
            icon={<CheckOutlined />}
            onClick={() =>
              dispatch(changeStatus(params.data.orderId, params.data.userId))
            }
          />
        ) : null}
      </div>
    );
  };

  const columnDefs = [
    {
      headerName: "User ID",
      field: "userId",
    },
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
    {
      headerName: "Actions",
      cellRenderer: ActionsCellRenderer,
    },
  ];

  const defaultColDef = {
    flex: 1,
    sortable: true,
  };

  return (
    <div style={{ width: "80vw" }}>
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

export default AdminOrders;
