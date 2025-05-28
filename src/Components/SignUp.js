import '../LoginPage.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom'; // ודא שהספרייה מותקנת

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User:", username);
        console.log("Password:", password);
    };

    return (
        <div className="login-page">
            {/* סרגל הכלים */}
            <nav className="navbar">
                <ul>
                    <li><Link to="/volunteers">מתנדבים</Link></li>
                    <li><Link to="/NewRequestPage">בקשה חדשה</Link></li>
                    <li><Link to="/about">אודותינו</Link></li>
                    <li><Link to="/donate">לתרומות</Link></li>
                </ul>
            </nav>

                            <h1>הרשם אלינו</h1>

            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">אימייל</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@mail.com"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">סיסמה</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">הרשם</button>
                    <p>מחובר כבר? <Link to="/LoginPage">הכנס</Link></p>
                </form>

            </div>
            
        </div>
    );
};

export default SignUp;
