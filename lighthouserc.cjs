module.exports = {
  ci: {
    collect: {
      // Use the deployed URL from environment variable
      url: [process.env.DEPLOY_URL || 'https://bw.casa'],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        // Use the minimal Chrome flags that worked
        chromeFlags: [
          '--headless',
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
        ],
        skipAudits: [
          'canonical',
          'maskable-icon',
          'installable-manifest',
        ],
      },
    },
    assert: {
      // Enable basic performance checks now that we're testing a real deployment
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
        'categories:best-practices': ['warn', { minScore: 0.7 }],
        'categories:seo': ['warn', { minScore: 0.7 }],
        'categories:pwa': 'off',
      },
    },
    upload: {
      // Upload reports to temporary-public-storage (Google Cloud) and keep them ~7 days
      target: 'temporary-public-storage',
    },
  },
};
