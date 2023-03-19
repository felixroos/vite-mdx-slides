function Button({ children, ...rest }) {
  return (
    <button className="px-2 bg-blue-500 rounded-md" {...rest}>
      {children}
    </button>
  );
}

export default Button;
