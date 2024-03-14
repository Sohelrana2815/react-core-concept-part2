import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    setTeam(team + 1);
  };
  const handleRemove = () => {
    setTeam(team - 1 );
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players : {team} </h3>
      <button onClick={handleAdd}>Add Players</button>
      <button onClick={handleRemove}>Remove Players</button>
    </div>
  );
}
