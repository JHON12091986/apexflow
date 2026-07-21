"use client";

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/agent/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ message: 'Failed to connect to API' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🚀 ApexFlow</h1>
        <p className="text-gray-400 mb-8">Autonomous AI Agent for B2B Workflows</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your workflow prompt..."
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Execute Agent'}
          </button>
        </form>

        {result && (
          <div className="mt-8 p-4 rounded-lg bg-gray-700 border border-gray-600">
            <h3 className="font-semibold mb-2">Result:</h3>
            <pre className="text-sm text-gray-300 whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
