function InputRadioButton({ children, name, value, idGenre, setIdGenre }) {
  return (
    <label
      className={`mb-2 mr-2 inline-block rounded-full border-2 border-gray-500 px-3 py-1 text-gray-300 transition duration-300 md:text-sm lg:text-base ${
        idGenre == value && "bg-red-600 text-gray-100"
      }`}
      onClick={() => setIdGenre(value)}
    >
      <input className="w-0" type="radio" name={name} value={value} />
      {children}
    </label>
  );
}

export default InputRadioButton;
