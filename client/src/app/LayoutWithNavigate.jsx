// LayoutWithNavigate.jsx
import { useNavigate } from "react-router-dom";
import Layout from "./Layout"; 

const LayoutWithNavigate = () => {

  const navigate = useNavigate();

  // Функция создания сниппета
  const handleCreateClick = () => {
    const newId = crypto.randomUUID();
    navigate(`/editor/${newId}`); // переходим на страницу редактора
  };

  // Передаем функцию в Layout через пропсы
  return <Layout onCreateClick={handleCreateClick} />;
};

export default LayoutWithNavigate;
