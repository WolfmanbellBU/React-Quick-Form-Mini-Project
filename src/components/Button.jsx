function Button({ type = "button", variant = "primary", children, onClick }) {
  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-300",
    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
