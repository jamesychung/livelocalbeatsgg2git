import React from "react";

interface Musician {
  id: number;
  name: string;
  genre: string;
  location: string;
  image: string;
  profilePic: string;
  rating: number;
  gigs: number;
}

interface MusicianCardProps {
  musician: Musician;
  onClick: (musicianId: number) => void;
}

export default function MusicianCard({ musician, onClick }: MusicianCardProps) {
  return (
    <div 
      onClick={() => onClick(musician.id)}
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '1.5rem',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        margin: '0 auto 1rem',
        overflow: 'hidden',
        border: '3px solid #ffdf00',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <img 
          src={musician.profilePic} 
          alt={musician.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: '#1a202c'
      }}>
        {musician.name}
      </h3>
      <p style={{ 
        color: '#4a5568',
        marginBottom: '0.5rem'
      }}>
        {musician.genre} • {musician.location}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', color: '#718096' }}>
        <span>⭐ {musician.rating}</span>
        <span>🎵 {musician.gigs} gigs</span>
      </div>
    </div>
  );
} 