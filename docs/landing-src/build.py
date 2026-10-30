#!/usr/bin/env python3
# Baut index.html aus head.html + body.html + verbatim-Skripten und kompiliert css/styles.css
import os,subprocess
d=os.path.dirname(os.path.abspath(__file__));root=os.path.dirname(d)
r=lambda p:open(os.path.join(d,p),encoding='utf-8').read()
v=lambda n:r('scripts-verbatim/'+n).strip('\n')
head=r('head.html').replace('{{UTMIFY_PIXEL}}',v('utmify-pixel.html')).replace('{{UTMIFY_UTMS}}',v('utmify-utms-prevent-subids.html'))
out=head+r('body.html')+'\n<!-- UTM-Weiterleitung an den Checkout (unverändert) -->\n'+v('utm-forwarding.html')+'\n</body>\n</html>\n'
open(os.path.join(root,'index.html'),'w',encoding='utf-8').write(out)
tw=os.environ.get('TAILWIND','/tmp/twbuild/node_modules/.bin/tailwindcss')
subprocess.run([tw,'-c',os.path.join(d,'tailwind.config.js'),'-i',os.path.join(d,'input.css'),'-o',os.path.join(root,'css/styles.css'),'--minify'],check=True)
