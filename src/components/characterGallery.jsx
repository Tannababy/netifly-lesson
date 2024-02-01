import React from "react";
import CharacterData from "../data/characterData.json";
import Character from "./Character";

function CharacterGallery() {
  //Body
  console.log(CharacterData);
  return (
    <div>
      {CharacterData.map((character) => (
        <Character key={Character.id} {...character}></Character>
      ))}
    </div>
  );
}
export default CharacterGallery;
