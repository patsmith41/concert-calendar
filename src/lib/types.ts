// src/lib/types.ts
export interface Concert {
    date: string;
    time: string;
    artist: {
      headliner: string;
      hometown: string;
      openers: string[];
      genres: string[];
      shortBio: string;
    };
    venue: {
      name: string;
      neighborhood: string;
    };
    price: string;
  }