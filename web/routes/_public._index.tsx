import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Navigation handlers
  const handleMusicianClick = (musicianId: number) => {
    // Navigate to musician dashboard/profile
    window.location.href = `/musician/${musicianId}`;
  };

  const handleVenueClick = (venueId: number) => {
    // Navigate to venue dashboard/profile
    window.location.href = `/venue/${venueId}`;
  };

  const handleEventClick = (eventId: number) => {
    // Navigate to event details
    window.location.href = `/event/${eventId}`;
  };

  // Hero images for rotator
  const heroImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Live band performing on stage",
      title: "Live Music Experience"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Jazz musician playing saxophone",
      title: "Discover Amazing Talent"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Crowd enjoying live music at venue",
      title: "Connect Through Music"
    }
  ];

  // Mock data for demonstration
  const upcomingEvents = [
    {
      id: 1,
      title: "Jazz Night at Blue Note",
      venue: "Blue Note Lounge",
      venueId: 1,
      musician: "Sarah Johnson Trio",
      musicianId: 1,
      date: "June 25, 2025",
      startTime: "8:00 PM",
      endTime: "11:00 PM",
      image: "🎷",
      category: "Jazz",
      description: "An evening of smooth jazz featuring the Sarah Johnson Trio"
    },
    {
      id: 2,
      title: "Rock Revolution",
      venue: "The Basement",
      venueId: 2,
      musician: "Thunder Road",
      musicianId: 2,
      date: "June 28, 2025",
      startTime: "9:30 PM",
      endTime: "1:00 AM",
      image: "🎸",
      category: "Rock",
      description: "High-energy rock performance by Thunder Road"
    },
    {
      id: 3,
      title: "Acoustic Evening",
      venue: "Coffee House",
      venueId: 3,
      musician: "Emma Davis",
      musicianId: 3,
      date: "July 2, 2025",
      startTime: "7:00 PM",
      endTime: "9:30 PM",
      image: "🎤",
      category: "Acoustic",
      description: "Intimate acoustic performance by Emma Davis"
    },
    {
      id: 4,
      title: "Blues & Soul",
      venue: "Soul Kitchen",
      venueId: 4,
      musician: "The Blues Brothers",
      musicianId: 4,
      date: "July 5, 2025",
      startTime: "8:30 PM",
      endTime: "11:30 PM",
      image: "🎵",
      category: "Blues",
      description: "Authentic blues and soul music experience"
    }
  ];

  const featuredMusicians = [
    {
      id: 1,
      name: "Sarah Johnson",
      genre: "Jazz",
      location: "New York, NY",
      image: "🎷",
      profilePic: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      gigs: 127
    },
    {
      id: 2,
      name: "Thunder Road",
      genre: "Rock",
      location: "Los Angeles, CA",
      image: "🎸",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      gigs: 89
    },
    {
      id: 3,
      name: "Emma Davis",
      genre: "Acoustic",
      location: "Nashville, TN",
      image: "🎤",
      profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      gigs: 156
    },
    {
      id: 4,
      name: "The Blues Brothers",
      genre: "Blues",
      location: "Chicago, IL",
      image: "🎵",
      profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      gigs: 203
    }
  ];

  const featuredVenues = [
    {
      id: 1,
      name: "Blue Note Lounge",
      type: "Jazz Club",
      location: "New York, NY",
      image: "🎷",
      profilePic: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      capacity: 150,
      rating: 4.8
    },
    {
      id: 2,
      name: "The Basement",
      type: "Rock Venue",
      location: "Los Angeles, CA",
      image: "🎸",
      profilePic: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      capacity: 300,
      rating: 4.7
    },
    {
      id: 3,
      name: "Coffee House",
      type: "Acoustic Venue",
      location: "Nashville, TN",
      image: "☕",
      profilePic: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      capacity: 80,
      rating: 4.9
    },
    {
      id: 4,
      name: "Soul Kitchen",
      type: "Blues Club",
      location: "Chicago, IL",
      image: "🎵",
      profilePic: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      capacity: 200,
      rating: 4.6
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
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
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', margin: 0 }}>
                Live Local Beats
              </h1>
            </div>
            <nav style={{ display: 'flex', gap: '2rem' }}>
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

      {/* Hero Image Rotator */}
      <section style={{ 
        position: 'relative',
        height: '60vh',
        minHeight: '400px',
        overflow: 'hidden'
      }}>
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white'
            }}>
              <div style={{ maxWidth: '800px', padding: '0 2rem' }}>
                <h1 style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  lineHeight: '1.2',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                  {image.title}
                </h1>
                <p style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '2rem',
                  opacity: 0.9,
                  lineHeight: '1.6',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  The ultimate platform connecting musicians, venues, and music lovers
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button style={{
                    padding: '1rem 2rem',
                    background: '#ffdf00',
                    color: '#1a202c',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(255, 223, 0, 0.3)'
                  }}>
                    Find Events
                  </button>
                  <button style={{
                    padding: '1rem 2rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '0.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                  }}>
                    Join as Musician
                  </button>
                  <button style={{
                    padding: '1rem 2rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '0.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                  }}>
                    List Your Venue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Image indicators */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem'
        }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentImageIndex ? '#ffdf00' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" style={{ 
        padding: '4rem 1rem',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#1a202c',
              marginBottom: '1rem'
            }}>
              Upcoming Events
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover amazing live music happening near you
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {upcomingEvents.map(event => (
              <div 
                key={event.id} 
                onClick={() => handleEventClick(event.id)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Featured Musicians Section */}
      <section id="musicians" style={{ 
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #ffdf00 0%, #fbbf24 100%)',
        color: '#1a202c'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Featured Musicians
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover talented artists ready to perform at your venue
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {featuredMusicians.map(musician => (
              <div 
                key={musician.id} 
                onClick={() => handleMusicianClick(musician.id)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      <section id="venues" style={{ 
        padding: '4rem 1rem',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#1a202c',
              marginBottom: '1rem'
            }}>
              Featured Venues
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Amazing venues looking for talented musicians
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {featuredVenues.map(venue => (
              <div 
                key={venue.id} 
                onClick={() => handleVenueClick(venue.id)}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Join thousands of musicians and venues already using Live Local Beats
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '1rem 2rem',
              background: '#ffdf00',
              color: '#1a202c',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Sign Up Free
            </button>
            <button style={{
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: '#1a202c',
        color: 'white',
        padding: '3rem 1rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.75rem'
            }}>
              🎵
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
              Live Local Beats
            </h3>
          </div>
          <p style={{ color: '#a0aec0', marginBottom: '2rem' }}>
            Connecting musicians, venues, and music lovers since 2025
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <a href="#" style={{ color: '#a0aec0', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: '#a0aec0', textDecoration: 'none' }}>Contact</a>
            <a href="#" style={{ color: '#a0aec0', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: '#a0aec0', textDecoration: 'none' }}>Terms</a>
          </div>
          <p style={{ color: '#718096', fontSize: '0.875rem' }}>
            © 2025 Live Local Beats. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}