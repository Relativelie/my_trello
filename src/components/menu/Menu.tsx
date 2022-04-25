import './Menu.scss';

export const Menu = () => {
    return (
        <nav className="menuBlock">
            <div className="menuBlock_container">
                <h3 className="menuHeader">World of GuRepio planners</h3>
                <ul className="menuElements">
                    <li className="menuElements_item">There could be a menu here</li>
                    <li className="menuElements_item">
                        <address>
                            <a
                                className="menuElements_item menuElements_anchor"
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
