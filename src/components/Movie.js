import { Link } from "react-router-dom";

const Movie = ({ id, title, summary, largeImg, genres }) => {
  return (
    <Link to={`/detail/${id}`}>
      <h1>{title}</h1>
      <img src={largeImg} alt={title} />
      <p>{summary.length > 250 ? summary.slice(0, 250) : summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </Link>
  );
};
export default Movie;
