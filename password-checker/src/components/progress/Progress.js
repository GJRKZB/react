import "./Progress.css";

export default function Progress({ strength, password, feedback }) {
  return (
    <div>
      {strength > 0 ? (
        <progress
          hidden={password.length === 0}
          className={`password stength-${strength}`}
          value={strength}
          max={4}
        />
      ) : null}
      <div
        className={`feedback strength-${strength}`}
        hidden={password.length === 0}
      >
        {feedback}
      </div>
    </div>
  );
}
