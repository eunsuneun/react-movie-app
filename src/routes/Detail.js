import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    setLoading(false);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.data.movie.title}</h1>
          <img
            src={movie.data.movie.large_cover_image}
            alt={movie.data.movie.id}
          />
          <p>{movie.data.movie.description_full}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
