import styles from './footer.module.css';

const FooterComponent = () => {

  return (
    <footer className={styles.footer} data-testid="footer-component">
      <div className={styles.footer__topSide}>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu__title}>О НАС</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>ГЛАВНАЯ СТРАНИЦА</li>
            <li className={styles.topSideMenu__item}>ИСТОРИЯ</li>
            <li className={styles.topSideMenu__item}>СВЕДЕНИЯ ОБ ОРГАНИЗАЦИИ</li>
          </ul>
        </div>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu}>ДОКУМЕНТЫ</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>ОЗДОРОВЛЕНИЕ</li>
            <li className={styles.topSideMenu__item}>ОТДЫХ</li>
            <li className={styles.topSideMenu__item}>РАЗВИТИЕ ДЕТЕЙ</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottomSide}>
        <div className={styles.bottomSideMenu}>
          <h3 className={styles.bottomSideMenu__title}>ССЫЛКИ</h3>
          <ul className={styles.bottomSideMenu__listContainer}>
            <li className={styles.bottomSideMenu__item}>ОСЕННЕ-ЗИМНИЕ ЗАЕЗДЫ</li>
            <li className={styles.bottomSideMenu__item}>ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ</li>
            <li className={styles.bottomSideMenu__item}>ОБРАТНАЯ СВЯЗЬ</li>
          </ul>
        </div>
        <div className={styles.copyRightContainer}>
          <p>© 2021–{new Date().getFullYear()}, Летний лагерь "Счастливое детство"</p>
        </div>
      </div>
    </footer >
  )
}
export default FooterComponent;
