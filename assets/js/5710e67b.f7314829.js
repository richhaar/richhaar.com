"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[283],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||x[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1907:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return x},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={slug:"npmpackage",title:"Publishing C++ as a JavaScript NPM package",authors:"rich",tags:["C++","JavaScript","Node"]},s=void 0,l={permalink:"/npmpackage",editUrl:"https://github.com/richhaar/richhaar.com/edit/main/blog/2021-10-23-first-npm-package-autosar-crc.md",source:"@site/blog/2021-10-23-first-npm-package-autosar-crc.md",title:"Publishing C++ as a JavaScript NPM package",description:"NPM",date:"2021-10-23T00:00:00.000Z",formattedDate:"October 23, 2021",tags:[{label:"C++",permalink:"/tags/c"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"Node",permalink:"/tags/node"}],readingTime:7.96,truncated:!0,authors:[{name:"Richard Haar",title:"Computer Scientist",url:"https://github.com/richhaar",imageURL:"/img/profile2.png",key:"rich"}],nextItem:{title:"Puppeteer - Browsing the web without a head",permalink:"/puppeteer"}},p={authorsImageUrls:[void 0]},x=[{value:"NPM",id:"npm",children:[]},{value:"Cyclic Redundancy Checks",id:"cyclic-redundancy-checks",children:[{value:"Difference between CRC 8-16-32-64",id:"difference-between-crc-8-16-32-64",children:[]},{value:"The C++ Code",id:"the-c-code",children:[]},{value:"AUTOSAR",id:"autosar",children:[]}]},{value:"C++ over to JavaScript",id:"c-over-to-javascript",children:[{value:"Building the C++",id:"building-the-c",children:[]},{value:"Testing with Jest",id:"testing-with-jest",children:[]},{value:"Publishing to NPM",id:"publishing-to-npm",children:[]}]}],d={toc:x};function u(e){var t=e.components,c=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"npm"},"NPM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," hosts over 1.7 million packages at the time of writing, with over 35 billion downloaded packages in the last week alone. Originally the package manager for Node.js, but taking over as the package manager for all of JavaScript. The cool thing with Node.js is that you can compile some C++ to a node addon, making it available for use in JavaScript, so you get the benefit of native code."),(0,i.kt)("p",null,"So for my first publicly uploaded NPM module, I wanted to create a Cyclic Redundancy Check (CRC) module that conformed to the AUTOSAR (AUTomotive Open System ARchitecture) spec but written in C++."),(0,i.kt)("h2",{id:"cyclic-redundancy-checks"},"Cyclic Redundancy Checks"),(0,i.kt)("p",null,"A Cyclic redundancy check is in essence a technique used to verify that a message has been sent correctly. For example to detect if a bit get's corrupted when tranferring across a 1GB file. A simple implementation would be to sum every byte in that 1GB transmission and modulo 256 that sum and append that new byte at the end of the transmission. Such that whoever recieved the transmission could do the same check and make sure the final byte matched. The problem with this sort of naiive check is that maybe two bytes get corrupted and the checks match."),(0,i.kt)("p",null,"CRC builds on this initial idea but works by treating the data as a binary polynomial e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1011 = 1*x^3 + 0*x^2 + 1*x^1 + 1*x^0\n     = x^3 + x^1 + x^0\n")),(0,i.kt)("p",null,"And then finding a polynomial divisor, which is why the different CRC's are referred to as different polynomials, for example the CRC16-CCITT polynomial is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"x^16 + x^12 + x^5 + x^0\n")),(0,i.kt)("p",null,"Hence to get the CRC16-CCITT of some data, the data will be treated as a long binary polynomial, binary poylnomial division will divide it by the above polynomial, and the returned remainder will be the CRC value."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"17 bit Polynomial for CRC16")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note here that the divisor of a CRC16 calculation is 17 bits, and polynomails may be expressed with 16 bits as the first bit is assumed to be 1. The remainder here is 16 bits."))),(0,i.kt)("p",null,"This is just a very brief overview of how CRC works, for the math behind the CRC error detection see ",(0,i.kt)("a",{parentName:"p",href:"https://zlib.net/crc_v3.txt"},"Ross William's painless guide to CRC error detection")," (although note the source has some errors)."),(0,i.kt)("h3",{id:"difference-between-crc-8-16-32-64"},"Difference between CRC 8-16-32-64"),(0,i.kt)("p",null,"The benefit of CRC is to give you basically a unique 8/16/32/64 bit encoding for your data source. Now with an 8 bit CRC, you can encode 256 different unique values. Whereas with a 32 bit encoding, there are 4,294,967,295 unique values. Hence the chance of corrupted data being encoded to the true encoded string accidentally should go down. Although you have to transmit more bytes with the original data message, so for small data messages it might make sense to append a small 8 bit crc."),(0,i.kt)("h3",{id:"the-c-code"},"The C++ Code"),(0,i.kt)("p",null,"The core table based algorithm works by generating a table of 256 entries based on the given polynomial divisor and looping through each byte in the transmission. The below code is the basis for the CRC8 conforming to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SAE_J1850")," polynomial."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n    CRC result width: 8 bits\n    Polynomial: 0x1D\n    Initial value: 0xFF\n    Input data reflected: No\n    Result data reflected: No\n    XOR value: 0xFF\n    Check: 0x4B\n    Magic check: 0xC4\n*/\nuint8_t constexpr crc8_SAE_J1850[256] =\n{\n    0x00, 0x1D, 0x3A, 0x27, 0x74, 0x69, 0x4E, 0x53, 0xE8, 0xF5, 0xD2, 0xCF, 0x9C, 0x81, 0xA6, 0xBB,\n    0xCD, 0xD0, 0xF7, 0xEA, 0xB9, 0xA4, 0x83, 0x9E, 0x25, 0x38, 0x1F, 0x02, 0x51, 0x4C, 0x6B, 0x76,\n    0x87, 0x9A, 0xBD, 0xA0, 0xF3, 0xEE, 0xC9, 0xD4, 0x6F, 0x72, 0x55, 0x48, 0x1B, 0x06, 0x21, 0x3C,\n    0x4A, 0x57, 0x70, 0x6D, 0x3E, 0x23, 0x04, 0x19, 0xA2, 0xBF, 0x98, 0x85, 0xD6, 0xCB, 0xEC, 0xF1,\n    0x13, 0x0E, 0x29, 0x34, 0x67, 0x7A, 0x5D, 0x40, 0xFB, 0xE6, 0xC1, 0xDC, 0x8F, 0x92, 0xB5, 0xA8,\n    0xDE, 0xC3, 0xE4, 0xF9, 0xAA, 0xB7, 0x90, 0x8D, 0x36, 0x2B, 0x0C, 0x11, 0x42, 0x5F, 0x78, 0x65,\n    0x94, 0x89, 0xAE, 0xB3, 0xE0, 0xFD, 0xDA, 0xC7, 0x7C, 0x61, 0x46, 0x5B, 0x08, 0x15, 0x32, 0x2F,\n    0x59, 0x44, 0x63, 0x7E, 0x2D, 0x30, 0x17, 0x0A, 0xB1, 0xAC, 0x8B, 0x96, 0xC5, 0xD8, 0xFF, 0xE2,\n    0x26, 0x3B, 0x1C, 0x01, 0x52, 0x4F, 0x68, 0x75, 0xCE, 0xD3, 0xF4, 0xE9, 0xBA, 0xA7, 0x80, 0x9D,\n    0xEB, 0xF6, 0xD1, 0xCC, 0x9F, 0x82, 0xA5, 0xB8, 0x03, 0x1E, 0x39, 0x24, 0x77, 0x6A, 0x4D, 0x50,\n    0xA1, 0xBC, 0x9B, 0x86, 0xD5, 0xC8, 0xEF, 0xF2, 0x49, 0x54, 0x73, 0x6E, 0x3D, 0x20, 0x07, 0x1A,\n    0x6C, 0x71, 0x56, 0x4B, 0x18, 0x05, 0x22, 0x3F, 0x84, 0x99, 0xBE, 0xA3, 0xF0, 0xED, 0xCA, 0xD7,\n    0x35, 0x28, 0x0F, 0x12, 0x41, 0x5C, 0x7B, 0x66, 0xDD, 0xC0, 0xE7, 0xFA, 0xA9, 0xB4, 0x93, 0x8E,\n    0xF8, 0xE5, 0xC2, 0xDF, 0x8C, 0x91, 0xB6, 0xAB, 0x10, 0x0D, 0x2A, 0x37, 0x64, 0x79, 0x5E, 0x43,\n    0xB2, 0xAF, 0x88, 0x95, 0xC6, 0xDB, 0xFC, 0xE1, 0x5A, 0x47, 0x60, 0x7D, 0x2E, 0x33, 0x14, 0x09,\n    0x7F, 0x62, 0x45, 0x58, 0x0B, 0x16, 0x31, 0x2C, 0x97, 0x8A, 0xAD, 0xB0, 0xE3, 0xFE, 0xD9, 0xC4, \n};\n\n/**\n    Normal crc 8 bit and 16 bit table based calculation\n*/\nuint8_t crc8(std::string_view const s, uint8_t const* const table) {\n    uint8_t crc = 0xFF;\n\n    for (uint8_t const& ch : s) {\n        crc = table[ch ^ crc];\n    }\n\n    return ~crc;\n}\n")),(0,i.kt)("p",null,"Credit to ",(0,i.kt)("a",{parentName:"p",href:"http://www.sunshine2k.de/coding/javascript/crc/crc_js.html"},"Bastian Molkenthin")," for the table generation."),(0,i.kt)("h3",{id:"autosar"},"AUTOSAR"),(0,i.kt)("p",null,"If you'ever worked with safety critical software in C++, you've probably heard of MISRA or AUTOSAR. As they both publish a strict set of C++ rules to follow in safety critical systems. AUTOSAR also happens to publish a document specifying a set of CRC polynomials and corresponding tests ",(0,i.kt)("a",{parentName:"p",href:"https://www.autosar.org/fileadmin/user_upload/standards/classic/20-11/AUTOSAR_SWS_CRCLibrary.pdf"},"found here"),"."),(0,i.kt)("h2",{id:"c-over-to-javascript"},"C++ over to JavaScript"),(0,i.kt)("p",null,"Now with the C++ code, to make it available to NPM it has to converted to a node module using the Node Addon API (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-addon-api/tree/main/doc"},"docs here"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-addon-examples"},"examples here"),"). But the basis is to define a Node Addon API (Napi) object with the functions to export. The code to setup the export of the above crc8 call is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <napi.h>\n// ...\n\ntemplate<typename f>\nNapi::Value CallCRC(Napi::CallbackInfo const& info, f func) {\n    Napi::Env env = info.Env();\n\n    if (info.Length() !=  1) {\n        Napi::TypeError::New(env, "Expected one argument.")\n            .ThrowAsJavaScriptException();\n        return env.Null();\n    }  \n\n    std::string_view sv{};\n\n    if(info[0].IsString()) {\n        Napi::String str = info[0].As<Napi::String>();\n        sv = str.Utf8Value();\n    } else if(info[0].IsTypedArray()) {\n        Napi::TypedArray const arr = info[0].As<Napi::TypedArray>();\n        Napi::ArrayBuffer buf = arr.ArrayBuffer();\n        sv = std::string_view(reinterpret_cast<const char*>(buf.Data()), buf.ByteLength());\n    } else if(info[0].IsArrayBuffer()) {\n        Napi::ArrayBuffer buf = info[0].As<Napi::ArrayBuffer>();\n        sv = std::string_view(reinterpret_cast<const char*>(buf.Data()), buf.ByteLength());\n    } else {\n        Napi::TypeError::New(env, "Expected String, TypedArray or ArrayBuffer.")\n            .ThrowAsJavaScriptException();\n        return env.Null();\n    }\n\n    return Napi::Number::New(env, func(sv));\n}\n\nNapi::Value call_crc8_SAE_J1850(Napi::CallbackInfo const& info)\n{\n    return CallCRC(info, std::bind(crc8, _1, tables::crc8_SAE_J1850));\n}\n\nNapi::Object Init(Napi::Env env, Napi::Object exports) {\n    exports.Set(Napi::String::New(env, "crc8"), Napi::Function::New(env, call_crc8_SAE_J1850));\n    return exports;\n}\n\nNODE_API_MODULE(crc_addon, Init)\n\n')),(0,i.kt)("p",null,"Which in essence, set's up the node module to have a ",(0,i.kt)("inlineCode",{parentName:"p"},'"crc8"')," member call the ",(0,i.kt)("inlineCode",{parentName:"p"},"call_crc8_SAE_J1850")," function with the JavaScript input arguments found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," object. This ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," object is checked for it's type and converted into a ",(0,i.kt)("inlineCode",{parentName:"p"},"string_view")," before being run through the ",(0,i.kt)("inlineCode",{parentName:"p"},"crc8")," function and returning a ",(0,i.kt)("inlineCode",{parentName:"p"},"uint8_t")," which is then changed into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Napi::Number")," corresponding to a JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,i.kt)("h3",{id:"building-the-c"},"Building the C++"),(0,i.kt)("p",null,"The C++ is built with ",(0,i.kt)("inlineCode",{parentName:"p"},"node-gyp")," where you can set your optimisation level and which standard of C++ to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "targets": [\n    {\n      "target_name": "crc_addon",\n      "cflags!": [ "-fno-exceptions" ],\n      "cflags_cc!": [ "-fno-exceptions", "-std=c++17", "-Ofast" ],\n      "sources": [ "./src/main.cpp" ],\n      "include_dirs": [\n        "<!@(node -p \\"require(\'node-addon-api\').include\\")"\n      ],\n      "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],\n\n      "xcode_settings": {\n          "OTHER_CFLAGS": [ "-std=c++17", "-Ofast" ],\n      },\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"And with an NPM project (after running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm init"),"), inside ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," you can set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "install": "node-gyp rebuild"\n},\n"gypfile": true,\n')),(0,i.kt)("p",null,"to build the node module with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),". Now you can set the entry point to the package to the ",(0,i.kt)("inlineCode",{parentName:"p"},".node")," file just built or make a ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file export the node itself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = require('../build/Release/crc_addon.node');\n")),(0,i.kt)("h3",{id:"testing-with-jest"},"Testing with Jest"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," provides a pretty convenient testing framework in JavaScript. As mentioned AUTOSAR define's a set of tests and for a given set of bits a certain CRC should be returned. The tests for the crc8 function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const autocrc = require('./index.js'); \n\nconst row_1 = new Uint8Array([0x00, 0x00, 0x00, 0x00]);\nconst row_2 = new Uint8Array([0xF2, 0x01, 0x83]);\nconst row_3 = new Uint8Array([0x0F, 0xAA, 0x00, 0x55]);\nconst row_4 = new Uint8Array([0x00, 0xFF, 0x55, 0x11]);\nconst row_5 = new Uint8Array([0x33, 0x22, 0x55, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]);\nconst row_6 = new Uint8Array([0x92, 0x6B, 0x55]);\nconst row_7 = new Uint8Array([0xFF, 0xFF, 0xFF, 0xFF]);\n\nconst check_str = '123456789';\n\ntest('crc8 check matches AUTOSAR table', () => {\n  expect(autocrc.crc8(row_1)).toBe(0x59);\n  expect(autocrc.crc8(row_2)).toBe(0x37);\n  expect(autocrc.crc8(row_3)).toBe(0x79);\n  expect(autocrc.crc8(row_4)).toBe(0xB8);\n  expect(autocrc.crc8(row_5)).toBe(0xCB);\n  expect(autocrc.crc8(row_6)).toBe(0x8C);\n  expect(autocrc.crc8(row_7)).toBe(0x74);\n\n  expect(autocrc.crc8(check_str)).toBe(0x4B);\n});\n\n// ...\n")),(0,i.kt)("p",null,"And running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm test")," after setting our ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," command in the package to be ",(0,i.kt)("inlineCode",{parentName:"p"},"jest")," gives:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> autosar-crc@1.0.1 test\n> jest\n\n PASS  src/main.test.js\n  \u2713 crc8 check matches AUTOSAR table (4 ms)\n  \u2713 crc8h2f check matches AUTOSAR table (1 ms)\n  \u2713 crc16 check matches AUTOSAR table (1 ms)\n  \u2713 crc32 check matches AUTOSAR table (2 ms)\n  \u2713 crc32_p4 check matches AUTOSAR table (1 ms)\n  \u2713 crc64 check matches AUTOSAR table (2 ms)\n  \u2713 crc accepts string (2 ms)\n  \u2713 crc accepts ArrayBuffer\n  \u2713 crc accepts TypedArray\n\nTest Suites: 1 passed, 1 total\nTests:       9 passed, 9 total\nSnapshots:   0 total\nTime:        0.453 s, estimated 1 s\n")),(0,i.kt)("h3",{id:"publishing-to-npm"},"Publishing to NPM"),(0,i.kt)("p",null,"Now finally after having tested the JavaScript module, if you go through the steps of running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm publish"),", you'll end up with an NPM module written in C++ and ready for use in JavaScript."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image of uploaded NPM package",src:n(1279).Z})),(0,i.kt)("p",null,"All the code used here is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/richhaar/autosar-crc"},"GitHub"),"."),(0,i.kt)("p",null,"And for the final result, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/autosar-crc"},"autosar-crc")," on the NPM registry."))}u.isMDXComponent=!0},1279:function(e,t,n){t.Z=n.p+"assets/images/autosar-crc-module-9d028d783619246576d2025563fb665a.png"}}]);