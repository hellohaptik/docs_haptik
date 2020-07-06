const MAP = {
  'ios-sdk': 'iOS',
  'android-sdk': 'Android'
};

const customsidebar = ["Android", "iOS"];

function getTitle() {
  const pathArray = window.location.pathname.split('/');
  const path = pathArray[1];

  return MAP[path]
    ? MAP[path]
    : path
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

document.addEventListener('DOMContentLoaded', function() {
  const title = getTitle();

  if (title === 'Docs_haptik') return;

  const DOMList = document.getElementsByClassName('headerTitleWithLogo');
  const headerTitleDOM = DOMList.length ? DOMList[0] : null;
  const newTitle = `Haptik Docs <span> | ${title}</span>`;
  if (headerTitleDOM && headerTitleDOM.innerHTML !== newTitle) {
    headerTitleDOM.innerHTML = `Haptik Docs <span> | ${title}</span>`;
  }

  if (customsidebar.includes(title)) addSidebarStyling();
});

function addSidebarStyling() {

        // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];
        // Create sidebar css link Element
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/css/sidebar.css';
        // Append link element to HTML head
        head.appendChild(link);
}
