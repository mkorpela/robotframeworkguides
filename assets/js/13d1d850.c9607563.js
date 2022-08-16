"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[630],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return b}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(t),b=o,m=f["".concat(u,".").concat(b)]||f[b]||c[b]||a;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9726:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_label:"Restful Booker",title:"Restful Booker"},u=void 0,p={unversionedId:"examples/restfulbooker",id:"examples/restfulbooker",title:"Restful Booker",description:"Webpage//restful-booker.herokuapp.com/",source:"@site/docs/examples/restfulbooker.md",sourceDirName:"examples",slug:"/examples/restfulbooker",permalink:"/robotframeworkguides/examples/restfulbooker",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/examples/restfulbooker.md",tags:[],version:"current",frontMatter:{sidebar_label:"Restful Booker",title:"Restful Booker"},sidebar:"tutorialSidebar",previous:{title:"Vehicle Insurance App",permalink:"/robotframeworkguides/examples/insurance"},next:{title:"TodoMVC",permalink:"/robotframeworkguides/examples/todo"}},l={},c=[],f={toc:c};function b(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Webpage: ",(0,a.kt)("a",{parentName:"p",href:"https://restful-booker.herokuapp.com/"},"https://restful-booker.herokuapp.com/"),(0,a.kt)("br",{parentName:"p"}),"\n","GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mwinteringham/restful-booker"},"https://github.com/mwinteringham/restful-booker")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    RequestsLibrary\nLibrary    Collections\nSuite Setup    Authenticate as Admin\n\n*** Test Cases ***\nGet Bookings from Restful Booker\n    ${response}    GET    https://restful-booker.herokuapp.com/booking\n    Status Should Be    200\n    Log List    ${response.json()}\n    \n\nCreate a Booking at Restful Booker\n    ${booking_dates}    Create Dictionary    checkin=2022-12-31    checkout=2023-01-01\n    ${body}    Create Dictionary    firstname=Hans    lastname=Gruber    totalprice=200    depositpaid=false    bookingdates=${booking_dates}\n    ${response}    POST    url=https://restful-booker.herokuapp.com/booking    json=${body}\n    Status Should Be    200\n    ${id}    Set Variable    ${response.json()}[bookingid]\n    Set Suite Variable    ${id}\n    ${response}    GET    https://restful-booker.herokuapp.com/booking/${id}\n    Log    ${response.json()}\n    Should Be Equal    ${response.json()}[lastname]    Gruber\n    Should Be Equal    ${response.json()}[firstname]    Hans   \n    Should Be Equal As Numbers    ${response.json()}[totalprice]    200\n    Dictionary Should Contain Value     ${response.json()}    Gruber\n\nDelete Booking\n    ${header}    Create Dictionary    Cookie=token\\=${token}\n    ${response}    DELETE    url=https://restful-booker.herokuapp.com/booking/${id}    headers=${header}   \n    Status Should Be    201    ${response}\n\n*** Keywords ***\nAuthenticate as Admin\n    ${body}    Create Dictionary    username=admin    password=password123\n    ${response}    POST    url=https://restful-booker.herokuapp.com/auth    json=${body}\n    Log    ${response.json()}\n    ${token}    Set Variable    ${response.json()}[token]\n    Log    ${token}\n    Set Suite Variable    ${token}\n")))}b.isMDXComponent=!0}}]);