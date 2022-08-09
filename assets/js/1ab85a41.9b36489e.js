"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),o=n(7294),i=n(2389),l=n(5979),r=n(6010),s="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,d=e.block,m=e.defaultValue,u=e.values,c=e.groupId,k=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,l.UB)(),N=f.tabGroupChoices,w=f.setTabGroupChoices,y=(0,o.useState)(b),C=y[0],x=y[1],S=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var R=N[c];null!=R&&R!==C&&v.some((function(e){return e.value===R}))&&x(R)}var P=function(e){var t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==C&&(T(t),x(a),null!=c&&w(c,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;n=S[o]||S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:I,onFocus:P,onClick:P},i,{className:(0,r.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,o.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},5972:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=n(9877),r=n(8215),s=["components"],p={sidebar_position:1,sidebar_label:"I'm looking for testing",title:"I'm looking for testing"},d=void 0,m={unversionedId:"getting_started/testing",id:"getting_started/testing",title:"I'm looking for testing",description:"This chapter will help you to get started with Robot Framework.",source:"@site/docs/getting_started/testing.md",sourceDirName:"getting_started",slug:"/getting_started/testing",permalink:"/robotframeworkguides/getting_started/testing",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/getting_started/testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"I'm looking for testing",title:"I'm looking for testing"},sidebar:"tutorialSidebar",previous:{title:"About Us",permalink:"/robotframeworkguides/about_us"},next:{title:"I'm looking for RPA",permalink:"/robotframeworkguides/getting_started/rpa"}},u={},c=[{value:"Install Python",id:"install-python",level:2},{value:"Install Robot Framework",id:"install-robot-framework",level:2},{value:"Install Robot Framework globally",id:"install-robot-framework-globally",level:3},{value:"Install Robot Framework in a Virtual Environment",id:"install-robot-framework-in-a-virtual-environment",level:3},{value:"Install IDE and Extensions",id:"install-ide-and-extensions",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Install Visual Studio Code",id:"install-visual-studio-code",level:4},{value:"Windows",id:"windows",level:5},{value:"Linux",id:"linux",level:5},{value:"Install via snap",id:"install-via-snap",level:6},{value:"Install via deb",id:"install-via-deb",level:6},{value:"Install via rpm",id:"install-via-rpm",level:6},{value:"Visual Studio Code Extensions",id:"visual-studio-code-extensions",level:4},{value:"RobotCode",id:"robotcode",level:5},{value:"Robot Framework Language Server",id:"robot-framework-language-server",level:5},{value:"PyCharm",id:"pycharm",level:3},{value:"Install PyCharm",id:"install-pycharm",level:4},{value:"PyCharm extensions",id:"pycharm-extensions",level:4},{value:"Robot Framework Language Server",id:"robot-framework-language-server-1",level:5},{value:"IntelliBot #patched",id:"intellibot-patched",level:5},{value:"RIDE",id:"ride",level:3},{value:"Debugging Robot Framework Tests",id:"debugging-robot-framework-tests",level:2},{value:"Visual Studio Code with RobotCode",id:"visual-studio-code-with-robotcode",level:3},{value:"Other Recommendations",id:"other-recommendations",level:2},{value:"Managing Dependencies",id:"managing-dependencies",level:3}],k={toc:c};function h(e){var t=e.components,p=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter will help you to get started with Robot Framework."),(0,i.kt)("p",null,"So basically how to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"install Python"),(0,i.kt)("li",{parentName:"ul"},"install Robot Framework"),(0,i.kt)("li",{parentName:"ul"},"install an IDE and Extensions for code-completion and debugging")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/1jdjogCnsDk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"install-python"},"Install Python"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Download and run the ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," installer  "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select option ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Python 3.X to PATH")),(0,i.kt)("li",{parentName:"ol"},"(optional) install to a sub-folder on root of your drive (e.g. C:\\Python3.X)"),(0,i.kt)("li",{parentName:"ol"},"Open a command line by",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"Windows key + R")),(0,i.kt)("li",{parentName:"ol"},"typing ",(0,i.kt)("inlineCode",{parentName:"li"},"cmd")," and pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"Enter"),"  ")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"python -V\n"))),(0,i.kt)(r.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,"Open a terminal by either"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"Alt")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"T")),(0,i.kt)("li",{parentName:"ol"},"pressing the ",(0,i.kt)("inlineCode",{parentName:"li"},"Windows key")," and typing ",(0,i.kt)("inlineCode",{parentName:"li"},"terminal")),(0,i.kt)("li",{parentName:"ol"},"right-clicking in your file explorer and selecting ",(0,i.kt)("inlineCode",{parentName:"li"},"Open in Terminal"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3 python3-pip\npython3 -V\n")))),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Python 3.10.2\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"official Python Downloads page")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/BeginnersGuide/Download"},"Python Beginner's Guide")," for more information"))),(0,i.kt)("h2",{id:"install-robot-framework"},"Install Robot Framework"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"python, python3, pip, pip3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All following chapters assume you have Python3 and pip installed.\nWe use the commands ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," to install packages or run Python scripts.",(0,i.kt)("br",{parentName:"p"}),"\n","Depending on your setup, those commands may be ",(0,i.kt)("inlineCode",{parentName:"p"},"pip3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"python3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"python"),"."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Terminal, Bash and cmd")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When we mention the word ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal")," in the following chapters, we mean both - a linux terminal (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),") or a windows command line (",(0,i.kt)("inlineCode",{parentName:"p"},"cmd"),")."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Install globally vs. virtual environments")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Python allows you to install modules via ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),".",(0,i.kt)("br",{parentName:"p"}),"\n","By default, those modules are installed in the global Python environment."),(0,i.kt)("p",{parentName:"div"},"But especially when working on multiple projects, it is more convenient to have a separate Python environment for each project with all the required packages installed (like ",(0,i.kt)("inlineCode",{parentName:"p"},"robotframework")," or additional libraries like ",(0,i.kt)("inlineCode",{parentName:"p"},"robotframework-seleniumlibrary"),").",(0,i.kt)("br",{parentName:"p"}),"\n","To separate the global Python environment from the project environment, you can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual environment"),".",(0,i.kt)("br",{parentName:"p"}),"\n","We will cover both approaches in the following chapters."))),(0,i.kt)("h3",{id:"install-robot-framework-globally"},"Install Robot Framework globally"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Install Robot Framework globally",label:"Global",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null," Open your ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"pip install robotframework\nrobot --version\n")))),(0,i.kt)("p",null,"You should see something like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Robot Framework 5.x.y (Python 3.x.y)\n")),(0,i.kt)("h3",{id:"install-robot-framework-in-a-virtual-environment"},"Install Robot Framework in a Virtual Environment"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"We recommend to have a folder on your drive to store your projects, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\projects"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Open your ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"cd C:\\projects\nmkdir MyProject\ncd MyProject\npython -m venv .venv\n.venv\\Scripts\\activate.bat\npip install robotframework\nrobot --version\n")),(0,i.kt)("p",null,"You should see something like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"Robot Framework 5.x.y (Python 3.x.y)\n")),(0,i.kt)("p",null,"You can type ",(0,i.kt)("inlineCode",{parentName:"p"},"pip show robotframework")," to get more information about the installed version of Robot Framework and the install location.",(0,i.kt)("br",{parentName:"p"}),"\n","The virtual environment can be deactivated by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"venv\\Scripts\\deactivate.bat"),"."),(0,i.kt)("p",null,"If you prefer to use ",(0,i.kt)("inlineCode",{parentName:"p"},"PowerShell")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd"),", you can use the following commands for activating and deactivating the virtual environment:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Activate: ",(0,i.kt)("inlineCode",{parentName:"li"},"venv\\Scripts\\activate.ps1")),(0,i.kt)("li",{parentName:"ul"},"Deactivate: ",(0,i.kt)("inlineCode",{parentName:"li"},"venv\\Scripts\\deactivate.ps1"),"  "))),(0,i.kt)(r.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,"We recommend to have a folder on your drive to store your projects, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"~/projects"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Open your ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"cd ~/projects\nmkdir MyProject\ncd MyProject\npython -m venv .venv\nsource .venv/bin/activate\npip install robotframework\nrobot --version\n")),(0,i.kt)("p",null,"You should see something like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"Robot Framework 5.x.y (Python 3.x.y)\n")),(0,i.kt)("p",null,"The virtual environment can be deactivated by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"source .venv/bin/deactivate"),"."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Show info about installed packages")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can type ",(0,i.kt)("inlineCode",{parentName:"p"},"pip show robotframework")," to get more information about the installed version of Robot Framework and the install location."))),(0,i.kt)("h2",{id:"install-ide-and-extensions"},"Install IDE and Extensions"),(0,i.kt)("p",null,"Several IDEs and Code Editors support the development of Robot Framework tests.",(0,i.kt)("br",{parentName:"p"}),"\n","The support ranges from simple code-highlighting, code-completion to test execution and debugging.",(0,i.kt)("br",{parentName:"p"}),"\n","We list several IDEs and Extensions here, but there are many more."),(0,i.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,"An Open Source and Lightweight Code-Editor developed by Microsoft.\n",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/"),"\nIt provides extensions for a lot of different languages and technologies."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VS Code",src:n(6991).Z,width:"1045",height:"650"})),(0,i.kt)("p",null,"Popular extensions for Robot Framework:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode"},"Robot Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp"},"Robot Framework Language Server"))),(0,i.kt)("h4",{id:"install-visual-studio-code"},"Install Visual Studio Code"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/setup/setup-overview"},"VS Code setup guide")," for more information."),(0,i.kt)("h5",{id:"windows"},"Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the Windows installer from ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"Visual Studio Code")),(0,i.kt)("li",{parentName:"ol"},"Run the Installer with default settings"),(0,i.kt)("li",{parentName:"ol"},"Start Visual Studio Code either by",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"Windows key + R"),", typing ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," and pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"Enter")),(0,i.kt)("li",{parentName:"ol"},"Opening the start menu, searching for ",(0,i.kt)("inlineCode",{parentName:"li"},"Visual Studio Code")," and clicking on it")))),(0,i.kt)("h5",{id:"linux"},"Linux"),(0,i.kt)("h6",{id:"install-via-snap"},"Install via snap"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a terminal "),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo snap install code --classic")),(0,i.kt)("li",{parentName:"ol"},"Start Visual Studio Code by executing ",(0,i.kt)("inlineCode",{parentName:"li"},"code"))),(0,i.kt)("h6",{id:"install-via-deb"},"Install via deb"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the deb package from ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"Visual Studio Code")),(0,i.kt)("li",{parentName:"ol"},"Open a terminal"),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo dpkg -i <path_to_deb_package>"),(0,i.kt)("br",{parentName:"li"}),"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo dpkg -i ~/Downloads/code_1.65.2-1646927742_amd64.deb")),(0,i.kt)("li",{parentName:"ol"},"Start Visual Studio Code by executing ",(0,i.kt)("inlineCode",{parentName:"li"},"code"))),(0,i.kt)("h6",{id:"install-via-rpm"},"Install via rpm"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the rpm package from ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"Visual Studio Code")),(0,i.kt)("li",{parentName:"ol"},"Open a terminal"),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo rpm -i <path_to_rpm_package>"),(0,i.kt)("br",{parentName:"li"}),"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo rpm -i ~/Downloads/code-1.65.2-1646927812.el7.x86_64.rpm")),(0,i.kt)("li",{parentName:"ol"},"Start Visual Studio Code by executing ",(0,i.kt)("inlineCode",{parentName:"li"},"code"))),(0,i.kt)("h4",{id:"visual-studio-code-extensions"},"Visual Studio Code Extensions"),(0,i.kt)("p",null,"Make sure that only one single Robot Framework extension is installed."),(0,i.kt)("h5",{id:"robotcode"},"RobotCode"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode"},"RobotCode")," is a Visual Studio Code extension for Robot Framework."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RobotCode",src:n(9462).Z,width:"773",height:"350"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Visual Studio Code"),(0,i.kt)("li",{parentName:"ol"},"Click on Extensions icon or press ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + X")),(0,i.kt)("li",{parentName:"ol"},"Search for ",(0,i.kt)("inlineCode",{parentName:"li"},"RobotCode")," and click on it"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Install"))),(0,i.kt)("h5",{id:"robot-framework-language-server"},"Robot Framework Language Server"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp"},"Robot Framework Language Server")," is a Visual Studio Code extension for Robot Framework."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Robot Framework Language Server",src:n(4973).Z,width:"941",height:"301"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Visual Studio Code"),(0,i.kt)("li",{parentName:"ol"},"Click on Extensions icon or press ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + X")),(0,i.kt)("li",{parentName:"ol"},"Search for ",(0,i.kt)("inlineCode",{parentName:"li"},"Robot Framework Language Server")," and click on it"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Install"))),(0,i.kt)("h3",{id:"pycharm"},"PyCharm"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/pycharm/"},"PyCharm")," is a free and open-source IDE for Python."),(0,i.kt)("p",null,"Popular extensions for Robot Framework:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/16086-robot-framework-language-server"},"Robot Framework Language Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/17424-intellibot-patched"},"Intellibot (patched)"))),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/srgZ3eQ6erw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h4",{id:"install-pycharm"},"Install PyCharm"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/pycharm/2021.3/installation-guide.html"},"PyCharm installation instructions")," for more information."),(0,i.kt)("p",null,"There two installation approaches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The recommended one by JetBrains using the ",(0,i.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/toolbox/app/installation.html"},"Toolbox App"),"."),(0,i.kt)("li",{parentName:"ul"},"The alternative ",(0,i.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/pycharm/2021.3/installation-guide.html#standalone"},"stand alone installation"))),(0,i.kt)("p",null,"Make sure to install the free ",(0,i.kt)("inlineCode",{parentName:"p"},"PyCharm Community Edition")," and not the ",(0,i.kt)("inlineCode",{parentName:"p"},"PyCharm Professional")," version."),(0,i.kt)("h4",{id:"pycharm-extensions"},"PyCharm extensions"),(0,i.kt)("p",null,"Make sure that only one single Robot Framework extension is installed."),(0,i.kt)("h5",{id:"robot-framework-language-server-1"},"Robot Framework Language Server"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl + Alt + S")," to open the settings dialog"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Plugins")),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Marketplace")," tab"),(0,i.kt)("li",{parentName:"ol"},"Search for ",(0,i.kt)("inlineCode",{parentName:"li"},"Robot Framework Language Server")," and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Install"))),(0,i.kt)("h5",{id:"intellibot-patched"},"IntelliBot #patched"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl + Alt + S")," to open the settings dialog"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Plugins")),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Marketplace")," tab"),(0,i.kt)("li",{parentName:"ol"},"Search for ",(0,i.kt)("inlineCode",{parentName:"li"},"IntelliBot #patched")," and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Install"))),(0,i.kt)("h3",{id:"ride"},"RIDE"),(0,i.kt)("h2",{id:"debugging-robot-framework-tests"},"Debugging Robot Framework Tests"),(0,i.kt)("h3",{id:"visual-studio-code-with-robotcode"},"Visual Studio Code with RobotCode"),(0,i.kt)("p",null,"Add a breakpoint to your test suite or resource file, by clicking on the left-hand side of the line.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Breakpoint",src:n(7582).Z,width:"567",height:"157"})),(0,i.kt)("p",null,"Right-Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Play")," button",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Play Button",src:n(7969).Z,width:"568",height:"155"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug Test")," from the context menu.",(0,i.kt)("br",{parentName:"p"}),"\n","Test Execution will begin and stop at the breakpoint.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Debug Test",src:n(6752).Z,width:"567",height:"245"})),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug Toolbar")," to select actions like step over, step into, step out, continue, pause, etc.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Debug Toolbar",src:n(4034).Z,width:"905",height:"311"})),(0,i.kt)("p",null,"Run Robot Frameworm commands while debugging from ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug Console"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Commands needs to start with ",(0,i.kt)("inlineCode",{parentName:"p"},"! "),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Debug Console",src:n(8498).Z,width:"762",height:"199"})),(0,i.kt)("h2",{id:"other-recommendations"},"Other Recommendations"),(0,i.kt)("h3",{id:"managing-dependencies"},"Managing Dependencies"))}h.isMDXComponent=!0},7582:function(e,t,n){t.Z=n.p+"assets/images/VSC_AddBreakpoint-b3c9ac05bdc94b85a7c0e5a5f32feb81.png"},4034:function(e,t,n){t.Z=n.p+"assets/images/VSC_DebugToolbar-bf8f5055a7f6b8c1dc117164b1a823b5.png"},6752:function(e,t,n){t.Z=n.p+"assets/images/VSC_RBTCD_Debug-c66a09ddad30395b99b896f1e7bb39e3.png"},7969:function(e,t,n){t.Z=n.p+"assets/images/VSC_RBTCD_PlayBtn-1b54053a7594e08a5014792001f77936.png"},8498:function(e,t,n){t.Z=n.p+"assets/images/VSC_RBTCD_executeDebugCommands-dbae7bf94db56294f709d7f72ec83c05.png"},4973:function(e,t,n){t.Z=n.p+"assets/images/rflsp-c0ed9dc55322bbce185e44461e74f688.png"},9462:function(e,t,n){t.Z=n.p+"assets/images/robotcode-8a1f0cbaa90582027dbcfbc35532aedd.png"},6991:function(e,t,n){t.Z=n.p+"assets/images/vscode_site-071a6c131589f16534a055908a7d7ed4.png"}}]);