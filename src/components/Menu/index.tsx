import { useTranslation } from 'react-i18next';
import { links } from './data/data';
import { LinksENUM } from './data/models';
import './index.scss';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <nav className="menu">
      <div className="menu__container">
        <p className="menu__header">
          {t('imagesFrom')} <a href="https://unsplash.com/">{t('unsplash')}</a>
        </p>
        <div className="menu__links_container">
          <h4>{t('myPages')}</h4>
          <div className="menu__links">
            {Object.keys(links).map((item) => (
              <a
                key={links[item as unknown as LinksENUM].link}
                target="_blank"
                className="underline"
                rel="noreferrer"
                href={links[item as unknown as LinksENUM].link}
              >
                <img
                  src={links[item as unknown as LinksENUM].image}
                  alt={item}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
