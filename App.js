import React from 'react';
import AdminPanel from './components/AdminPanel';
import CourierTracker from './components/CourierTracker';
import CourierForm from './components/CourierForm';

function App() {
  return (
    <div>
      <AdminPanel />
      <CourierTracker />
      <CourierForm />
    </div>
  );
}

export default App;
