import { AgGridReact } from "ag-grid-react";
import { Modal, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.user.allUsers);
  const [rowData, setRowData] = useState(users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columnDefs = [
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Username",
      field: "email",
    },
    {
      headerName: "Role",
      field: "role",
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
        style={{ height: "70vh", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={14}
        />
      </div>
    </div>
  );
};

export default Users;
