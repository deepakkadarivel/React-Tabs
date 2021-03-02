import React, { useState } from "react";
import cx from "classnames";
import "./styles.css";

const Tabs = ({ content }) => {
  const [activeTab, setActiveTab] = useState(content[0].key);
  const [activeContent, setActiveContent] = useState(content[0].content);

  const handleTabChange = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab.key);
    setActiveContent(tab.content);
  };

  return (
    <div>
      <ul className="Tabs">
        {content?.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <li
              className={cx("Tabs-Item", { "Tabs-Item--current": isActive })}
              key={tab.key}
            >
              <a href="#" onClick={(e) => handleTabChange(e, tab)}>
                {tab.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="Tab-Content">{activeContent}</div>
    </div>
  );
};

export { Tabs };
