import React from "react";
import "./SnippetItem.scss";
import { Link } from "react-router-dom";
export default function SnippetItem(props) {
  const { id, title, description, tags } = props;
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-code-xml size-5 text-blue-600"
        >
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      </div>

      <div className="snippet__content">
        <div className="snippet__header">
          <div className="snippet__title">{title}</div>
          <div className="snippet__id">{id}</div>
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
