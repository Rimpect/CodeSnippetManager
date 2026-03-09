// LayoutWithNavigate.jsx
import { useNavigate } from "react-router-dom";
import Layout from "./Layout"; 

const LayoutWithNavigate = () => {

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate(`/editor/new`);
  };

  return <Layout onCreateClick={handleCreateClick} />;
};

export default LayoutWithNavigate;
