import React from "react";
import SnippetCard from "../SnippetCard/SnippetCard";

export default function Dashboard({ searchQuery }) {
  return <SnippetCard searchQuery={searchQuery} />;
}
