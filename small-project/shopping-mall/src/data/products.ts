export type Category = "fruit" | "drink" | "snack";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
};

export const products: Product[] = [
  // 과일
  {
    id: "1",
    name: "사과",
    price: 1000,
    image: "https://picsum.photos/seed/apple/300/300",
    category: "fruit",
  },
  {
    id: "2",
    name: "바나나",
    price: 1200,
    image: "https://picsum.photos/seed/banana/300/300",
    category: "fruit",
  },
  {
    id: "3",
    name: "포도",
    price: 2000,
    image: "https://picsum.photos/seed/grapes/300/300",
    category: "fruit",
  },
  {
    id: "4",
    name: "딸기",
    price: 2500,
    image: "https://picsum.photos/seed/strawberry/300/300",
    category: "fruit",
  },
  {
    id: "5",
    name: "수박",
    price: 5000,
    image: "https://picsum.photos/seed/watermelon/300/300",
    category: "fruit",
  },
  {
    id: "6",
    name: "오렌지",
    price: 1800,
    image: "https://picsum.photos/seed/orange/300/300",
    category: "fruit",
  },
  {
    id: "7",
    name: "자두",
    price: 1700,
    image: "https://picsum.photos/seed/plum/300/300",
    category: "fruit",
  },
  {
    id: "8",
    name: "복숭아",
    price: 1900,
    image: "https://picsum.photos/seed/peach/300/300",
    category: "fruit",
  },

  // 음료
  {
    id: "9",
    name: "콜라",
    price: 1500,
    image: "https://picsum.photos/seed/cola/300/300",
    category: "drink",
  },
  {
    id: "10",
    name: "사이다",
    price: 1500,
    image: "https://picsum.photos/seed/soda/300/300",
    category: "drink",
  },
  {
    id: "11",
    name: "우유",
    price: 1800,
    image: "https://picsum.photos/seed/milk/300/300",
    category: "drink",
  },
  {
    id: "12",
    name: "두유",
    price: 1600,
    image: "https://picsum.photos/seed/soymilk/300/300",
    category: "drink",
  },
  {
    id: "13",
    name: "주스",
    price: 2000,
    image: "https://picsum.photos/seed/juice/300/300",
    category: "drink",
  },
  {
    id: "14",
    name: "커피",
    price: 2500,
    image: "https://picsum.photos/seed/coffee/300/300",
    category: "drink",
  },
  {
    id: "15",
    name: "녹차",
    price: 2200,
    image: "https://picsum.photos/seed/greentea/300/300",
    category: "drink",
  },
  {
    id: "16",
    name: "에너지드링크",
    price: 3000,
    image: "https://picsum.photos/seed/energydrink/300/300",
    category: "drink",
  },

  // 간식
  {
    id: "17",
    name: "쿠키",
    price: 1800,
    image: "https://picsum.photos/seed/cookie/300/300",
    category: "snack",
  },
  {
    id: "18",
    name: "초콜릿",
    price: 2000,
    image: "https://picsum.photos/seed/chocolate/300/300",
    category: "snack",
  },
  {
    id: "19",
    name: "케이크",
    price: 3000,
    image: "https://picsum.photos/seed/cake/300/300",
    category: "snack",
  },
  {
    id: "20",
    name: "빵",
    price: 2200,
    image: "https://picsum.photos/seed/bread/300/300",
    category: "snack",
  },
  {
    id: "21",
    name: "떡",
    price: 2500,
    image: "https://picsum.photos/seed/ricecake/300/300",
    category: "snack",
  },
  {
    id: "22",
    name: "아이스크림",
    price: 2700,
    image: "https://picsum.photos/seed/icecream/300/300",
    category: "snack",
  },
  {
    id: "23",
    name: "감자칩",
    price: 1600,
    image: "https://picsum.photos/seed/chips/300/300",
    category: "snack",
  },
  {
    id: "24",
    name: "젤리",
    price: 1500,
    image: "https://picsum.photos/seed/jelly/300/300",
    category: "snack",
  },
];
