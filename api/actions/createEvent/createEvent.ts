export const run = async (params: any, record: any, context: any) => {
  const { api, logger } = context;
  
  try {
    // Validate required fields
    if (!record.title || !record.date || !record.venue || !record.musician) {
      throw new Error("Title, date, venue, and musician are required");
    }

    // Set default values
    record.isActive = true;
    record.isPublic = true;
    record.status = "confirmed";
    record.availableTickets = record.totalCapacity || 100;

    // Create the event
    const event = await api.event.create({
      ...record,
      createdBy: context.currentUser?.id
    });

    logger.info(`Event created: ${event.title} (ID: ${event.id})`);
    
    return event;
  } catch (error) {
    logger.error("Error creating event:", error);
    throw error;
  }
}; 