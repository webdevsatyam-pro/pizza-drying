import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Margherita",
    category: "Pizza",
    price: 299,
    desc: "Classic delight with 100% real mozzarella cheese",
    image:
      "https://i.pinimg.com/736x/df/11/13/df11137f7ea78702571c15bccc691eb6.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Farm House",
    category: "Pizza",
    price: 399,
    desc: "Delightful combination of onion, capsicum, tomato & mushroom",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Peppy Paneer",
    category: "Pizza",
    price: 449,
    desc: "Chunky paneer with spicy red pepper and capsicum",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
    tag: "Spicy",
  },
  {
    id: 4,
    name: "Garlic Breadsticks",
    category: "Sides",
    price: 99,
    desc: "Baked to perfection with garlic butter and herbs",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Pepsi 500ml",
    category: "Drinks",
    price: 60,
    desc: "Refreshing cold drink",
    image:
      "https://i.pinimg.com/1200x/5d/b1/8c/5db18c6cabfd23fe7e68961f945f4a3c.jpg",
  },
];
const MenusPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  const categories = ["All", "Pizza", "Sides", "Drinks"];
  return (
    <>
      <div className="bg-gray-50 min-h-screen p-4 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
            Our Delicious Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fresh ingredients, hand-stretched dough, and the perfect blend of
            spices.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm
              ${
                filter === cat
                  ? "bg-orange-500 text-white scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-100 border border-gray-200"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-orange-600 font-bold text-lg">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg active:scale-95 duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MenusPage;
