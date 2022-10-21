export type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

export type ImageType = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};

export type InitialValuesType = {
  startDate?: string;
  endDate?: string;
  name?: string;
  attendees?: string[];
  description?: string;
};
