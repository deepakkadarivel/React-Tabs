import React, { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
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
    const selectedTab = content.find((t) => t.key === tab) || content[0];
    setActiveTab(selectedTab);
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
              data-testid={`t-${tab.key}`}
              className={cx("Tabs-Item", { "Tabs-Item--current": isActive })}
              key={tab.key}
            >
              <Link to={`${match.path}?tab=${tab.key}`}>{tab.name}</Link>
            </li>
          );
        })}
      </ul>

      <div data-testid="t-tabContent" className="Tab-Content">{activeTab?.content}</div>
    </div>
  );
};

Tabs.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.any
  })).isRequired
}

Tabs.defaultProps = {
  content: []
}

export { Tabs };
