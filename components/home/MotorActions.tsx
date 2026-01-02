import { CreditCard, FilePlus, Search, AlertCircle } from "lucide-react";

const actions = [
  {
    title: "Pay Premium",
    desc: "Make quick payments here.",
    icon: CreditCard,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Start a Quote",
    desc: "Click to begin your journey.",
    icon: FilePlus,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Find My Policy",
    desc: "Enter a few key details.",
    icon: Search,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Start a Claim",
    desc: "Begin your claim process.",
    icon: AlertCircle,
    bg: "bg-red-100",
    color: "text-red-600",
  },
];

export default function MotorActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map(({ title, desc, icon: Icon, bg, color }) => (
        <div
          key={title}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-3"
        >
          <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center`}>
            <Icon className={`${color} w-5 h-5`} />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
