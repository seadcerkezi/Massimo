import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button, Input, Modal, Radio, message } from "antd";
import "./settingsProducts.scss";
import { changeProductData } from "../../redux/card/cardActions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const SettingsProducts = () => {
  const products = useSelector((state) => state.card.products);
  const [rowData, setRowData] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(false);
  const dispatch = useDispatch();

  const ActionsCellRenderer = (params) => {
    return (
      <div className="settings-buttons">
        <Button
          type="primary"
          shape="round"
          icon={<EditOutlined />}
          onClick={() => {
            setSelectedRow(params.data);
            setIsModalOpen(true);
          }}
        />

        <Button
          type="primary"
          shape="round"
          icon={<DeleteOutlined />}
          onClick={() =>
            setRowData((prev) =>
              prev.filter((product) => product.id !== params.data.id)
            )
          }
        />
      </div>
    );
  };

  const columnDefs = [
    {
      headerName: "Category",
      field: "category",
    },
    {
      headerName: "Title",
      field: "title",
    },
    {
      headerName: "Description",
      field: "desc",
    },
    {
      headerName: "Price",
      field: "price",
    },
    {
      headerName: "Discount",
      field: "discount",
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

  const handleOk = () => {
    setRowData((prev) =>
      prev.map((product) =>
        product.id !== selectedRow.id ? product : selectedRow
      )
    );
    setIsModalOpen(false);
  };

  const handleCHange = (value, type, isNumber = false) => {
    setSelectedRow((prev) => ({
      ...prev,
      [type]: isNumber ? Number(value) : value,
    }));
  };

  const handleCancel = () => {
    setRowData(products);
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
          paginationPageSize={9}
        />
      </div>
      <div className="ag-buttons">
        <Radio.Button onClick={() => handleCancel()}>Cancel</Radio.Button>
        <Radio.Button
          onClick={() => {
            dispatch(changeProductData(rowData));
            message.success("Changes saved successfully");
          }}
        >
          Save
        </Radio.Button>
      </div>
      {isModalOpen && (
        <Modal
          title="Edit"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={() => setIsModalOpen(false)}
          className="settings-modal"
        >
          <div className="settings-labels">
            <div className="settings-input">
              <label>Category </label>
              <Input
                disabled={true}
                type="text"
                value={selectedRow.category}
                style={{ width: "50%" }}
              />
            </div>

            <div className="settings-input">
              <label>Title</label>
              <Input
                onChange={(e) => handleCHange(e.target.value, "title")}
                type="text"
                value={selectedRow.title}
                style={{ width: "50%" }}
              />
            </div>

            <div className="settings-input">
              <label>Price</label>
              <Input
                onChange={(e) => handleCHange(e.target.value, "price", true)}
                type="number"
                value={selectedRow.price}
                style={{ width: "20%" }}
              />
            </div>

            <div className="settings-input">
              <label>Discount</label>
              <Input
                onChange={(e) => handleCHange(e.target.value, "discount", true)}
                type="number"
                value={selectedRow.discount}
                style={{ width: "20%" }}
              />
            </div>

            <div className="settings-input">
              <label>Description</label>
              <TextArea
                rows={4}
                onChange={(e) => handleCHange(e.target.value, "desc")}
                type="text"
                value={selectedRow.desc}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SettingsProducts;
