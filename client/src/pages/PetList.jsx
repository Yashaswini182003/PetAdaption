import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './PetList.css'
import axios from "axios";

const PetList = () => {
    const [pets, setPets] = useState([]);
    const [locationFilter, setLocationFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/pet/getallpets`)
            .then((response) => {
                // console.log(response.data); // Log the entire response
                setPets(response.data);
            })
            .catch((error) => console.error("Error fetching pets:", error));
    }, []);

    const handleAdopt = (petId) => {
        navigate(`/pets/${petId}`);
    };

    const filteredPets = pets.filter((pet) => {

        return pet.location.toLowerCase().includes(locationFilter.toLowerCase());
    });


    return (
        <div className="petlist">

            <h1 className="h11"> Availabel Pets </h1>

            <div className="div1">
                <input value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} placeholder="Filter by loaction"></input>
            </div>

            <div className="div2">
                {filteredPets.map((pet) => {
                    // console.log(pet.photo); // Log the photo URL to check its value
                    // return ( not required
                    return (

                        <div key={pet._id}>
                            <h3>{pet.name}</h3>
                            <p>Breed: {pet.breed}</p>
                            <p>Age: {pet.age}</p>
                            <p>Gender: {pet.gender}</p>
                            <p>Location: {pet.location}</p>
                            <img src={pet.photo} alt={pet.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                            {pet.status === "Adopted" ? (
                                <span>Adopted</span>
                            ) : (
                                <button onClick={() => handleAdopt(pet._id)} className="button1">Adopt</button>
                            )}
                        </div>
                    );
                })}
            </div>

        </div>
    );

};


export default PetList;