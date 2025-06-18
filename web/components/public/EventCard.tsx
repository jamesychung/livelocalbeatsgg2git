import React from "react";

interface Event {
  id: number;
  title: string;
  venue: string;
  venueId: number;
  musician: string;
  musicianId: number;
  date: string;
  startTime: string;
  endTime: string;
  image: string;
  category: string;
  description: string;
}

interface EventCardProps {
  event: Event;
  onClick: (eventId: number) => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div 
      onClick={() => onClick(event.id)}
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
          fontSize: '2rem',
          marginRight: '1rem'
        }}>
          {event.image}
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
            {event.category}
          </span>
        </div>
      </div>
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600', 
        color: '#1a202c',
        marginBottom: '0.5rem'
      }}>
        {event.title}
      </h3>
      <p style={{ color: '#4a5568', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
        <strong>{event.musician}</strong> at {event.venue}
      </p>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
        📅 {event.date}
      </p>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
        🕐 {event.startTime} - {event.endTime}
      </p>
      <p style={{ color: '#4a5568', fontSize: '0.875rem', fontStyle: 'italic' }}>
        {event.description}
      </p>
    </div>
  );
} 