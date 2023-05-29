import img1 from "@assets/images/img1.jpg";
import img2 from "@assets/images/img2.jpg";
import img3 from "@assets/images/img3.jpg";
import img4 from "@assets/images/img4.jpg";
import img5 from "@assets/images/img5.jpg";
import img6 from "@assets/images/img6.jpg";
import img7 from "@assets/images/img7.jpg";
import img8 from "@assets/images/img8.jpg";
import img9 from "@assets/images/img9.jpg";
import img10 from "@assets/images/img10.jpg";
import img11 from "@assets/images/img11.jpg";
import img12 from "@assets/images/img12.jpg";

export type ProductType = {
  id: string | number;
  color: string;
  description: string;
  image: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
  numReviews: number;
};

const products: ProductType[] = [
  {
    id: "1",
    color: "Emerald",
    description: "Medium Bucket / Banatex",
    image: img1,
    category: "Womens",
    price: 295.0,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "2",
    color: "Matte",
    description: "Organic Cream / Cotton",
    image: img2,
    category: "UNISEX",
    price: 105,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "3",
    color: "White",
    description: "Plain White Tee / Cotton",
    image: img3,
    category: "UNISEX",
    price: 45,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "4",
    color: "Black",
    description: "Plain Black Tee / Cotton",
    image: img4,
    category: "UNISEX",
    price: 100,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "5",
    color: "Forest Green",
    description: "Bandeau Crop Top",
    image: img5,
    category: "Womens",
    price: 55,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "6",
    color: "Burgundy",
    description: "Tulle Maxi Dress",
    image: img6,
    category: "Womens",
    price: 130,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "7",
    color: "Grey",
    description: "Piece Suit / Edkay",
    image: img7,
    category: "Women",
    price: 100,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "8",
    color: "Leopard",
    description: "Print Sleeved / Shirt",
    image: img8,
    category: "Men",
    price: 95,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "9",
    color: "Dane Jacket",
    description: "Fur Trench Coat / Leather",
    image: img9,
    category: "UNISEX",
    price: 195,
    stock: 25,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "10",
    color: "Elesol",
    description: "Winter Coat / Fur",
    image: img10,
    category: "Women",
    price: 395,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "11",
    color: "Velour",
    description: "Button Coat / lAPEL",
    image: img11,
    category: "Womens",
    price: 255,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
  {
    id: "12",
    color: "Beige",
    description: "Winter Coat / Fvwitlyh",
    image: img12,
    category: "Mens",
    price: 795,
    stock: 5,
    rating: 4.5,
    numReviews: 32,
  },
];

export default products;
