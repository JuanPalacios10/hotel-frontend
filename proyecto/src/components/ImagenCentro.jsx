import styles from '../styles/imagencentro.module.css';

export const ImagenCentro = ({ src, className = '' }) => {
  const combinedClassName = `${styles.imagenCentro} ${
    className === 'imagen-horizontal' ? styles.imagenHorizontal : ''
  }`;

  return (
    <div className={combinedClassName}>
      <img src={src} alt="Imagen centrada" />
    </div>
  );
};
