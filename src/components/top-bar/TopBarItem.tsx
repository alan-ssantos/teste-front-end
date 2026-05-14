import React from "react";

type TopBarItemProps = {
  children: React.ReactNode;
};

function TopBarItem({ children }: TopBarItemProps) {
  return <li className="top-bar__item">{children}</li>;
}

export default TopBarItem;
