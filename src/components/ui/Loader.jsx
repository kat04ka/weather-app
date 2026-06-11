function Loader() {
  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div
        className="
          h-8 w-8
          animate-spin
          rounded-full
          border-4
          border-blue-500
          border-t-transparent
        "
      />
      <p className="text-gray-500">
        Loading weather...
      </p>
    </div>
  );
}

export default Loader