import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage.css';

const DualLoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <button
            onClick={() => navigate('/login/volunteer')}
            style={{
              backgroundColor: '#FF6F00',
              color: '#fff',
              border: '2px solid #FF6F00',
              borderRadius: '8px 0 0 8px',
              padding: '10px 20px',
              fontWeight: '700',
              cursor: 'pointer',
              outline: 'none',
              transition: 'background-color 0.3s ease',
            }}
          >
            כניסה למתנדב
          </button>
          <button
            onClick={() => navigate('/login/service')}
            style={{
              backgroundColor: '#FF6F00',
              color: '#fff',
              border: '2px solid #FF6F00',
              borderRadius: '0 8px 8px 0',
              padding: '10px 20px',
              fontWeight: '700',
              cursor: 'pointer',
              outline: 'none',
              transition: 'background-color 0.3s ease',
              borderLeft: 'none',
            }}
          >
            כניסה למבקש שירות
          </button>
        </div>
      </div>
    </div>
  );
};

export default DualLoginPage;
