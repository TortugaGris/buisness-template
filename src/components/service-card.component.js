export class ServiceCard extends HTMLElement {
    template() {
        return `
            <article 
                id='serviceCard' 
                class="p-4 shadow-sm h-100 d-flex align-items-start flex-column service-card"
                data-mdb-animation-init
                data-mdb-animation="fade-in-down"
                data-mdb-animation-start="onScroll"
            >
                <div id="bgIcon" class="border p-2 bg-primary bg-opacity-75 d-inline-block rounded-3">
                    <img width="50px" src="${this.attributes.img.value}" alt="">
                </div>
                <h3 class="mt-100px mb-2 h4 fw-semibold">${this.attributes.title.value}</h3>
                <p class="text-muted">${this.attributes.body.value.trim().slice(0,200).trim()}...</p>
                <div class="mt-auto align-self-end">
                    <i class="fa fa-arrow-right fs-4"></i>
                </div>
            </article>
        `
    }

    slice(s) {
        if (s.length > 13) return s.slice(0,10);
        return s;
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
    }

    mapComponentAttributes() {
        const attributesMapping = [
            'title',
            'body',
            'img'
        ];
        
        attributesMapping.forEach(key => {
            if(!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
        })
    }

    render() {
        this.innerHTML = `
            ${this.template()}
        `
    }

    disconnectedCallback() {
        this.remove();
    }
}
