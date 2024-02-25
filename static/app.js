const mockData = [
    {
        id: 'A1',
        name: 'Vacuum Cleaner',
        rrp: '99.99',
        info: 'The most powerful vacuum in the world'
    },
    {
        id: 'A2',
        name: 'Leaf Blower',
        rrp: '303.33',
        info: 'This product will blow your socks off.'
    },
    {
        id: 'B1',
        name: 'Chocolate Bar',
        rrp: '22.40',
        info: 'Deliciously overpriced chocolate.'
    }
]

const populateProducts = () => {
    const products = document.querySelector('#products');
    products.innerHTML = '';
    for (const product of mockData) {
        const item = document.createElement('product-item');
        for (const key of ['name', 'rrp', 'info']) {
            const span = document.createElement('span');
            span.slot = key;
            span.textContent = product[key];
            item.appendChild(span);
        }
        products.appendChild(item);
    }
}

document.querySelector('#fetch').addEventListerner('click',
async () => {
    await populateProducts();
});

customElements.define('product-item', class Item extends
HTMLElement {
    constructor () {
        super();
        const itemTmpl = document.querySelector('#item').textContent.cloneNode(true);
        this.attachShadow({
            mode: 'open'
        }).appendChild(itemTmpl);
    }
})