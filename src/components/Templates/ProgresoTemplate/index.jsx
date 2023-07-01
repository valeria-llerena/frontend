/* eslint-disable react/prop-types */
import { Table } from "antd";
import { colsProgreso } from "./data";

const ProgresoTemplate = ({ progresos }) => {
  return <Table dataSource={progresos} columns={colsProgreso} />;
};

export default ProgresoTemplate;
