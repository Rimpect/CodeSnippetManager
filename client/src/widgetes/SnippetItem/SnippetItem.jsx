import React from "react";
import "./SnippetItem.scss";
export default function SnippetItem(props) {
  const { id, title, description, tags } = props;
  return (
    <li className="snippet__item">
      <div className="snippet__icon">📄</div>

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
