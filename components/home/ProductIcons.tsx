"use client";
import { 
  Car, Home, CloudSun, Plane, Briefcase, 
  Box, HeartPulse, ShieldCheck, FileText, HelpCircle 
} from 'lucide-react';

const products = [
  { title:'Motor Insurance',shortTitle: 'Motor',desc: 'Pay your premium, manage your policies and get a quote', icon: Car, bg: 'bg-blue-50', color: 'text-blue-600' },
  { title:'Home Insurance',shortTitle: 'Home', desc: 'Protect your home from the unexpected.', icon: Home, bg: 'bg-purple-50', color: 'text-purple-600' },
  {  title:'Weather Insurance',shortTitle: 'Weather', desc: 'Safeguard your income from weather disruptions.', icon: CloudSun, bg: 'bg-orange-50', color: 'text-orange-500' },
  {  title:'Travel Insurance',shortTitle: 'Travel', desc: 'Go further with peace of mind.', icon: Plane, bg: 'bg-rose-50', color: 'text-rose-500' },
  {  title:'Business Insurance',shortTitle: 'Business', desc: 'Keep your business secure.', icon: Briefcase, bg: 'bg-[#1e3a8a]', color: 'text-white' },
  {  title:'Contents Insurance',shortTitle: 'Contents', desc: 'Cover the things that matter inside your home.', icon: Box, bg: 'bg-rose-50', color: 'text-rose-500' },
  {  title:'Accidental Medical Insurance',shortTitle: 'Accidental Medical', desc: 'Covered for accidental injury & death. Learn more', icon: HeartPulse, bg: 'bg-green-50', color: 'text-green-600' },
  {  title:'All Risk Insurance',shortTitle: 'All Risk', desc: 'Get a quote, pay your premium and manage your policies', icon: ShieldCheck, bg: 'bg-blue-50', color: 'text-blue-500' },
  {  title:'Place Holder Insurance',shortTitle: 'Place Holder', desc: 'Get a quote, pay your premium and manage your policies', icon: FileText, bg: 'bg-purple-50', color: 'text-purple-400' },
  {  title:'Place Holder Insurance',shortTitle: 'Place Holder', desc: 'Get a quote, pay your premium and manage your policies', icon: HelpCircle, bg: 'bg-orange-50', color: 'text-orange-400' },
];

export default function ProductIcons() {
  return (
    <div className="py-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">Product Menu</h2>
        <p className="text-sm text-gray-500">Select to explore our insurance products below. Get a quote, pay your premium and manage your policies all in one place.</p>
      </div>

      {/* Grid: 4 cols for Mobile, 5 cols for Desktop */}
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-[20px] p-4 lg:p-3 shadow-sm flex flex-col items-center lg:items-start transition-all hover:shadow-md cursor-pointer">
          <div className='flex flex-col items-center lg:flex-row gap-1'>
              <div className={`w-10 h-10 lg:w-14 lg:h-14 ${p.bg} rounded-2xl flex items-center justify-center`}>
              <p.icon className={`w-5 h-5 lg:w-7 lg:h-7 ${p.color}`} strokeWidth={2.5} />
            </div>
            <span className="hidden sm:inline text-[15px] font-bold text-gray-900 text-center lg:text-center leading-tight">
              {p.title}
            </span>
            <span className="inline text-sm font-bold text-center sm:hidden ">
              {p.shortTitle}

            </span>
          </div>
            <p className="hidden lg:block text-[11px] text-gray-400 mt-2 leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}