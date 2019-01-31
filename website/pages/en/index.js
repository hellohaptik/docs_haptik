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

function Row({ title, sections = [], others = [] }) {
  return (
    <div className="home-row-wrapper">
      <div className="home-row">
        <div className="home-row-title">{title}</div>
        <div className="home-row-columns">
          <div className="home-row-sections column">
            {sections.map((section, i) => (
              <Section key={i} {...section} />
            ))}
          </div>
          <div className="home-row-others column">
            <div className="home-row-others-title">Other</div>
            <div className="home-row-others-links">
              {others.map(({ url, title }, i) => (
                <a key={i} href={url}>
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = () => (
  <div className="home">
    <Row
      title="Getting Started"
      sections={[
        {
          title: 'Product Overview',
          description:
            'A quickstart guide explaining a high level overview of how all our tools work together',
          ctaText: 'Read More',
          ctaLink: 'http://google.com'
        },
        {
          title: 'Technical Overview',
          description:
            'A simple guide for executives trying to understand the technology powering Haptik',
          ctaText: 'Learn More',
          ctaLink: 'http://yahoo.com'
        }
      ]}
      others={[]}
    />
    <Row
      title="Tools"
      sections={[
        {
          title: 'Bot Builder',
          description:
            'Everything required to get you from beginner to advanced in Bot Building & Development.',
          ctaText: 'Learn More',
          ctaLink: 'http://google.com'
        },
        {
          title: 'Live Chat',
          description: 'Manage and plan your chat work with these resources & guides',
          ctaText: "Let's Begin",
          ctaLink: 'http://yahoo.com'
        },
        {
          title: 'Analytics',
          description: 'Learn how to uncover hidden insghts in your chat data & communication',
          ctaText: 'Get Started',
          ctaLink: 'http://yahoo.com'
        }
      ]}
      others={[
        {
          title: 'Security',
          url: 'security.com'
        },
        {
          title: 'Support',
          url: 'support.com'
        },
        {
          title: 'SLA',
          url: 'sla.com'
        }
      ]}
    />
    <Row
      title="Haptik Integration"
      sections={[
        {
          title: 'iOS SDK',
          description: 'A sample application with an integrated SDK & relevant Documentation',
          ctaText: 'Read More',
          ctaLink: 'http://google.com'
        },
        {
          title: 'Android SDK',
          description:
            'A sample application with an integrated SDK & relevant Documentation with aar & javadoc',
          ctaText: 'Learn More',
          ctaLink: 'http://yahoo.com'
        },
        {
          title: 'Web SDK',
          description: 'JavaScript documentation along with examples to begin.',
          ctaText: "Let's Begin",
          ctaLink: 'http://yahoo.com'
        },
        {
          title: 'Webhooks',
          description:
            'A sample application with an integrated SDK & relevant Documentation with aar & javadoc',
          ctaText: 'Get Started',
          ctaLink: 'http://yahoo.com'
        }
      ]}
      others={[
        {
          title: 'HSL',
          url: 'security.com'
        },
        {
          title: 'Facebook',
          url: 'support.com'
        },
        {
          title: 'Cordova',
          url: 'sla.com'
        },
        {
          title: 'React Native',
          url: 'sla.com'
        }
      ]}
    />
  </div>
);
