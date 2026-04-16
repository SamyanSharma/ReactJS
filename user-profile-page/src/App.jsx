import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const users = [
  { id: 101, name: "Rahul Sharma", email: "rahul@example.com", posts: ["Learning React Router is fun!", "Just built my first React app 🚀"] },
  { id: 102, name: "Priya Verma", email: "priya@example.com", posts: ["JavaScript is powerful 💡", "Exploring useParams hook today"] },
  { id: 103, name: "Amit Singh", email: "amit@example.com", posts: ["Frontend development is amazing!", "Working on a social media project"] }
];

const UsersList = () => (
  <div style={{ padding: '20px' }}>
    <h2>Users List</h2>
    <ul>
      {users.map(user => (
        <li key={user.id} style={{ margin: '10px 0' }}>
          <Link to={`/users/${user.id}`} style={{ fontSize: '18px', textDecoration: 'none', color: 'blue' }}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>User not found</h2>
        <button onClick={() => navigate('/users')}>Back to Users</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>👤 {user.name}</h2>
      <p>📧 Email: {user.email}</p>
      <h3>📝 Posts:</h3>
      <ul>
        {user.posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/users')} style={{ marginTop: '20px' }}>
        Back to Users
      </button>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}