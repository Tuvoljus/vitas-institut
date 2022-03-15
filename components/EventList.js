import React from 'react'
import EventCard from "./EventCard";

export default function EventList({ events }) {
  return (   
    <ul style={{ listStyle: 'none' }}>
    {events?.map((event) => (
      <li key={event.databaseId}>
        <EventCard event={event} />
      </li>
    ))}
  </ul>
  );
}