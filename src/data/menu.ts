import reviewsData from "@/data/reviews.json";
import dishFries from "@/assets/dish-fries.jpg";
import dishSizzler from "@/assets/dish-sizzler.jpg";
import dishPadthai from "@/assets/dish-padthai.jpg";
import dishPizza from "@/assets/dish-pizza.jpg";
import dishMocktail from "@/assets/dish-mocktail.jpg";
import dishKhaosuey from "@/assets/dish-khaosuey.jpg";

export type DishReview = { name: string; stars: number; quote: string };
export type Dish = {
  name: string;
  tags: string[];
  cuisine: string;
  vibe: string[]; // moods this matches
  pairsWith: string[]; // names of other dishes
  blurb: string;
  image?: string;
  reviews: DishReview[];
};

const reviewsByDish = (reviewsData as { dishes: Record<string, DishReview[]> }).dishes;

const r = (key: string): DishReview[] => reviewsByDish[key] ?? [];

export const dishes: Dish[] = [
  {
    name: "Peri Peri Fries",
    cuisine: "Snack",
    tags: ["spicy", "crispy", "shareable", "vegetarian", "snack"],
    vibe: ["hungry", "casual", "rainy", "anything"],
    pairsWith: ["Hot Wings", "Mocktails", "Quesadilla"],
    blurb: "Fan-favourite. Crisp, smoky, addictive — guests literally write home about these.",
    image: dishFries,
    reviews: r("Peri Peri Fries"),
  },
  {
    name: "Wood-Fired Pizza",
    cuisine: "Italian",
    tags: ["cheesy", "shareable", "comfort", "vegetarian-options"],
    vibe: ["group", "casual", "date", "anything"],
    pairsWith: ["Pasta", "Garlic Bread", "Mocktails"],
    blurb: "Hand-stretched dough, blistered crust, mozzarella that pulls for days.",
    image: dishPizza,
    reviews: r("Pizza"),
  },
  {
    name: "Pad Thai",
    cuisine: "Thai",
    tags: ["noodles", "tangy", "umami", "comfort"],
    vibe: ["solo", "date", "rainy"],
    pairsWith: ["Thai Chicken Satay", "Khao Suey", "Mocktails"],
    blurb: "Tamarind-glossed noodles, crushed peanuts, a squeeze of lime. A table classic.",
    image: dishPadthai,
    reviews: r("Pad Thai"),
  },
  {
    name: "Sizzlers",
    cuisine: "Continental",
    tags: ["smoky", "hearty", "hot-plate", "main"],
    vibe: ["hungry", "date", "celebration"],
    pairsWith: ["Cottage Cheese Sizzler", "Garlic Bread", "Mocktails"],
    blurb: "Drama on a plate. Smoke, sizzle, and a chef's flourish — built for the hungry.",
    image: dishSizzler,
    reviews: r("Sizzlers"),
  },
  {
    name: "Khao Suey",
    cuisine: "Burmese",
    tags: ["coconut", "noodles", "warm", "soup"],
    vibe: ["rainy", "solo", "comfort"],
    pairsWith: ["Pad Thai", "Thai Chicken Satay", "Hot Mocktail"],
    blurb: "Burmese coconut curry noodles loaded with crunchy toppings. Pure rainy-day therapy.",
    image: dishKhaosuey,
    reviews: r("Khao Suey"),
  },
  {
    name: "Mocktails",
    cuisine: "Beverage",
    tags: ["refreshing", "fruity", "drink"],
    vibe: ["date", "casual", "group", "anything"],
    pairsWith: ["Peri Peri Fries", "Pizza", "Quesadilla"],
    blurb: "From Love Berry to Hot Mocktail — the bar puts on a quiet show.",
    image: dishMocktail,
    reviews: r("Mocktails"),
  },
  {
    name: "Cajun Chicken Tenders",
    cuisine: "American",
    tags: ["chicken", "spicy", "snack", "shareable"],
    vibe: ["group", "hungry"],
    pairsWith: ["Peri Peri Fries", "Hot Wings", "Mocktails"],
    blurb: "Buttermilk-brined, Cajun-rubbed, fried golden. Disappears fast.",
    reviews: r("Cajun Chicken Tenders"),
  },
  {
    name: "Hot Wings",
    cuisine: "American",
    tags: ["chicken", "spicy", "snack"],
    vibe: ["group", "casual"],
    pairsWith: ["Peri Peri Fries", "Quesadilla"],
    blurb: "The honest classic — sticky, spicy, served with cool dips.",
    reviews: r("Hot Wings"),
  },
  {
    name: "Quesadilla",
    cuisine: "Mexican",
    tags: ["cheesy", "snack", "vegetarian-options"],
    vibe: ["casual", "solo"],
    pairsWith: ["Peri Peri Fries", "Mocktails"],
    blurb: "Toasted tortillas, melty cheese, a smoky salsa on the side.",
    reviews: r("Quesadilla"),
  },
  {
    name: "Garlic Bread",
    cuisine: "Italian",
    tags: ["cheesy", "vegetarian", "side", "comfort"],
    vibe: ["group", "date", "anything"],
    pairsWith: ["Pizza", "Pasta", "Sizzlers"],
    blurb: "Godzilla-sized loaves, butter and herbs. Order one. Then one more.",
    reviews: r("Garlic Bread"),
  },
  {
    name: "Pasta",
    cuisine: "Italian",
    tags: ["comfort", "saucy", "main", "vegetarian-options"],
    vibe: ["date", "rainy", "solo"],
    pairsWith: ["Pizza", "Garlic Bread", "Mocktails"],
    blurb: "Pesto, alfredo, arrabbiata — al dente, tossed to order.",
    reviews: r("Pasta"),
  },
  {
    name: "Cottage Cheese Sizzler",
    cuisine: "Continental",
    tags: ["vegetarian", "hearty", "hot-plate", "paneer"],
    vibe: ["hungry", "celebration"],
    pairsWith: ["Sizzlers", "Garlic Bread"],
    blurb: "Charred paneer, buttery rice, sautéed vegetables, all sizzling.",
    reviews: r("Cottage Cheese Sizzler"),
  },
  {
    name: "Coconut Mousse",
    cuisine: "Dessert",
    tags: ["sweet", "creamy", "dessert"],
    vibe: ["date", "celebration", "anything"],
    pairsWith: ["Coffee & Latte", "Mocktails"],
    blurb: "Cloud-light, lightly sweet, the kindest landing to a long meal.",
    reviews: r("Coconut Mousse"),
  },
  {
    name: "Coffee & Latte",
    cuisine: "Beverage",
    tags: ["coffee", "warm", "drink"],
    vibe: ["solo", "rainy", "anything"],
    pairsWith: ["Coconut Mousse", "Garlic Bread"],
    blurb: "House blend, dialled-in daily. Latte art comes free with the smile.",
    reviews: r("Coffee & Latte"),
  },
];

export const topReviews = (reviewsData as { topReviews: { name: string; stars: number; text: string }[] })
  .topReviews;
