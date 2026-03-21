function Input({ label, isTextarea, ref, ...props }) {
  const baseClasses =
    "w-full p-3 rounded-md bg-stone-200 text-stone-900 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400";

  return (
    <p className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-stone-700">{label}</label>

      {isTextarea ? (
        <textarea className={baseClasses} rows={4} ref={ref} {...props} />
      ) : (
        <input className={baseClasses} {...props} ref={ref} />
      )}
    </p>
  );
}

export default Input;
