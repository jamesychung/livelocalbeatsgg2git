# 🗄️ Live Local Beats Database Setup Guide

## 📋 Overview

This guide will help you set up the database for the Live Local Beats platform, including creating models, seeding data, and testing connections.

## 🏗️ Database Models

We've created the following models for the Live Local Beats platform:

### 👥 **User Model** (`api/models/user/schema.gadget.ts`)
- **Purpose**: Core user accounts for musicians, venues, and fans
- **Key Fields**: email, firstName, lastName, role, profilePicture, bio, location, socialLinks
- **Roles**: musician, venue, fan, admin

### 🏢 **Venue Model** (`api/models/venue/schema.gadget.ts`)
- **Purpose**: Venue profiles and information
- **Key Fields**: name, type, description, address, capacity, genres, amenities, hours
- **Relationships**: belongs to User (owner)

### 🎵 **Musician Model** (`api/models/musician/schema.gadget.ts`)
- **Purpose**: Musician profiles and performance information
- **Key Fields**: name, stageName, genre, bio, hourlyRate, instruments, experience
- **Relationships**: belongs to User

### 🎫 **Event Model** (`api/models/event/schema.gadget.ts`)
- **Purpose**: Event listings and details
- **Key Fields**: title, description, date, startTime, endTime, ticketPrice, capacity
- **Relationships**: belongs to Venue, belongs to Musician, belongs to User (createdBy)

### 📝 **Review Model** (`api/models/review/schema.gadget.ts`)
- **Purpose**: User reviews for events, venues, and musicians
- **Key Fields**: rating, comment, reviewType
- **Relationships**: belongs to Event/Venue/Musician, belongs to User (reviewer)

### 🎯 **Booking Model** (`api/models/booking/schema.gadget.ts`)
- **Purpose**: Booking management between venues and musicians
- **Key Fields**: date, startTime, endTime, status, totalAmount, depositPaid
- **Relationships**: belongs to Venue, belongs to Musician, belongs to User (bookedBy)

## 🚀 Setup Instructions

### 1. **Deploy to Gadget.dev**
```bash
# Push your code to GitHub first
git add .
git commit -m "Add database models and actions"
git push origin main

# Then deploy to Gadget.dev through the dashboard
# The models will be automatically created in your Gadget environment
```

### 2. **Run Data Seeding**
After deployment, you can seed the database with sample data:

1. Go to your Gadget.dev dashboard
2. Navigate to the "Actions" section
3. Find the "seedData" action
4. Run it to populate the database with sample data

### 3. **Verify Models**
Check that all models are created correctly:
- User
- Venue  
- Musician
- Event
- Review
- Booking

## 📊 Sample Data

The seeding script creates:

### **Users**
- Sarah Johnson (Musician)
- Blue Note (Venue Owner)
- Thunder Road (Musician)

### **Venues**
- Blue Note Lounge (Jazz Club, NYC)
- The Basement (Rock Venue, LA)

### **Musicians**
- Sarah Johnson Trio (Jazz)
- Thunder Road (Rock)

### **Events**
- Jazz Night at Blue Note
- Rock Revolution

### **Reviews**
- Sample reviews for events

## 🔗 API Actions

We've created the following API actions:

### **Venue Actions**
- `createVenue.ts` - Creates new venues with validation

### **Event Actions**
- `createEvent.ts` - Creates new events with validation

### **Data Seeding**
- `seedData.ts` - Populates database with sample data

## 🧪 Testing Database Connection

### 1. **Test API Endpoints**
After deployment, test the API endpoints:

```javascript
// Example: Fetch all venues
const venues = await api.venue.findMany({
  filter: { isActive: { equals: true } }
});

// Example: Fetch all events
const events = await api.event.findMany({
  filter: { isActive: { equals: true } }
});
```

### 2. **Test Frontend Integration**
Update your frontend components to use real data:

```typescript
// In your venue dashboard
const venueData = await api.venue.findOne(venueId);

// In your event details
const eventData = await api.event.findOne(eventId);
```

## 🔧 Troubleshooting

### **Common Issues**

1. **Model Not Found**
   - Ensure models are deployed to Gadget.dev
   - Check model names match exactly

2. **Relationship Errors**
   - Verify foreign key relationships are correct
   - Check that referenced models exist

3. **Data Seeding Fails**
   - Check for required fields
   - Verify email addresses are unique
   - Ensure all relationships are valid

### **Debug Steps**

1. Check Gadget.dev logs for errors
2. Verify model schemas are correct
3. Test individual model creation
4. Check relationship configurations

## 📈 Next Steps

After database setup:

1. **Update Frontend Components** to use real API data
2. **Add Authentication** for user management
3. **Implement Booking Workflow** 
4. **Add Payment Integration**
5. **Create Admin Dashboard**

## 🎯 Success Criteria

✅ Database models created and deployed  
✅ Sample data seeded successfully  
✅ API endpoints responding correctly  
✅ Frontend components loading real data  
✅ Relationships working properly  

---

**Need Help?** Check the Gadget.dev documentation or reach out for support! 