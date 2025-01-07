import React from 'react';
import { Phone, Users, Share2, TrendingUp } from 'lucide-react';

export function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Phone className="h-6 w-6" />}
          title="Total Phones"
          value="24"
          trend="+2.5%"
        />
        <StatCard
          icon={<Share2 className="h-6 w-6" />}
          title="Publications"
          value="156"
          trend="+12.3%"
        />
        <StatCard
          icon={<Users className="h-6 w-6" />}
          title="Engagement"
          value="8.2K"
          trend="+8.1%"
        />
        <StatCard
          icon={<TrendingUp className="h-6 w-6" />}
          title="Conversion Rate"
          value="3.2%"
          trend="+1.2%"
        />
      </div>
    </div>
  );
}

function StatCard({ 
  icon, 
  title, 
  value, 
  trend 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  trend: string;
}) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
            <div className="text-white">{icon}</div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {trend}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}