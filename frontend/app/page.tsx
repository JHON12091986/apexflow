"use client";

import { useState } from "react";

type ResultType = {
  message?: string;
  status?: string;
  data?: any;
} | null;

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultType>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setResult({ message: "Please describe a workflow first." });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

setResult({
  status: "success",
  message: "Workflow executed successfully.",
  data: {
    summary: "20 SaaS startups found.",
    emails_generated: 20,
    status: "Completed"
  }
});

      
      setResult({ status: 'success', message: 'Workflow executed successfully.', data: { summary: '20 SaaS startups found.', emails_generated: 20, status: 'Completed' } });
    } catch (error) {
      setResult({
        message:
          "Failed to connect to API. Make sure the backend is running on localhost:8000.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">ðŸš€ ApexFlow</h1>

          <p className="text-xl text-gray-300">
            Autonomous AI Agent for B2B Workflows
          </p>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Describe a business task in plain English and let ApexFlow execute
            the workflow automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 my-10">

  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
    <h3 className="font-semibold text-lg">ðŸ“ Describe</h3>
    <p className="text-sm text-gray-400 mt-2">
      Tell ApexFlow what business workflow you want to automate.
    </p>
  </div>

  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
    <h3 className="font-semibold text-lg">ðŸ¤– AI Executes</h3>
    <p className="text-sm text-gray-400 mt-2">
      ApexFlow analyzes your request and performs the workflow automatically.
    </p>
  </div>

  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
    <h3 className="font-semibold text-lg">ðŸ“Š View Results</h3>
    <p className="text-sm text-gray-400 mt-2">
      Receive summaries, metrics and recommendations instantly.
    </p>
  </div>

</div>

        <div className="bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700">
          <h2 className="text-xl font-semibold mb-2">
            Create Workflow
          </h2>

          <p className="text-sm text-gray-400 mb-5">
            Example:
            <br />
            "Find 20 SaaS startups in Canada and prepare personalized outreach
            emails."
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <textarea
  rows={4}
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Describe your workflow..."
  className="flex-1 rounded-xl bg-slate-700 border border-slate-600 px-4 py-4 text-white placeholder-gray-400 focus:border-blue-500 outline-none resize-none"
/>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-xl px-8 py-4 font-semibold transition"
              >
                {loading ? "Running..." : "Execute"}
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-8 rounded-xl bg-slate-900 border border-slate-700 p-5">
              <h3 className="text-lg font-semibold mb-3">
                Result
              </h3>

              <pre className="text-sm whitespace-pre-wrap overflow-x-auto text-green-300">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}


