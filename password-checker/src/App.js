import { useState } from "react";
import Card from "./components/card/Card";
import { validatePassword } from "./utils/Validation";
import "./App.css";
export default function App() {
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({
    hasLow: false,
    hasCap: false,
    hasNumber: false,
    has8digits: false,
  });

  const strength = Object.values(validate).reduce((a, item) => a + item, 0);

  const feedback = {
    1: "Password is to weak",
    2: "It's still weak",
    3: "You almost there!",
    4: "Great!! Now your password is strong",
  }[strength];

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
    setValidate(validatePassword(event.target.value));
  };

  return (
    <div className="app">
      <Card
        password={password}
        handlePassword={handlePassword}
        strength={strength}
        feedback={feedback}
      />
    </div>
  );
}
