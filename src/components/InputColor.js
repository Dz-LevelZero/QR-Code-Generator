import { useState } from "react"
import { ChromePicker } from "react-color";

const InputColor = () => {
  const [color, setColor] = useState('#054080');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleChange = color => setColor(color.hex);

  return (
    <div>
      <label className="font-semibold text-md" >Color</label>
      <div className="flex items-center gap-2">
        <div
          className="w-10 h-8 cursor-pointer border-4"
          onClick={() => setDisplayColorPicker(prev => !prev)}
          style={{ background: color }}></div>
        <span>{color}</span>
      </div>
      {
        displayColorPicker && (
          <div className="absolute mt-2">
            <ChromePicker color={color} onChange={handleChange} />
          </div>
        )
      }
    </div>
  )
}

export default InputColor