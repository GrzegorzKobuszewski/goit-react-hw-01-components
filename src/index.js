import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import user from './components/Task-01-Profile/user.json';

import { App } from 'components/App';
import { Profile } from './components/Task-01-Profile/Profile';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
  </React.StrictMode>
);
