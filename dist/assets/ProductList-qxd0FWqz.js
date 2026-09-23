import{r as s}from"./utils-k8IFu3EB.js";function i(e){return`
    <li class="product-card">
      <a href="/product_pages/?product=${e.Id}">
        <img src="${e.Images.PrimaryMedium}" alt="${e.Name}">
        <h3>${e.Brand.Name}</h3>
        <p>${e.NameWithoutBrand}</p>
        <p class="product-card__price">$${e.FinalPrice}</p>
      </a>
    </li>
    `}class n{constructor(t,r,a){this.category=t,this.dataSource=r,this.listElement=a}async init(){const t=await this.dataSource.getData(this.category);this.renderList(t),document.querySelector(".title").textContent=this.category}async initSearch(t){const r=await this.dataSource.searchProducts(t);this.renderList(r)}renderList(t){if(!t||t.length===0){this.listElement.innerHTML="<p class='no-results'>No products found matching your search.</p>";return}s(i,this.listElement,t,"afterbegin",!0)}}export{n as P};
