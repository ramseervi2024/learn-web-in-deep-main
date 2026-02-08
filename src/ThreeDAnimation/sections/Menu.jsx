import React from "react";
import Section from "../components/Section";

const items = [
    { name: "Margherita", price: "$14", desc: "Classic tomato & mozzarella" },
    { name: "Diavola", price: "$16", desc: "Spicy salami & chili" },
    { name: "Tartufo", price: "$22", desc: "Black truffle & mushrooms" },
    { name: "Marinara", price: "$12", desc: "Garlic, oregano & olive oil" },
];

const Menu = () => {
    return (
        <Section id="menu" className="text-white">
            <div className="flex flex-col items-end text-right">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">The Menu</h2>
                <div className="space-y-8 w-full md:w-1/2">
                    {items.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="flex justify-between items-end border-b border-white/10 pb-2 mb-2">
                                <h3 className="text-2xl font-medium group-hover:text-orange-500 transition-colors">{item.name}</h3>
                                <span className="text-xl text-orange-400">{item.price}</span>
                            </div>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Menu;
