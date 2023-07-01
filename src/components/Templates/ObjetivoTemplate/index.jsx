/* eslint-disable react/prop-types */
import { Typography, Space, List, Progress } from "antd";

const { Text, Title } = Typography;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const ObjetivoTemplate = ({ resProgresos, objetivoData, responsable }) => {
  console.log("resProgresos", resProgresos);
  console.log("objetivoData", objetivoData);
  console.log("responsable", responsable);

  return (
    <div>
      <Title>{objetivoData?.nombre}</Title>
      <Space direction="vertical">
        <Text>
          Responsable: {`${responsable?.nombre} ${responsable?.apellido}`}
        </Text>
        <Text>Contacto: {`${responsable?.correo}`}</Text>
        <Text>Descripcion: {objetivoData?.descripcion}</Text>
        <Text>Meta: {objetivoData?.meta}</Text>
        <Text>Minimo: {objetivoData?.aceptable}</Text>
      </Space>
      <Title level={3}>Progreso</Title>
      <List
        itemLayout="horizontal"
        dataSource={resProgresos}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              title={
                <a href="https://ant.design">
                  {item.descripcion} - {resProgresos[0]?.idPersona}
                </a>
              }
              description={
                <div>
                  <Progress
                    percent={item.porcentaje}
                    strokeColor={
                      item.status === 2
                        ? "green"
                        : item.status === 1
                        ? "yellow"
                        : "red"
                    }
                  />
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ObjetivoTemplate;
