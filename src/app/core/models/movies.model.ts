export interface MovieMinimalDTO{
  id: string;
  title: string;
  duration: string; // Assuming the duration is in minutes
  budget: string; // Assuming the budget is in millions
  release_date: string; // ISO format date string
}

export interface MovieDTO extends MovieMinimalDTO{
  box_office: string; // Box office revenue in billions
  cinematographers: string[];
  poster: string; // URL to the poster image
  producers: string[];
  summary: string;
}

