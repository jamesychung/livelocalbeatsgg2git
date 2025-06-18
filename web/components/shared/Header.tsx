import React from "react";

interface HeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export default function Header({ showBackButton = false, onBackClick }: HeaderProps) {
  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {showBackButton && (
              <button 
                onClick={onBackClick}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#4a5568',
                  marginRight: '0.5rem'
                }}
              >
                ←
              </button>
            )}
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.25rem'
            }}>
              🎵
            </div>
            <a href="/" style={{ textDecoration: 'none' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', margin: 0 }}>
                Live Local Beats
              </h1>
            </a>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="/" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Home</a>
            <a href="#events" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Events</a>
            <a href="#musicians" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Musicians</a>
            <a href="#venues" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Venues</a>
            <button style={{
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 