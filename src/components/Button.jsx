function Button({ children, ...rest }) {
  return (
    <button className="p-2 bg-blue-500 rounded-md not-prose" {...rest}>
      {children}
    </button>
  );
}

export default Button;
