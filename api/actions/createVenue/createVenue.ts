export const run = async (params: any, record: any, context: any) => {
  const { api, logger } = context;
  
  try {
    // Validate required fields
    if (!record.name || !record.type || !record.address) {
      throw new Error("Name, type, and address are required");
    }

    // Set default values
    record.isActive = true;
    record.isVerified = false;
    record.rating = 0;

    // Create the venue
    const venue = await api.venue.create({
      ...record,
      owner: context.currentUser?.id
    });

    logger.info(`Venue created: ${venue.name} (ID: ${venue.id})`);
    
    return venue;
  } catch (error) {
    logger.error("Error creating venue:", error);
    throw error;
  }
}; 