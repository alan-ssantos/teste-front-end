import "./TopBar.scss";

type TopBarProps = {
  children: React.ReactNode;
};

function TopBar({ children }: TopBarProps) {
  return (
    <div className="top-bar">
      <ul className="top-bar__list">{children}</ul>
    </div>
  );
}

export default TopBar;
