import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <img 
      src="//hzinyrqqkeqizojcotoj.supabase.co/storage/v1/object/public/logos/${self.src}"
      onerror="this.onerror=null;this.dispatchEvent(new CustomEvent('error',{bubbles:true,cancelable:true}))"
      alt="${self.alt}" 
      loading="eager" 
    />
  `;
}

export default component;
