// Custom Hook -> Es una funcion la cual es CREADA POR UN DESARROLLADOR de este proyecto
// El objetivo es realizar una tarea especifica
// Puede tener sintaxis JS, o aprovechar las bondades de la sintaxis JSX (useEffect, useState)
import { useEffect, useState } from "react"

export const usePeopleData = (name,films) => { 

    //useEffect -> Ejecutar algo al momento de montar un componente
    //-> Sincronizar datos, ejecutar algo en fase de ACTUALIZACION
    const [people, setPeople] = useState([]); 
    
    const getPeople = async () => {
        //https://pokeapi.co/api/v2/pokemon/ditto
        let response = await fetch('https://swapi.dev/api/people/')
        let data = await response.json();
        //console.log(response);
        console.log(data);
        let filteredPeople = data.results;

        if(name){
            filteredPeople = filteredPeople.filter((people) => people.name === name )
        }

        

          // Mapea las personas para obtener los nombres de las películas
          filteredPeople = await Promise.all(filteredPeople.map(async (person) => {
            const filmTitles = await Promise.all(person.films.map(async (filmUrl) => {
                const filmResponse = await fetch(filmUrl);
                const filmData = await filmResponse.json();
                return filmData.title; // Obtiene el título de la película
            }));

            return { ...person, films: filmTitles }; // Regresa la persona con el título de las películas
        }));



        if (films) {
            filteredPeople = filteredPeople.filter(person => 
                person.films.includes(films) 
            );
        }
        
        
            
        
        
        //    RETRASAR EL GUARDADO DE DATOS EN EL ESTADO
        /* setTimeout(() => {
            setCountries(data);
        }, 3000); */
        
        setPeople(filteredPeople);
    }   
    

    useEffect( () => { 
        //console.log("Holis");
        getPeople();
        //console.log(countries);
    },[name,films]) //Array de Dependencia. Te vas ejecutar cuando esto cambie. SI ESTA VACIO NO SE VA EJECUTAR
    

    return people;

};
