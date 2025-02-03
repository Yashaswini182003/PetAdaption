import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './PetDetails.css'


const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [form, setForm] = useState({
        adopterName: "",
        email: "",
        phoneNumber: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/pet/pets/${id}`)
            .then((response) => setPet(response.data))
            .catch((error) => console.error("Error fetching pet details:", error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/application/applications", {
                ...form,
                petId: id,
            })

        .then(() => {
            alert("Application submitted successfully!")
            navigate("/")

        })

            .catch((error) => console.error("Enter submitting application:", error));
    };

    if (!pet) return <div> Loading... </div>

    return (
        <div className="div11">
            <h1> Pet Adoption Application </h1>
            <img
                src={pet.photo}
                alt={pet.name}

            ></img>
            <h2>{pet.name}</h2>
            <p>Breed: {pet.breed} </p>
            <p>Age: {pet.age} years</p>
            <p>Location: {pet.location}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" name="adopterName" value={form.adopterName} onChange={(e) => setForm({ ...form, adopterName: e.target.value })} required></input>
                <input type="email" placeholder="Your Email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required></input>
                <input type="text" placeholder="Your Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} required></input>

                <button type="submit" className="button2"> Submit </button>

            </form>
        </div>
    );

};

export default PetDetails;