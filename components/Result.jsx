import MovieBox from "./MovieBox";
import FlipMove from "react-flip-move";

const Result = ({ results }) => {
  const moviesResult = results.results;

  return (
    <FlipMove
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    xl:grid-cols-4 3xl:flex flex-wrap justify-center
    px-5 py-10 gap-5"
    >
      {moviesResult.map((movies) => (
        <MovieBox key={movies.id} results={movies} />
      ))}
    </FlipMove>
  );
};

export default Result;
