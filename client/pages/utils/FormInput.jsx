const Forminput = (props) => {
  const {
    placeholder,
    value,
    setValue,
    type,
    valid,
    invalid,
    textInfo,
  } = props;

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="app-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          borderColor: valid ? "#007A87" : invalid ? "#E72287" : "#464646",
        }}
      />
      {textInfo ? (
        <small
          className="form-text fw-400 f-16 text-left"
          style={{ color: valid ? "#12ccc7" : invalid ? "#E72287" : "initial" }}
        >
          {textInfo}
        </small>
      ) : null}
    </div>
  );
};

export default Forminput;
