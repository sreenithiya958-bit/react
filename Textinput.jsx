function TextInput({ label, type, value, onChange, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <br />

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <br />
      <br />
    </div>
  );
}

export default TextInput;