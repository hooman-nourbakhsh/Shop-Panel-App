function TextField({ label, name, value, onChange, disabled = false }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        disabled={disabled}
        autoComplete="off"
        className="textField__input"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default TextField;
