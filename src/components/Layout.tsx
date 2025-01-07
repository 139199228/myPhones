import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Smartphone, PenTool, BarChart2 } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-900">
                <Smartphone className="h-6 w-6 mr-2" />
                <span className="font-semibold">Phone Publisher</span>
              </Link>
              <div className="ml-6 flex space-x-4">
                <NavLink to="/" icon={<LayoutDashboard />} text="Dashboard" />
                <NavLink to="/phones" icon={<Smartphone />} text="Phones" />
                <NavLink to="/content" icon={<PenTool />} text="Content" />
                <NavLink to="/analytics" icon={<BarChart2 />} text="Analytics" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </Link>
  );
}