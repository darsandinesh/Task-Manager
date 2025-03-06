const InputField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
      <div className="input-field">
        <label className="input-label">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-control"
        />
      </div>
    );
  };
  
  export default InputField;
  