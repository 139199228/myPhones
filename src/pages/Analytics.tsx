import React from 'react';
import { BarChart2, TrendingUp, Users, Eye, Share2, MessageSquare } from 'lucide-react';

export function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={<Eye className="h-6 w-6" />}
          title="Total Views"
          value="245.7K"
          change="+12.4%"
          timeframe="vs. last month"
        />
        <StatCard
          icon={<Share2 className="h-6 w-6" />}
          title="Shares"
          value="12.9K"
          change="+8.1%"
          timeframe="vs. last month"
        />
        <StatCard
          icon={<MessageSquare className="h-6 w-6" />}
          title="Comments"
          value="8.5K"
          change="+24.5%"
          timeframe="vs. last month"
        />
      </div>

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Platform Performance</h3>
              <select className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <PlatformRow platform="WeChat" views="89.4K" engagement="24.5K" conversion="3.2%" />
              <PlatformRow platform="Weibo" views="67.2K" engagement="18.9K" conversion="2.8%" />
              <PlatformRow platform="Douyin" views="45.8K" engagement="12.3K" conversion="2.1%" />
              <PlatformRow platform="Xiaohongshu" views="43.3K" engagement="9.8K" conversion="1.9%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, change, timeframe }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  timeframe: string;
}) {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="p-3 bg-indigo-500 rounded-md">
              {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6 text-white' })}
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {change}
                </div>
              </dd>
              <dd className="mt-1 text-sm text-gray-500">{timeframe}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformRow({ platform, views, engagement, conversion }: {
  platform: string;
  views: string;
  engagement: string;
  conversion: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-medium text-gray-900">{platform}</div>
      </div>
      <div className="flex space-x-8">
        <div className="flex items-center space-x-2">
          <Eye className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">{views}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">{engagement}</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">{conversion}</span>
        </div>
      </div>
    </div>
  );
}