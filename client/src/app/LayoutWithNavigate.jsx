import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const LayoutWithNavigate = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateClick = () => {
    navigate(`/editor/new`);
  };

  return (
    <Layout
      onCreateClick={handleCreateClick}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default LayoutWithNavigate;
