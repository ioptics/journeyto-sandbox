import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tally Integration | JourneyTo Sandbox",
};

export default function TallyPage() {
  return (
    <div className="space-y-8">
      <div>
        <a
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-block"
        >
          ← Back to integrations
        </a>
        <h1 className="text-2xl font-bold text-gray-900">Tally Integration</h1>
        <p className="mt-2 text-gray-600">
          Test Tally form submissions flowing into JourneyTo as insights.
        </p>
      </div>

      {/* Setup Instructions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Setup Steps</h2>

        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              1
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Create a Tally account</h3>
              <p className="text-sm text-gray-600">
                Sign up at{" "}
                <a
                  href="https://tally.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  tally.so
                </a>
                . Tally has a generous free tier with unlimited forms and responses.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              2
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Create a Form</h3>
              <p className="text-sm text-gray-600">
                Create a new form with at least one text input. You can also add
                rating, NPS, or email fields.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Supported field types: Long Text, Short Text, Email, Rating, NPS,
                Linear Scale
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              3
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Configure the Webhook</h3>
              <p className="text-sm text-gray-600">
                In your form settings, go to Integrations → Webhooks → Add webhook.
                Enter your JourneyTo webhook URL:
              </p>
              <div className="mt-2 bg-gray-900 rounded p-3 font-mono text-xs text-gray-100 overflow-x-auto">
                https://your-journeyto.vercel.app/api/webhooks/insights?token=YOUR_TOKEN
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              4
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Get the Form ID</h3>
              <p className="text-sm text-gray-600">
                Find your form ID in the URL when editing:
              </p>
              <code className="block mt-2 text-xs bg-gray-50 p-2 rounded border border-gray-200">
                https://tally.so/forms/<span className="text-blue-600 font-semibold">abc123</span>/edit
              </code>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
              5
            </span>
            <div>
              <h3 className="font-medium text-gray-900">Set the Environment Variable</h3>
              <p className="text-sm text-gray-600">
                Add your form ID to the sandbox environment:
              </p>
              <div className="mt-2 bg-gray-50 border border-gray-200 rounded p-3">
                <code className="text-xs text-gray-700">
                  NEXT_PUBLIC_TALLY_FORM_ID=your_form_id
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Area - Embedded Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Form</h2>
        <p className="text-sm text-gray-600 mb-4">
          Once configured, your Tally form will be embedded below. Submit a response
          to test the webhook.
        </p>

        {/* Placeholder for Tally embed */}
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <p className="text-gray-500 mb-4">Tally form embed will appear here</p>
            <p className="text-sm text-gray-400">
              Set NEXT_PUBLIC_TALLY_FORM_ID in your environment variables
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          To embed manually, replace the placeholder above with:
        </p>
        <pre className="mt-2 bg-gray-50 border border-gray-200 rounded p-3 text-xs overflow-x-auto">
{`<iframe
  src="https://tally.so/embed/YOUR_FORM_ID?alignLeft=1&hideTitle=1"
  width="100%"
  height="500"
  frameBorder="0"
  title="Tally Form"
/>`}
        </pre>
      </div>

      {/* Why Tally */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-green-900 mb-2">
          Why Tally is Great for Testing
        </h2>
        <ul className="text-sm text-green-800 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Unlimited free responses</strong> - no monthly limits
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Simple webhook setup</strong> - built-in integration
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Clean payload format</strong> - easy to debug
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Instant webhook delivery</strong> - no delays
            </span>
          </li>
        </ul>
      </div>

      {/* Expected Data */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          What to Expect in JourneyTo
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          When a form is submitted, JourneyTo will create an insight with:
        </p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Body:</strong> Text answers formatted as label/value pairs
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Source:</strong> &quot;tally&quot;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Rating:</strong> From rating/NPS/linear scale fields (mapped to 1-5)
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
              <strong>User Email:</strong> From email field if present
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Metadata:</strong> Form ID, form name, NPS raw score
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
