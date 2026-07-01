function MovieList({ movies, name, selectedMovie, onSelect }) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-1 text-sm font-medium text-slate-700">
        เลือกภาพยนตร์ที่คุณชอบ
      </legend>
      {movies.map((movie) => {
        const inputId = `${name}-${movie.title}`;

        return (
          <label
            key={movie.title}
            htmlFor={inputId}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition ${
              selectedMovie === movie.title
                ? "border-violet-500 bg-violet-50"
                : "border-slate-200 hover:border-violet-300"
            }`}
          >
            <input
              id={inputId}
              type="radio"
              name={name}
              value={movie.title}
              checked={selectedMovie === movie.title}
              onChange={() => onSelect(movie.title)}
              className="mt-1 accent-violet-600"
            />
            <span className="flex flex-col gap-0.5">
              <span className="font-medium text-slate-900">{movie.title}</span>
              <span className="text-sm text-slate-500">
                {movie.year} · {movie.director}
              </span>
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}

export default MovieList;
