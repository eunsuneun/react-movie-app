import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ id, title, summary, largeImg, genres, year }) => {
  return (
    <Link to={`/detail/${id}`} className={styles.movie}>
      <img src={largeImg} alt={title} className={styles.movie__img} />
      <div>
        <h1 className={styles.movie__title}>{title}</h1>
        <h2 className={styles.movie__year}>{year}</h2>
        <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
export default Movie;
