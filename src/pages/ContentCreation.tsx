import React, { useState } from 'react';
import { Upload, Link, FileText, Send } from 'lucide-react';

export function ContentCreation() {
  const [selectedTab, setSelectedTab] = useState<'upload' | 'link'>('upload');

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Content Creation</h1>
      
      <div className="mt-6 bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setSelectedTab('upload')}
              className={`py-4 px-6 inline-flex items-center ${
                selectedTab === 'upload'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload File
            </button>
            <button
              onClick={() => setSelectedTab('link')}
              className={`py-4 px-6 inline-flex items-center ${
                selectedTab === 'link'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Link className="h-5 w-5 mr-2" />
              Enter Link
            </button>
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === 'upload' ? (
            <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg p-12">
              <div className="text-center">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <Upload className="h-5 w-5 mr-2" />
                    Choose File
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  or drag and drop your file here
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter URL here"
                  className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Generated Content</h3>
            <div className="mt-2 p-4 bg-gray-50 rounded-md">
              <p className="text-gray-500 text-sm">
                Your generated content will appear here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}