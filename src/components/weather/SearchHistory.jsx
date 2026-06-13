function SearchHistory({
  history,
  onSelect,
  onClear,
}) {
  if (!history.length) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-center gap-2 mb-2">
        <h3 className="text-white font-semibold">
          Recent Searches
        </h3>

        <button
          onClick={onClear}
          className="text-sm text-white/70 hover:text-white"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {history.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="px-3 py-1 rounded-lg bg-white/15
            text-white hover:bg-white/20 transition"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchHistory;
