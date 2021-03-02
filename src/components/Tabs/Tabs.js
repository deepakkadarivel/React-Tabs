import React, { useCallback, useEffect, useState } from "react";
import cx from "classnames";
import { useRouteMatch, Link } from "react-router-dom";
import { useQuery } from "../../utils";
import "./styles.css";

const Tabs = ({ content }) => {
  let match = useRouteMatch();
  let query = useQuery();
  const tab = query.get("tab");

  const [activeTab, setActiveTab] = useState(null);

  const handleTabChange = useCallback(() => {
    const selectedTab = content.find((t) => t.key === tab);
    setActiveTab(selectedTab ? selectedTab : content[0]);
  }, [tab, content]);

  useEffect(() => {
    handleTabChange();
  }, [handleTabChange]);

  return (
    <div>
      <ul className="Tabs">
        {content?.map((tab) => {
          const isActive = activeTab?.key === tab.key;
          return (
            <li
              className={cx("Tabs-Item", { "Tabs-Item--current": isActive })}
              key={tab.key}
            >
              <Link to={`${match.path}?tab=${tab.key}`}>{tab.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="Tab-Content">{activeTab?.content}</div>
    </div>
  );
};

export { Tabs };
