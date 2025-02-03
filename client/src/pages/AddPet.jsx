import { useState } from 'react'
import './AddPet.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddPet = () => {
  const [pet, setPet] = useState({

    name: "",
    breed: "",
    age: "",
    gender: "",
    location: "",
    photo: null,
  });

  const navigate = useNavigate();



  const handleChange = async (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pet_photos");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmzzgym8c/image/upload",
        formData
      );

      setPet((prevPet) => ({
        ...prevPet,
        photo: response.data.secure_url,
      }));

    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please check your internet connection and Cloudinary settings.");
    }
  };

  
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!pet.photo) 
  {
    alert("Please wait until the image is uploaded.");
    return;
  }

  try {
    await axios.post("http://localhost:3000/pet/addpets", pet);
    alert("Pet added successfully!");
    navigate("/");
  } catch (error) {
    console.error("Error adding pet:", error);
  }
};


  return (
    <div className='form'>


      <h1 className='heading'> Add a New Pet </h1>

      <form onSubmit={handleSubmit}>

        <label> Name </label>
        <input type="text" placeholder='Enter name' name='name' onChange={handleChange} value={pet.name || ""}></input>

        <br></br>

        <label> Breed </label>
        <input type="text" placeholder='Enter breed' name='breed' onChange={handleChange} value={pet.breed}></input>

        <br></br>

        <label> Age </label>
        <input type="number" placeholder='Enter age' name='age' onChange={handleChange} value={pet.age} ></input>

        <br></br>

        <label> Gender  </label>
        <input type='text' name='gender' onChange={handleChange} value={pet.gender}></input>
        <br></br>

        <label> Location </label>
        <input type='text' placeholder='Enter location' name='location' onChange={handleChange} value={pet.location}></input>

        <br></br>

        <label> Photo </label>
        <input type='file'  name='photo' onChange={handleFileChange} ></input>

        <br></br>

        <button type='submit'> Add Pet </button>


      </form>



    </div>
  )

}
export default AddPet
