import axios from "axios";
import { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";

// Create Context
export const InputContext= createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  })

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("");
 
  // Get Free API KEY by Sign up on : https://www.qrcode-tiger.com/
  const config = {
    headers: { Authorization: "Bearer " + process.env.REACT_APP_API_KEY }
  }

  const bodyParameters = {
    "colorDark": inputValue.color,
    "qrCategory": "url",
    "text": inputValue.url,
  }

  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
      )
      setResponse(res.data.url);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}
export default App;
