import '../LoginPage.css';
import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

const LoginPage = () => {
    const { type } = useParams(); // volunteer / service
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");

    const [id, setId] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const apiUrl = type === 'volunteer'
            ? "https://localhost:44348/api/VolunteerBLL/Add_volunteer"
            : "https://localhost:44348/api/RequestsBLL/Add_Request";

        const userObj = type === 'volunteer'
            ? { IdVolunteer: id, Name: username, Phone: phone }
            : { IdRequestor: id, Name: username, Phone: phone, Adress:adress };



        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("שגיאה בקריאת השרת");
                }
                return response.json();
            })
            .then(data => {
                console.log("המשתמש נוסף בהצלחה", data);
                navigate("/Home", { state: { userType: type } });
            })
            .catch(error => {
                console.error("שגיאה:", error);
            });
    };

    const renderNavLinks = () => {
        if (type === 'volunteer') {
            return (

                <ul>
                    <li><Link to="/ListVolunteers">מתנדבים</Link></li>
                    <li><Link to="/MyAssignments">הבקשות שעלי למלא</Link></li>
                    <li><Link to="/AllRequests">בקשות</Link></li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li><Link to={`/NewRequestPage/${phone}`}>הגש בקשה</Link></li>
                    <li><Link to="/ListVolunteers">מתנדבים</Link></li>
                    <li><Link to="/about">אודותינו</Link></li>
                </ul>
            );
        }
    };

    return (
        <>
            <div className="login-page">
                <nav className="navbar">


                    <img src="/logo.PNG" alt="לוגו" className="navbar-logo" />
                    {renderNavLinks()}
                </nav>
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">שם</label>
                            <input
                                type='text'
                                id="name"
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
                                value={phone}
                                placeholder="מספר הטלפון שלך"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        {type === 'volunteer' && (
                            <div className="form-group">
                                <label htmlFor="id">תעודת זהות</label>
                                <input
                                    type='text'
                                    id="id"
                                    placeholder="תעודת הזהות שלך"
                                    onChange={(e) => setId(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        { type === 'service' && (

                            <div className="form-group">
                                <label htmlFor="adress">כתובת</label>
                                <input
                                    type="text"
                                    id="adress"
                                    placeholder="הכתובת שלך"
                                    onChange={(e) => setAdress(e.target.value)}
                                    required
                                />
                            </div>
                        )}


                        <button type="submit">התחבר</button>
                        <p>אין לך חשבון? <Link to="/SignUp">הרשם כאן</Link></p>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="scrolling-text">
                    <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
                    <span>התנדבות למשפחות ברוכות • יש לך שעה פנויה? הרכב פנוי ? למה לא לעשות חסד • מאגר מתנדבים - מאגר זכויות • </span>
                </div>
            </footer>
        </>
    );
};

export default LoginPage;
