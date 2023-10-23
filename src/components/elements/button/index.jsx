function Button({ children }) {
  return (
    <button className="rounded-full bg-red-600 px-4 py-2 text-sm text-white md:text-base">
      {children}
    </button>
  );
}

export default Button;
