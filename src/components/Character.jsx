import React from "react";

function Character({
  name,
  imgUrl,
  birth,
  spouse,
  race,
  gender,
  realm,
  death,
}) {
  // Body
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} />
      <ul>
        <li>Date of Birth: {birth}</li>
        <li>Date of Death: {death}</li>
        <li>Race: {race}</li>
        <li>Gender: {gender}</li>
        <li>Spouse: {spouse}</li>
        <li>Realm: {realm}</li>
      </ul>
    </div>
  );
}

export default Character;
