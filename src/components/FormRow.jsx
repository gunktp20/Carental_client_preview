const FormRow = (props) => {
    const { type, value, name, handleChange, labelText ,readOnly } = props;
    return (
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className={readOnly?"form-input read-only":"form-input"}
        ></input>
      </div>
    );
  };
  
  export default FormRow;
  