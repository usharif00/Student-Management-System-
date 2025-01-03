import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: 'Light',
    notifications: true,
    language: 'English',
  });

  const handleToggleNotifications = () => {
    setSettings({ ...settings, notifications: !settings.notifications });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="border rounded-lg p-4 bg-gray-50 shadow-md">
        <div className="mb-4">
          <span className="font-semibold">Theme:</span> {settings.theme}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Notifications:</span>{' '}
          <button
            onClick={handleToggleNotifications}
            className={`ml-2 px-3 py-1 rounded ${
              settings.notifications ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'
            }`}
          >
            {settings.notifications ? 'On' : 'Off'}
          </button>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Language:</span> {settings.language}
        </div>
      </div>
    </div>
  );
};

export default Settings;
