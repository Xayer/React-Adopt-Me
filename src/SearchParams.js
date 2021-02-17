import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // THIS IS A HOOK! All Hooks start with "use"
  // DO NOT USE IF/CONDITIONAL STATEMENTS AROUND HOOKS! React is keeping track of the order that you call the hooks in.
  const [location, setLocation] = useState("Seatle, WA"); //Default state for the value.
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({ location, breed, type: animal });
    setPets(animals || []);
  }
  // dom will be rendered first, before useEffect will call this api.
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: breedsResponse }) => {
      const breedStrings = breedsResponse.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [
    animal,
    setBreeds,
    setBreed,
  ]); /* the array is the "dependencies"of the effect.
    If you only want your effect to run once, and then never again, use an empty array.
    That way it'll say "I'm good" - because it doens't depend on anything */
  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
