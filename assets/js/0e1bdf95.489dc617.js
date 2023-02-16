"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[242],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8079:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return p},assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s=void 0,d={unversionedId:"Data Modelling/Background",id:"Data Modelling/Background",title:"Background",description:"We have so far set up the data preprocessing pipeline with a data lake hosted at Azure blob",source:"@site/docs/Data Modelling/Background.md",sourceDirName:"Data Modelling",slug:"/Data Modelling/Background",permalink:"/homepage/docs/Data Modelling/Background",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Data Modelling/Background.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Preprocessing and Database Management",permalink:"/homepage/docs/Data Management/Data Preprocessing and Database Management"},next:{title:"Models",permalink:"/homepage/docs/Data Modelling/Models"}},c={},u=[],p=function(e){var t=e.children;return(0,o.kt)("p",{style:{textAlign:"center",fontStyle:"italic"}},t)},h={toc:u,Highlight:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have so far set up the data preprocessing pipeline with a data lake hosted at Azure blob\nstorage and a data warehouse at Snowflake. The data at the Snowflake can be accessed via\nSQL queries. Blob storage has a web-based UI at the Azure portal and a python-based blob\nstorage connector using the azure-blob-storage package, which will require the connection\nstring of the blob storage account. For data modelling, we need medical and meteorological\ndata. Both the data have been hosted on Azure with pre-determined schemas."),(0,o.kt)("p",null,"We consider our prediction task a time series problem in which we generally have some\nindependent time series, which are then modelled to make predictions. Many traditional time\nseries-based models exist, like ARIMA and SARIMA. We only focus on machine learning\nand deep learning-based models as they don\u2019t require any prior assumptions about the data\nor the situations. Also, there are no restrictions on the type of data we use. We are currently\nusing tabular data, but in the future, we aim to use satellite image data for land cover, usage\nand locating nearby waterbodies."),(0,o.kt)("p",null,"We have access to health data at the SC level, but the main problem is acquiring the\nSC level meteorological data. All the data vendors provide the data for the square region\nof any requested part, and we need to use proper shape files to crop the data (For that, we\nuse Geopandas and Xarray-based calculations in python. The same task can be performed\nin software like GIS or QGIS, but down the line, we are aiming to automate the process\nand using the software would create a bottleneck ). The shape files ready to process are at\nthe sub-district level, but we will need more granularity to achieve SC-level predictions. We 33\nhave used PIN code level data to group all the pin codes of a CHC (with reference to ground\nlevel workers) and create CHC level maps. Getting an SC-level shape map by aggregation\nis still challenging, and we look forward to finding the relevant solution. So, we will be only\nmaking predictions at the CHC level."),(0,o.kt)("p",null,"We have planned to make prediction models which take input of just past four data points\nand make predictions on the following four points. To understand this situation better, let\nus simplify predicting rainfall using past rainfall records only. So we will take the input of\nthe past four-week rainfall value and try to predict the fifth-week rainfall value. This forecast\nwill be a lead time 1-week forecast:"),(0,o.kt)(p,{mdxType:"Highlight"},"Rainfall(t, t \u2212 \u03c4, t \u2212 2\u03c4, t \u2212 3\u03c4 ) \u2212\u2192 Rainfall(t + \u03c4 )"),(0,o.kt)("p",null,"Subsequently, if we try to forecast the sixth week, we call it a lead time 2-week forecast:"),(0,o.kt)(p,{mdxType:"Highlight"},"Rainfall(t, t \u2212 \u03c4, t \u2212 2\u03c4, t \u2212 3\u03c4 ) \u2212\u2192 Rainfall(t + 2\u03c4 )"),(0,o.kt)("p",null,"If we try to capture this harmony, we need to create the input and output data during\nmodel training such that we have a lag of 1 data point in the output column for lead time,\none-month forecast, and the pattern follows. To create this continuous lag and feed it into the\nmodel, we have used some libraries in Tensorflow, which will automate the process (details\nare in the next section)."),(0,o.kt)("p",null,"We will start with simple models from linear regression (in a multivariate setting) and\ntry to add complexities to achieve the desired accuracy or skill score. These simple models\nmake individual models for each CHC or SCs and make individual predictions. It is an\nexcellent approach to learning and development to see how each CHC and SC data behave\nand how each data differs. Down the development process, we will need a single model to\nperform all our prediction tasks for the production and deployment processes for all the\ndesired locations. For the unified model, we aim to build the state-of-the-art deep-ar model.\nDeep-ar is a deep learning-based model which uses LSTM layers at its core, but the difference\nlies in their architecture."),(0,o.kt)("p",null,"We currently have elementary models like linear regression and single-layer LSTM models\nthat do not have outstanding skill scores. Some hyperparameter tuning is underway to get\nthe best out of these simple models to set the baseline performance. There might be many\nmodels we are unaware of, but they might perform better than our range of selected models.\nWe are collaborating with leading industry and research experts in malaria planning and\nprediction to contribute"))}m.isMDXComponent=!0}}]);