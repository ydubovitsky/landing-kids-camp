import styles from "./features.module.css";

const features = [
  {
    class: "fas fa-users-cog",
    title: "Счастливое детство",
    text: "Счастливое детство это идеально сбалансированная программа с занятиями и практикой иностранных языков, дневными и вечерними развлечениями, спортом и интеллектуальными играми, которая проводится в уютных коттеджах на охраняемой территории парк-отеля с прекрасной инфраструктурой.",
  },
  {
    class: "fas fa-cloud-upload-alt",
    title: "Интересные факты",
    text: "В 2024 году в сменах от 45 до 63 ребят и 8-9 преподавателей.",
  },
  {
    class: "fas fa-hands-helping",
    title: "Иностранный язык",
    text: "Изучение иностранного языка построено по методу марафона - практика происходит в течение всего дня: уроки, общение, интеллектуальные игры, написание скетчей, съемка видеофильмов и многое другое, очень интересное.",
  },
];

const FeaturesComponent = () => {
  const showFeaturesEl = () => {
    return features.map((el) => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureIcon}>
          <i className={el.class}></i>
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
    <div id="features" className={styles.container}>
      <div className={styles.header}>
        <h1>Наши особенности</h1>
        <div className={styles.line} />
      </div>
      <div className={styles.features}>{showFeaturesEl()}</div>
    </div>
  );
};

export default FeaturesComponent;
