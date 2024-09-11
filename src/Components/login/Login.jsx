import { useState } from "react";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (inputValue.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };
  const success = () => {
    if (inputValue == "") {
      alert("Usuario inválido para registrarse");
    } else if (!inputValue.toLowerCase().includes("o")) {
      alert("¡Usuario registrado correctamente!");
    } else if (inputValue.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    }
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={success}>Registrarme</button>
      <p>{inputValue}</p>
    </div>
  );
};

export default Login;
