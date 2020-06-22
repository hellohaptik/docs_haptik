/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <div className="footer">
          <a
            href="https://haptik.ai/"
            target="_blank"
            rel="noreferrer noopener"
            className="fbOpenSource"
          >
            <img
              src={`${this.props.config.baseUrl}img/image_0.png`}
              alt="Haptik Inc."
              width="100"
            />
          </a>
          <div className="footer-columns">
            {/* {this.renderFooterColumn('Getting Started', [
              { title: 'Product Overview', url: '/product-overview' },
              { title: 'Technical Overview', url: '/technical-overview' }
            ])} */}
            {this.renderFooterColumn('Tools', [
              { title: 'Bot Builder', url: 'https://docs.haptik.ai/bot-builder/basic/introduction' },
              { title: 'Agent Chat', url: 'https://docs.haptik.ai/agent-chat/' },
              { title: 'Analytics', url: 'https://docs.haptik.ai/bot-analytics/' }
            ])}
            {this.renderFooterColumn('Integrations', [
              { title: 'iOS SDK', url: 'https://hellohaptik.github.io/haptik-ios-framework' },
              { title: 'Android SDK', url: 'https://hellohaptik.github.io/haptik-android-lib' },
              { title: 'Web SDK', url: 'https://hellohaptik.github.io/javascript-xdk/' },
              { title: 'WhatsApp', url: 'https://docs.haptik.ai/whatsapp/' },
              { title: 'Facebook', url: 'https://docs.haptik.ai/other/facebook' },
              { title: 'Bot API', url: 'https://docs.haptik.ai/webhooks/' }
            ])}
            {this.renderFooterColumn('Others', [
              { title: 'HSL', url: 'https://docs.haptik.ai/hsl/' },
              { title: 'Security', url: 'https://docs.haptik.ai/other/security' },
              { title: 'SLA', url: 'https://docs.haptik.ai/other/sla' },
              { title: 'External Agent Chat Tool', url: 'https://docs.haptik.ai/external-chat-tool/' }
            ])}
          </div>
          <div className="footer-copyright" />
        </div>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }

  renderFooterColumn(title, links) {
    return (
      <div className="footer-column">
        <div className="footer-column-title">{title}</div>
        <div className="footer-column-links">
          {links.map((link, i) => (
            <a key={i} href={link.url} className="footer-column-link">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

module.exports = Footer;
