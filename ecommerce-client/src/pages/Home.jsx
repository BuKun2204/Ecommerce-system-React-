import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { 
  ChevronRight, Smartphone, Monitor, Watch, 
  Camera, Headphones, Gamepad, Truck, HeadphonesIcon, ShieldCheck 
} from 'lucide-react';
const Home = () => {
    const categories = [
    "Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", 
    "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
  ];
    const flashSales = products.slice(0, 4);
    const bestSelling = products.slice(4, 8);
  return (
    <div className="flex flex-col gap-20 pb-20">

        {/*SIDEBAR & HERO (BANNER)*/}
        <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-1/4 border-r pt-10 hidden md:block">
                <ul className="space-y-4">
                    {categories.map((cat, index) =>(
                        <li key={index} className="flex justify-between items-center pr-8 cursor-pointer hover:text-[#DB4444] transition-colors text-base">
                            <span>{cat}</span>
                            {(index === 0 || index ===1) && <ChevronRight size={16}/>}
                        </li>
                    ))}
                </ul>
            </aside>

            <div className="w-full md:w-3/4 pt-10">
                <div className="bg-black text-white h-[344px] flex items-center px-12 relative overflow-hidden">
                    <div className="z-10 flex flex-col gap-5">
                        <div className="flex items-center gap-3 text-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="apple" className="w-8 invert" />
                            <span>iPhone 14 Series</span>
                        </div>
                        <h1 className="text-5xl font-bold leading-tight tracking-wide">Up to 10% <br /> off Voucher</h1>
                        <button className="flex items-center gap-2 underline underline-offset-8 mt-2 font-medium hover:text-gray-300 transition-all">
                            Shop Now <ChevronRight size={20} />
                        </button>
                    </div>
                    <img src="/img/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
                </div>
            </div>
        </div>

        {/*FLASH SALES*/}
        <section>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                <span className="text-[#DB4444] font-bold">Today's</span>
            </div>
            <div className="flex items-end gap-12 mb-10">
                <h2 className="text-3xl font-bold">Flash Sales</h2>
                <div className="flex gap-4 text-center">
                    <div><p className="text-[10px] font-bold">Days</p><h3 className="text-2xl font-bold">03</h3></div>
                    <span className="text-[#DB4444] text-2xl mt-4 font-bold">:</span>
                    <div><p className="text-[10px] font-bold">Hours</p><h3 className="text-2xl font-bold">23</h3></div>
                    <span className="text-[#DB4444] text-2xl mt-4 font-bold">:</span>
                    <div><p className="text-[10px] font-bold">Minutes</p><h3 className="text-2xl font-bold">19</h3></div>
                    <span className="text-[#DB4444] text-2xl mt-4 font-bold">:</span>
                    <div><p className="text-[10px] font-bold">Seconds</p><h3 className="text-2xl font-bold">56</h3></div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {flashSales.map((item)=>(
                    <ProductCard key={item.id} product={item}/>
                ))}
            </div>
        </section>

        {/*BROWSE BY CATEGORY*/}
        <section className="border-t pt-20">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                <span className="text-[#DB4444] font-bold">Categories</span>
            </div>
            <h2 className="text-3xl font-bold mb-10">Browse By Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                    { icon: <Smartphone size={32} />, name: "Phones" },
                    { icon: <Monitor size={32} />, name: "Computers" },
                    { icon: <Watch size={32} />, name: "SmartWatch" },
                    { icon: <Camera size={32} />, name: "Camera" },
                    { icon: <Headphones size={32} />, name: "HeadPhones" },
                    { icon: <Gamepad size={32} />, name: "Gaming" },
                ].map((cat, idx) => (
                    <div key={idx} className={`border rounded flex flex-col items-center justify-center h-36 gap-4 cursor-pointer hover:bg-[#DB4444] hover:text-white transition-all 
                        ${cat.active ? 'bg-[#DB4444] text-white border-[#DB4444]' : ''}`}>
                    {cat.icon}
                    <span className="text-sm">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
        
        {/*BEST SELLING*/}
        <section className="mb-20">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                <span className="text-[#DB4444] font-bold">This Month</span>
            </div>
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold">Best Selling Products</h2>
                <button className="bg-[#DB4444] text-white px-10 py-3 rounded-sm font-medium hover:bg-red-600">
                View All
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {bestSelling.map((item)=>(
                    <ProductCard key={item.id} product={item}/>
                ))}
            </div>
        </section>

        {/*AD BANNER - MUSIC EXPERIENCE*/}
        <section className="mb-20">
            <div className="bg-black w-full min-h-[440px] flex flex-col md:flex-row items-center px-10 md:px-20 py-12 gap-10 relative overflow-hidden">
                <div className="z-10 flex flex-col gap-6 w-full md:w-1/2">
                    <span className="text-[#00FF66] font-bold text-sm">Categories</span>
                    <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                        Enhance Your <br /> Music Experience
                    </h2>

                    {/* Đồng hồ đếm ngược hình tròn */}
                    <div className="flex gap-4">
                        {[
                            { label: "Hours", value: "23" },
                            { label: "Days", value: "05" },
                            { label: "Minutes", value: "59" },
                            { label: "Seconds", value: "35" }
                        ].map((time, idx)=>(
                            <div key={idx} className="bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-black">
                                <span className="font-bold text-sm leading-none">{time.value}</span>
                                <span className="text-[10px] leading-none">{time.label}</span>
                            </div>
                        ))}
                    </div>

                    <button className="bg-[#00FF66] text-white px-10 py-4 rounded-sm font-medium w-fit hover:bg-[#00ee5f] transition-all">
                        Buy Now!
                    </button>
                </div>

                {/*Hình ảnh sản phẩm bên phải (Loa JBL)*/}
                <div className="relative w-full md:w-1/2 flex justify-center items-center">
                    <img src="img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="" />
                </div>
            </div>
        </section>

        {/*EXPLORE OUR PRODUCTS*/}
        <section className="mb-20">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                <span className="text-[#DB4444] font-bold">Our Products</span>
            </div>
            <h2 className="text-3xl font-bold mb-10">Explore Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {products.map((item)=>(
                    <ProductCard key={item.id} product={item}/>
                ))}
            </div>
        </section>


    </div>
  );
};

export default Home;