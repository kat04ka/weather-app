function FavoriteCities({
  favorites,
  onSelect,
  onClear,
  onRmove,
}) {
  if (!favorites.length) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-center items-center gap-2 mb-2">
        <h3 className="text-white font-semibold">
          Favorite Cities
        </h3>

        <button
          onClick={onClear}
          className="text-sm text-white/70 hover:text-white"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {favorites.map((city) => (
          <div
            key={city}
            className="flex gap-1 px-3 py-1 rounded-lg
              bg-white/15 
              hover:bg-white/25 transition"
          >
            <button
              onClick={() => onSelect(city)}
              className="text-white"
            >
              {city}
            </button>

            <button
              onClick={() => onRmove(city)}
              className="text-red-300 hover:text-red-100"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCities;
