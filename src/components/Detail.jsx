import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api'
const API_KEY = '921c53ed19ee.c07a3c34e20b05d4765f'

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => { //useEffect simula los tres ciclos de vida
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.data)
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]);

    return (
        <div>
     {/*        <h2> {character?.name} </h2>
            <h2> {character?.status} </h2>
            <h2> {character?.species} </h2>
            <h2> {character?.gender} </h2>
            <h2> {character?.origin.name}</h2>
            <img sc r={character?.image} alt={character?.name} />
 */}

        </div>
    )
}

export default Detail;
