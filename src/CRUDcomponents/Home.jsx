import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import "./Home.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/users") 
            .then(response => setUsers(response.data))
            .catch(error => {
                console.error("Error fetching users:", error);
                toast.error("Failed to load users!");
            });
    }, []);

    const deleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:8000/users/${id}`);
            toast.success("User deleted successfully!");
            setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Failed to delete user!");
        }
    };

    return (
        <section id="homeBlock">
            <article>
                <h1><u>List of Users</u></h1>
                <table>
                    <thead>
                        <tr>
                            <th>SI.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={user.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`}>
                                            <button className="edit-btn">Edit</button>
                                        </Link>
                                        <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Link to="/create" className="createLink">
                    <button className="createBtn">Create</button>
                </Link>
            </article>
        </section>
    );
};

export default Home;
