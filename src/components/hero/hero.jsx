import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Летний лагерь "Счастливое детство"</p>
      </div>
      <div className={styles.promo}>
        <p>Детский лагерь — организация отдыха детей и оздоровления, в которую направляются дети в период каникул или иной период</p>
      </div>
    </div>
  )
}