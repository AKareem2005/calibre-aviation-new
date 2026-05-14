import cabinImg from "@/assets/course-cabincrew.jpg";
import groundImg from "@/assets/course-ground.jpg";
import ticketImg from "@/assets/course-ticketing.jpg";
import psaImg from "@/assets/course-psa.jpg";

export type Course = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  duration: string;
  modules: string[];
  vibes: string[];
  goals: string[];
  pairsWith: string[];
};

export const courses: Course[] = [
  {
    slug: "cabin-crew",
    name: "Cabin Crew",
    tagline: "Wings, smiles, and the safest skies in the cabin.",
    image: cabinImg,
    duration: "6 months",
    modules: ["In-flight Safety", "Customer Service", "Emergency Response", "Grooming & Etiquette", "Personality Development"],
    vibes: ["travel", "people", "uniform", "presentation", "stage", "service", "smile", "fly", "airline"],
    goals: ["fly", "uniform", "travel", "interact", "front-facing", "international"],
    pairsWith: ["passenger-service", "air-ticketing"],
  },
  {
    slug: "ground-handling",
    name: "Ground Handling",
    tagline: "The choreography that keeps every flight on time.",
    image: groundImg,
    duration: "6 months",
    modules: ["Aircraft Servicing", "Baggage Handling", "Ramp Safety", "Marshalling", "Cargo Operations"],
    vibes: ["operations", "tarmac", "outdoor", "team", "logistics", "hands-on", "physical"],
    goals: ["work outdoors", "operations", "behind-the-scenes", "teamwork", "fast-paced"],
    pairsWith: ["passenger-service", "air-ticketing"],
  },
  {
    slug: "air-ticketing",
    name: "Air Ticketing",
    tagline: "Fares, GDS, and the systems that move the world.",
    image: ticketImg,
    duration: "6 months",
    modules: ["Reservation Systems (Amadeus / Galileo)", "Fare Calculations", "Travel Documentation", "Customer Handling", "Computer Skills"],
    vibes: ["desk job", "computer", "tech", "details", "travel agency", "indoor"],
    goals: ["office", "computer", "calm", "structured", "travel industry"],
    pairsWith: ["passenger-service", "cabin-crew"],
  },
  {
    slug: "passenger-service",
    name: "Passenger Service Agent",
    tagline: "The first hello. The kind that wins customers for life.",
    image: psaImg,
    duration: "6 months",
    modules: ["Check-in Procedures", "Boarding & Gate Ops", "Passenger Assistance", "Flight Documentation", "Communication Skills"],
    vibes: ["people", "front-desk", "service", "communication", "airport", "uniform"],
    goals: ["talk to people", "uniform", "airport", "friendly", "people skills"],
    pairsWith: ["cabin-crew", "air-ticketing"],
  },
];

export const placedAt = [
  { name: "Tanvi Muvva", airport: "Rajiv Gandhi International, Hyderabad", role: "Cabin Crew" },
  { name: "Ramesh", airport: "Rajiv Gandhi International, Hyderabad", role: "Ground Handling" },
  { name: "Yuvraj", airport: "Rajiv Gandhi International, Hyderabad", role: "Passenger Service" },
  { name: "Neeraj", airport: "Rajiv Gandhi International, Hyderabad", role: "Ground Handling" },
  { name: "Srivennela", airport: "Rajiv Gandhi International, Hyderabad", role: "Cabin Crew" },
  { name: "Jyothika", airport: "Rajiv Gandhi International, Hyderabad", role: "Passenger Service" },
  { name: "Nithin", airport: "Rajiv Gandhi International, Hyderabad", role: "Air Ticketing" },
  { name: "Fathima", airport: "Rajiv Gandhi International, Hyderabad", role: "Cabin Crew" },
  { name: "Ram Tej", airport: "Rajiv Gandhi International, Hyderabad", role: "Ground Handling" },
  { name: "Akhila", airport: "Rajiv Gandhi International, Hyderabad", role: "Passenger Service" },
];

export type Review = { name: string; stars: number; text: string; placed?: string };

export const reviews: Review[] = [
  {
    name: "Akula Tejaswini",
    stars: 5,
    placed: "RGIA Hyderabad",
    text: "It was a great experience getting trained at Calibre Aviation Academy. The classes were well-organized and the faculty very supportive. After completing my training, I got placed at Rajiv Gandhi International Airport, Hyderabad. I truly recommend Calibre to anyone who wants to start their aviation career.",
  },
  {
    name: "Archana Boinipelli",
    stars: 5,
    placed: "RGIA Hyderabad",
    text: "Being a student at Calibre Aviation Academy was one of my best decisions. The trainers gave us real industry knowledge and communication skills that helped me a lot during interviews. I'm now proudly working at Rajiv Gandhi International Airport, Hyderabad.",
  },
  {
    name: "Suja CS",
    stars: 5,
    text: "We had the opportunity to visit Calibre Aviation Academy and interact with the real faculty who have been in the aviation industry. It's an excellent academy for students who want to build a career in aviation.",
  },
  {
    name: "Bhavani Mullapati",
    stars: 5,
    placed: "RGIA Hyderabad",
    text: "My experience with Calibre Institute of Aviation was wonderful. The team guided me from the start till interview preparation. I got placed at Rajiv Gandhi International Airport, Hyderabad soon after completing my course. No hidden charges, transparent process, and real results!",
  },
  {
    name: "Jyothika Reddy",
    stars: 5,
    placed: "RGIA Hyderabad",
    text: "Calibre Aviation Academy gave me quality aviation training at an affordable cost. The instructors helped me with interview practice and soft skills, which made all the difference. Today, I'm happily working at Rajiv Gandhi International Airport, Hyderabad. Truly thankful to Calibre!",
  },
  {
    name: "Boyina Suresh",
    stars: 5,
    text: "Calibre Aviation Academy offers quality training at affordable fees, ensuring every student gets expert guidance and in-depth knowledge for a successful aviation career.",
  },
];

export const stats = [
  { num: "6", label: "Months to job-ready" },
  { num: "500+", label: "Students placed" },
  { num: "4.9★", label: "Graduate rating" },
  { num: "0", label: "Hidden charges" },
];
