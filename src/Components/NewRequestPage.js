import React, { useState } from 'react';
import '../LoginPage.css'; // משתמשים באותו קובץ CSS
import { useParams } from 'react-router-dom';

const NewRequestPage = () => {
  const [requestContent, setRequestContent] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [service, setService] = useState('');
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`הבקשה הוגשה!\nתוכן: ${requestContent}\nתאריך: ${date}\nמספר שעות: ${hours}\nשירות: ${service}`);
    setRequestContent('');
    setDate('');
    setHours('');
    setService('');
    
      // נתון לדוגמה - אובייקט מתנדב
      const new_request = {
        IdRequester:id,
        IdService:service,
        RequestText:requestContent,
        RequestStatus:"Pending",
        RequestDate: date,
        RequestedHours:hours  
    };
    fetch("https://localhost:44348/api/RequestsBLL/Add_Request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_request)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("שגיאה בקריאת השרת");
            }
            return response.json();
        })
        .then(data => {
            if(data)
            console.log("הבקשה נוספה בהצלחה", data);
            // <Link to="/Home"></Link>
        })
        .catch(error => {
            console.error("שגיאה:", error);
        });

    
  
  };

  return (
    <div className="login-page">
      <div className="login-container" style={{ width: '13cm', height: '15cm', marginTop: '80px' }}>
        <h1 style={{ color: '#FF6F00', textAlign: 'center', marginBottom: '25px' }}>בקשה חדשה</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="requestContent">תוכן בקשה</label>
            <input
              type="text"
              id="requestContent"
              value={requestContent}
              onChange={(e) => setRequestContent(e.target.value)}
              required
              placeholder="הזן את תוכן הבקשה"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">תאריך</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hours">מספר שעות</label>
            <input
              type="number"
              id="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              min="0"
              required
              placeholder="הזן מספר שעות"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">בחירת שירות</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value.id)}
              required
            >
              <option  id='1'  value="" disabled>בחר שירות</option>
              <option  id='2' value="השכרת רכב">השכרת רכב</option>
              <option  id='3' value="שטיפה חיצונית לרכב">שטיפה חיצונית לרכב</option>
              <option  id='4' value="ניקוי פנימי לרכב">ניקוי פנימי לרכב</option>
              <option  id='5' value="ניקוי פנימי +שטיפה חיצונית">ניקוי פנימי +שטיפה חיצונית</option>
            </select>
          </div>

          <button type="submit">שלח בקשה</button>
        </form>
      </div>
    </div>
  );
};

export default NewRequestPage;
