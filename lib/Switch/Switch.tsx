import "./Switch.css";

export const Switch = () => {
  return (
    <label className="relative flex justify-between items-center p-2 text-xl">
      <input
        type="checkbox"
        className="absolute left-0 top-0 w-full h-full appearance-none peer rounded-md"
      />
      <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
    </label>
  );
};
/*     <div className="switch-container">
      <label htmlFor={`switch-${id}`} className="switch">
        <input
          type="checkbox"
          id={`switch-${id}`}
          checked={isChecked}
          onChange={handleSwitchChange}
        />
        <span className="slider"></span>
      </label>
    </div> */
