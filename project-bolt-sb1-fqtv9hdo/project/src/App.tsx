import React, { useState } from 'react';
import {
  Phone,
  Shield,
  AlertTriangle,
  BarChart3,
  Clock,
  Ban,
  PhoneOff,
  Wallet,
  AlertCircle,
  ChevronUp,
  Users,
  Activity
} from 'lucide-react';

function App() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const recentAlerts = [
    {
      type: 'call',
      message: 'Suspicious call pattern detected from +91 XXXXXX4523',
      time: '2 minutes ago',
      severity: 'high'
    },
    {
      type: 'transaction',
      message: 'Multiple small transactions detected to different accounts',
      time: '5 minutes ago',
      severity: 'high'
    },
    {
      type: 'call',
      message: 'Potential scam keywords detected in call transcript',
      time: '10 minutes ago',
      severity: 'medium'
    }
  ];

  const stats = {
    blockedCalls: 152,
    suspiciousTransactions: 23,
    activeAlerts: 8,
    riskScore: 85
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <h1 className="text-2xl font-bold">FraudGuard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-400 transition">
              <AlertCircle className="w-5 h-5 inline mr-2" />
              Report Incident
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Blocked Calls</p>
                <h3 className="text-2xl font-bold">{stats.blockedCalls}</h3>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <PhoneOff className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-green-600">
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">12% from yesterday</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Suspicious Transactions</p>
                <h3 className="text-2xl font-bold">{stats.suspiciousTransactions}</h3>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Wallet className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-red-600">
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">8% increase</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Active Alerts</p>
                <h3 className="text-2xl font-bold">{stats.activeAlerts}</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-yellow-600">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Active monitoring</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Risk Score</p>
                <h3 className="text-2xl font-bold">{stats.riskScore}%</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">Based on 1.2K users</span>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-lg ${
                  alert.type === 'call' ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  {alert.type === 'call' ? (
                    <Phone className={`w-5 h-5 ${
                      alert.type === 'call' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                  ) : (
                    <Wallet className="w-5 h-5 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{alert.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  alert.severity === 'high' 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {alert.severity === 'high' ? 'High Risk' : 'Medium Risk'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Fraud Prevention Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                Call Safety
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Never share OTP or banking credentials over phone</li>
                <li>Be cautious of callers claiming to be bank officials</li>
                <li>Enable caller ID verification</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-indigo-600" />
                Transaction Security
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Verify recipient details before transferring money</li>
                <li>Enable two-factor authentication</li>
                <li>Monitor your account regularly for suspicious activity</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;