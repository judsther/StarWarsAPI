import { useState } from "react";
import { usePeopleData } from "../../../hooks/usePeopleData"
import { ListPeople } from "./ListPeople";
import { LoadingComponent } from "../../../components/LoadingComponents";

export const People = () => {
    //Recibiendo la informacion del hook useCountriesData
    const [name,setName] = useState('');
    const [films, setFilms] = useState('');

    let people = usePeopleData(name,films);
    
    return(
        <>
            <h1>Characters</h1>

            <label className="form-label">
              Filter by Movie:
              <select className="form-select m-2" onChange={(e) => setFilms(e.target.value)}>
                <option value="" >All</option>
                <option value="A New Hope" >A New Hope</option>
                <option value="The Empire Strikes Back">The Empire Strikes Back</option>
                <option value="Return of the Jedi">Return of the Jedi</option>
                <option value="The Phantom Menace">The Phantom Menace</option>
                <option value="Attack of the Clones">Attack of the Clones</option>
                <option value="Revenge of the Sith">Revenge of the Sith</option>

              </select>
            </label> 

            <label className="form-label m-2">
              Find your favorite character: 

              <input type="text" placeholder="Search your favorite character" className="form-control m-2" 
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            {/* Aca agrego mi codigo JS*/}
            {/* Renderizado condicional -> OPCION DE MOSTRAR UN DATO u OTROS*/}
            {  people.length > 0 ?  <ListPeople people={people}/> : <LoadingComponent />
               }
        </>
    )
}