function Input({
  value,
  type = 'text',
  onChange,
  placeholder,
}) {
  return (
    <>
      <input
        className="border text-sm sm:text-base rounded-lg px-4 py-2"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
