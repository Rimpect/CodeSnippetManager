import React from "react";
import { Search, Star, Plus } from "lucide-react";
import "./Header.scss";

export default function Header({
  searchQuery,
  onSearchChange,
  onFilterClick,
  onCreateClick,
  filterActive,
}) {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Поиск */}
        <div className="header__search">
          <Search className="header__search-icon" />
          <input
            type="text"
            placeholder="Поиск сниппетов..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="header__search-input"
          />
        </div>

        {/* Фильтр «только избранное» */}
        <button
          onClick={onFilterClick}
          className={`header__filter-btn ${
            filterActive ? "header__filter-btn--active" : ""
          }`}
        >
          <Star
            className="header__filter-icon"
            fill={filterActive ? "currentColor" : "none"}
          />
          <span>{filterActive ? "Все сниппеты" : "Избранное"}</span>
        </button>

        {/* Кнопка создания */}
        <button onClick={onCreateClick} className="header__create-btn">
          <Plus className="header__create-icon" />
          <span>Создать</span>
        </button>
      </div>
    </header>
  );
}
