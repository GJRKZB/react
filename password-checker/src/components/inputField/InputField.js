import "./InputField.css";

export default function InputField({ password, handlePassword }) {
  return (
    <div>
      <input
        className="inputfield--password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePassword}
      />
    </div>
  );
}
