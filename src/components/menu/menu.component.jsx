import styles from "./menu.module.css";

const Menu = [
  {
    class: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNhbXB8ZW58MHx8MHx8fDA%3D",
    title: "ИСТОРИЯ И СВЕДЕНИЯ ОБ ОРГАНИЗАЦИИ",
  },
  {
    class: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGNhbXB8ZW58MHx8MHx8fDA%3D",
    title: "ДОКУМЕНТЫ",
  },
  {
    class: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMGNhbXB8ZW58MHx8MHx8fDA%3D",
    title: "ОЗДОРОВЛЕНИЕ",
  },
  {
    class: "https://images.unsplash.com/photo-1594913495702-0872744c6968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMGNhbXB8ZW58MHx8MHx8fDA%3D",
    title: "ОТДЫХ",
  },
  {
    class: "https://images.unsplash.com/photo-1587547131116-a0655a526190?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMGNhbXB8ZW58MHx8MHx8fDA%3D",
    title: "РАЗВИТИЕ ДЕТЕЙ",
  },
  {
    class: "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBjYW1wfGVufDB8fDB8fHww",
    title: "ОСЕННЕ-ЗИМНИЕ ЗАЕЗДЫ",
  },
  {
    class: "https://images.unsplash.com/photo-1569392172570-40916438c201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjYW1wfGVufDB8fDB8fHww",
    title: "ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ",
  },
  {
    class: "https://images.unsplash.com/photo-1606092195808-3107b7ed4c98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBjYW1wfGVufDB8fDB8fHww",
    title: "ОБРАТНАЯ СВЯЗЬ",
  },
];

const MenuComponent = () => {
  const showMenuEl = () => {
    return Menu.map((el) => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureIcon}>
          <img src={el.class} alt="" srcset="" />
        </div>
        <div className={styles.featureHeader}>
          <p>{el.title}</p>
        </div>
        <div className={styles.featureDescription}>
          <p>{el.text}</p>
        </div>
      </div>
    ));
  };

  return (
    <div id="Menu" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.line} />
      </div>
      <div className={styles.menu}>{showMenuEl()}</div>
    </div>
  );
};

export default MenuComponent;
