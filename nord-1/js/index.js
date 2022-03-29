const config = {
    user: 'Rend',
    items: [
    {
        headingName: 'General',
        links: [
            { link: 'https://web.whatsapp.com/', name: 'whatsapp' },
            { link: 'https://www.youtube.com/', name: 'youtube' },
            { link: 'https://mail.google.com/mail/u/0/#inbox', name: 'gmail' },
            { link: 'https://www.figma.com/', name: 'Figma' },
        ]
    }, {
        headingName: 'Social',
        links: [
            { link: 'https://www.instagram.com/', name: 'instagram' },
            { link: 'https://www.facebook.com/', name: 'facebook' },
            { link: 'https://twitter.com/home?lang=en', name: 'twitter' },
            { link: 'https://www.reddit.com/', name: 'Reddit' },
        ]
    }, {
        headingName: 'Dev',
        links: [
            { link: 'https://github.com/', name: 'github' },
            { link: 'https://dev.to/', name: 'dev.to' },
            { link: 'https://devdocs.io/', name: 'devdoc' },
            { link: 'https://dribbble.com/shots/popular/web-design', name: 'Dribbble' },
        ]
    }
]}

function renderLinks() {
    const linksPlaceholder = document.querySelector('.js-links')
    config.items.map(item => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `<h3>${item.headingName}</h3>
    <div class='link-wrapper'>
    ${item.links.map(el => `<a class='link' href=${el.link}>${el.name}</a>`).join('')}
    </div>`
        linksPlaceholder.append(wrapper)
    })
}

renderLinks()