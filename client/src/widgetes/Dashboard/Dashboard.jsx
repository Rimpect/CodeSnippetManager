import React from "react";
import SnippetCard from "../SnippetCard/SnippetCard";

export default function Dashboard({ searchQuery, showFavoritesOnly }) {
  return (
    <SnippetCard
      searchQuery={searchQuery}
      showFavoritesOnly={showFavoritesOnly}
    />
  );
}
