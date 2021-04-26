const React = require('react');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function Section({ title, description, ctaText, ctaLink }) {
  return (
    <div className="home-row-section">
      <div className="home-row-section-title">{title}</div>
      <div className="home-row-section-description">{description}</div>
      <a href={ctaLink} className="home-row-section-cta">
        {ctaText}
      </a>
    </div>
  );
}

function Row({ title, sections = [], others = [], id }) {
  return (
    <div className="home-row-wrapper">
      <div className="home-row-anchor" id={id} />
      <div className="home-row">
        <div className="home-row-title">{title}</div>
        <div className="home-row-columns">
          <div className="home-row-sections column">
            {sections.map((section, i) => (
              <Section key={i} {...section} />
            ))}
          </div>
          {others.length ? (
            <div className="home-row-others column">
              <React.Fragment>
                <div className="home-row-others-title">Other</div>
                <div className="home-row-others-links">
                  {others.map(({ url, title }, i) => (
                    <a key={i} href={url}>
                      {title}
                    </a>
                  ))}
                </div>
              </React.Fragment>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

module.exports = () => (
  <div className="home">
    <Row
      id="tools"
      title="Tools"
      sections={[
        {
          title: 'Conversation Studio',
          description:
            'Everything required to get you from beginner to advanced in bot building using our in-house Conversation Studio tool',
          ctaText: 'Get Started',
          ctaLink: '/bot-builder/basic/introduction',
        },
        {
          title: 'Smart Agent Chat',
          description:
            'Learn how human escalations are handled on bots using our Agent Chat tool',
          ctaText: 'Get Started',
          ctaLink: '/agent-chat',
        },
        {
          title: 'Intelligent Analytics',
          description:
            'Learn how to uncover hidden insights in your chat data & communication using our very own Analytics tool',
          ctaText: 'Get Started',
          ctaLink: '/bot-analytics'
        },
        {
          title: 'Admin Tools',
          description: 'Manage the users, data and other settings for the platform',
          ctaText: 'Get Started',
          ctaLink: '/admin-tools'
        }
      ]}
      others={[
        {
          title: 'HSL',
          url: '/hsl',
        },
        {
          title: 'SLA',
          url: '/other/sla',
        },
        {
          title: 'Help',
          url: '/other/supportbot',
        },
        {
          title: 'Chat Link',
          url: '/bot-analytics/chat-links'
        }
      ]}
    />
    <Row
      id="integrations"
      title="Integrations"
      sections={[
        {
          title: 'Web SDK',
          description:
            'Supercharge your app with AI powered Chatbots enabled by our powerful Javascript SDK',
          ctaText: 'Get Started',
          ctaLink: '/web-sdk',
        },
        {
          title: 'WhatsApp',
          description:
            'Documentation to help you build conversational experiences on WhatsApp',
          ctaText: 'Get Started',
          ctaLink: '/whatsapp',
        },
        {
          title: 'Facebook',
          description:
            'Documentation to help you build conversational experiences on Facebook',
          ctaText: 'Get Started',
          ctaLink: '/facebook',
        },
        {
          title: 'Google Business Messages',
          description:
            'Documentation to help you build conversational experiences on Google Business Messages',
          ctaText: 'Get Started',
          ctaLink: '/gbm',
        },
        {
          title: 'Salesforce Service Cloud Integration',
          description:
            'Documentation to help you build conversational experiences on Salesforce Service Cloud',
          ctaText: 'Get Started',
          ctaLink: '/salesforce',
        },
        {
          title: 'Bot API',
          description:
            'API docs to help you build powerful chatbot solutions with great customisations',
          ctaText: 'Get Started',
          ctaLink: '/webhooks',
        },
        {
          title: 'iOS SDK',
          description:
            'Objective-C framework to bring the chatbot magic in your app for iOS 9 & higher',
          ctaText: 'Get Started',
          ctaLink: '/ios-sdk',
        },        
        {
          title: 'Android SDK',
          description:
            'Java framework to supercharge your Android app with AI powered chatbot capabilities',
          ctaText: 'Get Started',
          ctaLink: '/android-sdk',
        },
      ]}
      others={[
        {
          title: 'External Agent Chat Tool',
          url: '/external-chat-tool',
        },
      ]}
    />
  </div>
);
