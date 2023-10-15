import './index.scss';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu__container">
        <h3 className="menu__header">World of GuRepio planners</h3>
        <ul className="menu__elements">
          <li className="menu__elements__item">There could be a menu</li>
          <li className="menu__elements__item">
            <address>
              <a
                className="menu__elements__item menu__elements__anchor"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Relativelie?tab=repositories"
              >
                Go to github
              </a>
            </address>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
