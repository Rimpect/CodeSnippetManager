import React from "react";
import "./SnippetItem.scss";
import { Star } from "lucide-react";
export default function SnippetItem(props) {
  const { id, title, description, tags, isFavorite, onToggleFavorite } = props;

  const handleFavoriteClick = (e) => {
    // карточка обёрнута в <Link> — не даём перейти в редактор при клике по звезде
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.(id);
  };

  return (
    <li className="snippet__item">
      <div className="snippet__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-code-xml size-5 text-blue-600"
        >
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      </div>

      <div className="snippet__content">
        <div className="snippet__header">
          <div className="snippet__title">{title}</div>
          <div className="snippet__header-right">
            <div className="snippet__id">{id}</div>
            <button
              type="button"
              className={`snippet__favorite ${
                isFavorite ? "snippet__favorite--active" : ""
              }`}
              onClick={handleFavoriteClick}
              aria-label={isFavorite ? "Убрать из избранного" : "В избранное"}
              title={isFavorite ? "Убрать из избранного" : "В избранное"}
            >
              <Star
                size={20}
                fill={isFavorite ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>

        <p className="snippet__description">{description}</p>

        <div className="snippet__tags">
          {Array.isArray(tags) &&
            tags.map((tag, index) => (
              <span
                key={index}
                className={`snippet__tag snippet__tag--${index % 3}`} // 3 варианта цветов
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </li>
  );
}
