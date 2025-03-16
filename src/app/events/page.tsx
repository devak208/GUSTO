import React from 'react';
import { getAllCategories, getEventsByCategory } from '@/lib/events';
import { EventsSection } from '@/components/Events/EventsSection';

export default function EventsPage() {
  const categories = getAllCategories();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-8">
        GCEE Events
      </h1>
      
      <p className="text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
        Explore our exciting lineup of events. Click on any event to view detailed information and rules.
      </p>
      
      {categories.map((category) => (
        <EventsSection 
          key={category.id} 
          title={category.name} 
          events={getEventsByCategory(category.id)} 
        />
      ))}
    </div>
  );
} 