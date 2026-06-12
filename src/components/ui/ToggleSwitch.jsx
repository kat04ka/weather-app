function ToggleSwitch({
  value,
  onChange,
}) {
  return (
    <div className="flex overflow-hidden rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm">
      <button
        onClick={() => onChange('C')}
        className={`px-3 py-1.5 transition ${
          value === 'C'
            ? 'bg-white text-gray-900'
            : 'text-white'
        }`}
      >
        °C
      </button>

      <button
        onClick={() => onChange('F')}
        className={`px-3 py-1.5 transition ${
          value === 'F'
            ? 'bg-white text-gray-900'
            : 'text-white'
        }`}
      >
        °F
      </button>
    </div>
  );
}

export default ToggleSwitch;