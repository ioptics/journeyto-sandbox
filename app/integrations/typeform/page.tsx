import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typeform Integration | JourneyTo Sandbox",
};

export default function TypeformPage() {
  return (
    <div className="space-y-8">
      <div>
        <a
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-block"
        >
          ← Back to integrations
        </a>
        <h1 className="text-2xl font-bold text-gray-900">Typeform Integration</h1>
        <p className="mt-2 text-gray-600">
          Test Typeform responses flowing into JourneyTo as insights.
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
              <h3 className="font-medium text-gray-900">Create a Typeform account</h3>
              <p className="text-sm text-gray-600">
                Sign up at{" "}
                <a
                  href="https://www.typeform.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  typeform.com
                </a>
                . The free tier allows up to 10 responses/month.
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
                Create a new form with at least one text question. You can also add
                NPS, rating, or email questions.
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
                Go to Connect → Webhooks → Add webhook. Enter your JourneyTo
                webhook URL:
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
              <h3 className="font-medium text-gray-900">
                Get the Embed Code or Form ID
              </h3>
              <p className="text-sm text-gray-600">
                Go to Share → Embed in a web page. Copy the form ID from the embed
                code (looks like <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">abc123xyz</code>).
              </p>
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
                  NEXT_PUBLIC_TYPEFORM_ID=your_form_id
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
          Once configured, your Typeform will be embedded below. Submit a response
          to test the webhook.
        </p>

        {/* Placeholder for Typeform embed */}
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <p className="text-gray-500 mb-4">
              Typeform embed will appear here
            </p>
            <p className="text-sm text-gray-400">
              Set NEXT_PUBLIC_TYPEFORM_ID in your environment variables
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          To embed manually, replace the placeholder above with:
        </p>
        <pre className="mt-2 bg-gray-50 border border-gray-200 rounded p-3 text-xs overflow-x-auto">
{`<div data-tf-live="YOUR_FORM_ID"></div>
<script src="//embed.typeform.com/next/embed.js"></script>`}
        </pre>
      </div>

      {/* Hidden Fields */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">
          Pro Tip: Hidden Fields
        </h2>
        <p className="text-sm text-blue-800 mb-4">
          Typeform supports hidden fields that can pass user data to JourneyTo:
        </p>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>
            • <code className="bg-blue-100 px-1 rounded">email</code> - User&apos;s email
          </li>
          <li>
            • <code className="bg-blue-100 px-1 rounded">user_id</code> - Your internal user ID
          </li>
          <li>
            • <code className="bg-blue-100 px-1 rounded">company_id</code> - Account/company ID
          </li>
        </ul>
        <p className="text-sm text-blue-700 mt-4">
          Add these as hidden fields in Typeform, then pass them in the embed URL:
        </p>
        <code className="block mt-2 text-xs bg-blue-100 p-2 rounded text-blue-900">
          ?email=user@example.com&user_id=123&company_id=456
        </code>
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
              <strong>Body:</strong> Text answers formatted as question/answer pairs
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Source:</strong> &quot;typeform&quot;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Rating:</strong> From rating or NPS questions (0-10 → 1-5)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>User Email:</strong> From email question or hidden field
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Metadata:</strong> Form ID, form title, NPS raw score
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
