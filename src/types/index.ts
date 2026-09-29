export interface SwotItem {
  title: string;
  description: string;
}

export interface SwotCategory {
  id: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
  letter: 'S' | 'W' | 'O' | 'T';
  title: string;
  englishTitle: string;
  subtitle: string;
  description: string;
  items: SwotItem[];
}
