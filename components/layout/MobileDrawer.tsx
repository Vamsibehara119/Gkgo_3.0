import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Navigation items matching your desktop header
  const navItems = ['Home', 'Products', 'Payments', 'Claims', 'Settings', 'Log Out'];

  return (
    <>
      {/* Dark Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-bold text-red-600">Menu</span>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={onClose}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                item === 'Home' 
                  ? 'bg-red-50 text-red-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}