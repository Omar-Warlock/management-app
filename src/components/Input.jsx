function Input({ label, isTextarea, ...props }) {
  const baseClasses =
    "w-full p-3 rounded-md bg-stone-200 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400";

  return (
    <p className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-stone-700">{label}</label>

      {isTextarea ? (
        <textarea className={baseClasses} rows={4} {...props} />
      ) : (
        <input className={baseClasses} {...props} />
      )}
    </p>
  );
}

export default Input;
