import React from "react";

interface Venue {
  id: number;
  name: string;
  type: string;
  location: string;
  image: string;
  profilePic: string;
  capacity: number;
  rating: number;
}

interface VenueCardProps {
  venue: Venue;
  onClick: (venueId: number) => void;
}

export default function VenueCard({ venue, onClick }: VenueCardProps) {
  return (
    <div 
      onClick={() => onClick(venue.id)}
      style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '1.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        border: '1px solid rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '1rem',
          border: '2px solid #e2e8f0'
        }}>
          <img 
            src={venue.profilePic} 
            alt={venue.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div>
          <span style={{
            background: '#e2e8f0',
            color: '#4a5568',
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            {venue.type}
          </span>
        </div>
      </div>
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600', 
        color: '#1a202c',
        marginBottom: '0.5rem'
      }}>
        {venue.name}
      </h3>
      <p style={{ color: '#4a5568', marginBottom: '0.5rem' }}>
        {venue.location}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#718096' }}>
        <span>Capacity: {venue.capacity}</span>
        <span>⭐ {venue.rating}</span>
      </div>
    </div>
  );
} 