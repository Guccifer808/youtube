import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: 'auto', paddingBottom: '1px' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '96.5vh' }}>
        <Sidebar />
      </div>
    </div>
  );
}
