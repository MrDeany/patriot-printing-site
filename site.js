/* Patriot Printing — shared chrome (header/footer) injection
   Lets every page stay consistent with one source of truth. */

const CONTACT_EMAIL = "patriotprintingllc@gmail.com";
const SHOP_PHONE    = "(618) 555-0199"; // placeholder — swap to real number
const SHOP_ADDRESS  = "845 Seibert Rd, Scott AFB, IL 62225";

function pathDepth(){
  // determine relative prefix based on whether we're in /pages or root
  return window.location.pathname.includes('/pages/') ? '../' : './';
}

function renderHeader(activePage){
  const p = pathDepth();
  const link = (href, label, key) =>
    `<li><a href="${p}${href}" class="${activePage===key?'active':''}">${label}</a></li>`;

  const html = `
    <div class="topbar">
      <div class="wrap">
        <div>★ Veteran-friendly print shop · Scott AFB, IL</div>
        <div>
          <a href="tel:${SHOP_PHONE.replace(/[^\d]/g,'')}">${SHOP_PHONE}</a>
          &nbsp;·&nbsp;
          <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
        </div>
      </div>
    </div>
    <nav class="nav">
      <div class="wrap">
        <a href="${p}index.html" class="brand">
          <div class="brand-mark">P</div>
          <div>
            Patriot Printing
            <small>Custom Print · Est. ${new Date().getFullYear()}</small>
          </div>
        </a>
        <ul class="nav-links">
          ${link('pages/gang-sheet.html','DTF Gang Sheet','gang')}
          ${link('pages/stickers.html','Stickers','stickers')}
          ${link('pages/apparel.html','Apparel','apparel')}
          ${link('pages/banners.html','Banners','banners')}
          ${link('pages/decals.html','Vinyl Decals','decals')}
          ${link('pages/yard-signs.html','Yard Signs','yard')}
          ${link('pages/storefronts.html','Company Stores','stores')}
        </ul>
        <a href="mailto:${CONTACT_EMAIL}" class="nav-cta">Get Quote</a>
      </div>
    </nav>
  `;
  document.getElementById('site-header').innerHTML = html;
}

function renderFooter(){
  const p = pathDepth();
  const html = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <div class="brand" style="margin-bottom:1rem">
              <div class="brand-mark">P</div>
              <div>Patriot Printing<small>Custom Print · Est. ${new Date().getFullYear()}</small></div>
            </div>
            <p style="opacity:.75;font-size:.92rem;line-height:1.7;max-width:38ch">
              Family-run print shop serving the Scott AFB community and beyond.
              DTF transfers, apparel, signage, and everything in between — built to last.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="${p}pages/gang-sheet.html">DTF Gang Sheets</a></li>
              <li><a href="${p}pages/stickers.html">Vinyl Stickers</a></li>
              <li><a href="${p}pages/apparel.html">Custom Apparel</a></li>
              <li><a href="${p}pages/banners.html">Banners</a></li>
              <li><a href="${p}pages/decals.html">Vinyl Decals</a></li>
              <li><a href="${p}pages/yard-signs.html">Yard Signs</a></li>
            </ul>
          </div>
          <div>
            <h4>Business</h4>
            <ul>
              <li><a href="${p}pages/storefronts.html">Company Stores</a></li>
              <li><a href="mailto:${CONTACT_EMAIL}">Wholesale Inquiries</a></li>
              <li><a href="mailto:${CONTACT_EMAIL}">Custom Quotes</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit / Contact</h4>
            <ul>
              <li>${SHOP_ADDRESS}</li>
              <li><a href="tel:${SHOP_PHONE.replace(/[^\d]/g,'')}">${SHOP_PHONE}</a></li>
              <li><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© ${new Date().getFullYear()} Patriot Printing LLC · All rights reserved</div>
          <div>Made with care in Illinois ★</div>
        </div>
      </div>
    </footer>
  `;
  document.getElementById('site-footer').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const active = document.body.dataset.page || '';
  if(document.getElementById('site-header')) renderHeader(active);
  if(document.getElementById('site-footer')) renderFooter();
});
