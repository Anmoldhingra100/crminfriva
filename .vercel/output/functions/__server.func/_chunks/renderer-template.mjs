import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse(`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Infriva Solutions</title>\r
\r
  <!-- Meta Pixel Code -->\r
  <script>\r
    !function(f,b,e,v,n,t,s)\r
    {\r
      if(f.fbq) return;\r
      n=f.fbq=function(){\r
        n.callMethod ?\r
        n.callMethod.apply(n,arguments) : n.queue.push(arguments)\r
      };\r
      if(!f._fbq) f._fbq=n;\r
      n.push=n;\r
      n.loaded=!0;\r
      n.version='2.0';\r
      n.queue=[];\r
\r
      t=b.createElement(e);\r
      t.async=!0;\r
      t.src=v;\r
\r
      s=b.getElementsByTagName(e)[0];\r
      s.parentNode.insertBefore(t,s);\r
    }\r
    (window, document, 'script',\r
    'https://connect.facebook.net/en_US/fbevents.js');\r
\r
    fbq('init', '1448809320263584');\r
    fbq('track', 'PageView');\r
  <\/script>\r
\r
  <noscript>\r
    <img\r
      height="1"\r
      width="1"\r
      style="display:none"\r
      src="https://www.facebook.com/tr?id=1448809320263584&ev=PageView&noscript=1"\r
    />\r
  </noscript>\r
  <!-- End Meta Pixel Code -->\r
\r
</head>\r
\r
<body>\r
  <div id="root"></div>\r
  <script type="module" src="/src/main.tsx"><\/script>\r
</body>\r
</html>`, { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
