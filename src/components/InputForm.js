import InputColor from "./InputColor"
import InputField from "./InputField"

const InputForm = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button
        className="bg-indigo-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-indigo-500 disabled:bg-gray-300"
      >Generate QrCode</button>
    </div>
  )
}

export default InputForm