import styles from '../styles/titulotexto.module.css';

export const TituloTexto = ({ title, text, classTitle }) => {
  return (
    <div className={styles.TituloTexto}>
      <h2 className={`${classTitle} ${styles.textTitle}`}>{title}</h2>
      <div className={styles.text}>{text}</div>
    </div>
  );
};