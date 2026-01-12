import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotjar Integration | JourneyTo Sandbox",
};

export default function HotjarPage() {
  return (
    <div className="space-y-8">
      <div>
        <a
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-block"
        >
          ← Back to integrations
        </a>
        <h1 className="text-2xl font-bold text-gray-900">Hotjar Integration</h1>
        <p className="mt-2 text-gray-600">
          Test Hotjar survey responses flowing into JourneyTo as insights.
        </p>
      </div>

      {/* Status */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
        <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-green-600 text-lg">✓</span>
        </span>
        <div>
          <h3 className="font-medium text-green-900">Tracking Installed</h3>
          <p className="text-sm text-green-700">
            ContentSquare (Hotjar) tracking is active on this site.
          </p>
        </div>
      </div>

      {/* Setup Instructions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Remaining Setup Steps</h2>

        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
              ✓
            </span>
            <div>
              <h3 className="font-medium text-gray-400 line-through">Install tracking code</h3>
              <p className="text-sm text-gray-400">
                ContentSquare tracking is already installed on this site.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              1
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Create a Survey</h3>
              <p className="text-sm text-gray-600">
                In your Hotjar/ContentSquare dashboard, go to Surveys → Create Survey.
                Include at least one text question for the insight body. NPS or rating
                questions are also supported.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              2
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Configure the Webhook</h3>
              <p className="text-sm text-gray-600">
                In your survey settings, go to Integrations → Webhooks → Add
                endpoint. Enter your JourneyTo webhook URL:
              </p>
              <div className="mt-2 bg-gray-900 rounded p-3 font-mono text-xs text-gray-100 overflow-x-auto">
                https://your-journeyto.vercel.app/api/webhooks/insights?token=YOUR_TOKEN
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              3
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Target this page</h3>
              <p className="text-sm text-gray-600">
                Set your survey to appear on URLs containing{" "}
                <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                  /integrations/hotjar
                </code>
                . The survey should pop up when you visit this page.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Test Area */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Area</h2>
        <p className="text-sm text-gray-600 mb-4">
          Once configured, the Hotjar survey should appear on this page (usually
          as a widget in the corner or as a popup).
        </p>
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
          <p className="text-gray-500">
            Hotjar survey will appear here or as an overlay
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Make sure you&apos;ve completed the setup steps above
          </p>
        </div>
      </div>

      {/* Expected Data */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          What to Expect in JourneyTo
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          When a survey response is submitted, JourneyTo will create an insight
          with:
        </p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Body:</strong> Text answers from the survey (Q&A format)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Source:</strong> &quot;hotjar&quot;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Rating:</strong> Derived from NPS (0-10 → 1-5) or direct
              rating questions
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Sentiment:</strong> Derived from NPS (promoter/passive/detractor)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Metadata:</strong> Survey name, device, browser, location,
              recording URL
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
