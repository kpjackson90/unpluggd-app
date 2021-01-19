const Forminput = (props) => {
  const {
    placeholder,
    value,
    setValue,
    type,
    valid,
    invalid,
    textInfo,
    label,
    customClass
  } = props;

  return (
    <div>
      {label ? <label className="f-18 fw-300 mb-12">{label}</label> : null}
      <input
        type={type}
        placeholder={placeholder}
        className={`app-input ${customClass}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          borderColor: valid ? "#007A87" : invalid ? "#E72287" : "#464646",
        }}
      />
      {textInfo ? (
        <small
          className="form-text fw-400 f-14 text-left"
          style={{ color: valid ? "#12ccc7" : invalid ? "#E72287" : "#A2A2A2" }}
        >
          {textInfo}
        </small>
      ) : null}
    </div>
  );
};

export default Forminput;
