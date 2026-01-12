# JourneyTo Integration Sandbox

A test environment for validating JourneyTo webhook integrations with third-party tools.

## Overview

This sandbox provides test pages for each integration supported by JourneyTo. Use it to:
- Verify webhook payloads are correctly parsed
- Test end-to-end flow from tool → webhook → insight
- Debug integration issues in a controlled environment

## Supported Integrations

| Integration | Status | Free Tier |
|-------------|--------|-----------|
| Hotjar | Ready | Yes |
| Typeform | Ready | Yes (10 responses/mo) |
| Tally | Ready | Yes (unlimited) |
| Trustpilot | Coming Soon | Yes |
| Intercom | Trial Only | No |
| Zendesk | Trial Only | No |

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Optional: Form/widget IDs for embedded testing
NEXT_PUBLIC_HOTJAR_ID=        # Your Hotjar site ID
NEXT_PUBLIC_TYPEFORM_ID=      # Your Typeform form ID
NEXT_PUBLIC_TALLY_FORM_ID=    # Your Tally form ID
```

## Integration Setup

### 1. Get Your JourneyTo Webhook URL

1. Log in to JourneyTo
2. Go to Settings → Integrations → Webhooks
3. Copy your webhook URL:
   ```
   https://your-instance.vercel.app/api/webhooks/insights?token=YOUR_TOKEN
   ```

### 2. Configure Each Integration

#### Hotjar
1. Create a Hotjar account at [hotjar.com](https://hotjar.com)
2. Add your sandbox URL as a new site
3. Create a survey with text/NPS questions
4. Go to survey settings → Integrations → Webhooks
5. Add your JourneyTo webhook URL
6. Target the survey to `/integrations/hotjar`

#### Typeform
1. Create a Typeform account at [typeform.com](https://typeform.com)
2. Create a form with text/rating questions
3. Go to Connect → Webhooks
4. Add your JourneyTo webhook URL
5. Embed the form on the Typeform page (update env var)

#### Tally
1. Create a Tally account at [tally.so](https://tally.so)
2. Create a form with text/rating questions
3. Go to Integrations → Webhooks
4. Add your JourneyTo webhook URL
5. Embed the form on the Tally page (update env var)

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ioptics/journeyto-sandbox)

Or manually:

```bash
npm install -g vercel
vercel
```

## Troubleshooting

### Webhook not receiving data
1. Check the webhook URL is correct (including the token)
2. Check JourneyTo webhook logs: Settings → Integrations → Webhooks → View Logs
3. Verify the integration is sending to the correct URL

### Insights not appearing
1. Check the webhook log for errors
2. Verify the payload is in the expected format
3. Check if the transformer is matching the source

### Form not embedding
1. Verify the form ID environment variable is set
2. Redeploy after changing environment variables
3. Check browser console for embed errors

## Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

## Related

- [JourneyTo](https://github.com/ioptics/journeytov0) - Main application
- [Webhook Documentation](https://github.com/ioptics/journeytov0/blob/main/docs/webhooks.md) - Webhook payload formats
