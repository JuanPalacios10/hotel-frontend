import styles from "../styles/imagenytexto.module.css";

export const ImagenyTexto = ({ title, text, imgSrc, alt, reverse = false }) => {
  return (
    <div className={`${styles["texto-imagen"]} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.contenido}>
        {title && <h2 className={styles.titulo}>{title}</h2>}
        <div className={styles.texto}>{text}</div>
      </div>
      <div className={styles.imagen}>
        <img src={imgSrc} alt={alt} />
      </div>
    </div>
  );
};
