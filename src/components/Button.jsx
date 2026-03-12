const Button = ({ button }) => {
  function handleChange() {
    document.body.style.backgroundColor = button;
  }
  return (
    <button
      className="border border-black px-1.5 py-1 cursor-pointer font-semibold text-slate-900"
      style={{ backgroundColor: button }}
      onClick={handleChange}
    >
      {button}
    </button>
  );
};

export default Button;
