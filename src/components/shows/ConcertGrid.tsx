'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';


interface Concert {
  id: string;
  date: string;
  doorTime?: string;
  showTime?: string;
  artist: {
    headliner: string;
    hometown?: string;
    openers?: string[];
    genres?: string[];
    shortBio?: string;
  };
  venue: {
    name: string;
    neighborhood?: string;
  };
  price?: string;
}

interface ConcertGridItemProps {
  concert: Concert;
  onExpand: (id: string) => void;
}

const ConcertGridItem: React.FC<ConcertGridItemProps> = ({ concert, onExpand }) => {
  return (
    <div className="flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-sm">
      {/* Date & Time */}
      <div className="w-32 flex-shrink-0 mr-6">
        <div className="text-black">{concert.date}</div>
        {concert.doorTime && (
          <div className="text-gray-700">{concert.doorTime}</div>
        )}
        {concert.showTime && (
          <div className="text-gray-700">{concert.showTime}</div>
        )}
      </div>

      {/* Artist */}
      <div className="w-48 flex-shrink-0 mr-2">
        <div className="text-base font-medium text-black leading-tight">
          {concert.artist.headliner}
        </div>
        {concert.artist.openers && concert.artist.openers.length > 0 && (
          <div className="text-sm text-gray-800 leading-tight">
            w/ {concert.artist.openers.join(", ")}
          </div>
        )}
        {concert.artist.hometown && (
          <div className="text-xs text-gray-700 leading-tight">
            {concert.artist.hometown}
          </div>
        )}
      </div>

      {/* Venue */}
      <div className="w-32 flex-shrink-0 mr-3">
        <div className="font-medium text-black leading-tight">{concert.venue.name}</div>
        {concert.venue.neighborhood && (
          <div className="text-sm text-gray-800 leading-tight">
            {concert.venue.neighborhood}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="w-32 flex-shrink-0 font-medium text-black mr-3">
        {concert.price}
      </div>

            {/* Genre */}
            <div className="w-32 flex-shrink-0 text-black leading-tight mr-3">
        {concert.artist.genres?.map((genre, index) => (
          <div key={index}>{genre}</div>
        ))}
      </div>

      {/* Bio */}
      <div className="flex-grow text-black line-clamp-2 pr-4">
        {concert.artist.shortBio}
      </div>

      {/* Expand Button */}
      <div className="w-8 flex-shrink-0 text-right">
        <button 
          onClick={() => onExpand(concert.id)}
          className="p-1 text-gray-700 hover:text-black transition-transform hover:scale-110"
          aria-label="Show more details"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// Sample data
const concerts: Concert[] = [
  {
    id: '1',
    date: "Sat 01/31/2025",
    doorTime: "Doors: 7:00 PM",
    showTime: "Show: 8:00 PM", 
    artist: {
      headliner: "Hippo Campus",
      hometown: "St. Paul, MN",
      openers: ["Petey"],
      genres: ["Indie Rock", "Alternative"],
      shortBio: "Minnesota indie rock band known for their dynamic live shows and intricate arrangements"
    },
    venue: {
      name: "The Met",
      neighborhood: "North Philly",
    },
    price: "$35-65"
  },
  {
    id: '2',
    date: "Sun 02/01/2025",
    doorTime: "Doors: 8:00 PM",
    showTime: "Show: 9:00 PM", 
    artist: {
      headliner: "Drive-By Truckers",
      hometown: "Athens, GA",
      genres: ["Southern Rock", "Alt-Country"],
      shortBio: "Southern rock institution known for their triple-guitar attack and narrative songwriting"
    },
    venue: {
      name: "Ardmore Music Hall",
      neighborhood: "Ardmore"
    },
    price: "$30-45"
  }
];

const ConcertGrid: React.FC = () => {
  const handleExpand = (id: string) => {
    console.log('Expanding concert:', id);
    // Will implement expansion logic later
  };

  return (
    <div className="bg-white rounded-lg shadow max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="flex px-4 py-3 bg-gray-100 font-medium text-black border-b border-gray-200">
        <div className="w-32 flex-shrink-0 mr-6">Date & Time</div>
        <div className="w-48 flex-shrink-0 mr-2">Artist</div>
        <div className="w-32 flex-shrink-0 mr-3">Venue</div>
        <div className="w-32 flex-shrink-0 mr-3">Price</div>
        <div className="w-32 flex-shrink-0 mr-3">Genre</div>
        <div className="flex-grow">About</div>
        <div className="w-8 flex-shrink-0"></div>
    </div>
      
      {/* Concert Items */}
      {concerts.map((concert) => (
        <ConcertGridItem 
          key={concert.id}
          concert={concert}
          onExpand={handleExpand}
        />
      ))}
    </div>
  );
};

export default ConcertGrid;