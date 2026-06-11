function Button({
  children,
  type = 'button',
  disabled = false,
  onClick,
}) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className="text-white text-sm sm:text-base border 
        bg-blue-500 px-4 py-2 
        rounded-lg hover:bg-blue-600 transition
        disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {children}
      </button>
    </>
  );
}

export default Button;
