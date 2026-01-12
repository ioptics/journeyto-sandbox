const integrations = [
  {
    name: "Hotjar",
    slug: "hotjar",
    description: "Heatmaps, recordings, and feedback polls",
    status: "ready",
    freeTier: true,
  },
  {
    name: "Typeform",
    slug: "typeform",
    description: "Beautiful forms and surveys",
    status: "ready",
    freeTier: true,
  },
  {
    name: "Tally",
    slug: "tally",
    description: "Simple form builder",
    status: "ready",
    freeTier: true,
  },
  {
    name: "Intercom",
    slug: "intercom",
    description: "Customer messaging platform",
    status: "trial-only",
    freeTier: false,
  },
  {
    name: "Zendesk",
    slug: "zendesk",
    description: "Customer service software",
    status: "trial-only",
    freeTier: false,
  },
  {
    name: "Trustpilot",
    slug: "trustpilot",
    description: "Review platform",
    status: "pending",
    freeTier: true,
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Integration Test Environment
        </h1>
        <p className="mt-2 text-gray-600">
          This sandbox contains test pages for each JourneyTo webhook
          integration. Use these pages to trigger real feedback events that flow
          into your JourneyTo workspace.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h2 className="font-medium text-amber-800">Setup Required</h2>
        <p className="mt-1 text-sm text-amber-700">
          Each integration requires configuration in both the third-party tool
          and your JourneyTo workspace. See the README for detailed setup
          instructions.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Available Integrations
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {integrations.map((integration) => (
            <a
              key={integration.slug}
              href={
                integration.status === "ready"
                  ? `/integrations/${integration.slug}`
                  : "#"
              }
              className={`block p-4 bg-white border rounded-lg ${
                integration.status === "ready"
                  ? "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  : "border-gray-100 opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {integration.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {integration.description}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    integration.status === "ready"
                      ? "bg-green-100 text-green-700"
                      : integration.status === "trial-only"
                        ? "bg-gray-100 text-gray-500"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {integration.status === "ready"
                    ? "Ready"
                    : integration.status === "trial-only"
                      ? "Trial Only"
                      : "Coming Soon"}
                </span>
              </div>
              {integration.freeTier && (
                <span className="inline-block mt-2 text-xs text-gray-400">
                  Free tier available
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Webhook Configuration
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Configure your JourneyTo webhook URL in each integration:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-100 overflow-x-auto">
          https://your-journeyto-instance.com/api/webhooks/insights?token=YOUR_WEBHOOK_TOKEN
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Find your webhook token in JourneyTo → Settings → Integrations →
          Webhooks
        </p>
      </div>
    </div>
  );
}
