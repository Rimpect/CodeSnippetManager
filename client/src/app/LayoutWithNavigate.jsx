import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./layout";

const LayoutWithNavigate = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleCreateClick = () => {
    navigate(`/editor/new`);
  };

  return (
    <Layout
      onCreateClick={handleCreateClick}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      showFavoritesOnly={showFavoritesOnly}
      onToggleFavoritesFilter={() => setShowFavoritesOnly((v) => !v)}
    />
  );
};

export default LayoutWithNavigate;
