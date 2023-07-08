/* eslint-disable react/prop-types */
import { Table } from "antd";
import { colsProgreso } from "./data";
import { useEffect } from "react";

const ProgresoTemplate = ({ progresos, getProgresos }) => {
  useEffect(() => {
    getProgresos();
  }, [progresos]);

  return (
    <Table
      dataSource={progresos}
      columns={colsProgreso}
      getProgresos={getProgresos}
    />
  );
};

export default ProgresoTemplate;
