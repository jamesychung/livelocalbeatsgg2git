import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://livelocalbeatsgg2.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "user",
  fields: {
    bio: { type: "string", storageKey: "user_bio" },
    bookings: {
      type: "hasMany",
      children: { model: "booking", belongsToField: "bookedBy" },
      storageKey: "S3aR81jP-5R6",
    },
    email: { type: "email", storageKey: "user_email" },
    events: {
      type: "hasMany",
      children: { model: "event", belongsToField: "createdBy" },
      storageKey: "WJ3LGQJ93vaf",
    },
    firstName: { type: "string", storageKey: "user_first_name" },
    isActive: { type: "boolean", storageKey: "user_is_active" },
    isVerified: { type: "boolean", storageKey: "user_is_verified" },
    lastName: { type: "string", storageKey: "user_last_name" },
    location: { type: "string", storageKey: "user_location" },
    musician: {
      type: "hasOne",
      child: { model: "musician", belongsToField: "user" },
      storageKey: "qxgbAnM4NxYv",
    },
    phone: { type: "string", storageKey: "user_phone" },
    profilePicture: {
      type: "url",
      storageKey: "user_profile_picture",
    },
    reviews: {
      type: "hasMany",
      children: { model: "review", belongsToField: "reviewer" },
      storageKey: "QKcpNpPn_u7O",
    },
    role: { type: "string", storageKey: "user_role" },
    socialLinks: { type: "json", storageKey: "user_social_links" },
    venues: {
      type: "hasMany",
      children: { model: "venue", belongsToField: "owner" },
      storageKey: "74m0dCIW8FFL",
    },
    website: { type: "url", storageKey: "user_website" },
  },
};
