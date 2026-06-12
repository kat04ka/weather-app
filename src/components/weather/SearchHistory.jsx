function SearchHistory({ history, onSelect }) {
  if (!history.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
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
  );
}

export default SearchHistory;
