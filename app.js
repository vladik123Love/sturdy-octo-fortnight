const ROOT_HOME = '#content'

window._router = {
    baseHASH: 'https://cdn.jsdelivr.net/gh/vladik123Love/sturdy-octo-fortnight@latest/',
    // baseHASH: './js/',
    routes: {},
    routesLoading: [],
    goto(name) {
        if (this.routes[name]) {
            this.routes[name]();
            document.querySelector('.loader_wrapper').classList.add('hide')
        }
    },
    has(name) {
        return this.routes[name] !== undefined;
    },
    isLoading(name) {
        return this.routesLoading.includes(name);
    },
    bind(page, page_name) {
        this.routes[page_name] = function () {
            window._yuvi.renderPage(page);
        }
    },
    pageUrl(hash) {
        return this.baseHASH + 'pages/' + hash.replace('#', '') + '.js'
    }
}

window._yuvi = {
    render(node) {
        if (Array.isArray(node)) {
            return node.map(n => this.render(n));
        }

        if (node.tagName === '#text') {
            node.tagName = 'span'
        }

        /**
         * @type HTMLElement
         */
        const element = document.createElement(node.tagName);

        if (node.attributes) {
            for (const { name, value } of node.attributes) {
                if (name === 'class') {
                    element.classList.add(...value.split(' '))
                } else {
                    element[name] = value;
                }
            }
        }

        if (node.children) {
            this.render(node.children).forEach(child => {
                element.append(child);
            })
        }

        if (node.textContent) {
            element.textContent = node.textContent
        }

        return element
    },
    renderPage(page) {
        document.querySelector(ROOT_HOME).appendChild(this.render(page))
    },
}

function router(name) {
    window.location.hash = name;
    window.scrollTo(0, 0)

    document.querySelector('.loader_wrapper').classList.remove('hide')

    document.querySelector(ROOT_HOME).childNodes.forEach(c => c.remove());
    console.log(window._router.has(name), name)
    if (!window._router.has(name)) {
        if (window._router.isLoading(name)) {
            return;
        }

        window._router.routesLoading.push(name);

        const script = document.createElement('script');
        script.type = 'text/javascript'
        script.src = window._router.pageUrl(name)
        document.body.appendChild(script)
    } else {
        window._router.goto(name)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (location.hash !== '') {
        router(location.hash)
    } else {
        router('#landing')
    }
})
