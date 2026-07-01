function TextField({ id, label, type = "text", value, onChange, error, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-lg border px-3 py-2 text-slate-900 outline-none transition focus:ring-2 ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-200"
            : "border-slate-300 focus:border-violet-500 focus:ring-violet-200"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default TextField;
