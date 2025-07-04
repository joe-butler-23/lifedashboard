import React from 'react';

const Settings = ({
  todoistToken,
  setTodoistToken,
  handleSaveTodoistToken,
  todoistError,
  googleCalendarToken,
  setGoogleCalendarToken,
  handleGoogleAuthClick,
  googleCalendarError,
  loadingGoogleCalendarEvents,
  claudeApiKey,
  setClaudeApiKey,
  handleSaveClaudeApiKey,
  claudeApiError,
  loadingTodoistTasks,
}) => {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Todoist Integration</h3>
        <p className="text-gray-600 mb-4">Enter your Todoist API token to sync your tasks.</p>
        <div className="flex items-end space-x-3">
          <input
            type="text"
            placeholder="Your Todoist API Token"
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={todoistToken}
            onChange={(e) => setTodoistToken(e.target.value)}
          />
          <button
            onClick={handleSaveTodoistToken}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2"
          >
            Save and Test Connection
          </button>
          {todoistToken && (
            <button
              onClick={() => {
                console.log('Manual sync triggered');
                // Assuming fetchTodoistTasks is passed as a prop if needed for manual sync
                // For now, it's handled by the App component's useEffect
              }}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              disabled={loadingTodoistTasks}
            >
              {loadingTodoistTasks ? 'Syncing...' : 'Force Sync'}
            </button>
          )}
          {todoistError && <p className="text-red-500 mt-2">Error: {todoistError.message}</p>}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Google Calendar Integration</h3>
        <p className="text-gray-600 mb-4">Connect your Google Calendar to display events in the planner.</p>
        <div className="flex items-end space-x-3">
          <button
            onClick={handleGoogleAuthClick}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {loadingGoogleCalendarEvents ? 'Connecting...' : 'Connect Google Calendar'}
          </button>
          {googleCalendarToken && (
            <button
              onClick={() => {
                localStorage.removeItem('googleCalendarToken');
                setGoogleCalendarToken(''); // Clear token in state
                alert('Google Calendar disconnected');
              }}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Disconnect Google Calendar
            </button>
          )}
          {googleCalendarError && <p className="text-red-500 mt-2">Error: {googleCalendarError.message}</p>}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-4">Claude AI Integration</h3>
        <p className="text-gray-600 mb-4">Enter your Anthropic API key to enable Claude AI assistant features.</p>
        <div className="flex items-end space-x-3">
          <input
            type="password"
            placeholder="Your Anthropic API Key (starts with sk-ant-)"
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={claudeApiKey}
            onChange={(e) => setClaudeApiKey(e.target.value)}
          />
          <button
            onClick={handleSaveClaudeApiKey}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Save API Key
          </button>
        </div>
        {claudeApiError && <p className="text-red-500 mt-2">Error: {claudeApiError.message}</p>}
        {claudeApiKey && !claudeApiError && (
          <p className="text-green-600 mt-2">Claude API key saved successfully! AI features are now enabled.</p>
        )}
        <div className="mt-3 text-sm text-gray-500">
          <p>• Get your API key from <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Anthropic Console</a></p>
          <p>• Your API key is stored securely and only used for AI requests</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;