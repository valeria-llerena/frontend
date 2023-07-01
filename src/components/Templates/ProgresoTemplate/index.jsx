import React from "react";
import { Table } from "antd";
import { dataSource, colsProgreso } from "./data";

const ProgresoTemplate = () => {
  return <Table dataSource={dataSource} columns={colsProgreso} />;
};

export default ProgresoTemplate;
