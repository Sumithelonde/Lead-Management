export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isVeg?: boolean;
  isBestseller?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "from-the-fryer",
    name: "From The Fryer",
    icon: "🍟",
    items: [
      { id: "ff1", name: "Classic French Fries", description: "Crispy golden fries with signature seasoning", price: 99, category: "from-the-fryer", isVeg: true, image: "Images/classic french fries.jpeg" },
      { id: "ff2", name: "Loaded Cheese Fries", description: "Fries topped with melted cheese and jalapeños", price: 149, category: "from-the-fryer", isVeg: true, isBestseller: true, image: "Images/loaded cheese fries.jpeg" },
      { id: "ff3", name: "Peri Peri Fries", description: "Spicy fries with peri peri seasoning", price: 119, category: "from-the-fryer", isVeg: true, image: "Images/peri peri fries.jpeg" },
      { id: "ff4", name: "Onion Rings", description: "Crispy battered onion rings", price: 129, category: "from-the-fryer", isVeg: true, image: "Images/Onion Ring.jpeg" },
    ],
  },
  {
    id: "toasts",
    name: "Toasts",
    icon: "🍞",
    items: [
      { id: "t1", name: "Avocado Toast", description: "Sourdough with smashed avocado and poached egg", price: 199, category: "toasts", isVeg: true, isBestseller: true, image: "Images/avocado toast.jpeg" },
      { id: "t2", name: "Mushroom Bruschetta", description: "Garlic toast with sautéed mushrooms", price: 179, category: "toasts", isVeg: true, image: "Images/Mushroom Bruschetta.jpeg" },
      { id: "t3", name: "Classic French Toast", description: "Caramelized bread with maple syrup", price: 159, category: "toasts", isVeg: true, image: "Images/Tea 1.jpeg" },
      { id: "t4", name: "Cheese Garlic Toast", description: "Toasted bread with garlic butter and cheese", price: 139, category: "toasts", isVeg: true,image: "Images/Cheese garlic bread.jpeg" },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    icon: "🍝",
    items: [
      { id: "p1", name: "Creamy Alfredo Pasta", description: "Fettuccine in rich parmesan cream sauce", price: 249, category: "pasta", isVeg: true, isBestseller: true, image: "Images/Creamy Alfredo Pasta.jpeg" },
      { id: "p2", name: "Arrabiata Penne", description: "Penne in spicy tomato sauce with herbs", price: 229, category: "pasta", isVeg: true, image: "Images/Arrabiata Penne.jpeg" },
      { id: "p3", name: "Mac & Cheese", description: "Classic comfort food with three cheese blend", price: 219, category: "pasta", isVeg: true, image: "Images/Mac & Cheese.jpeg" },
      { id: "p4", name: "Pesto Pasta", description: "Fusilli with fresh basil pesto", price: 259, category: "pasta", isVeg: true, image: "Images/Zucchini Noodles with Pesto 🌱🥒_Looking for a light and refreshing alternative to traditional pasta_ Try our Zucchini Noodles with Pesto! 🥒🌿 Bursting with flavor and packed with nutrients, this dish is perfect .jpeg" },
      { id: "p5", name: "Pink Sauce Pasta", description: "Creamy tomato sauce with Italian herbs", price: 239, category: "pasta", isVeg: true, image: "Images/Pink Sauce Pasta.jpeg" },
    ],
  },
  {
    id: "risotto",
    name: "Risotto",
    icon: "🍚",
    items: [
      { id: "r1", name: "Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms", price: 279, category: "risotto", isVeg: true, isBestseller: true, image: "Images/Mushroom Risotto.jpeg" },
      { id: "r2", name: "Truffle Risotto", description: "Luxurious risotto with truffle oil", price: 329, category: "risotto", isVeg: true, image: "Images/Truffle Risotto.jpeg" },
      { id: "r3", name: "Asparagus Risotto", description: "Spring risotto with fresh asparagus", price: 289, category: "risotto", isVeg: true, image: "Images/Asparagus Risotto.jpeg" },
    ],
  },
  {
    id: "nachos",
    name: "Nachos",
    icon: "🌮",
    items: [
      { id: "n1", name: "Classic Loaded Nachos", description: "Tortilla chips with cheese, salsa and guacamole", price: 219, category: "nachos", isVeg: true, isBestseller: true, image: "Images/Classic Loaded Nachos.jpeg" },
      { id: "n2", name: "Mexican Nachos", description: "Spicy nachos with jalapeños and sour cream", price: 239, category: "nachos", isVeg: true, image: "Images/Mexican Nachos.jpeg" },
      { id: "n3", name: "BBQ Pulled Nachos", description: "Loaded with BBQ sauce and cheese", price: 249, category: "nachos", isVeg: true, image: "Images/BBQ Pulled Nachos.jpeg" },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    icon: "🥗",
    items: [
      { id: "s1", name: "Caesar Salad", description: "Romaine lettuce with parmesan and croutons", price: 189, category: "salads", isVeg: true },
      { id: "s2", name: "Greek Salad", description: "Fresh veggies with feta and olives", price: 199, category: "salads", isVeg: true },
      { id: "s3", name: "Garden Fresh Salad", description: "Seasonal vegetables with house dressing", price: 169, category: "salads", isVeg: true },
      { id: "s4", name: "Quinoa Power Bowl", description: "Quinoa with roasted vegetables and tahini", price: 249, category: "salads", isVeg: true, isBestseller: true },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    icon: "🥪",
    items: [
      { id: "sw1", name: "Club Sandwich", description: "Triple decker with veggies and cheese", price: 199, category: "sandwiches", isVeg: true, isBestseller: true },
      { id: "sw2", name: "Grilled Cheese Sandwich", description: "Golden toasted with melted cheese blend", price: 159, category: "sandwiches", isVeg: true },
      { id: "sw3", name: "Veggie Panini", description: "Pressed sandwich with roasted vegetables", price: 189, category: "sandwiches", isVeg: true },
      { id: "sw4", name: "Caprese Sandwich", description: "Fresh mozzarella, tomato and basil", price: 209, category: "sandwiches", isVeg: true },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    icon: "🍔",
    items: [
      { id: "b1", name: "Classic Veggie Burger", description: "Garden patty with fresh veggies", price: 179, category: "burgers", isVeg: true },
      { id: "b2", name: "Cheese Burst Burger", description: "Loaded with three types of cheese", price: 219, category: "burgers", isVeg: true, isBestseller: true },
      { id: "b3", name: "Spicy Mexican Burger", description: "With jalapeños and chipotle sauce", price: 229, category: "burgers", isVeg: true },
      { id: "b4", name: "Mushroom Swiss Burger", description: "Sautéed mushrooms with Swiss cheese", price: 239, category: "burgers", isVeg: true },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
    items: [
      { id: "pz1", name: "Margherita Pizza", description: "Classic tomato, mozzarella and basil", price: 249, category: "pizza", isVeg: true },
      { id: "pz2", name: "Farm Fresh Pizza", description: "Loaded with seasonal vegetables", price: 289, category: "pizza", isVeg: true, isBestseller: true },
      { id: "pz3", name: "Four Cheese Pizza", description: "Mozzarella, cheddar, parmesan, gouda", price: 329, category: "pizza", isVeg: true },
      { id: "pz4", name: "BBQ Paneer Pizza", description: "Paneer with BBQ sauce and onions", price: 309, category: "pizza", isVeg: true },
      { id: "pz5", name: "Pesto Mushroom Pizza", description: "Pesto base with wild mushrooms", price: 299, category: "pizza", isVeg: true },
    ],
  },
  {
    id: "waffles",
    name: "Waffles",
    icon: "🧇",
    items: [
      { id: "w1", name: "Classic Belgian Waffle", description: "With maple syrup and butter", price: 169, category: "waffles", isVeg: true },
      { id: "w2", name: "Chocolate Dream Waffle", description: "Drizzled with chocolate sauce and cream", price: 199, category: "waffles", isVeg: true, isBestseller: true },
      { id: "w3", name: "Berry Bliss Waffle", description: "Topped with fresh berries and cream", price: 219, category: "waffles", isVeg: true },
      { id: "w4", name: "Nutella Banana Waffle", description: "Nutella spread with fresh bananas", price: 229, category: "waffles", isVeg: true },
      { id: "w5", name: "Red Velvet Waffle", description: "Red velvet flavor with cream cheese", price: 239, category: "waffles", isVeg: true },
    ],
  },
  {
    id: "hot-brews",
    name: "Hot Brews",
    icon: "☕",
    items: [
      { id: "hb1", name: "Espresso", description: "Rich and bold single shot", price: 89, category: "hot-brews", isVeg: true },
      { id: "hb2", name: "Cappuccino", description: "Espresso with steamed milk foam", price: 129, category: "hot-brews", isVeg: true, isBestseller: true },
      { id: "hb3", name: "Latte", description: "Smooth espresso with steamed milk", price: 139, category: "hot-brews", isVeg: true },
      { id: "hb4", name: "Americano", description: "Espresso with hot water", price: 109, category: "hot-brews", isVeg: true },
      { id: "hb5", name: "Mocha", description: "Chocolate infused coffee", price: 159, category: "hot-brews", isVeg: true },
      { id: "hb6", name: "Caramel Macchiato", description: "Vanilla latte with caramel drizzle", price: 169, category: "hot-brews", isVeg: true },
    ],
  },
  {
    id: "iced-brews",
    name: "Iced Brews",
    icon: "🧊",
    items: [
      { id: "ib1", name: "Iced Americano", description: "Chilled espresso with cold water", price: 129, category: "iced-brews", isVeg: true },
      { id: "ib2", name: "Iced Latte", description: "Espresso with cold milk over ice", price: 149, category: "iced-brews", isVeg: true, isBestseller: true },
      { id: "ib3", name: "Iced Mocha", description: "Chocolate coffee served cold", price: 169, category: "iced-brews", isVeg: true },
      { id: "ib4", name: "Vietnamese Coffee", description: "Strong coffee with condensed milk", price: 159, category: "iced-brews", isVeg: true },
    ],
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    icon: "🥤",
    items: [
      { id: "cb1", name: "Classic Cold Brew", description: "Slow-steeped for 20 hours", price: 159, category: "cold-brew", isVeg: true },
      { id: "cb2", name: "Vanilla Cold Brew", description: "Cold brew with vanilla sweet cream", price: 179, category: "cold-brew", isVeg: true, isBestseller: true },
      { id: "cb3", name: "Nitro Cold Brew", description: "Nitrogen-infused cold brew", price: 199, category: "cold-brew", isVeg: true },
      { id: "cb4", name: "Salted Caramel Cold Brew", description: "With salted caramel cold foam", price: 189, category: "cold-brew", isVeg: true },
    ],
  },
  {
    id: "frappe",
    name: "Frappe",
    icon: "🥛",
    items: [
      { id: "f1", name: "Classic Coffee Frappe", description: "Blended iced coffee delight", price: 169, category: "frappe", isVeg: true },
      { id: "f2", name: "Mocha Frappe", description: "Chocolate coffee blend", price: 189, category: "frappe", isVeg: true, isBestseller: true },
      { id: "f3", name: "Caramel Frappe", description: "Caramel swirled coffee blend", price: 189, category: "frappe", isVeg: true },
      { id: "f4", name: "Java Chip Frappe", description: "Coffee with chocolate chips", price: 199, category: "frappe", isVeg: true },
    ],
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    icon: "🍦",
    items: [
      { id: "ms1", name: "Classic Vanilla Shake", description: "Creamy vanilla milkshake", price: 159, category: "milkshakes", isVeg: true },
      { id: "ms2", name: "Chocolate Shake", description: "Rich chocolate indulgence", price: 169, category: "milkshakes", isVeg: true, isBestseller: true },
      { id: "ms3", name: "Strawberry Shake", description: "Fresh strawberry blend", price: 169, category: "milkshakes", isVeg: true },
      { id: "ms4", name: "Oreo Shake", description: "Cookies and cream delight", price: 189, category: "milkshakes", isVeg: true },
      { id: "ms5", name: "Nutella Shake", description: "Hazelnut chocolate heaven", price: 199, category: "milkshakes", isVeg: true },
    ],
  },
  {
    id: "smoothies",
    name: "Smoothies",
    icon: "🍓",
    items: [
      { id: "sm1", name: "Mixed Berry Smoothie", description: "Blend of fresh berries", price: 179, category: "smoothies", isVeg: true, isBestseller: true },
      { id: "sm2", name: "Mango Tango", description: "Tropical mango smoothie", price: 169, category: "smoothies", isVeg: true },
      { id: "sm3", name: "Green Detox", description: "Spinach, apple and ginger", price: 189, category: "smoothies", isVeg: true },
      { id: "sm4", name: "Banana Peanut Butter", description: "Protein-rich smoothie", price: 199, category: "smoothies", isVeg: true },
    ],
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    icon: "🍫",
    items: [
      { id: "hc1", name: "Classic Hot Chocolate", description: "Rich and creamy cocoa", price: 139, category: "hot-chocolate", isVeg: true, isBestseller: true },
      { id: "hc2", name: "Belgian Hot Chocolate", description: "Premium Belgian cocoa blend", price: 169, category: "hot-chocolate", isVeg: true },
      { id: "hc3", name: "White Hot Chocolate", description: "Creamy white chocolate", price: 159, category: "hot-chocolate", isVeg: true },
      { id: "hc4", name: "Mint Hot Chocolate", description: "With refreshing mint twist", price: 159, category: "hot-chocolate", isVeg: true },
    ],
  },
  {
    id: "tea",
    name: "Tea",
    icon: "🍵",
    items: [
      { id: "te1", name: "English Breakfast", description: "Classic black tea blend", price: 99, category: "tea", isVeg: true },
      { id: "te2", name: "Green Tea", description: "Pure and refreshing", price: 99, category: "tea", isVeg: true },
      { id: "te3", name: "Masala Chai", description: "Spiced Indian tea", price: 79, category: "tea", isVeg: true, isBestseller: true },
      { id: "te4", name: "Chamomile Tea", description: "Soothing herbal infusion", price: 109, category: "tea", isVeg: true },
      { id: "te5", name: "Iced Peach Tea", description: "Refreshing peach infused tea", price: 129, category: "tea", isVeg: true },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    icon: "🍹",
    items: [
      { id: "mt1", name: "Virgin Mojito", description: "Lime, mint and soda", price: 149, category: "mocktails", isVeg: true, isBestseller: true, image: "Images/Virgin Mojito.jpeg" },
      { id: "mt2", name: "Blue Lagoon", description: "Citrusy blue curacao mocktail", price: 159, category: "mocktails", isVeg: true, image: "Images/Blue Lagoon.jpeg" },
      { id: "mt3", name: "Pina Colada", description: "Coconut and pineapple blend", price: 169, category: "mocktails", isVeg: true, image: "Images/Pina Colada.jpeg" },
      { id: "mt4", name: "Sunset Sangria", description: "Fruity non-alcoholic sangria", price: 179, category: "mocktails", isVeg: true,image: "Images/Sunset Sangria.jpeg" },
      { id: "mt5", name: "Watermelon Cooler", description: "Fresh watermelon refresher", price: 149, category: "mocktails", isVeg: true, image: "Images/Watermelon Cooler.jpeg" },
    ],
  },
  {
    id: "bubble-tea",
    name: "Bubble Tea",
    icon: "🧋",
    items: [
      { id: "bt1", name: "Classic Milk Tea", description: "Traditional boba with tapioca pearls", price: 169, category: "bubble-tea", isVeg: true, isBestseller: true,image: "Images/Classic Milk Tea.jpeg" },
      { id: "bt2", name: "Taro Bubble Tea", description: "Purple taro flavored boba", price: 179, category: "bubble-tea", isVeg: true, image: "Images/Taro Bubble Tea.jpeg" },
      { id: "bt3", name: "Mango Boba", description: "Fruity mango with pearls", price: 179, category: "bubble-tea", isVeg: true, image: "Images/Mango Boba.jpeg" },
      { id: "bt4", name: "Brown Sugar Boba", description: "Tiger striped brown sugar tea", price: 189, category: "bubble-tea", isVeg: true, image: "Images/Brown Sugar Boba.jpeg" },
      { id: "bt5", name: "Matcha Bubble Tea", description: "Japanese green tea boba", price: 189, category: "bubble-tea", isVeg: true, image: "Images/Matcha Bubble Tea.jpeg" },
    ],
  },
  {
    id: "affogato",
    name: "Affogato",
    icon: "🍨",
    items: [
      { id: "af1", name: "Classic Affogato", description: "Vanilla gelato with espresso shot", price: 179, category: "affogato", isVeg: true, isBestseller: true },
      { id: "af2", name: "Chocolate Affogato", description: "Chocolate gelato with espresso", price: 199, category: "affogato", isVeg: true },
      { id: "af3", name: "Caramel Affogato", description: "Caramel gelato with coffee", price: 199, category: "affogato", isVeg: true },
      { id: "af4", name: "Hazelnut Affogato", description: "Hazelnut gelato drowned in espresso", price: 209, category: "affogato", isVeg: true },
    ],
  },
];

export const getAllItems = (): MenuItem[] => {
  return menuData.flatMap(category => category.items);
};

export const getBestsellers = (): MenuItem[] => {
  return getAllItems().filter(item => item.isBestseller);
};

export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  const category = menuData.find(cat => cat.id === categoryId);
  return category?.items || [];
};
