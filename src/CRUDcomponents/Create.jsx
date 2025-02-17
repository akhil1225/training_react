import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "./Create.css";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/users", { name, email, phone });
            toast.success("User added successfully!");  
            navigate("/");
        } catch (error) {
            console.error("Error adding user:", error);
            toast.error("Failed to add user!");  
        }
    };

    return (
        <div className="create-container">
            <h2 className="create-title">Create User</h2>
            <form onSubmit={handleSubmit} className="create-form">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="create-input"
                /><br/>

                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="create-input"
                /><br/>

                <input 
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className="create-input"
                    maxLength={10}
                /><br/>

                <button type="submit" className="create-submit-btn">Submit</button>
            </form><br/>

            <button onClick={() => navigate('/')} className="return-home-btn">Return to Home</button>
        </div>
    );
};

export default Create;
