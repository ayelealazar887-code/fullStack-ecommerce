import bosi from "../bosi.jpg";
import cactus from "../cactus.jpg";
import succulent from "../succulent.jpg";
import indoor from "../indoor.jpg"
import lily from "../lily.jpg"
import old from "../old.jpg"
import snake from "../snake.jpg"
import lemon from "../lemon.jpg"
import rubber from "../rubber.jpg"
import care1 from "../care1.jpg"
import care2 from "../care2.jpg"
import care3 from "../care3.jpg"
import care4 from "../care4.jpg"
import forest from "../forest.jpg"

export const categories = [
  {
    id: 1,
    name: "Cactus",
    image: cactus,
    slug: "cactus",
  },
  {
    id: 2,
    name: "Bonsai",
    image: bosi,
    slug: "bonsai",
  },
  {
    id: 3,
    name: "Succulent",
    image: succulent,
    slug: "succulent",
  },
  {
    id: 4,
    name: "Indoor Plants",
    image: indoor,
    slug: "indoor-plants",
  },
];

export const desc = [
  {
    id: 1,
    title: "High Quality Plants",
    desc: "A line about the service you've mentioned above.",
  },
  {
    id: 2,
    title: "Wide Plant Range",
    desc: "Explore a wide variety of indoor and outdoor plants for every space.",
  },
  {
    id: 3,
    title: "Excellent Services",
    desc: "Friendly customer support and expert guidance whenever you need it.",
  },
  {
    id: 4,
    title: "Fast Delivery",
    desc: "Quick and reliable delivery to your doorstep with safe packaging.",
  },
  {
    id: 5,
    title: "Affordable Prices",
    desc: "Premium quality plants at prices that fit every budget.",
  },
  {
    id: 6,
    title: "Easy Plant Care",
    desc: "Simple care instructions to help your plants stay healthy and thriving.",
  },
];
export const featuredProducts = [
  {
    id: 1,
    name: "Lemon Bonsai",
    image: lemon,
    price: 99.0,
    oldPrice: 120.0,
    rating: 5,
    sale: false,
  },
  {
    id: 2,
    name: "Rubber Indoor Plant",
    image: rubber,
    price: 45.0,
    oldPrice: null,
    rating: 3,
    sale: true,
  },
  {
    id: 3,
    name: "Boncellensis Succulent",
    image: succulent,
    price: 22.0,
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    id: 4,
    name: "Old Lady Cactus",
    image: old,
    price: 28.0,
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    id: 5,
    name: "Snake Plant",
    image: snake,
    price: 35.0,
    oldPrice: 40.0,
    rating: 4,
    sale: true,
  },
  {
    id: 6,
    name: "Peace Lily",
    image: lily,
    price: 30.0,
    oldPrice: null,
    rating: 5,
    sale: false,
  },
];
export const aboutData = {
  subtitle: "We Help Gardens Thrive!",
  title: "Nonummy Cum Convallis",
  description:
    "Elementum tristique mi montes nisi deserunt magna. Netus assumenda molestias nisi porro, nascetur molas.",
  quote:
    "Tempore ut mauris aenean cillum ultrices nunc aliqu auris aenean mpore utma.",
  signature: "John Carter",
  images: [care1,care2],
};
export const promoCards = [
  {
    id: 1,
    title: "Plants Care Instruction",
    description: "Each order includes a small care guide booklet.",
    image: care3,
    button: "Shop Now",
  },
  {
    id: 2,
    title: "Editor's Pick",
    description: "Find the best plants hand-picked by our editor.",
    image: care4,
    button: "Shop Now",
  },
];
export const ctaData = {
  title: "Buy Online Now & Get 10% Off!",
  description:
    "Curae quia enim aute, consequatur, eius quaerat excepturi fames pharetra.",
  button: "Avail Now",
  image: forest,
};