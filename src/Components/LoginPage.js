import '../LoginPage.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom'; // ודא שהספרייה מותקנת

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("UserName:", username);
        console.log("phone:", phone);

        // נתון לדוגמה - אובייקט מתנדב
        const volunteer = {
            IdVolunteer: id,
            Name: username,
            Phone: phone
        };

        fetch("https://localhost:44348/api/VolunteerBLL/Add_volunteer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(volunteer)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("שגיאה בקריאת השרת");
                }
                return response.json();
            })
            .then(data => {
                if(data)
                console.log("המתנדב נוסף בהצלחה", data);
                // <Link to="/Home"></Link>
            })
            .catch(error => {
                console.error("שגיאה:", error);
            });


    };

    return (
        <div className="login-page">
            {/* סרגל הכלים */}
            <nav className="navbar">
                <ul>
                    <li><Link to="/ListVolunteers">מתנדבים</Link></li>
                    <li><Link to="/new-request">בקשה חדשה</Link></li>
                    <li><Link to="/about">אודותינו</Link></li>
                    <li><Link to="/donate">לתרומות</Link></li>
                </ul>
            </nav>


            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">שם</label>
                        <input
                            type='text'
                            id="name"
                            name="name"
                            placeholder="השם שלך"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">טלפון</label>
                        <input
                            type='tel'
                            id="phone"
                            name="phone"
                            value={phone}
                            placeholder=" מספר הטלפון שלך"
                            onChange={(e) => setPhone(e.target.value)}
                            // pattern="[0-9]{3}-[0-9]{7}"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id">תעודת זהות</label>
                        <input
                            type='text'
                            id="id"
                            name="id"
                            placeholder="תעודת הזהות שלך"
                            onChange={(e) => setId(e.target.value)}
                            required
                        />
                    </div>


                    <button type="submit">התחבר</button>
                    <p>אין לך חשבון? <Link to="/SignUp">הרשם כאן</Link></p>
                </form>

            </div>

        </div>
    );
};

export default LoginPage;
