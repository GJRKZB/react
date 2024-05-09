import InputField from "../inputField/InputField";
import Progress from "../progress/Progress";
import "./Card.css";
export default function Card({ password, handlePassword, strength, feedback }) {
  return (
    <div className="card--container">
      <h1 className="card--title">Password Checker</h1>
      <InputField password={password} handlePassword={handlePassword} />
      <Progress strength={strength} password={password} feedback={feedback} />
    </div>
  );
}
