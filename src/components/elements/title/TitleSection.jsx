function TitleSection({ children, classname }) {
  return (
    <h5
      className={`mb-4 ps-5 text-xl font-semibold tracking-wide text-white md:mb-8 md:ps-20 md:text-2xl lg:mb-10 lg:text-3xl ${classname}`}
    >
      {children}
    </h5>
  );
}

export default TitleSection;
