(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0049":function(e,t,n){"use strict";var r=n("65ee").IteratorPrototype,i=n("6756"),o=n("8d23"),s=n("77da"),a=n("ca70"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"0209":function(e,t,n){var r=n("6185"),i=n("4650"),o=n("db8f"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"0366":function(e,t,n){var r=n("1c0b");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"0368":function(e,t,n){var r=n("a714");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?a(e):i(r(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("c04e"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=s(e),t=a(t,!0),u)try{return l(e,t)}catch(n){}if(c(e,t))return o(!i.f.call(e,t),e[t])}},"0761":function(e,t,n){var r=n("09e4"),i=n("4dd8"),o=n("2505"),s=n("d0c8"),a=n("dcbd"),c=n("caad"),u=n("b139"),l=n("c0c7"),h=n("91c5"),d=n("c35a"),f=n("8181"),p=r.TypeError,g=function(e,t){this.stopped=e,this.result=t},m=g.prototype;e.exports=function(e,t,n){var r,v,y,b,w,E,O,_=n&&n.that,T=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),C=i(t,_),A=function(e){return r&&f(r,"normal",e),new g(!0,e)},k=function(e){return T?(s(e),I?C(e[0],e[1],A):C(e[0],e[1])):I?C(e,A):C(e)};if(S)r=e;else{if(v=d(e),!v)throw p(a(e)+" is not iterable");if(c(v)){for(y=0,b=u(e);b>y;y++)if(w=k(e[y]),w&&l(m,w))return w;return new g(!1)}r=h(e,v)}E=r.next;while(!(O=o(E,r)).done){try{w=k(O.value)}catch(x){f(r,"throw",x)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"0828":function(e,t,n){var r=n("0f33"),i=n("db8f");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return $o})),n.d(t,"b",(function(){return Bs})),n.d(t,"c",(function(){return zo})),n.d(t,"d",(function(){return Ms})),n.d(t,"e",(function(){return Wo})),n.d(t,"f",(function(){return As})),n.d(t,"g",(function(){return Fs})),n.d(t,"h",(function(){return xs}));var r=n("589b"),i=n("22e5"),o=n("e691"),s=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new o["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e,...t){if(h.logLevel<=o["a"].DEBUG){const n=t.map(m);h.debug(`Firestore (${l}): ${e}`,...n)}}function p(e,...t){if(h.logLevel<=o["a"].ERROR){const n=t.map(m);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=o["a"].WARN){const n=t.map(m);h.warn(`Firestore (${l}): ${e}`,...n)}}function m(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw p(t),new Error(t)}function y(e,t){e||v()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends s["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new O;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new O,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},s=e=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new O)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(y("string"==typeof t.accessToken),new _(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return y(null===e||"string"==typeof e),new u(e)}}class I{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class C{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new I(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.p;return this.p=e.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(y("string"==typeof e.token),this.p=e.token,new A(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */x.A=-1;class P{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function j(e,t){return e<t?-1:e>t?1:0}function R(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return L.fromMillis(Date.now())}static fromDate(e){return L.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new L(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new L(0,0))}static max(){return new D(new L(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function F(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class V extends U{construct(e,t,n){return new V(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new V(t)}static emptyPath(){return new V([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends U{construct(e,t,n){return new H(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.fields=e,e.sort(H.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return R(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new z(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new z(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}z.EMPTY_BYTE_STRING=new z("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(e){if(y(!!e),"string"==typeof e){let t=0;const n=G.exec(e);if(y(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:W(e.seconds),nanos:W(e.nanos)}}function W(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Y(e){return"string"==typeof e?z.fromBase64String(e):z.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function J(e){const t=e.mapValue.fields.__previous_value__;return X(t)?J(t):t}function Q(e){const t=K(e.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class ee{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ee("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ee&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return null==e}function ne(e){return 0===e&&1/e==-1/0}function re(e){return"number"==typeof e&&Number.isInteger(e)&&!ne(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(V.fromString(e))}static fromName(e){return new ie(V.fromString(e).popFirst(5))}static empty(){return new ie(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===V.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new V(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?X(e)?4:be(e)?9:10:v()}function se(e,t){if(e===t)return!0;const n=oe(e);if(n!==oe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Q(e).isEqual(Q(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=K(e.timestampValue),r=K(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Y(e.bytesValue).isEqual(Y(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return W(e.geoPointValue.latitude)===W(t.geoPointValue.latitude)&&W(e.geoPointValue.longitude)===W(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return W(e.integerValue)===W(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=W(e.doubleValue),r=W(t.doubleValue);return n===r?ne(n)===ne(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return R(e.arrayValue.values||[],t.arrayValue.values||[],se);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!se(n[i],r[i])))return!1;return!0}(e,t);default:return v()}}function ae(e,t){return void 0!==(e.values||[]).find(e=>se(e,t))}function ce(e,t){if(e===t)return 0;const n=oe(e),r=oe(t);if(n!==r)return j(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=W(e.integerValue||e.doubleValue),r=W(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ue(e.timestampValue,t.timestampValue);case 4:return ue(Q(e),Q(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Y(e),r=Y(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=j(n[i],r[i]);if(0!==e)return e}return j(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=j(W(e.latitude),W(t.latitude));return 0!==n?n:j(W(e.longitude),W(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ce(n[i],r[i]);if(e)return e}return j(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=j(r[s],o[s]);if(0!==e)return e;const t=ce(n[r[s]],i[o[s]]);if(0!==t)return t}return j(r.length,o.length)}(e.mapValue,t.mapValue);default:throw v()}}function ue(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return j(e,t);const n=K(e),r=K(t),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function le(e){return he(e)}function he(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=K(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Y(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ie.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=he(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${he(e.fields[i])}`;return n+"}"}(e.mapValue):v();var t,n}function de(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function fe(e){return!!e&&"integerValue"in e}function pe(e){return!!e&&"arrayValue"in e}function ge(e){return!!e&&"nullValue"in e}function me(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ve(e){return!!e&&"mapValue"in e}function ye(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return F(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ye(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ye(e.arrayValue.values[n]);return t}return Object.assign({},e)}function be(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ve(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ye(t)}setAll(e){let t=H.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ye(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ve(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return se(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ve(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){F(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new we(ye(this.value))}}function Ee(e){const t=[];return F(e.fields,(e,n)=>{const r=new H([e]);if(ve(n)){const e=Ee(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new $(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Oe{constructor(e,t,n,r,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Oe(e,0,D.min(),D.min(),we.empty(),0)}static newFoundDocument(e,t,n){return new Oe(e,1,t,D.min(),n,0)}static newNoDocument(e,t){return new Oe(e,2,t,D.min(),we.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,D.min(),we.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class _e{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}_e.UNKNOWN_ID=-1;function Te(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=D.fromTimestamp(1e9===r?new L(n+1,0):new L(n,r));return new Ie(i,ie.empty(),t)}function Se(e){return new Ie(e.readTime,e.key,-1)}class Ie{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ie(D.min(),ie.empty(),-1)}static max(){return new Ie(D.max(),ie.empty(),-1)}}function Ce(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ie.comparator(e.documentKey,t.documentKey),0!==n?n:j(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function ke(e,t=null,n=[],r=[],i=null,o=null,s=null){return new Ae(e,t,n,r,i,o,s)}function xe(e){const t=b(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>{return(t=e).field.canonicalString()+t.op.toString()+le(t.value);var t}).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),te(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>le(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>le(e)).join(",")),t.P=e}return t.P}function Ne(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${le(t.value)}`;var t}).join(", ")}]`),te(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>le(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>le(e)).join(",")),`Target(${t})`}function Pe(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ze(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!se(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ke(e.startAt,t.startAt)&&Ke(e.endAt,t.endAt)}function je(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Re extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Le(e,t,n):"array-contains"===t?new Be(e,n):"in"===t?new Ue(e,n):"not-in"===t?new Ve(e,n):"array-contains-any"===t?new qe(e,n):new Re(e,t,n)}static V(e,t,n){return"in"===t?new De(e,n):new Me(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(ce(t,this.value)):null!==t&&oe(this.value)===oe(t)&&this.v(ce(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Le extends Re{constructor(e,t,n){super(e,t,n),this.key=ie.fromName(n.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.v(t)}}class De extends Re{constructor(e,t){super(e,"in",t),this.keys=Fe("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Me extends Re{constructor(e,t){super(e,"not-in",t),this.keys=Fe("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fe(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ie.fromName(e.referenceValue))}class Be extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pe(t)&&ae(t.arrayValue,this.value)}}class Ue extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ae(this.value.arrayValue,t)}}class Ve extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ae(this.value.arrayValue,t)}}class qe extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pe(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ae(this.value.arrayValue,e))}}class He{constructor(e,t){this.position=e,this.inclusive=t}}class $e{constructor(e,t="asc"){this.field=e,this.dir=t}}function ze(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ge(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?ie.comparator(ie.fromName(s.referenceValue),n.key):ce(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Ke(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!se(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ye(e,t,n,r,i,o,s,a){return new We(e,t,n,r,i,o,s,a)}function Xe(e){return new We(e)}function Je(e){return!te(e.limit)&&"F"===e.limitType}function Qe(e){return!te(e.limit)&&"L"===e.limitType}function Ze(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function et(e){for(const t of e.filters)if(t.S())return t.field;return null}function tt(e){return null!==e.collectionGroup}function nt(e){const t=b(e);if(null===t.D){t.D=[];const e=et(t),n=Ze(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new $e(e)),t.D.push(new $e(H.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new $e(H.keyField(),e))}}}return t.D}function rt(e){const t=b(e);if(!t.C)if("F"===t.limitType)t.C=ke(t.path,t.collectionGroup,nt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of nt(t)){const t="desc"===i.dir?"asc":"desc";e.push(new $e(i.field,t))}const n=t.endAt?new He(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new He(t.startAt.position,!t.startAt.inclusive):null;t.C=ke(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function it(e,t,n){return new We(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ot(e,t){return Pe(rt(e),rt(t))&&e.limitType===t.limitType}function st(e){return`${xe(rt(e))}|lt:${e.limitType}`}function at(e){return`Query(target=${Ne(rt(e))}; limitType=${e.limitType})`}function ct(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ie.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ge(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,nt(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ge(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,nt(e),t))}(e,t)}function ut(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function lt(e){return(t,n)=>{let r=!1;for(const i of nt(e)){const e=ht(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ht(e,t,n){const r=e.field.isKeyField()?ie.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ce(r,i):v()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ne(t)?"-0":t}}function ft(e){return{integerValue:""+e}}function pt(e,t){return re(t)?ft(t):dt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this._=void 0}}function mt(e,t,n){return e instanceof bt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof wt?Et(e,t):e instanceof Ot?_t(e,t):function(e,t){const n=yt(e,t),r=St(n)+St(e.k);return fe(n)&&fe(e.k)?ft(r):dt(e.M,r)}(e,t)}function vt(e,t,n){return e instanceof wt?Et(e,t):e instanceof Ot?_t(e,t):n}function yt(e,t){return e instanceof Tt?fe(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class bt extends gt{}class wt extends gt{constructor(e){super(),this.elements=e}}function Et(e,t){const n=It(t);for(const r of e.elements)n.some(e=>se(e,r))||n.push(r);return{arrayValue:{values:n}}}class Ot extends gt{constructor(e){super(),this.elements=e}}function _t(e,t){let n=It(t);for(const r of e.elements)n=n.filter(e=>!se(e,r));return{arrayValue:{values:n}}}class Tt extends gt{constructor(e,t){super(),this.M=e,this.k=t}}function St(e){return W(e.integerValue||e.doubleValue)}function It(e){return pe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof wt&&t instanceof wt||e instanceof Ot&&t instanceof Ot?R(e.elements,t.elements,se):e instanceof Tt&&t instanceof Tt?se(e.k,t.k):e instanceof bt&&t instanceof bt}(e.transform,t.transform)}class At{constructor(e,t){this.version=e,this.transformResults=t}}class kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Nt{}function Pt(e,t,n){e instanceof Mt?function(e,t,n){const r=e.value.clone(),i=Ut(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ft?function(e,t,n){if(!xt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Ut(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Bt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function jt(e,t,n){e instanceof Mt?function(e,t,n){if(!xt(e.precondition,t))return;const r=e.value.clone(),i=Vt(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Dt(t),r).setHasLocalMutations()}(e,t,n):e instanceof Ft?function(e,t,n){if(!xt(e.precondition,t))return;const r=Vt(e.fieldTransforms,n,t),i=t.data;i.setAll(Bt(e)),i.setAll(r),t.convertToFoundDocument(Dt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){xt(e.precondition,t)&&t.convertToNoDocument(D.min())}(e,t)}function Rt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=yt(r.transform,e||null);null!=i&&(null==n&&(n=we.empty()),n.set(r.field,i))}return n||null}function Lt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&R(e,t,(e,t)=>Ct(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Dt(e){return e.isFoundDocument()?e.version:D.min()}class Mt extends Nt{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ft extends Nt{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Bt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ut(e,t,n){const r=new Map;y(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,vt(s,a,n[i]))}return r}function Vt(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,mt(e,o,t))}return r}class qt extends Nt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ht extends Nt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,Gt;function Kt(e){switch(e){default:return v();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Wt(e){if(void 0===e)return p("GRPC error has no .code"),w.UNKNOWN;switch(e){case zt.OK:return w.OK;case zt.CANCELLED:return w.CANCELLED;case zt.UNKNOWN:return w.UNKNOWN;case zt.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case zt.INTERNAL:return w.INTERNAL;case zt.UNAVAILABLE:return w.UNAVAILABLE;case zt.UNAUTHENTICATED:return w.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case zt.NOT_FOUND:return w.NOT_FOUND;case zt.ALREADY_EXISTS:return w.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return w.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case zt.ABORTED:return w.ABORTED;case zt.OUT_OF_RANGE:return w.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return w.UNIMPLEMENTED;case zt.DATA_LOSS:return w.DATA_LOSS;default:return v()}}(Gt=zt||(zt={}))[Gt.OK=0]="OK",Gt[Gt.CANCELLED=1]="CANCELLED",Gt[Gt.UNKNOWN=2]="UNKNOWN",Gt[Gt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gt[Gt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gt[Gt.NOT_FOUND=5]="NOT_FOUND",Gt[Gt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gt[Gt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gt[Gt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gt[Gt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gt[Gt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gt[Gt.ABORTED=10]="ABORTED",Gt[Gt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gt[Gt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gt[Gt.INTERNAL=13]="INTERNAL",Gt[Gt.UNAVAILABLE=14]="UNAVAILABLE",Gt[Gt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){F(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return B(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.comparator=e,this.root=t||Qt.EMPTY}insert(e,t){return new Xt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jt(this.root,e,this.comparator,!0)}}class Jt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Qt.RED,this.left=null!=r?r:Qt.EMPTY,this.right=null!=i?i:Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Qt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Qt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1,Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Qt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(e){this.comparator=e,this.data=new Xt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new en(this.data.getIterator())}getIteratorFrom(e){return new en(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Zt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Zt(this.comparator);return t.data=e,t}}class en{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn=new Xt(ie.comparator);function nn(){return tn}const rn=new Xt(ie.comparator);function on(){return rn}function sn(){return new Yt(e=>e.toString(),(e,t)=>e.isEqual(t))}const an=new Xt(ie.comparator),cn=new Zt(ie.comparator);function un(...e){let t=cn;for(const n of e)t=t.add(n);return t}const ln=new Zt(j);function hn(){return ln}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,fn.createSynthesizedTargetChangeForCurrentChange(e,t)),new dn(D.min(),n,hn(),nn(),un())}}class fn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new fn(z.EMPTY_BYTE_STRING,t,un(),un(),un())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class gn{constructor(e,t){this.targetId=e,this.$=t}}class mn{constructor(e,t,n=z.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class vn{constructor(){this.B=0,this.L=wn(),this.U=z.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=un(),t=un(),n=un();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new fn(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=wn()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class yn{constructor(e){this.nt=e,this.st=new Map,this.it=nn(),this.rt=bn(),this.ot=new Zt(j)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,n)=>{this.ft(n)&&t(n)})}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(je(e))if(0===n){const n=new ie(e.path);this.ct(t,n,Oe.newNoDocument(n,D.min()))}else y(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&je(i.target)){const t=new ie(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,Oe.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}});let n=un();this.rt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.it.forEach((t,n)=>n.setReadTime(e));const r=new dn(e,t,this.ot,this.it,n);return this.it=nn(),this.rt=bn(),this.ot=new Zt(j),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new vn,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new Zt(j),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new vn),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function bn(){return new Xt(ie.comparator)}function wn(){return new Xt(ie.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),On=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class _n{constructor(e,t){this.databaseId=e,this.N=t}}function Tn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Sn(e,t){return e.N?t.toBase64():t.toUint8Array()}function In(e,t){return Tn(e,t.toTimestamp())}function Cn(e){return y(!!e),D.fromTimestamp(function(e){const t=K(e);return new L(t.seconds,t.nanos)}(e))}function An(e,t){return function(e){return new V(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function kn(e){const t=V.fromString(e);return y(Qn(t)),t}function xn(e,t){return An(e.databaseId,t.path)}function Nn(e,t){const n=kn(t);if(n.get(1)!==e.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ie(Ln(n))}function Pn(e,t){return An(e.databaseId,t)}function jn(e){const t=kn(e);return 4===t.length?V.emptyPath():Ln(t)}function Rn(e){return new V(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ln(e){return y(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Dn(e,t,n){return{name:xn(e,t),fields:n.value.mapValue.fields}}function Mn(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.N?(y(void 0===t||"string"==typeof t),z.fromBase64String(t||"")):(y(void 0===t||t instanceof Uint8Array),z.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?w.UNKNOWN:Wt(e.code);return new E(t,e.message||"")}(s);n=new mn(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nn(e,r.document.name),o=Cn(r.document.updateTime),s=new we({mapValue:{fields:r.document.fields}}),a=Oe.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new pn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Nn(e,r.document),o=r.readTime?Cn(r.readTime):D.min(),s=Oe.newNoDocument(i,o),a=r.removedTargetIds||[];n=new pn([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Nn(e,r.document),o=r.removedTargetIds||[];n=new pn([],o,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new $t(r),o=e.targetId;n=new gn(o,i)}}return n}function Fn(e,t){let n;if(t instanceof Mt)n={update:Dn(e,t.key,t.value)};else if(t instanceof qt)n={delete:xn(e,t.key)};else if(t instanceof Ft)n={update:Dn(e,t.key,t.data),updateMask:Jn(t.fieldMask)};else{if(!(t instanceof Ht))return v();n={verify:xn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof bt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ot)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Tt)return{fieldPath:t.field.canonicalString(),increment:n.k};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:In(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function Bn(e,t){return e&&e.length>0?(y(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Cn(e.updateTime):Cn(t);return n.isEqual(D.min())&&(n=Cn(t)),new At(n,e.transformResults||[])}(e,t))):[]}function Un(e,t){return{documents:[Pn(e,t.path)]}}function Vn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Pn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Pn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(me(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NAN"}};if(ge(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(me(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NOT_NAN"}};if(ge(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(e.field),op:Gn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Kn(e.field),direction:zn(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.N||te(t)?t:{value:t}}(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function qn(e){let t=jn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=$n(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(e=>function(e){return new $e(Wn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,te(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new He(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new He(n,t)}(n.endAt)),Ye(t,i,s,o,a,"F",c,u)}function Hn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function $n(e){return e?void 0!==e.unaryFilter?[Xn(e)]:void 0!==e.fieldFilter?[Yn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>$n(e)).reduce((e,t)=>e.concat(t)):v():[]}function zn(e){return En[e]}function Gn(e){return On[e]}function Kn(e){return{fieldPath:e.canonicalString()}}function Wn(e){return H.fromServerFormat(e.fieldPath)}function Yn(e){return Re.create(Wn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}function Xn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Wn(e.unaryFilter.field);return Re.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Wn(e.unaryFilter.field);return Re.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wn(e.unaryFilter.field);return Re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wn(e.unaryFilter.field);return Re.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Jn(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Qn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],er=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof rr?t:rr.resolve(t)}catch(e){return rr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rr.reject(t)}static resolve(e){return new rr((t,n)=>{t(e)})}static reject(e){return new rr((t,n)=>{n(e)})}static waitFor(e){return new rr((t,n)=>{let r=0,i=0,o=!1;e.forEach(e=>{++r,e.next(()=>{++i,o&&i===r&&t()},e=>n(e))}),o=!0,i===r&&t()})}static or(e){let t=rr.resolve(!1);for(const n of e)t=t.next(e=>e?rr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Pt(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&jt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&jt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(D.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),un())}isEqual(e){return this.batchId===e.batchId&&R(this.mutations,e.mutations,(e,t)=>Lt(e,t))&&R(this.baseMutations,e.baseMutations,(e,t)=>Lt(e,t))}}class sr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){y(e.mutations.length===n.length);let r=an;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new sr(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,n,r,i=D.min(),o=D.min(),s=z.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.Jt=e}}function lr(e){const t=qn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?it(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(W(e.integerValue));else if("doubleValue"in e){const n=W(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),ne(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(""+(n.seconds||"")),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Y(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?be(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):v()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),ie.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}hr.fe=new hr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(){this.qe=new fr}addToCollectionParentIndex(e,t){return this.qe.add(t),rr.resolve()}getCollectionParents(e,t){return rr.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return rr.resolve()}deleteFieldIndex(e,t){return rr.resolve()}getDocumentsMatchingTarget(e,t){return rr.resolve(null)}getFieldIndex(e,t){return rr.resolve(null)}getFieldIndexes(e,t){return rr.resolve([])}getNextCollectionGroupToUpdate(e){return rr.resolve(null)}updateCollectionGroup(e,t,n){return rr.resolve()}updateIndexEntries(e,t){return rr.resolve()}}class fr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Zt(V.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Zt(V.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class pr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new pr(e,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr.DEFAULT_COLLECTION_PERCENTILE=10,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pr.DEFAULT=new pr(41943040,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pr.DISABLED=new pr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new gr(0)}static yn(){return new gr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mr(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==tr)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(){this.changes=new Yt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?rr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Us(e,t,n))}Us(e,t,n){return this.ds.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}qs(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}Ks(e,t){return this.ds.getEntries(e,t).next(t=>this.Gs(e,t).next(()=>t))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.qs(t,e))}Qs(e,t,n){return function(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(e,t.path):tt(t)?this.Ws(e,t,n):this.zs(e,t,n)}js(e,t){return this.Ls(e,new ie(t)).next(e=>{let t=on();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Ws(e,t,n){const r=t.collectionGroup;let i=on();return this.indexManager.getCollectionParents(e,r).next(o=>rr.forEach(o,o=>{const s=function(e,t){return new We(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.zs(e,s,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next(n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Oe.newInvalidDocument(n),r=r.insert(n,i)),jt(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((e,n)=>{ct(t,n)||(r=r.remove(e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=un(),r=un();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new br(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{Xs(e){this.Zs=e}Qs(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(D.min())?this.ti(e,t):this.Zs.Ks(e,r).next(i=>{const s=this.ei(t,i);return(Je(t)||Qe(t))&&this.ni(t.limitType,s,r,n)?this.ti(e,t):(d()<=o["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),at(t)),this.Zs.Qs(e,t,Te(n,-1)).next(e=>(s.forEach(t=>{e=e.insert(t.key,t)}),e)))})}ei(e,t){let n=new Zt(lt(e));return t.forEach((t,r)=>{ct(e,r)&&(n=n.add(r))}),n}ni(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(e,t){return d()<=o["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",at(t)),this.Zs.Qs(e,t,Ie.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,n,r){this.persistence=e,this.si=t,this.M=r,this.ii=new Xt(j),this.ri=new Yt(e=>xe(e),Pe),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(n)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new yr(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ii))}}function Or(e,t,n,r){return new Er(e,t,n,r)}async function _r(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.Bs.getAllMutationBatches(e).next(i=>(r=i,n.ai(t),n.Bs.getAllMutationBatches(e))).next(t=>{const i=[],o=[];let s=un();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.ci.Ks(e,s).next(e=>({hi:e,removedBatchIds:i,addedBatchIds:o}))})})}function Tr(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=rr.resolve();return o.forEach(e=>{s=s.next(()=>r.getEntry(t,e)).next(t=>{const o=n.docVersions.get(e);y(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),s.next(()=>e.Bs.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.Bs.performConsistencyCheck(e)).next(()=>n.ci.Ks(e,r))})}function Sr(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.fs.getLastRemoteSnapshotVersion(e))}function Ir(e,t){const n=b(e),r=t.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const s=[];t.targetChanges.forEach((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.fs.removeMatchingKeys(e,o.removedDocuments,a).next(()=>n.fs.addMatchingKeys(e,o.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(z.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.fs.updateTargetData(e,u))});let a=nn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),s.push(Cr(e,o,t.documentUpdates).next(e=>{a=e})),!r.isEqual(D.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next(t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r));s.push(t)}return rr.waitFor(s).next(()=>o.apply(e)).next(()=>n.ci.Gs(e,a)).next(()=>a)}).then(e=>(n.ii=i,e))}function Cr(e,t,n){let r=un();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=nn();return n.forEach((n,i)=>{const o=e.get(n);i.isNoDocument()&&i.version.isEqual(D.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),r})}function Ar(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t)))}function kr(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.fs.getTargetData(e,t).next(i=>i?(r=i,rr.resolve(r)):n.fs.allocateTargetId(e).next(i=>(r=new cr(t,i,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.ii.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(e.targetId,e),n.ri.set(t,e.targetId)),e})}async function xr(e,t,n){const r=b(e),i=r.ii.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ir(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ii=r.ii.remove(t),r.ri.delete(i.target)}function Nr(e,t,n){const r=b(e);let i=D.min(),o=un();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=b(e),i=r.ri.get(n);return void 0!==i?rr.resolve(r.ii.get(i)):r.fs.getTargetData(t,n)}(r,e,rt(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{o=e})}).next(()=>r.si.Qs(e,t,n?i:D.min(),n?o:un())).next(e=>(Pr(r,ut(t),e),{documents:e,li:o})))}function Pr(e,t,n){let r=D.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.oi.set(t,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,t){return rr.resolve(this.wi.get(t))}saveBundleMetadata(e,t){var n;return this.wi.set(t.id,{id:(n=t).id,version:n.version,createTime:Cn(n.createTime)}),rr.resolve()}getNamedQuery(e,t){return rr.resolve(this.mi.get(t))}saveNamedQuery(e,t){return this.mi.set(t.name,function(e){return{name:e.name,query:lr(e.bundledQuery),readTime:Cn(e.readTime)}}(t)),rr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.overlays=new Xt(ie.comparator),this.gi=new Map}getOverlay(e,t){return rr.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Xt(e,t,r)}),rr.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.gi.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.gi.delete(n)),rr.resolve()}getOverlaysForCollection(e,t,n){const r=sn(),i=t.length+1,o=new ie(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return rr.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Xt((e,t)=>e-t);const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=sn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=sn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>s.set(e,t)),s.size()>=r)break;return rr.resolve(s)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.gi.get(r.largestBatchId).delete(n.key);this.gi.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ar(t,n));let i=this.gi.get(t);void 0===i&&(i=un(),this.gi.set(t,i)),this.gi.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.yi=new Zt(Dr.pi),this.Ii=new Zt(Dr.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,t){const n=new Dr(e,t);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ai(new Dr(e,t))}Ri(e,t){e.forEach(e=>this.removeReference(e,t))}Pi(e){const t=new ie(new V([])),n=new Dr(t,e),r=new Dr(t,e+1),i=[];return this.Ii.forEachInRange([n,r],e=>{this.Ai(e),i.push(e.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const t=new ie(new V([])),n=new Dr(t,e),r=new Dr(t,e+1);let i=un();return this.Ii.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Dr(e,0),n=this.yi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Dr{constructor(e,t){this.key=e,this.vi=t}static pi(e,t){return ie.comparator(e.key,t.key)||j(e.vi,t.vi)}static Ti(e,t){return j(e.vi,t.vi)||ie.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.Si=1,this.Di=new Zt(Dr.pi)}checkEmpty(e){return rr.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new or(i,t,n,r);this.Bs.push(o);for(const s of r)this.Di=this.Di.add(new Dr(s.key,i)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return rr.resolve(o)}lookupMutationBatch(e,t){return rr.resolve(this.Ci(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.xi(n),i=r<0?0:r;return rr.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return rr.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(e){return rr.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Dr(t,0),r=new Dr(t,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,r],e=>{const t=this.Ci(e.vi);i.push(t)}),rr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Zt(j);return t.forEach(e=>{const t=new Dr(e,0),r=new Dr(e,Number.POSITIVE_INFINITY);this.Di.forEachInRange([t,r],e=>{n=n.add(e.vi)})}),rr.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ie.isDocumentKey(i)||(i=i.child(""));const o=new Dr(new ie(i),0);let s=new Zt(j);return this.Di.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.vi)),!0)},o),rr.resolve(this.Ni(s))}Ni(e){const t=[];return e.forEach(e=>{const n=this.Ci(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){y(0===this.ki(t.batchId,"removed")),this.Bs.shift();let n=this.Di;return rr.forEach(t.mutations,r=>{const i=new Dr(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Di=n})}_n(e){}containsKey(e,t){const n=new Dr(t,0),r=this.Di.firstAfterOrEqual(n);return rr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,rr.resolve()}ki(e,t){return this.xi(e)}xi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}Ci(e){const t=this.xi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.Mi=e,this.docs=new Xt(ie.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Mi(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return rr.resolve(n?n.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let n=nn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Oe.newInvalidDocument(e))}),rr.resolve(n)}getAllFromCollection(e,t,n){let r=nn();const i=new ie(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:e,value:{document:i}}=o.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Ce(Se(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return rr.resolve(r)}getAllFromCollectionGroup(e,t,n,r){v()}Oi(e,t){return rr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Br(this)}getSize(e){return rr.resolve(this.size)}}class Br extends vr{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)}),rr.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.persistence=e,this.Fi=new Yt(e=>xe(e),Pe),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Lr,this.targetCount=0,this.Li=gr.gn()}forEachTarget(e,t){return this.Fi.forEach((e,n)=>t(n)),rr.resolve()}getLastRemoteSnapshotVersion(e){return rr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rr.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),rr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$i&&(this.$i=t),rr.resolve()}Tn(e){this.Fi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Li=new gr(t),this.highestTargetId=t),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,rr.resolve()}updateTargetData(e,t){return this.Tn(t),rr.resolve()}removeTargetData(e,t){return this.Fi.delete(t.target),this.Bi.Pi(t.targetId),this.targetCount-=1,rr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Fi.forEach((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)}),rr.waitFor(i).next(()=>r)}getTargetCount(e){return rr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fi.get(t)||null;return rr.resolve(n)}addMatchingKeys(e,t,n){return this.Bi.Ei(t,n),rr.resolve()}removeMatchingKeys(e,t,n){this.Bi.Ri(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Bi.Pi(t),rr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Bi.Vi(t);return rr.resolve(n)}containsKey(e,t){return rr.resolve(this.Bi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.Ui={},this.overlays={},this.es=new x(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Ur(this),this.indexManager=new dr,this.ds=function(e){return new Fr(e)}(e=>this.referenceDelegate.qi(e)),this.M=new ur(t),this._s=new jr(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rr,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ui[e.toKey()];return n||(n=new Mr(t,this.referenceDelegate),this.Ui[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const r=new qr(this.es.next());return this.referenceDelegate.Ki(),n(r).next(e=>this.referenceDelegate.Gi(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Qi(e,t){return rr.or(Object.values(this.Ui).map(n=>()=>n.containsKey(e,t)))}}class qr extends nr{constructor(e){super(),this.currentSequenceNumber=e}}class Hr{constructor(e){this.persistence=e,this.ji=new Lr,this.Wi=null}static zi(e){return new Hr(e)}get Hi(){if(this.Wi)return this.Wi;throw v()}addReference(e,t,n){return this.ji.addReference(n,t),this.Hi.delete(n.toString()),rr.resolve()}removeReference(e,t,n){return this.ji.removeReference(n,t),this.Hi.add(n.toString()),rr.resolve()}markPotentiallyOrphaned(e,t){return this.Hi.add(t.toString()),rr.resolve()}removeTarget(e,t){this.ji.Pi(t.targetId).forEach(e=>this.Hi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ki(){this.Wi=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rr.forEach(this.Hi,n=>{const r=ie.fromPath(n);return this.Ji(e,r).next(e=>{e||t.removeEntry(r,D.min())})}).next(()=>(this.Wi=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ji(e,t).next(e=>{e?this.Hi.delete(t.toString()):this.Hi.add(t.toString())})}qi(e){return 0}Ji(e,t){return rr.or([()=>rr.resolve(this.ji.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Qi(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.activeTargetIds=hn()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zr{constructor(){this.$r=new $r,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,t,n){this.Br[e]=t}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new $r,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{Lr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.io=t+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,t,n,r,i){const o=this.uo(e,t);f("RestConnection","Sending: ",o,n);const s={};return this.ao(s,r,i),this.co(e,o,s,n).then(e=>(f("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",o,"request:",n),t})}ho(e,t,n,r,i){return this.oo(e,t,n,r,i)}ao(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}uo(e,t){const n=Wr[e];return`${this.io}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const t=s.getResponseJson();f("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+e+'" timed out'),o(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(f("Connection",'RPC "'+e+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const e=s.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(t)>=0?t:w.UNKNOWN}(e.status);o(new E(t,e.message))}else o(new E(w.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new E(w.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{f("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);s.send(t,"POST",c,n,15)})}lo(e,t,n){const r=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),o=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.ao(c.initMessageHeaders,t,n),Object(s["q"])()||Object(s["r"])()||Object(s["m"])()||Object(s["o"])()||Object(s["t"])()||Object(s["l"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const p=new Yr({Wr:e=>{d?f("Connection","Not sending because WebChannel is closed:",e):(h||(f("Connection","Opening WebChannel transport."),l.open(),h=!0),f("Connection","WebChannel sending:",e),l.send(e))},zr:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.no())}),m(l,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),p.no(new E(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];y(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){f("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=zt[e];if(void 0!==t)return Wt(t)}(e),n=i.message;void 0===t&&(t=w.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,p.no(new E(t,n)),l.close()}else f("Connection","WebChannel received:",n),p.so(n)}}),m(o,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.eo()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){return new _n(e,!0)}class Zr{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.fo=n,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const t=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),r=Math.max(0,t-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r,i,o,s,a){this.Yn=e,this.Ro=n,this.Po=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Zr(e,t)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,t){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==e?this.Do.reset():t&&t.code===w.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):t&&t.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(t)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Vo===t&&this.qo(e,n)},t=>{e(()=>{const e=new E(w.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ko(e)})})}qo(e,t){const n=this.Uo(this.Vo);this.stream=this.Go(e,t),this.stream.Hr(()=>{n(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(e=>{n(()=>this.Ko(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return f("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Yn.enqueueAndForget(()=>this.Vo===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ti extends ei{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.M=i}Go(e,t){return this.bo.lo("Listen",e,t)}onMessage(e){this.Do.reset();const t=Mn(this.M,e),n=function(e){if(!("targetChange"in e))return D.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?D.min():t.readTime?Cn(t.readTime):D.min()}(e);return this.listener.Qo(t,n)}jo(e){const t={};t.database=Rn(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=je(r)?{documents:Un(e,r)}:{query:Vn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Sn(e,t.resumeToken):t.snapshotVersion.compareTo(D.min())>0&&(n.readTime=Tn(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=Hn(this.M,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=Rn(this.M),t.removeTarget=e,this.Fo(t)}}class ni extends ei{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,t){return this.bo.lo("Write",e,t)}onMessage(e){if(y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const t=Bn(e.writeResults,e.commitTime),n=Cn(e.commitTime);return this.listener.Yo(n,t)}return y(!e.writeResults||0===e.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=Rn(this.M),this.Fo(e)}Jo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Fn(this.M,e))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=r,this.tu=!1}eu(){if(this.tu)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.oo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(w.UNKNOWN,e.toString())})}ho(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ho(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(w.UNKNOWN,e.toString())})}terminate(){this.tu=!0}}class ii{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu("Connection failed 1 times. Most recent error: "+e.toString()),this.ou("Offline")))}set(e){this.cu(),this.nu=0,"Online"===e&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(p(t),this.iu=!1):f("OnlineStateTracker",t)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(e=>{n.enqueueAndForget(async()=>{pi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t.fu.add(4),await ai(t),t.wu.set("Unknown"),t.fu.delete(4),await si(t)}(this))})}),this.wu=new ii(n,r)}}async function si(e){if(pi(e))for(const t of e.du)await t(!0)}async function ai(e){for(const t of e.du)await t(!1)}function ci(e,t){const n=b(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),fi(n)?di(n):Pi(n).xo()&&li(n,t))}function ui(e,t){const n=b(e),r=Pi(n);n.lu.delete(t),r.xo()&&hi(n,t),0===n.lu.size&&(r.xo()?r.Mo():pi(n)&&n.wu.set("Unknown"))}function li(e,t){e.mu.Z(t.targetId),Pi(e).jo(t)}function hi(e,t){e.mu.Z(t),Pi(e).Wo(t)}function di(e){e.mu=new yn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),Pi(e).start(),e.wu.ru()}function fi(e){return pi(e)&&!Pi(e).Co()&&e.lu.size>0}function pi(e){return 0===b(e).fu.size}function gi(e){e.mu=void 0}async function mi(e){e.lu.forEach((t,n)=>{li(e,t)})}async function vi(e,t){gi(e),fi(e)?(e.wu.au(t),di(e)):e.wu.set("Unknown")}async function yi(e,t,n){if(e.wu.set("Online"),t instanceof mn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.lu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.lu.delete(r),e.mu.removeTarget(r))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await bi(e,n)}else if(t instanceof pn?e.mu.ut(t):t instanceof gn?e.mu._t(t):e.mu.ht(t),!n.isEqual(D.min()))try{const t=await Sr(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.mu.yt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.lu.get(r);i&&e.lu.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.lu.get(t);if(!n)return;e.lu.set(t,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),hi(e,t);const r=new cr(n.target,t,1,n.sequenceNumber);li(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await bi(e,t)}}async function bi(e,t,n){if(!ir(t))throw t;e.fu.add(1),await ai(e),e.wu.set("Offline"),n||(n=()=>Sr(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await si(e)})}function wi(e,t){return t().catch(n=>bi(e,n,t))}async function Ei(e){const t=b(e),n=ji(t);let r=t.hu.length>0?t.hu[t.hu.length-1].batchId:-1;for(;Oi(t);)try{const e=await Ar(t.localStore,r);if(null===e){0===t.hu.length&&n.Mo();break}r=e.batchId,_i(t,e)}catch(e){await bi(t,e)}Ti(t)&&Si(t)}function Oi(e){return pi(e)&&e.hu.length<10}function _i(e,t){e.hu.push(t);const n=ji(e);n.xo()&&n.Ho&&n.Jo(t.mutations)}function Ti(e){return pi(e)&&!ji(e).Co()&&e.hu.length>0}function Si(e){ji(e).start()}async function Ii(e){ji(e).Zo()}async function Ci(e){const t=ji(e);for(const n of e.hu)t.Jo(n.mutations)}async function Ai(e,t,n){const r=e.hu.shift(),i=sr.from(r,t,n);await wi(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ei(e)}async function ki(e,t){t&&ji(e).Ho&&await async function(e,t){if(n=t.code,Kt(n)&&n!==w.ABORTED){const n=e.hu.shift();ji(e).ko(),await wi(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Ei(e)}var n}(e,t),Ti(e)&&Si(e)}async function xi(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.fu.add(3),await ai(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await si(n)}async function Ni(e,t){const n=b(e);t?(n.fu.delete(2),await si(n)):t||(n.fu.add(2),await ai(n),n.wu.set("Unknown"))}function Pi(e){return e.gu||(e.gu=function(e,t,n){const r=b(e);return r.eu(),new ti(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Hr:mi.bind(null,e),Yr:vi.bind(null,e),Qo:yi.bind(null,e)}),e.du.push(async t=>{t?(e.gu.ko(),fi(e)?di(e):e.wu.set("Unknown")):(await e.gu.stop(),gi(e))})),e.gu}function ji(e){return e.yu||(e.yu=function(e,t,n){const r=b(e);return r.eu(),new ni(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Hr:Ii.bind(null,e),Yr:ki.bind(null,e),Xo:Ci.bind(null,e),Yo:Ai.bind(null,e)}),e.du.push(async t=>{t?(e.yu.ko(),await Ei(e)):(await e.yu.stop(),e.hu.length>0&&(f("RemoteStore",`Stopping write stream with ${e.hu.length} pending writes`),e.hu=[]))})),e.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ri{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new O,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new Ri(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Li(e,t){if(p("AsyncQueue",`${t}: ${e}`),ir(e))return new E(w.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ie.comparator(t.key,n.key):(e,t)=>ie.comparator(e.key,t.key),this.keyedMap=on(),this.sortedSet=new Xt(this.comparator)}static emptySet(e){return new Di(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Di))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Di;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.pu=new Xt(ie.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?0!==e.type&&3===n.type?this.pu=this.pu.insert(t,e):3===e.type&&1!==n.type?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pu=this.pu.remove(t):1===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):v():this.pu=this.pu.insert(t,e)}Iu(){const e=[];return this.pu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Fi{constructor(e,t,n,r,i,o,s,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new Fi(e,t,Di.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ot(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Tu=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new Yt(e=>st(e),ot),this.onlineState="Unknown",this.Eu=new Set}}async function Vi(e,t){const n=b(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Bi),i)try{o.Tu=await n.onListen(r)}catch(e){const n=Li(e,`Initialization of query '${at(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.Au(n.onlineState),o.Tu&&t.Ru(o.Tu)&&zi(n)}async function qi(e,t){const n=b(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Hi(e,t){const n=b(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Ru(i)&&(r=!0);t.Tu=i}}r&&zi(n)}function $i(e,t,n){const r=b(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function zi(e){e.Eu.forEach(e=>{e.next()})}class Gi{constructor(e,t,n){this.query=e,this.Pu=t,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Fi(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),t=!0):this.Su(e,this.onlineState)&&(this.Du(e),t=!0),this.Vu=e,t}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let t=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),t=!0),t}Su(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Cu||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Du(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(e){this.key=e}}class Wi{constructor(e){this.key=e}}class Yi{constructor(e,t){this.query=e,this.$u=t,this.Bu=null,this.current=!1,this.Lu=un(),this.mutatedKeys=un(),this.Uu=lt(e),this.qu=new Di(this.Uu)}get Ku(){return this.$u}Gu(e,t){const n=t?t.Qu:new Mi,r=t?t.qu:this.qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=Je(this.query)&&r.size===this.query.limit?r.last():null,c=Qe(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=ct(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ju(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Uu(l,a)>0||c&&this.Uu(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(s=!0)),f&&(l?(o=o.add(l),i=d?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))}),Je(this.query)||Qe(this.query))for(;o.size>this.query.limit;){const e=Je(this.query)?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{qu:o,Qu:n,ni:s,mutatedKeys:i}}ju(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Uu(e.doc,t.doc)),this.Wu(n);const o=t?this.zu():[],s=0===this.Lu.size&&this.current?1:0,a=s!==this.Bu;return this.Bu=s,0!==i.length||a?{snapshot:new Fi(this.query,e.qu,r,i,e.mutatedKeys,0===s,a,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Mi,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(e=>this.$u=this.$u.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.$u=this.$u.delete(e)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=un(),this.qu.forEach(e=>{this.Ju(e.key)&&(this.Lu=this.Lu.add(e.key))});const t=[];return e.forEach(e=>{this.Lu.has(e)||t.push(new Wi(e))}),this.Lu.forEach(n=>{e.has(n)||t.push(new Ki(n))}),t}Yu(e){this.$u=e.li,this.Lu=un();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Xu(){return Fi.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Xi{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ji{constructor(e){this.key=e,this.Zu=!1}}class Qi{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Yt(e=>st(e),ot),this.na=new Map,this.sa=new Set,this.ia=new Xt(ie.comparator),this.ra=new Map,this.oa=new Lr,this.ua={},this.aa=new Map,this.ca=gr.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function Zi(e,t){const n=bo(e);let r,i;const o=n.ea.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Xu();else{const e=await kr(n.localStore,rt(t));n.isPrimaryClient&&ci(n.remoteStore,e);const o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await eo(n,t,r,"current"===o)}return i}async function eo(e,t,n,r){e.la=(t,n,r)=>async function(e,t,n,r){let i=t.view.Gu(n);i.ni&&(i=await Nr(e.localStore,t.query,!1).then(({documents:e})=>t.view.Gu(e,i)));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return fo(e,t.targetId,s.Hu),s.snapshot}(e,t,n,r);const i=await Nr(e.localStore,t,!0),o=new Yi(t,i.li),s=o.Gu(i.documents),a=fn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=o.applyChanges(s,e.isPrimaryClient,a);fo(e,n,c.Hu);const u=new Xi(t,n,o);return e.ea.set(t,u),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),c.snapshot}async function to(e,t){const n=b(e),r=n.ea.get(t),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter(e=>!ot(e,t))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ui(n.remoteStore,r.targetId),lo(n,r.targetId)}).catch(mr)):(lo(n,r.targetId),await xr(n.localStore,r.targetId,!0))}async function no(e,t,n){const r=wo(e);try{const e=await function(e,t){const n=b(e),r=L.now(),i=t.reduce((e,t)=>e.add(t.key),un());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.ci.Ks(e,i).next(i=>{o=i;const s=[];for(const e of t){const t=Rt(e,o.get(e.key));null!=t&&s.push(new Ft(e.key,t,Ee(t.value.mapValue),kt.exists(!0)))}return n.Bs.addMutationBatch(e,r,s,t)})).then(e=>(e.applyToLocalDocumentSet(o),{batchId:e.batchId,changes:o}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ua[e.currentUser.toKey()];r||(r=new Xt(j)),r=r.insert(t,n),e.ua[e.currentUser.toKey()]=r}(r,e.batchId,n),await mo(r,e.changes),await Ei(r.remoteStore)}catch(e){const t=Li(e,"Failed to persist write");n.reject(t)}}async function ro(e,t){const n=b(e);try{const e=await Ir(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.ra.get(t);r&&(y(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Zu=!0:e.modifiedDocuments.size>0?y(r.Zu):e.removedDocuments.size>0&&(y(r.Zu),r.Zu=!1))}),await mo(n,e,t)}catch(e){await mr(e)}}function io(e,t,n){const r=b(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ea.forEach((n,r)=>{const i=r.view.Au(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=b(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.Au(t)&&(r=!0)}),r&&zi(n)}(r.eventManager,t),e.length&&r.ta.Qo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function oo(e,t,n){const r=b(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ra.get(t),o=i&&i.key;if(o){let e=new Xt(ie.comparator);e=e.insert(o,Oe.newNoDocument(o,D.min()));const n=un().add(o),i=new dn(D.min(),new Map,new Zt(j),e,n);await ro(r,i),r.ia=r.ia.remove(o),r.ra.delete(t),go(r)}else await xr(r.localStore,t,!1).then(()=>lo(r,t,n)).catch(mr)}async function so(e,t){const n=b(e),r=t.batch.batchId;try{const e=await Tr(n.localStore,t);uo(n,r,null),co(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,e)}catch(e){await mr(e)}}async function ao(e,t,n){const r=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.Bs.lookupMutationBatch(e,t).next(t=>(y(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t))).next(()=>n.Bs.performConsistencyCheck(e)).next(()=>n.ci.Ks(e,r))})}(r.localStore,t);uo(r,t,n),co(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await mo(r,e)}catch(n){await mr(n)}}function co(e,t){(e.aa.get(t)||[]).forEach(e=>{e.resolve()}),e.aa.delete(t)}function uo(e,t,n){const r=b(e);let i=r.ua[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ua[r.currentUser.toKey()]=i}}function lo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.na.get(t))e.ea.delete(r),n&&e.ta.fa(r,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach(t=>{e.oa.containsKey(t)||ho(e,t)})}function ho(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);null!==n&&(ui(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),go(e))}function fo(e,t,n){for(const r of n)r instanceof Ki?(e.oa.addReference(r.key,t),po(e,r)):r instanceof Wi?(f("SyncEngine","Document no longer in limbo: "+r.key),e.oa.removeReference(r.key,t),e.oa.containsKey(r.key)||ho(e,r.key)):v()}function po(e,t){const n=t.key,r=n.path.canonicalString();e.ia.get(n)||e.sa.has(r)||(f("SyncEngine","New document in limbo: "+n),e.sa.add(r),go(e))}function go(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new ie(V.fromString(t)),r=e.ca.next();e.ra.set(r,new Ji(n)),e.ia=e.ia.insert(n,r),ci(e.remoteStore,new cr(rt(Xe(n.path)),r,2,x.A))}}async function mo(e,t,n){const r=b(e),i=[],o=[],s=[];r.ea.isEmpty()||(r.ea.forEach((e,a)=>{s.push(r.la(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=br.Ys(a.targetId,e);o.push(t)}}))}),await Promise.all(s),r.ta.Qo(i),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>rr.forEach(t,t=>rr.forEach(t.Hs,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>rr.forEach(t.Js,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ir(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ii.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ii=n.ii.insert(e,i)}}}(r.localStore,o))}async function vo(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await _r(n.localStore,t);n.currentUser=t,function(e,t){e.aa.forEach(e=>{e.forEach(e=>{e.reject(new E(w.CANCELLED,t))})}),e.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await mo(n,e.hi)}}function yo(e,t){const n=b(e),r=n.ra.get(t);if(r&&r.Zu)return un().add(r.key);{let e=un();const r=n.na.get(t);if(!r)return e;for(const t of r){const r=n.ea.get(t);e=e.unionWith(r.view.Ku)}return e}}function bo(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ro.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oo.bind(null,t),t.ta.Qo=Hi.bind(null,t.eventManager),t.ta.fa=$i.bind(null,t.eventManager),t}function wo(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=so.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ao.bind(null,t),t}class Eo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Qr(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return Or(this.persistence,new wr,e.initialUser,this.M)}wa(e){return new Vr(Hr.zi,this.M)}_a(e){return new zr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Oo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>io(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=vo.bind(null,this.syncEngine),await Ni(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ui}createDatastore(e){const t=Qr(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Xr(r));var r;return function(e,t,n,r){return new ri(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>io(this.syncEngine,e,0),o=Kr.vt()?new Kr:new Gr,new oi(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new Qi(e,t,n,r,i,o);return s&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);f("RemoteStore","RemoteStore shutting down."),t.fu.add(5),await ai(t),t._u.shutdown(),t.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{f("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(f("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new O;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Li(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function So(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await _r(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Io(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Co(e);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>xi(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>xi(t.remoteStore,n)),e.onlineComponents=t}async function Co(e){return e.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await So(e,new Eo)),e.offlineComponents}async function Ao(e){return e.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Io(e,new Oo)),e.onlineComponents}function ko(e){return Ao(e).then(e=>e.syncEngine)}async function xo(e){const t=await Ao(e),n=t.eventManager;return n.onListen=Zi.bind(null,t.syncEngine),n.onUnlisten=to.bind(null,t.syncEngine),n}function No(e,t,n={}){const r=new O;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new _o({next:n=>{t.enqueueAndForget(()=>qi(e,s)),n.fromCache&&"server"===r.source?i.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new Gi(n,o,{includeMetadataChanges:!0,Cu:!0});return Vi(e,s)}(await xo(e),e.asyncQueue,t,n,r)),r.promise}const Po=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e,t,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ro(e,t,n,r){if(!0===t&&!0===r)throw new E(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Lo(e){if(!ie.isDocumentKey(e))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Do(e){if(ie.isDocumentKey(e))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function Fo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mo(e);throw new E(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ro("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bo({}),this._settingsFrozen=!1,e instanceof ee?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ee(e.options.projectId)}(e))}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bo(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new T;switch(e.type){case"gapi":const t=e.client;return y(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new C(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Po.get(e);t&&(f("ComponentProvider","Removing Datastore"),Po.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vo(this.firestore,e,this._key)}}class qo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qo(this.firestore,e,this._query)}}class Ho extends qo{constructor(e,t,n){super(e,t,Xe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vo(this.firestore,null,new ie(e))}withConverter(e){return new Ho(this.firestore,e,this._path)}}function $o(e,t,...n){if(e=Object(s["j"])(e),jo("collection","path",t),e instanceof Uo){const r=V.fromString(t,...n);return Do(r),new Ho(e,null,r)}{if(!(e instanceof Vo||e instanceof Ho))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(V.fromString(t,...n));return Do(r),new Ho(e.firestore,null,r)}}function zo(e,t,...n){if(e=Object(s["j"])(e),1===arguments.length&&(t=P.R()),jo("doc","path",t),e instanceof Uo){const r=V.fromString(t,...n);return Lo(r),new Vo(e,null,new ie(r))}{if(!(e instanceof Vo||e instanceof Ho))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(V.fromString(t,...n));return Lo(r),new Vo(e.firestore,e instanceof Ho?e.converter:null,new ie(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Zr(this,"async_queue_retry"),this.qa=()=>{const e=Jr();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()};const e=Jr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const t=Jr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const t=new O;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!ir(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const t=this.ka.then(()=>(this.Ba=!0,e().catch(e=>{this.$a=e,this.Ba=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw p("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ba=!1,e))));return this.ka=t,t}enqueueAfterDelay(e,t,n){this.Ka(),this.Ua.indexOf(e)>-1&&(t=0);const r=Ri.createAndSchedule(this,e,t,n,e=>this.ja(e));return this.Fa.push(r),r}Ka(){this.$a&&v()}verifyOperationInProgress(){}async Wa(){let e;do{e=this.ka,await e}while(e!==this.ka)}za(e){for(const t of this.Fa)if(t.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Fa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const t=this.Fa.indexOf(e);this.Fa.splice(t,1)}}class Ko extends Uo{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Go,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Xo(this),this._firestoreClient.terminate()}}function Wo(e=Object(r["e"])()){return Object(r["b"])(e,"firestore").getImmediate()}function Yo(e){return e._firestoreClient||Xo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Xo(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Z(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new To(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qo(z.fromBase64String(e))}catch(e){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Qo(z.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=/^__.*__$/;class ns{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mt(e,this.data,t,this.fieldTransforms)}}function rs(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class is{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new is(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.nc(e),r}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.Ya(),r}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return ms(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(0===e.length)throw this.rc("Document fields must not be empty");if(rs(this.Xa)&&ts.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class os{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||Qr(e)}ac(e,t,n,r=!1){return new is({Xa:e,methodName:t,uc:n,path:H.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ss(e){const t=e._freezeSettings(),n=Qr(e._databaseId);return new os(e._databaseId,!!t.ignoreUndefinedProperties,n)}function as(e,t,n,r,i,o={}){const s=e.ac(o.merge||o.mergeFields?2:0,t,n,i);ds("Data must be an object, but it was:",s,r);const a=ls(r,s);let c,u;if(o.merge)c=new $(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=fs(t,r,n);if(!s.contains(i))throw new E(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);vs(e,i)||e.push(i)}c=new $(e),u=s.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=s.fieldTransforms;return new ns(new we(a),c,u)}function cs(e,t,n,r=!1){return us(n,e.ac(r?4:3,t))}function us(e,t){if(hs(e=Object(s["j"])(e)))return ds("Unsupported field value:",t,e),ls(e,t);if(e instanceof Zo)return function(e,t){if(!rs(t.Xa))throw t.rc(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.rc(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ec&&4!==t.Xa)throw t.rc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=us(i,t.ic(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(s["j"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return pt(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=L.fromDate(e);return{timestampValue:Tn(t.M,n)}}if(e instanceof L){const n=new L(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Tn(t.M,n)}}if(e instanceof es)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Qo)return{bytesValue:Sn(t.M,e._byteString)};if(e instanceof Vo){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.rc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:An(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.rc("Unsupported field value: "+Mo(e))}(e,t)}function ls(e,t){const n={};return B(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):F(e,(e,r)=>{const i=us(r,t.tc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function hs(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof L||e instanceof es||e instanceof Qo||e instanceof Vo||e instanceof Zo)}function ds(e,t,n){if(!hs(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Mo(n);throw"an object"===r?t.rc(e+" a custom object"):t.rc(e+" "+r)}}function fs(e,t,n){if((t=Object(s["j"])(t))instanceof Jo)return t._internalPath;if("string"==typeof t)return gs(e,t);throw ms("Field path arguments must be of type string or ",e,!1,void 0,n)}const ps=new RegExp("[~\\*/\\[\\]]");function gs(e,t,n){if(t.search(ps)>=0)throw ms(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jo(...t.split("."))._internalPath}catch(r){throw ms(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ms(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new E(w.INVALID_ARGUMENT,a+e+c)}function vs(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new bs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ws("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class bs extends ys{data(){return super.data()}}function ws(e,t){return"string"==typeof t?gs(e,t):t instanceof Jo?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Os extends ys{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ws("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class _s extends Os{data(e={}){return super.data(e)}}class Ts{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Es(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new _s(this._firestore,this._userDataWriter,n.key,n,new Es(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new _s(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Es(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new _s(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Es(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:Ss(t.type),doc:r,oldIndex:i,newIndex:o}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ss(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Is(e){if(Qe(e)&&0===e.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cs{}function As(e,...t){for(const n of t)e=n._apply(e);return e}class ks extends Cs{constructor(e,t,n){super(),this.lc=e,this.fc=t,this.dc=n,this.type="where"}_apply(e){const t=ss(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new E(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Ps(s,o);const t=[];for(const n of s)t.push(Ns(r,e,n));a={arrayValue:{values:t}}}else a=Ns(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Ps(s,o),a=cs(n,t,s,"in"===o||"not-in"===o);const c=Re.create(i,o,a);return function(e,t){if(t.S()){const n=et(e);if(null!==n&&!n.isEqual(t.field))throw new E(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Ze(e);null!==r&&js(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.lc,this.fc,this.dc);return new qo(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new We(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function xs(e,t,n){const r=t,i=ws("where",e);return new ks(i,r,n)}function Ns(e,t,n){if("string"==typeof(n=Object(s["j"])(n))){if(""===n)throw new E(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tt(t)&&-1!==n.indexOf("/"))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(V.fromString(n));if(!ie.isDocumentKey(r))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return de(e,new ie(r))}if(n instanceof Vo)return de(e,n._key);throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mo(n)}.`)}function Ps(e,t){if(!Array.isArray(e)||0===e.length)throw new E(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new E(w.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function js(e,t,n){if(!n.isEqual(t))throw new E(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{convertValue(e,t="none"){switch(oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return W(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Y(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return F(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new es(W(e.latitude),W(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=J(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Q(e));default:return null}}convertTimestamp(e){const t=K(e);return new L(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=V.fromString(e);y(Qn(n));const r=new ee(n.get(1),n.get(3)),i=new ie(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Ds extends Rs{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Vo(this.firestore,null,t)}}function Ms(e){e=Fo(e,qo);const t=Fo(e.firestore,Ko),n=Yo(t),r=new Ds(t);return Is(e._query),No(n,e._query).then(n=>new Ts(t,r,e,n))}function Fs(e,t,n){e=Fo(e,Vo);const r=Fo(e.firestore,Ko),i=Ls(e.converter,t,n);return Us(r,[as(ss(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,kt.none())])}function Bs(e){return Us(Fo(e.firestore,Ko),[new qt(e._key,kt.none())])}function Us(e,t){return function(e,t){const n=new O;return e.asyncQueue.enqueueAndForget(async()=>no(await ko(e),t,n)),n.promise}(Yo(e),t)}!function(e,t=!0){!function(e){l=e}(r["a"]),Object(r["c"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Ko(r,new S(e.getProvider("auth-internal")),new k(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.8",e),Object(r["g"])(c,"3.4.8","esm2017")}()}).call(this,n("4362"))},"09d1":function(e,t,n){var r=n("4705"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"09e4":function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d05":function(e,t,n){var r=n("09e4"),i=n("4650"),o=n("0209"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"0db0":function(e,t,n){var r=n("6185"),i=n("a714"),o=n("4650"),s=n("7820"),a=n("0ee6"),c=n("0209"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(e){if(!o(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},m=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?m:g},"0e17":function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},"0ee6":function(e,t,n){var r=n("09e4"),i=n("4650"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},"0f33":function(e,t){e.exports=!1},"0fd9":function(e,t,n){var r,i,o,s,a=n("09e4"),c=n("9eec"),u=n("4dd8"),l=n("4650"),h=n("dba8"),d=n("a714"),f=n("68d9"),p=n("dfee"),g=n("c4dd"),m=n("68e0"),v=n("6629"),y=a.setImmediate,b=a.clearImmediate,w=a.process,E=a.Dispatch,O=a.Function,_=a.MessageChannel,T=a.String,S=0,I={},C="onreadystatechange";try{r=a.location}catch(P){}var A=function(e){if(h(I,e)){var t=I[e];delete I[e],t()}},k=function(e){return function(){A(e)}},x=function(e){A(e.data)},N=function(e){a.postMessage(T(e),r.protocol+"//"+r.host)};y&&b||(y=function(e){var t=p(arguments,1);return I[++S]=function(){c(l(e)?e:O(e),void 0,t)},i(S),S},b=function(e){delete I[e]},v?i=function(e){w.nextTick(k(e))}:E&&E.now?i=function(e){E.now(k(e))}:_&&!m?(o=new _,s=o.port2,o.port1.onmessage=x,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",x,!1)):i=C in g("script")?function(e){f.appendChild(g("script"))[C]=function(){f.removeChild(this),A(e)}}:function(e){setTimeout(k(e),0)}),e.exports={set:y,clear:b}},"119a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("7a23"),n("9ff4");var r="undefined"===typeof window;let i={};const o=e=>i[e],s=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},a=function(e,t,n,r=!1){e&&t&&n&&e.addEventListener(t,n,r)};function c(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function u(e,t){if(!e)return;let n=e.className;const r=(t||"").split(" ");for(let i=0,o=r.length;i<o;i++){const t=r[i];t&&(e.classList?e.classList.add(t):c(e,t)||(n+=" "+t))}e.classList||(e.className=n)}function l(e,t){if(!e||!t)return;const n=t.split(" ");let r=" "+e.className+" ";for(let i=0,o=n.length;i<o;i++){const t=n[i];t&&(e.classList?e.classList.remove(t):c(e,t)&&(r=r.replace(" "+t+" "," ")))}e.classList||(e.className=s(r))}const h={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace"},d=e=>{e.preventDefault(),e.stopPropagation()},f=()=>{null===y||void 0===y||y.doOnModalClick()};let p,g=!1;const m=function(){if(r)return;let e=y.modalDom;return e?g=!0:(g=!1,e=document.createElement("div"),y.modalDom=e,a(e,"touchmove",d),a(e,"click",f)),e},v={},y={modalFade:!0,modalDom:void 0,zIndex:p,getInstance:function(e){return v[e]},register:function(e,t){e&&t&&(v[e]=t)},deregister:function(e){e&&(v[e]=null,delete v[e])},nextZIndex:function(){return++y.zIndex},modalStack:[],doOnModalClick:function(){const e=y.modalStack[y.modalStack.length-1];if(!e)return;const t=y.getInstance(e.id);t&&t.closeOnClickModal.value&&t.close()},openModal:function(e,t,n,i,o){if(r)return;if(!e||void 0===t)return;this.modalFade=o;const s=this.modalStack;for(let r=0,c=s.length;r<c;r++){const t=s[r];if(t.id===e)return}const a=m();if(u(a,"v-modal"),this.modalFade&&!g&&u(a,"v-modal-enter"),i){const e=i.trim().split(/\s+/);e.forEach(e=>u(a,e))}setTimeout(()=>{l(a,"v-modal-enter")},200),n&&n.parentNode&&11!==n.parentNode.nodeType?n.parentNode.appendChild(a):document.body.appendChild(a),t&&(a.style.zIndex=String(t)),a.tabIndex=0,a.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:i})},closeModal:function(e){const t=this.modalStack,n=m();if(t.length>0){const r=t[t.length-1];if(r.id===e){if(r.modalClass){const e=r.modalClass.trim().split(/\s+/);e.forEach(e=>l(n,e))}t.pop(),t.length>0&&(n.style.zIndex=t[t.length-1].zIndex)}else for(let n=t.length-1;n>=0;n--)if(t[n].id===e){t.splice(n,1);break}}0===t.length&&(this.modalFade&&u(n,"v-modal-leave"),setTimeout(()=>{0===t.length&&(n.parentNode&&n.parentNode.removeChild(n),n.style.display="none",y.modalDom=void 0),l(n,"v-modal-leave")},200))}};Object.defineProperty(y,"zIndex",{configurable:!0,get(){return void 0===p&&(p=o("zIndex")||2e3),p},set(e){p=e}});const b=function(){if(!r&&y.modalStack.length>0){const e=y.modalStack[y.modalStack.length-1];if(!e)return;const t=y.getInstance(e.id);return t}};r||a(window,"keydown",(function(e){if(e.code===h.esc){const e=b();e&&e.closeOnPressEscape.value&&(e.handleClose?e.handleClose():e.handleAction?e.handleAction("cancel"):e.close())}})),t.default=y},1235:function(e,t,n){"use strict";n.r(t),n.d(t,"top",(function(){return r})),n.d(t,"bottom",(function(){return i})),n.d(t,"right",(function(){return o})),n.d(t,"left",(function(){return s})),n.d(t,"auto",(function(){return a})),n.d(t,"basePlacements",(function(){return c})),n.d(t,"start",(function(){return u})),n.d(t,"end",(function(){return l})),n.d(t,"clippingParents",(function(){return h})),n.d(t,"viewport",(function(){return d})),n.d(t,"popper",(function(){return f})),n.d(t,"reference",(function(){return p})),n.d(t,"variationPlacements",(function(){return g})),n.d(t,"placements",(function(){return m})),n.d(t,"beforeRead",(function(){return v})),n.d(t,"read",(function(){return y})),n.d(t,"afterRead",(function(){return b})),n.d(t,"beforeMain",(function(){return w})),n.d(t,"main",(function(){return E})),n.d(t,"afterMain",(function(){return O})),n.d(t,"beforeWrite",(function(){return _})),n.d(t,"write",(function(){return T})),n.d(t,"afterWrite",(function(){return S})),n.d(t,"modifierPhases",(function(){return I})),n.d(t,"applyStyles",(function(){return R})),n.d(t,"arrow",(function(){return ie})),n.d(t,"computeStyles",(function(){return le})),n.d(t,"eventListeners",(function(){return fe})),n.d(t,"flip",(function(){return Le})),n.d(t,"hide",(function(){return Be})),n.d(t,"offset",(function(){return qe})),n.d(t,"popperOffsets",(function(){return $e})),n.d(t,"preventOverflow",(function(){return Ke})),n.d(t,"popperGenerator",(function(){return it})),n.d(t,"detectOverflow",(function(){return Ne})),n.d(t,"createPopperBase",(function(){return ot})),n.d(t,"createPopper",(function(){return at})),n.d(t,"createPopperLite",(function(){return ut}));var r="top",i="bottom",o="right",s="left",a="auto",c=[r,i,o,s],u="start",l="end",h="clippingParents",d="viewport",f="popper",p="reference",g=c.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+l])}),[]),m=[].concat(c,[a]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+l])}),[]),v="beforeRead",y="read",b="afterRead",w="beforeMain",E="main",O="afterMain",_="beforeWrite",T="write",S="afterWrite",I=[v,y,b,w,E,O,_,T,S];function C(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function k(e){var t=A(e).Element;return e instanceof t||e instanceof Element}function x(e){var t=A(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function N(e){if("undefined"===typeof ShadowRoot)return!1;var t=A(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function P(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];x(i)&&C(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function j(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),s=o.reduce((function(e,t){return e[t]="",e}),{});x(r)&&C(r)&&(Object.assign(r.style,s),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var R={name:"applyStyles",enabled:!0,phase:"write",fn:P,effect:j,requires:["computeStyles"]};function L(e){return e.split("-")[0]}var D=Math.max,M=Math.min,F=Math.round;function B(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;if(x(e)&&t){var o=e.offsetHeight,s=e.offsetWidth;s>0&&(r=F(n.width)/s||1),o>0&&(i=F(n.height)/o||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function U(e){var t=B(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function V(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&N(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(e){return A(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(C(e))>=0}function $(e){return((k(e)?e.ownerDocument:e.document)||window.document).documentElement}function z(e){return"html"===C(e)?e:e.assignedSlot||e.parentNode||(N(e)?e.host:null)||$(e)}function G(e){return x(e)&&"fixed"!==q(e).position?e.offsetParent:null}function K(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&x(e)){var r=q(e);if("fixed"===r.position)return null}var i=z(e);while(x(i)&&["html","body"].indexOf(C(i))<0){var o=q(i);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return i;i=i.parentNode}return null}function W(e){var t=A(e),n=G(e);while(n&&H(n)&&"static"===q(n).position)n=G(n);return n&&("html"===C(n)||"body"===C(n)&&"static"===q(n).position)?t:n||K(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e,t,n){return D(e,M(t,n))}function J(e,t,n){var r=X(e,t,n);return r>n?n:r}function Q(){return{top:0,right:0,bottom:0,left:0}}function Z(e){return Object.assign({},Q(),e)}function ee(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var te=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Z("number"!==typeof e?e:ee(e,c))};function ne(e){var t,n=e.state,a=e.name,c=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=L(n.placement),d=Y(h),f=[s,o].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var g=te(c.padding,n),m=U(u),v="y"===d?r:s,y="y"===d?i:o,b=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],w=l[d]-n.rects.reference[d],E=W(u),O=E?"y"===d?E.clientHeight||0:E.clientWidth||0:0,_=b/2-w/2,T=g[v],S=O-m[p]-g[y],I=O/2-m[p]/2+_,C=X(T,I,S),A=d;n.modifiersData[a]=(t={},t[A]=C,t.centerOffset=C-I,t)}}function re(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&V(t.elements.popper,i)&&(t.elements.arrow=i)}var ie={name:"arrow",enabled:!0,phase:"main",fn:ne,effect:re,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var se={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:F(t*i)/i||0,y:F(n*i)/i||0}}function ce(e){var t,n=e.popper,a=e.popperRect,c=e.placement,u=e.variation,h=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,v=!0===g?ae(h):"function"===typeof g?g(h):h,y=v.x,b=void 0===y?0:y,w=v.y,E=void 0===w?0:w,O=h.hasOwnProperty("x"),_=h.hasOwnProperty("y"),T=s,S=r,I=window;if(p){var C=W(n),k="clientHeight",x="clientWidth";if(C===A(n)&&(C=$(n),"static"!==q(C).position&&"absolute"===d&&(k="scrollHeight",x="scrollWidth")),C=C,c===r||(c===s||c===o)&&u===l){S=i;var N=m&&I.visualViewport?I.visualViewport.height:C[k];E-=N-a.height,E*=f?1:-1}if(c===s||(c===r||c===i)&&u===l){T=o;var P=m&&I.visualViewport?I.visualViewport.width:C[x];b-=P-a.width,b*=f?1:-1}}var j,R=Object.assign({position:d},p&&se);return f?Object.assign({},R,(j={},j[S]=_?"0":"",j[T]=O?"0":"",j.transform=(I.devicePixelRatio||1)<=1?"translate("+b+"px, "+E+"px)":"translate3d("+b+"px, "+E+"px, 0)",j)):Object.assign({},R,(t={},t[S]=_?E+"px":"",t[T]=O?b+"px":"",t.transform="",t))}function ue(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,s=void 0===o||o,a=n.roundOffsets,c=void 0===a||a,u={placement:L(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var le={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ue,data:{}},he={passive:!0};function de(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,s=r.resize,a=void 0===s||s,c=A(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach((function(e){e.addEventListener("scroll",n.update,he)})),a&&c.addEventListener("resize",n.update,he),function(){o&&u.forEach((function(e){e.removeEventListener("scroll",n.update,he)})),a&&c.removeEventListener("resize",n.update,he)}}var fe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:de,data:{}},pe={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return pe[e]}))}var me={start:"end",end:"start"};function ve(e){return e.replace(/start|end/g,(function(e){return me[e]}))}function ye(e){var t=A(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function be(e){return B($(e)).left+ye(e).scrollLeft}function we(e){var t=A(e),n=$(e),r=t.visualViewport,i=n.clientWidth,o=n.clientHeight,s=0,a=0;return r&&(i=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:i,height:o,x:s+be(e),y:a}}function Ee(e){var t,n=$(e),r=ye(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=D(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=D(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+be(e),c=-r.scrollTop;return"rtl"===q(i||n).direction&&(a+=D(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:c}}function Oe(e){var t=q(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function _e(e){return["html","body","#document"].indexOf(C(e))>=0?e.ownerDocument.body:x(e)&&Oe(e)?e:_e(z(e))}function Te(e,t){var n;void 0===t&&(t=[]);var r=_e(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=A(r),s=i?[o].concat(o.visualViewport||[],Oe(r)?r:[]):r,a=t.concat(s);return i?a:a.concat(Te(z(s)))}function Se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ie(e){var t=B(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ce(e,t){return t===d?Se(we(e)):k(t)?Ie(t):Se(Ee($(e)))}function Ae(e){var t=Te(z(e)),n=["absolute","fixed"].indexOf(q(e).position)>=0,r=n&&x(e)?W(e):e;return k(r)?t.filter((function(e){return k(e)&&V(e,r)&&"body"!==C(e)&&(!n||"static"!==q(e).position)})):[]}function ke(e,t,n){var r="clippingParents"===t?Ae(e):[].concat(t),i=[].concat(r,[n]),o=i[0],s=i.reduce((function(t,n){var r=Ce(e,n);return t.top=D(r.top,t.top),t.right=M(r.right,t.right),t.bottom=M(r.bottom,t.bottom),t.left=D(r.left,t.left),t}),Ce(e,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function xe(e){var t,n=e.reference,a=e.element,c=e.placement,h=c?L(c):null,d=c?oe(c):null,f=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2;switch(h){case r:t={x:f,y:n.y-a.height};break;case i:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case s:t={x:n.x-a.width,y:p};break;default:t={x:n.x,y:n.y}}var g=h?Y(h):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case u:t[g]=t[g]-(n[m]/2-a[m]/2);break;case l:t[g]=t[g]+(n[m]/2-a[m]/2);break;default:}}return t}function Ne(e,t){void 0===t&&(t={});var n=t,s=n.placement,a=void 0===s?e.placement:s,u=n.boundary,l=void 0===u?h:u,g=n.rootBoundary,m=void 0===g?d:g,v=n.elementContext,y=void 0===v?f:v,b=n.altBoundary,w=void 0!==b&&b,E=n.padding,O=void 0===E?0:E,_=Z("number"!==typeof O?O:ee(O,c)),T=y===f?p:f,S=e.rects.popper,I=e.elements[w?T:y],C=ke(k(I)?I:I.contextElement||$(e.elements.popper),l,m),A=B(e.elements.reference),x=xe({reference:A,element:S,strategy:"absolute",placement:a}),N=Se(Object.assign({},S,x)),P=y===f?N:A,j={top:C.top-P.top+_.top,bottom:P.bottom-C.bottom+_.bottom,left:C.left-P.left+_.left,right:P.right-C.right+_.right},R=e.modifiersData.offset;if(y===f&&R){var L=R[a];Object.keys(j).forEach((function(e){var t=[o,i].indexOf(e)>=0?1:-1,n=[r,i].indexOf(e)>=0?"y":"x";j[e]+=L[n]*t}))}return j}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,u=n.allowedAutoPlacements,l=void 0===u?m:u,h=oe(r),d=h?a?g:g.filter((function(e){return oe(e)===h})):c,f=d.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Ne(e,{placement:n,boundary:i,rootBoundary:o,padding:s})[L(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function je(e){if(L(e)===a)return[];var t=ge(e);return[ve(e),t,ve(t)]}function Re(e){var t=e.state,n=e.options,c=e.name;if(!t.modifiersData[c]._skip){for(var l=n.mainAxis,h=void 0===l||l,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,v=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,E=n.allowedAutoPlacements,O=t.options.placement,_=L(O),T=_===O,S=p||(T||!w?[ge(O)]:je(O)),I=[O].concat(S).reduce((function(e,n){return e.concat(L(n)===a?Pe(t,{placement:n,boundary:m,rootBoundary:v,padding:g,flipVariations:w,allowedAutoPlacements:E}):n)}),[]),C=t.rects.reference,A=t.rects.popper,k=new Map,x=!0,N=I[0],P=0;P<I.length;P++){var j=I[P],R=L(j),D=oe(j)===u,M=[r,i].indexOf(R)>=0,F=M?"width":"height",B=Ne(t,{placement:j,boundary:m,rootBoundary:v,altBoundary:y,padding:g}),U=M?D?o:s:D?i:r;C[F]>A[F]&&(U=ge(U));var V=ge(U),q=[];if(h&&q.push(B[R]<=0),f&&q.push(B[U]<=0,B[V]<=0),q.every((function(e){return e}))){N=j,x=!1;break}k.set(j,q)}if(x)for(var H=w?3:1,$=function(e){var t=I.find((function(t){var n=k.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},z=H;z>0;z--){var G=$(z);if("break"===G)break}t.placement!==N&&(t.modifiersData[c]._skip=!0,t.placement=N,t.reset=!0)}}var Le={name:"flip",enabled:!0,phase:"main",fn:Re,requiresIfExists:["offset"],data:{_skip:!1}};function De(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Me(e){return[r,o,i,s].some((function(t){return e[t]>=0}))}function Fe(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=Ne(t,{elementContext:"reference"}),a=Ne(t,{altBoundary:!0}),c=De(s,r),u=De(a,i,o),l=Me(c),h=Me(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Fe};function Ue(e,t,n){var i=L(e),a=[s,r].indexOf(i)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*a,[s,o].indexOf(i)>=0?{x:l,y:u}:{x:u,y:l}}function Ve(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,s=m.reduce((function(e,n){return e[n]=Ue(n,t.rects,o),e}),{}),a=s[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=s}var qe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ve};function He(e){var t=e.state,n=e.name;t.modifiersData[n]=xe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var $e={name:"popperOffsets",enabled:!0,phase:"read",fn:He,data:{}};function ze(e){return"x"===e?"y":"x"}function Ge(e){var t=e.state,n=e.options,a=e.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,w=void 0===b?0:b,E=Ne(t,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),O=L(t.placement),_=oe(t.placement),T=!_,S=Y(O),I=ze(S),C=t.modifiersData.popperOffsets,A=t.rects.reference,k=t.rects.popper,x="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,N="number"===typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,j={x:0,y:0};if(C){if(l){var R,F="y"===S?r:s,B="y"===S?i:o,V="y"===S?"height":"width",q=C[S],H=q+E[F],$=q-E[B],z=y?-k[V]/2:0,G=_===u?A[V]:k[V],K=_===u?-k[V]:-A[V],Z=t.elements.arrow,ee=y&&Z?U(Z):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Q(),ne=te[F],re=te[B],ie=X(0,A[V],ee[V]),se=T?A[V]/2-z-ie-ne-N.mainAxis:G-ie-ne-N.mainAxis,ae=T?-A[V]/2+z+ie+re+N.mainAxis:K+ie+re+N.mainAxis,ce=t.elements.arrow&&W(t.elements.arrow),ue=ce?"y"===S?ce.clientTop||0:ce.clientLeft||0:0,le=null!=(R=null==P?void 0:P[S])?R:0,he=q+se-le-ue,de=q+ae-le,fe=X(y?M(H,he):H,q,y?D($,de):$);C[S]=fe,j[S]=fe-q}if(d){var pe,ge="x"===S?r:s,me="x"===S?i:o,ve=C[I],ye="y"===I?"height":"width",be=ve+E[ge],we=ve-E[me],Ee=-1!==[r,s].indexOf(O),Oe=null!=(pe=null==P?void 0:P[I])?pe:0,_e=Ee?be:ve-A[ye]-k[ye]-Oe+N.altAxis,Te=Ee?ve+A[ye]+k[ye]-Oe-N.altAxis:we,Se=y&&Ee?J(_e,ve,Te):X(y?_e:be,ve,y?Te:we);C[I]=Se,j[I]=Se-ve}t.modifiersData[a]=j}}var Ke={name:"preventOverflow",enabled:!0,phase:"main",fn:Ge,requiresIfExists:["offset"]};function We(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ye(e){return e!==A(e)&&x(e)?We(e):ye(e)}function Xe(e){var t=e.getBoundingClientRect(),n=F(t.width)/e.offsetWidth||1,r=F(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function Je(e,t,n){void 0===n&&(n=!1);var r=x(t),i=x(t)&&Xe(t),o=$(t),s=B(e,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==C(t)||Oe(o))&&(a=Ye(t)),x(t)?(c=B(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):o&&(c.x=be(o))),{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function Qe(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var o=[].concat(e.requires||[],e.requiresIfExists||[]);o.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function Ze(e){var t=Qe(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function et(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function tt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var nt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function it(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?nt:i;return function(e,t,n){void 0===n&&(n=o);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},nt,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],a=!1,c={state:i,setOptions:function(n){var s="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},o,i.options,s),i.scrollParents={reference:k(e)?Te(e):e.contextElement?Te(e.contextElement):[],popper:Te(t)};var a=Ze(tt([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(rt(t,n)){i.rects={reference:Je(t,W(n),"fixed"===i.options.strategy),popper:U(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var o=i.orderedModifiers[r],s=o.fn,u=o.options,l=void 0===u?{}:u,h=o.name;"function"===typeof s&&(i=s({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:et((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!rt(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var a=o({state:i,name:t,instance:c,options:r}),u=function(){};s.push(a||u)}}))}function l(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ot=it(),st=[fe,$e,le,R,qe,Le,Ke,ie,Be],at=it({defaultModifiers:st}),ct=[fe,$e,le,R],ut=it({defaultModifiers:ct})},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),s=n("1d80"),a=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),h=n("9263"),d=n("d039"),f=[].push,p=Math.min,g=4294967295,m=!d((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),o=void 0===n?g:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);var a,c,u,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,d+"g");while(a=h.call(m,r)){if(c=m.lastIndex,c>p&&(l.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&f.apply(l,a.slice(1)),u=a[0].length,p=c,l.length>=o))break;m.lastIndex===a.index&&m.lastIndex++}return p===r.length?!u&&m.test("")||l.push(""):l.push(r.slice(p)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=s(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var s=n(r,e,this,i,r!==t);if(s.done)return s.value;var h=o(e),d=String(this),f=a(h,RegExp),v=h.unicode,y=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(m?"y":"g"),b=new f(m?h:"^(?:"+h.source+")",y),w=void 0===i?g:i>>>0;if(0===w)return[];if(0===d.length)return null===l(b,d)?[d]:[];var E=0,O=0,_=[];while(O<d.length){b.lastIndex=m?O:0;var T,S=l(b,m?d:d.slice(O));if(null===S||(T=p(u(b.lastIndex+(m?0:O)),d.length))===E)O=c(d,O,v);else{if(_.push(d.slice(E,O)),_.length===w)return _;for(var I=1;I<=S.length-1;I++)if(_.push(S[I]),_.length===w)return _;O=E=T}}return _.push(d.slice(E)),_}]}),!m)},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("7a23");var r=n("9ff4"),i="undefined"===typeof window;const o=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},s=function(e,t,n,r=!1){e&&t&&n&&e.addEventListener(t,n,r)},a=function(e,t,n){e&&t&&n&&e.removeEventListener(t,n,!1)},c=function(e,t,n){const r=function(...i){n&&n.apply(this,i),a(e,t,r)};s(e,t,r)};function u(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function l(e,t){if(!e)return;let n=e.className;const r=(t||"").split(" ");for(let i=0,o=r.length;i<o;i++){const t=r[i];t&&(e.classList?e.classList.add(t):u(e,t)||(n+=" "+t))}e.classList||(e.className=n)}function h(e,t){if(!e||!t)return;const n=t.split(" ");let r=" "+e.className+" ";for(let i=0,o=n.length;i<o;i++){const t=n[i];t&&(e.classList?e.classList.remove(t):u(e,t)&&(r=r.replace(" "+t+" "," ")))}e.classList||(e.className=o(r))}const d=function(e,t){if(!i){if(!e||!t)return null;t=r.camelize(t),"float"===t&&(t="cssFloat");try{const n=e.style[t];if(n)return n;const r=document.defaultView.getComputedStyle(e,"");return r?r[t]:""}catch(n){return e.style[t]}}};function f(e,t,n){e&&t&&(r.isObject(t)?Object.keys(t).forEach(n=>{f(e,n,t[n])}):(t=r.camelize(t),e.style[t]=n))}function p(e,t){e&&t&&(r.isObject(t)?Object.keys(t).forEach(t=>{f(e,t,"")}):f(e,t,""))}const g=(e,t)=>{if(i)return;const n=null===t||void 0===t,r=d(e,n?"overflow":t?"overflow-y":"overflow-x");return r.match(/(scroll|auto)/)},m=(e,t)=>{if(i)return;let n=e;while(n){if([window,document,document.documentElement].includes(n))return window;if(g(n,t))return n;n=n.parentNode}return n},v=(e,t)=>{if(i||!e||!t)return!1;const n=e.getBoundingClientRect();let r;return r=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right},y=e=>{let t=0,n=e;while(n)t+=n.offsetTop,n=n.offsetParent;return t},b=(e,t)=>Math.abs(y(e)-y(t)),w=e=>e.stopPropagation();t.addClass=l,t.getOffsetTop=y,t.getOffsetTopDistance=b,t.getScrollContainer=m,t.getStyle=d,t.hasClass=u,t.isInContainer=v,t.isScroll=g,t.off=a,t.on=s,t.once=c,t.removeClass=h,t.removeStyle=p,t.setStyle=f,t.stop=w},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),s=n("9112");for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"163d":function(e,t,n){},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),s=i("forEach"),a=o("forEach");e.exports=s&&a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"189d":function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},"199f":function(e,t,n){var r=n("09e4"),i=n("2439").f,o=n("3261"),s=n("7024"),a=n("79ae"),c=n("2d0a"),u=n("25d0");e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"1b84":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23");const i="template";(function(e){e[e["TEXT"]=1]="TEXT",e[e["CLASS"]=2]="CLASS",e[e["STYLE"]=4]="STYLE",e[e["PROPS"]=8]="PROPS",e[e["FULL_PROPS"]=16]="FULL_PROPS",e[e["HYDRATE_EVENTS"]=32]="HYDRATE_EVENTS",e[e["STABLE_FRAGMENT"]=64]="STABLE_FRAGMENT",e[e["KEYED_FRAGMENT"]=128]="KEYED_FRAGMENT",e[e["UNKEYED_FRAGMENT"]=256]="UNKEYED_FRAGMENT",e[e["NEED_PATCH"]=512]="NEED_PATCH",e[e["DYNAMIC_SLOTS"]=1024]="DYNAMIC_SLOTS",e[e["HOISTED"]=-1]="HOISTED",e[e["BAIL"]=-2]="BAIL"})(t.PatchFlags||(t.PatchFlags={}));const o=e=>e.type===r.Fragment,s=e=>e.type===r.Text,a=e=>e.type===r.Comment,c=e=>e.type===i;function u(e,t){if(!a(e))return o(e)||c(e)?t>0?h(e.children,t-1):void 0:e}const l=e=>!(o(e)||a(e)),h=(e,t=3)=>Array.isArray(e)?u(e[0],t):u(e,t);function d(e,t,n,i,o,s){return e?f(t,n,i,o,s):r.createCommentVNode("v-if",!0)}function f(e,t,n,i,o){return r.openBlock(),r.createBlock(e,t,n,i,o)}t.getFirstValidNode=h,t.isComment=a,t.isFragment=o,t.isTemplate=c,t.isText=s,t.isValidElementNode=l,t.renderBlock=f,t.renderIf=d},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fc1":function(e,t){e.exports={}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return P})),n.d(t,"j",(function(){return M})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return C})),n.d(t,"o",(function(){return v})),n.d(t,"p",(function(){return w})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return b})),n.d(t,"t",(function(){return y})),n.d(t,"u",(function(){return H})),n.d(t,"v",(function(){return x})),n.d(t,"w",(function(){return N})),n.d(t,"x",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return h().indexOf("Electron/")>=0}function v(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function y(){return h().indexOf("MSAppHost/")>=0}function b(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}function E(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?S(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new _(r,s,n);return a}}function S(e,t){return e.replace(I,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(k(n)&&k(o)){if(!A(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=L(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return new Promise((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}})}class B{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new U(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new V(this._db.createObjectStore(e,t))}close(){this._db.close()}}class U{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new V(this._transaction.objectStore(e))}}class V{constructor(e){this._store=e}index(e){return new q(this._store.index(e))}createIndex(e,t,n){return new q(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return F(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return F(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return F(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return F(e,"Error clearing IndexedDB object store")}}class q{constructor(e){this._index=e}get(e){const t=this._index.get(e);return F(t,"Error reading from IndexedDB")}}function H(e,t,n){return new Promise((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=e=>{r(new B(e.target.result))},o.onerror=e=>{var t;i("Error opening indexedDB: "+(null===(t=e.target.error)||void 0===t?void 0:t.message))},o.onupgradeneeded=e=>{n(new B(o.result),e.oldVersion,e.newVersion,new U(o.transaction))}}catch(o){i("Error opening indexedDB: "+o.message)}})}}).call(this,n("c8ba"))},"20a7":function(e,t,n){var r=n("fce5"),i=n("a714");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("a691"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},2439:function(e,t,n){var r=n("0368"),i=n("2505"),o=n("0e17"),s=n("8d23"),a=n("a84f"),c=n("e3f1"),u=n("dba8"),l=n("bf45"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},2505:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},2532:function(e,t,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(o(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},"25d0":function(e,t,n){var r=n("a714"),i=n("4650"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),s=n("ad6d"),a="toString",c=RegExp.prototype,u=c[a],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),h=u.name!=a;(l||h)&&r(RegExp.prototype,a,(function(){var e=i(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?s.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["f"]}));var i="firebase",o="9.6.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,o,"app")},"2ba0":function(e,t,n){var r=n("7024");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=a&&a.versions,u=c&&c.v8;u?(r=u.split("."),i=r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},"2d0a":function(e,t,n){var r=n("dba8"),i=n("b973"),o=n("2439"),s=n("4c07");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},3261:function(e,t,n){var r=n("0368"),i=n("4c07"),o=n("8d23");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"34e1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),i=n("9ff4"),o="undefined"===typeof window;function s(e){const t={};for(let n=0;n<e.length;n++)e[n]&&i.extend(t,e[n]);return t}const a=(e,t="")=>{let n=e;return t.split(".").map(e=>{n=null===n||void 0===n?void 0:n[e]}),n};function c(e,t,n){let r=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");const i=t.split(".");let o=0;for(o;o<i.length-1;o++){if(!r&&!n)break;const e=i[o];if(!(e in r)){if(n)throw new Error("please transfer a valid prop path to form item!");break}r=r[e]}return{o:r,k:i[o],v:null===r||void 0===r?void 0:r[i[o]]}}const u=()=>Math.floor(1e4*Math.random()),l=(e="")=>String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),h=e=>e||0===e?Array.isArray(e)?e:[e]:[],d=function(){return!o&&!isNaN(Number(document.DOCUMENT_NODE))},f=function(){return!o&&navigator.userAgent.indexOf("Edge")>-1},p=function(){return!o&&!!window.navigator.userAgent.match(/firefox/i)},g=function(e){const t=["transform","transition","animation"],n=["ms-","webkit-"];return t.forEach(t=>{const r=e[t];t&&r&&n.forEach(n=>{e[n+t]=r})}),e},m=i.hyphenate,v=e=>"boolean"===typeof e,y=e=>"number"===typeof e,b=e=>i.toRawType(e).startsWith("HTML");function w(e){let t=!1;return function(...n){t||(t=!0,window.requestAnimationFrame(()=>{e.apply(this,n),t=!1}))}}const E=e=>{clearTimeout(e.value),e.value=null};function O(e){return Math.floor(Math.random()*Math.floor(e))}function _(e){return Object.keys(e).map(t=>[t,e[t]])}function T(e){return void 0===e}function S(){const e=r.getCurrentInstance();return"$ELEMENT"in e.proxy?e.proxy.$ELEMENT:{}}const I=function(e,t){return e.findIndex(t)},C=function(e,t){return e.find(t)};function A(e){return!!(!e&&0!==e||i.isArray(e)&&!e.length||i.isObject(e)&&!Object.keys(e).length)}function k(e){return e.reduce((e,t)=>{const n=Array.isArray(t)?k(t):t;return e.concat(n)},[])}function x(e){return Array.from(new Set(e))}function N(e){return e.value}Object.defineProperty(t,"isVNode",{enumerable:!0,get:function(){return r.isVNode}}),Object.defineProperty(t,"camelize",{enumerable:!0,get:function(){return i.camelize}}),Object.defineProperty(t,"capitalize",{enumerable:!0,get:function(){return i.capitalize}}),Object.defineProperty(t,"extend",{enumerable:!0,get:function(){return i.extend}}),Object.defineProperty(t,"hasOwn",{enumerable:!0,get:function(){return i.hasOwn}}),Object.defineProperty(t,"isArray",{enumerable:!0,get:function(){return i.isArray}}),Object.defineProperty(t,"isObject",{enumerable:!0,get:function(){return i.isObject}}),Object.defineProperty(t,"isString",{enumerable:!0,get:function(){return i.isString}}),Object.defineProperty(t,"looseEqual",{enumerable:!0,get:function(){return i.looseEqual}}),t.$=N,t.arrayFind=C,t.arrayFindIndex=I,t.arrayFlat=k,t.autoprefixer=g,t.clearTimer=E,t.coerceTruthyValueToArray=h,t.deduplicate=x,t.entries=_,t.escapeRegexpString=l,t.generateId=u,t.getPropByPath=c,t.getRandomInt=O,t.getValueByPath=a,t.isBool=v,t.isEdge=f,t.isEmpty=A,t.isFirefox=p,t.isHTMLElement=b,t.isIE=d,t.isNumber=y,t.isUndefined=T,t.kebabCase=m,t.rafThrottle=w,t.toObject=s,t.useGlobalConfig=S},"37e1":function(e,t,n){"use strict";var r=n("199f"),i=n("0f33"),o=n("c85d"),s=n("a714"),a=n("0ee6"),c=n("4650"),u=n("894d"),l=n("8fe4"),h=n("7024"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),a=r.length,c=0;while(a>c)i.f(e,n=r[c++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},4413:function(e,t,n){},"44ad":function(e,t,n){var r=n("d039"),i=n("c6b6"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},4650:function(e,t){e.exports=function(e){return"function"==typeof e}},4705:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},4840:function(e,t,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},4930:function(e,t,n){var r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"498a":function(e,t,n){"use strict";var r=n("23e7"),i=n("58a8").trim,o=n("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},"4b41":function(e,t,n){var r=n("09e4"),i=n("0db0"),o=n("dcbd"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"4b5c":function(e,t,n){var r=n("0368"),i=n("dba8"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"4c07":function(e,t,n){var r=n("09e4"),i=n("0368"),o=n("bf45"),s=n("d0c8"),a=n("e3f1"),c=r.TypeError,u=Object.defineProperty;t.f=i?u:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"4d64":function(e,t,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c.length),l=o(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4dd8":function(e,t,n){var r=n("6185"),i=n("bfa1"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?o(e,t):function(){return e.apply(t,arguments)}}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=n("ae40"),a=o("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(e,t,n){var r=n("a691"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5135:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},"51d2":function(e,t,n){"use strict";var r=n("0368"),i=n("6185"),o=n("2505"),s=n("a714"),a=n("f14a"),c=n("a5b6"),u=n("0e17"),l=n("ebca"),h=n("774c"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var g,m=h(arguments[s++]),v=d?p(a(m),d(m)):a(m),y=v.length,b=0;while(y>b)g=v[b++],r&&!o(f,m,g)||(n[g]=m[g])}return n}:d},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"562f":function(e,t){e.exports="object"==typeof window},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=o.f;return n?t.concat(n(e)):t}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return K})),n.d(t,"b",(function(){return q})),n.d(t,"c",(function(){return V})),n.d(t,"d",(function(){return H})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return W})),n.d(t,"g",(function(){return X}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.21",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",E="@firebase/functions-compat",O="@firebase/installations",_="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",I="@firebase/performance",C="@firebase/performance-compat",A="@firebase/remote-config",k="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",P="@firebase/firestore",j="@firebase/firestore-compat",R="firebase",L="9.6.11",D="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[E]:"fire-fn-compat",[O]:"fire-iid",[_]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[I]:"fire-perf",[C]:"fire-perf-compat",[A]:"fire-rc",[k]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[P]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},F=new Map,B=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function V(e){const t=e.name;if(B.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;B.set(t,e);for(const n of F.values())U(n,e);return!0}function q(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function H(e,t,n=D){q(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},z=new o["b"]("app","Firebase",$);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=L;function W(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["h"])(e,s.options)&&Object(o["h"])(n,s.config))return s;throw z.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of B.values())a.addComponent(r);const c=new G(e,n,a);return F.set(i,c),c}function Y(e=D){const t=F.get(e);if(!t)throw z.create("no-app",{appName:e});return t}function X(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}V(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-heartbeat-database",Q=1,Z="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=Object(o["u"])(J,Q,(e,t)=>{switch(t){case 0:e.createObjectStore(Z)}}).catch(e=>{throw z.create("storage-open",{originalErrorMessage:e.message})})),ee}async function ne(e){try{const t=await te();return t.transaction(Z).objectStore(Z).get(ie(e))}catch(t){throw z.create("storage-get",{originalErrorMessage:t.message})}}async function re(e,t){try{const n=await te(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(t,ie(e)),r.complete}catch(n){throw z.create("storage-set",{originalErrorMessage:n.message})}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=1024,se=2592e6;class ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new le(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=se}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ce(),{heartbeatsToSend:t,unsentEntries:n}=ue(this._heartbeatsCache.heartbeats),r=Object(o["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ce(){const e=new Date;return e.toISOString().substring(0,10)}function ue(e,t=oe){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),he(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),he(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o["p"])()&&Object(o["x"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function he(e){return Object(o["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){V(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),V(new r["a"]("heartbeat",e=>new ae(e),"PRIVATE")),X(c,u,e),X(c,u,"esm2017"),X("fire-js","")}de("")},"58a8":function(e,t,n){var r=n("1d80"),i=n("5899"),o="["+i+"]",s=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},5923:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("09e4"),d=n("4dd8"),f=n("2439").f,p=n("0fd9").set,g=n("68e0"),m=n("6b23"),v=n("f514"),y=n("6629"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,E=h.process,O=h.Promise,_=f(h,"queueMicrotask"),T=_&&_.value;T||(r=function(){var e,t;y&&(e=E.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},g||y||v||!b||!w?!m&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=d(u.then,u),s=function(){l(r)}):y?s=function(){E.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=T||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5dc8":function(e,t,n){var r=n("199f"),i=n("51d2");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},"5f2f":function(e,t,n){var r=n("0ee6");e.exports=r("navigator","userAgent")||""},6117:function(e,t,n){var r=n("8b0e"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"613f":function(e,t,n){var r=n("8b0e"),i=n("6756"),o=n("4c07"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},6185:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i);e.exports=r?function(e){return e&&o(i,e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},6547:function(e,t,n){var r=n("a691"),i=n("1d80"),o=function(e){return function(t,n){var o,s,a=String(i(t)),c=r(n),u=a.length;return c<0||c>=u?e?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):o:e?a.slice(c,c+2):s-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"65ee":function(e,t,n){"use strict";var r,i,o,s=n("a714"),a=n("4650"),c=n("6756"),u=n("9aed"),l=n("7024"),h=n("8b0e"),d=n("0f33"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},"65f0":function(e,t,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");e.exports=function(e,t){var n;return i(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},6629:function(e,t,n){var r=n("d714"),i=n("09e4");e.exports="process"==r(i.process)},6756:function(e,t,n){var r,i=n("d0c8"),o=n("df84"),s=n("c51e"),a=n("1fc1"),c=n("68d9"),u=n("c4dd"),l=n("816e"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=s.length;while(e--)delete w[f][s[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=w(),void 0===t?n:o(n,t)}},"68d9":function(e,t,n){var r=n("0ee6");e.exports=r("document","documentElement")},"68e0":function(e,t,n){var r=n("5f2f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("f772"),d=n("d012"),f=a.WeakMap,p=function(e){return o(e)?i(e):r(e,{})},g=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(s){var m=new f,v=m.get,y=m.has,b=m.set;r=function(e,t){return b.call(m,e,t),t},i=function(e){return v.call(m,e)||{}},o=function(e){return y.call(m,e)}}else{var w=h("state");d[w]=!0,r=function(e,t){return u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},o=function(e){return l(e,w)}}e.exports={set:r,get:i,has:o,enforce:p,getterFor:g}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6b23":function(e,t,n){var r=n("5f2f"),i=n("09e4");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},"6c02":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ht})),n.d(t,"b",(function(){return z}));var r=n("7a23");
/*!
  * vue-router v4.0.1
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}let g=()=>{};const m=/\/$/,v=e=>e.replace(m,"");function y(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=I(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function E(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&_(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!T(e[n],t[n]))return!1;return!0}function T(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function I(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var C,A;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function k(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const x=/^[^#]+#/;function N(e,t){return e.replace(x,"#")+t}function P(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const j=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){let n=e.el;const r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=P(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function M(e,t){D.set(e,t)}function F(e){const t=D.get(e);return D.delete(e),t}let B=()=>location.protocol+"//"+location.host;function U(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let e=i.slice(1);return"/"!==e[0]&&(e="/"+e),w(e,"")}const s=w(n,e);return s+r+i}function V(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=U(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:C.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:j()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?j():null}}function H(e){const{history:t,location:n}=window;let r={value:U(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?e.slice(a)+r:B()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,q(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:j()});o(s.current,s,!0);const a=f({},q(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function $(e){e=k(e);const t=H(e),n=V(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:N.bind(null,e)},t,n);return Object.defineProperty(i,"location",{get:()=>t.location.value}),Object.defineProperty(i,"state",{get:()=>t.state.value}),i}function z(e){return e=location.host?e||location.pathname:"",e.indexOf("#")<0&&(e+="#"),$(e)}function G(e){return"string"===typeof e||e&&"object"===typeof e}function K(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=o("nf");var X;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(X||(X={}));function J(e,t){return f(new Error,{type:e,[Y]:!0},t)}function Q(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=f({},ee,t);let r=[],i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(te,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const l=c||Z;if(l!==Z){s+=10;try{new RegExp(`(${l})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+u.message)}}let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(h=a?`(?:/${h})`:"/"+h),a&&(h+="?"),i+=h,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:s}=e,a=i in t?t[i]:"";if(Array.isArray(a)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(a)?a.join("/"):a;if(!c){if(!s)throw new Error(`Missing required param "${i}"`);n.endsWith("/")?n=n.slice(0,-1):r=!0}n+=c}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=re(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},se=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?(n=2,l=""):se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--;break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function ce(e,t,n){const r=ne(ae(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){let i=!r,a=he(e);a.aliasOf=r&&r.record;const u=ge(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){let{path:l}=t;if(n&&"/"!==l[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ce(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!fe(h)&&s(e.name)),"children"in a){let e=a.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{s(d)}:g}function s(e){if(K(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw J(1,{location:e});s=i.record.name,a=f(le(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw J(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:pe(c)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function le(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function ge(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const me=/#/g,ve=/&/g,ye=/\//g,be=/=/g,we=/\?/g,Ee=/\+/g,Oe=/%5B/g,_e=/%5D/g,Te=/%5E/g,Se=/%60/g,Ie=/%7B/g,Ce=/%7C/g,Ae=/%7D/g,ke=/%20/g;function xe(e){return encodeURI(""+e).replace(Ce,"|").replace(Oe,"[").replace(_e,"]")}function Ne(e){return xe(e).replace(Ie,"{").replace(Ae,"}").replace(Te,"^")}function Pe(e){return xe(e).replace(Ee,"%2B").replace(ke,"+").replace(me,"%23").replace(ve,"%26").replace(Se,"`").replace(Ie,"{").replace(Ae,"}").replace(Te,"^")}function je(e){return Pe(e).replace(be,"%3D")}function Re(e){return xe(e).replace(me,"%23").replace(we,"%3F")}function Le(e){return Re(e).replace(ye,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Ee," ");let n=e.indexOf("="),o=De(n<0?e:e.slice(0,n)),s=n<0?null:De(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Fe(e){let t="";for(let n in e){t.length&&(t+="&");const r=e[n];if(n=je(n),null==r){void 0!==r&&(t+=n);continue}let i=Array.isArray(r)?r.map(e=>e&&Pe(e)):[r&&Pe(r)];for(let e=0;e<i.length;e++)t+=(e?"&":"")+n,null!=i[e]&&(t+="="+i[e])}return t}function Be(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(J(4,{from:n,to:t})):e instanceof Error?a(e):G(e)?a(J(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function qe(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(He(s)){let a=s.__vccOpts||s;const c=a[t];c&&i.push(Ve(c,n,r,o,e))}else{let a=s();a=a.catch(console.error),i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=d(i)?i.default:i;o.components[e]=s;const a=s[t];return a&&Ve(a,n,r,o,e)()}))}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=Object(r["inject"])(c),n=Object(r["inject"])(u),i=Object(r["computed"])(()=>t.resolve(Object(r["unref"])(e.to))),o=Object(r["computed"])(()=>{let{matched:e}=i.value,{length:t}=e;const r=e[t-1];let o=n.matched;if(!r||!o.length)return-1;let s=o.findIndex(O.bind(null,r));if(s>-1)return s;let a=Ye(e[t-2]);return t>1&&Ye(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["computed"])(()=>o.value>-1&&We(n.params,i.value.params)),a=Object(r["computed"])(()=>o.value>-1&&o.value===n.matched.length-1&&_(n.params,i.value.params));function l(n={}){return Ke(n)?t[Object(r["unref"])(e.replace)?"replace":"push"](Object(r["unref"])(e.to)):Promise.resolve()}return{route:i,href:Object(r["computed"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const ze=Object(r["defineComponent"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:t,attrs:n}){const i=Object(r["reactive"])($e(e)),{options:o}=Object(r["inject"])(c),s=Object(r["computed"])(()=>({[Xe(e.activeClass,o.linkActiveClass,"router-link-active")]:i.isActive,[Xe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const o=t.default&&t.default(i);return e.custom?o:Object(r["h"])("a",f({"aria-current":i.isExactActive?e.ariaCurrentValue:null,onClick:i.navigate,href:i.href},n,{class:s.value}),o)}}}),Ge=ze;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function We(e,t){for(let n in t){let r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Je=Object(r["defineComponent"])({name:"RouterView",props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["inject"])(l),o=Object(r["computed"])(()=>e.route||i.value),c=Object(r["inject"])(a,0),u=Object(r["computed"])(()=>o.value.matched[c]);Object(r["provide"])(a,c+1),Object(r["provide"])(s,u),Object(r["provide"])(l,o);const h=Object(r["ref"])();return Object(r["watch"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards=i.leaveGuards,t.updateGuards=i.updateGuards)),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const l=s.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},g=Object(r["h"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Qe(n.default,{Component:g,route:i})||g}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Je;var et="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function tt(e,t,n){return n={path:t,exports:{},require:function(e,t){return nt(e,void 0===t||null===t?n.path:t)}},e(n,n.exports),n.exports}function nt(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var rt=tt((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hook=t.target=t.isBrowser=void 0,t.isBrowser="undefined"!==typeof navigator,t.target=t.isBrowser?window:"undefined"!==typeof et?et:{},t.hook=t.target.__VUE_DEVTOOLS_GLOBAL_HOOK__})),it=tt((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ApiHookEvents=void 0,function(e){e["SETUP_DEVTOOLS_PLUGIN"]="devtools-plugin:setup"}(t.ApiHookEvents||(t.ApiHookEvents={}))})),ot=tt((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})})),st=tt((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})})),at=tt((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})})),ct=tt((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})})),ut=tt((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Hooks=void 0,function(e){e["TRANSFORM_CALL"]="transformCall",e["GET_APP_RECORD_NAME"]="getAppRecordName",e["GET_APP_ROOT_INSTANCE"]="getAppRootInstance",e["REGISTER_APPLICATION"]="registerApplication",e["WALK_COMPONENT_TREE"]="walkComponentTree",e["WALK_COMPONENT_PARENTS"]="walkComponentParents",e["INSPECT_COMPONENT"]="inspectComponent",e["GET_COMPONENT_BOUNDS"]="getComponentBounds",e["GET_COMPONENT_NAME"]="getComponentName",e["GET_ELEMENT_COMPONENT"]="getElementComponent",e["GET_INSPECTOR_TREE"]="getInspectorTree",e["GET_INSPECTOR_STATE"]="getInspectorState"}(t.Hooks||(t.Hooks={}))})),lt=tt((function(e,t){var n=et&&et.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=et&&et.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),r(ot,t),r(st,t),r(at,t),r(ct,t),r(ut,t)}));tt((function(e,t){var n=et&&et.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=et&&et.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||n(t,e,r)};function i(e,t){if(rt.hook)rt.hook.emit(it.ApiHookEvents.SETUP_DEVTOOLS_PLUGIN,e,t);else{const n=rt.target.__VUE_DEVTOOLS_PLUGINS__=rt.target.__VUE_DEVTOOLS_PLUGINS__||[];n.push({pluginDescriptor:e,setupFn:t})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setupDevtoolsPlugin=void 0,r(lt,t),t.setupDevtoolsPlugin=i}));function ht(e){const t=ue(e.routes,e);let n=e.parseQuery||Me,i=e.stringifyQuery||Fe,o=e.history;const s=Ue(),a=Ue(),d=Ue(),m=Object(r["shallowRef"])(W);let v=W;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,e=>""+e),O=p.bind(null,Le),_=p.bind(null,De);function T(e,n){let r,i;return K(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map(e=>e.record)}function C(e){return!!t.getRecordMatcher(e)}function A(e,r){if(r=f({},r||m.value),"string"===typeof e){let i=y(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:_(s.params),hash:De(i.hash),redirectedFrom:void 0,href:a})}let s;"path"in e?s=f({},e,{path:y(n,e.path,r.path).path}):(s=f({},e,{params:O(e.params)}),r.params=O(r.params));let a=t.resolve(s,r);const c=e.hash||"";a.params=w(_(a.params));const u=b(i,f({},e,{hash:Ne(c),path:a.path}));let l=o.createHref(u);return f({fullPath:u,hash:c,query:i===Fe?Be(e.query):e.query},a,{redirectedFrom:void 0,href:l})}function k(e){return"string"===typeof e?{path:e}:f({},e)}function x(e,t){if(v!==e)return J(8,{from:t,to:e})}function N(e){return B(e)}function P(e){return N(f(k(e),{replace:!0}))}function D(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r=k("function"===typeof n?n(e):n);return f({query:e.query,hash:e.hash,params:e.params},r)}}function B(e,t){const n=v=A(e),r=m.value,o=e.state,s=e.force,a=!0===e.replace,c=D(n);if(c)return B(f(c,{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&E(i,r,n)&&(l=J(16,{to:u,from:r}),ne(r,r,!0,!1)),(l?Promise.resolve(l):V(u,r)).catch(e=>Q(e)?e:Z(e)).then(e=>{if(e){if(Q(e,2))return B(f(k(e.to),{state:o,force:s,replace:a}),t||u)}else e=H(u,r,!0,a,o);return q(u,r,e),e})}function U(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[r,i,o]=ft(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=U.bind(null,e,t);return n.push(c),dt(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),dt(n)}).then(()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),dt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ve(i,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),dt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=qe(o,"beforeRouteEnter",e,t),n.push(c),dt(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),dt(n)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function q(e,t,n){for(const r of d.list())r(e,t,n)}function H(e,t,n,r,i){const s=x(e,t);if(s)return s;const a=t===W,c=h?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),m.value=e,ne(e,t,n,a),te()}let $;function z(){$=o.listen((e,t,n)=>{let r=A(e);const i=D(r);if(i)return void B(f(i,{replace:!0}),r).catch(g);v=r;const s=m.value;h&&M(L(s.fullPath,n.delta),j()),V(r,s).catch(e=>Q(e,12)?e:Q(e,2)?(n.delta&&o.go(-n.delta,!1),B(e.to,r).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),Z(e))).then(e=>{e=e||H(r,s,!1),e&&n.delta&&o.go(-n.delta,!1),q(r,s,e)}).catch(g)})}let G,Y=Ue(),X=Ue();function Z(e){return te(e),X.list().forEach(t=>t(e)),Promise.reject(e)}function ee(){return G&&m.value!==W?Promise.resolve():new Promise((e,t)=>{Y.add([e,t])})}function te(e){G||(G=!0,z(),Y.list().forEach(([t,n])=>e?n(e):t()),Y.reset())}function ne(t,n,i,o){const{scrollBehavior:s}=e;if(!h||!s)return Promise.resolve();let a=!i&&F(L(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["nextTick"])().then(()=>s(t,n,a)).then(e=>e&&R(e)).catch(Z)}const re=e=>o.go(e);let ie;const oe=new Set,se={currentRoute:m,addRoute:T,removeRoute:S,hasRoute:C,getRoutes:I,resolve:A,options:e,push:N,replace:P,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:X.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>Object(r["unref"])(m)}),h&&!ie&&m.value===W&&(ie=!0,N(o.location).catch(e=>{0}));const n={};for(let o in W)n[o]=Object(r["computed"])(()=>m.value[o]);e.provide(c,t),e.provide(u,Object(r["reactive"])(n)),e.provide(l,m);let i=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&($(),m.value=W,ie=!1,G=!1),i.call(this,arguments)}}};return se}function dt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function ft(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.indexOf(o)<0?n.push(o):r.push(o));const a=e.matched[s];a&&t.matched.indexOf(a)<0&&i.push(a)}return[n,r,i]}}).call(this,n("c8ba"))},"6dca":function(e,t,n){var r=n("bfa1");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},"6eeb":function(e,t,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(e.exports=function(e,t,n,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||i(n,"name",t),l(n).source=h.join("string"==typeof t?t:"")),e!==r?(c?!d&&e[t]&&(u=!0):delete e[t],u?e[t]=n:i(e,t,n)):u?e[t]=n:s(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7024:function(e,t,n){var r=n("09e4"),i=n("4650"),o=n("dba8"),s=n("3261"),a=n("79ae"),c=n("0209"),u=n("a547"),l=n("4b5c").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),e!==r?(h?!g&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7156:function(e,t,n){var r=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var o,s;return i&&"function"==typeof(o=t.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(e,s),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7422:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),i=n("f41e"),o=n("1b84"),s=n("1235"),a=n("34e1"),c=n("119a"),u=n("14c2"),l=n("9892");function h(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var d=h(i),f=h(c);function p(e,t=[]){const{arrow:n,arrowOffset:r,offset:i,gpuAcceleration:o}=e,s=[{name:"offset",options:{offset:[0,null!==i&&void 0!==i?i:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{gpuAcceleration:o,adaptive:o}}];return n&&s.push({name:"arrow",options:{element:n,padding:null!==r&&void 0!==r?r:5}}),s.push(...t),s}function g(e,t){return r.computed(()=>{var n;return Object.assign(Object.assign({placement:e.placement},e.popperOptions),{modifiers:p({arrow:t.arrow.value,arrowOffset:e.arrowOffset,offset:e.offset,gpuAcceleration:e.gpuAcceleration},null===(n=e.popperOptions)||void 0===n?void 0:n.modifiers)})})}(function(e){e["DARK"]="dark",e["LIGHT"]="light"})(t.Effect||(t.Effect={}));const m="hover";var v={arrowOffset:{type:Number,default:5},appendToBody:{type:Boolean,default:!0},boundariesPadding:{type:Number,default:0},content:{type:String,default:""},class:{type:String,default:""},style:Object,closeDelay:{type:Number,default:200},cutoff:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},effect:{type:String,default:t.Effect.DARK},enterable:{type:Boolean,default:!0},hideAfter:{type:Number,default:0},manualMode:{type:Boolean,default:!1},showAfter:{type:Number,default:0},offset:{type:Number,default:12},placement:{type:String,default:"bottom"},popperClass:{type:String,default:""},pure:{type:Boolean,default:!1},popperOptions:{type:Object,default:()=>null},showArrow:{type:Boolean,default:!0},strategy:{type:String,default:"fixed"},transition:{type:String,default:"el-fade-in-linear"},trigger:{type:[String,Array],default:m},visible:{type:Boolean,default:void 0},stopPopperMouseEvent:{type:Boolean,default:!0},gpuAcceleration:{type:Boolean,default:!0}};const y="update:visible";function b(e,{emit:t}){const n=r.ref(null),i=r.ref(null),o=r.ref(null),c="el-popper-"+a.generateId();let u=null,l=null,h=null,d=!1;const p=()=>e.manualMode||"manual"===e.trigger,m=r.ref({zIndex:f["default"].nextZIndex()}),v=g(e,{arrow:n}),b=r.reactive({visible:!!e.visible}),w=r.computed({get(){return!e.disabled&&(a.isBool(e.visible)?e.visible:b.visible)},set(n){p()||(a.isBool(e.visible)?t(y,n):b.visible=n)}});function E(){e.hideAfter>0&&(h=window.setTimeout(()=>{O()},e.hideAfter)),w.value=!0}function O(){w.value=!1}function _(){clearTimeout(l),clearTimeout(h)}const T=()=>{p()||e.disabled||(_(),0===e.showAfter?E():l=window.setTimeout(()=>{E()},e.showAfter))},S=()=>{p()||(_(),e.closeDelay>0?h=window.setTimeout(()=>{I()},e.closeDelay):I())},I=()=>{O(),e.disabled&&x(!0)};function C(){e.enterable&&"click"!==e.trigger&&clearTimeout(h)}function A(){const{trigger:t}=e,n=a.isString(t)&&("click"===t||"focus"===t)||1===t.length&&("click"===t[0]||"focus"===t[0]);n||S()}function k(){if(!a.$(w))return;const e=a.$(i),t=a.isHTMLElement(e)?e:e.$el;u=s.createPopper(t,a.$(o),a.$(v)),u.update()}function x(e){!u||a.$(w)&&!e||N()}function N(){var e;null===(e=null===u||void 0===u?void 0:u.destroy)||void 0===e||e.call(u),u=null}const P={};function j(){a.$(w)&&(u?u.update():k())}function R(e){e&&(m.value.zIndex=f["default"].nextZIndex(),k())}if(!p()){const t=()=>{a.$(w)?S():T()},n=e=>{switch(e.stopPropagation(),e.type){case"click":d?d=!1:t();break;case"mouseenter":T();break;case"mouseleave":S();break;case"focus":d=!0,T();break;case"blur":d=!1,S();break}},r=e=>{switch(e){case"click":P.onClick=n;break;case"hover":P.onMouseEnter=n,P.onMouseLeave=n;break;case"focus":P.onFocus=n,P.onBlur=n;break}};a.isArray(e.trigger)?Object.values(e.trigger).map(r):r(e.trigger)}return r.watch(v,e=>{u&&(u.setOptions(e),u.update())}),r.watch(w,R),{update:j,doDestroy:x,show:T,hide:S,onPopperMouseEnter:C,onPopperMouseLeave:A,onAfterEnter:()=>{t("after-enter")},onAfterLeave:()=>{N(),t("after-leave")},onBeforeEnter:()=>{t("before-enter")},onBeforeLeave:()=>{t("before-leave")},initializePopper:k,isManualMode:p,arrowRef:n,events:P,popperId:c,popperInstance:u,popperRef:o,popperStyle:m,triggerRef:i,visibility:w}}const w=()=>{};function E(e,t){const{effect:n,name:i,stopPopperMouseEvent:s,popperClass:a,popperStyle:c,popperRef:l,pure:h,popperId:d,visibility:f,onMouseEnter:p,onMouseLeave:g,onAfterEnter:m,onAfterLeave:v,onBeforeEnter:y,onBeforeLeave:b}=e,E=[a,"el-popper","is-"+n,h?"is-pure":""],O=s?u.stop:w;return r.createVNode(r.Transition,{name:i,onAfterEnter:m,onAfterLeave:v,onBeforeEnter:y,onBeforeLeave:b},{default:r.withCtx(()=>[r.withDirectives(r.createVNode("div",{"aria-hidden":String(!f),class:E,style:null!==c&&void 0!==c?c:{},id:d,ref:null!==l&&void 0!==l?l:"popperRef",role:"tooltip",onMouseEnter:p,onMouseLeave:g,onClick:u.stop,onMouseDown:O,onMouseUp:O},t,o.PatchFlags.CLASS|o.PatchFlags.STYLE|o.PatchFlags.PROPS|o.PatchFlags.HYDRATE_EVENTS,["aria-hidden","onMouseenter","onMouseleave","onMouseDown","onMouseUp","onClick","id"]),[[r.vShow,f]])])},o.PatchFlags.PROPS,["name","onAfterEnter","onAfterLeave","onBeforeEnter","onBeforeLeave"])}function O(e,t){const n=o.getFirstValidNode(e,1);return n||d["default"]("renderTrigger","trigger expects single rooted node"),r.cloneVNode(n,t)}function _(e){return e?(r.openBlock(),r.createBlock("div",{ref:"arrowRef",class:"el-popper__arrow","data-popper-arrow":""},null,o.PatchFlags.NEED_PATCH)):(r.openBlock(),r.createBlock(r.Comment,null,""))}const T="ElPopper",S="update:visible";var I=r.defineComponent({name:T,props:v,emits:[S,"after-enter","after-leave","before-enter","before-leave"],setup(e,t){t.slots.trigger||d["default"](T,"Trigger must be provided");const n=b(e,t),i=()=>n.doDestroy(!0);return r.onMounted(n.initializePopper),r.onBeforeUnmount(i),r.onActivated(n.initializePopper),r.onDeactivated(i),n},render(){var e;const{$slots:t,appendToBody:n,class:i,style:s,effect:a,hide:c,onPopperMouseEnter:u,onPopperMouseLeave:h,onAfterEnter:d,onAfterLeave:f,onBeforeEnter:p,onBeforeLeave:g,popperClass:m,popperId:v,popperStyle:y,pure:b,showArrow:w,transition:T,visibility:S,stopPopperMouseEvent:I}=this,C=this.isManualMode(),A=_(w),k=E({effect:a,name:T,popperClass:m,popperId:v,popperStyle:y,pure:b,stopPopperMouseEvent:I,onMouseEnter:u,onMouseLeave:h,onAfterEnter:d,onAfterLeave:f,onBeforeEnter:p,onBeforeLeave:g,visibility:S},[r.renderSlot(t,"default",{},()=>[r.toDisplayString(this.content)]),A]),x=null===(e=t.trigger)||void 0===e?void 0:e.call(t),N=Object.assign({ariaDescribedby:v,class:i,style:s,ref:"triggerRef"},this.events),P=C?O(x,N):r.withDirectives(O(x,N),[[l.ClickOutside,c]]);return o.renderBlock(r.Fragment,null,[P,r.createVNode(r.Teleport,{to:"body",disabled:!n},[k],o.PatchFlags.PROPS,["disabled"])])}});I.__file="packages/popper/src/index.vue",I.install=e=>{e.component(I.name,I)};const C=I;t.default=C,t.defaultProps=v,t.renderArrow=_,t.renderPopper=E,t.renderTrigger=O,t.usePopper=b},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},"761e":function(e,t,n){"use strict";var r=n("bfa1"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},"76af":function(e,t,n){var r=n("09e4"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"774c":function(e,t,n){var r=n("09e4"),i=n("6185"),o=n("a714"),s=n("d714"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"77da":function(e,t,n){var r=n("4c07").f,i=n("dba8"),o=n("8b0e"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},7820:function(e,t,n){var r=n("09e4"),i=n("6117"),o=n("4650"),s=n("d714"),a=n("8b0e"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"793f":function(e,t,n){"use strict";var r=n("0ee6"),i=n("4c07"),o=n("8b0e"),s=n("0368"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"79ae":function(e,t,n){var r=n("09e4"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},"7a23":function(e,t,n){"use strict";n.r(t),n.d(t,"customRef",(function(){return Pe})),n.d(t,"isProxy",(function(){return ye})),n.d(t,"isReactive",(function(){return me})),n.d(t,"isReadonly",(function(){return ve})),n.d(t,"isRef",(function(){return Oe})),n.d(t,"markRaw",(function(){return we})),n.d(t,"proxyRefs",(function(){return xe})),n.d(t,"reactive",(function(){return he})),n.d(t,"readonly",(function(){return fe})),n.d(t,"ref",(function(){return _e})),n.d(t,"shallowReactive",(function(){return de})),n.d(t,"shallowReadonly",(function(){return pe})),n.d(t,"shallowRef",(function(){return Te})),n.d(t,"toRaw",(function(){return be})),n.d(t,"toRef",(function(){return Le})),n.d(t,"toRefs",(function(){return je})),n.d(t,"triggerRef",(function(){return Ce})),n.d(t,"unref",(function(){return Ae})),n.d(t,"camelize",(function(){return r["camelize"]})),n.d(t,"capitalize",(function(){return r["capitalize"]})),n.d(t,"toDisplayString",(function(){return r["toDisplayString"]})),n.d(t,"toHandlerKey",(function(){return r["toHandlerKey"]})),n.d(t,"BaseTransition",(function(){return xn})),n.d(t,"Comment",(function(){return Vr})),n.d(t,"Fragment",(function(){return Br})),n.d(t,"KeepAlive",(function(){return Bn})),n.d(t,"Static",(function(){return qr})),n.d(t,"Suspense",(function(){return Lt})),n.d(t,"Teleport",(function(){return xr})),n.d(t,"Text",(function(){return Ur})),n.d(t,"callWithAsyncErrorHandling",(function(){return Ge})),n.d(t,"callWithErrorHandling",(function(){return ze})),n.d(t,"cloneVNode",(function(){return oi})),n.d(t,"computed",(function(){return Xi})),n.d(t,"createBlock",(function(){return Xr})),n.d(t,"createCommentVNode",(function(){return ci})),n.d(t,"createHydrationRenderer",(function(){return yr})),n.d(t,"createRenderer",(function(){return vr})),n.d(t,"createSlots",(function(){return so})),n.d(t,"createStaticVNode",(function(){return ai})),n.d(t,"createTextVNode",(function(){return si})),n.d(t,"createVNode",(function(){return ri})),n.d(t,"defineAsyncComponent",(function(){return dr})),n.d(t,"defineComponent",(function(){return lr})),n.d(t,"defineEmit",(function(){return Qi})),n.d(t,"defineProps",(function(){return Ji})),n.d(t,"devtools",(function(){return bt})),n.d(t,"getCurrentInstance",(function(){return Ri})),n.d(t,"getTransitionRawChildren",(function(){return Dn})),n.d(t,"h",(function(){return eo})),n.d(t,"handleError",(function(){return Ke})),n.d(t,"initCustomFormatter",(function(){return ro})),n.d(t,"inject",(function(){return pi})),n.d(t,"isVNode",(function(){return Jr})),n.d(t,"mergeProps",(function(){return di})),n.d(t,"nextTick",(function(){return ct})),n.d(t,"onActivated",(function(){return Vn})),n.d(t,"onBeforeMount",(function(){return dn})),n.d(t,"onBeforeUnmount",(function(){return mn})),n.d(t,"onBeforeUpdate",(function(){return pn})),n.d(t,"onDeactivated",(function(){return qn})),n.d(t,"onErrorCaptured",(function(){return wn})),n.d(t,"onMounted",(function(){return fn})),n.d(t,"onRenderTracked",(function(){return bn})),n.d(t,"onRenderTriggered",(function(){return yn})),n.d(t,"onUnmounted",(function(){return vn})),n.d(t,"onUpdated",(function(){return gn})),n.d(t,"openBlock",(function(){return zr})),n.d(t,"popScopeId",(function(){return Qt})),n.d(t,"provide",(function(){return fi})),n.d(t,"pushScopeId",(function(){return Jt})),n.d(t,"queuePostFlushCb",(function(){return pt})),n.d(t,"registerRuntimeCompiler",(function(){return Vi})),n.d(t,"renderList",(function(){return io})),n.d(t,"renderSlot",(function(){return Gt})),n.d(t,"resolveComponent",(function(){return jr})),n.d(t,"resolveDirective",(function(){return Dr})),n.d(t,"resolveDynamicComponent",(function(){return Lr})),n.d(t,"resolveTransitionHooks",(function(){return Pn})),n.d(t,"setBlockTracking",(function(){return Yr})),n.d(t,"setDevtoolsHook",(function(){return wt})),n.d(t,"setTransitionHooks",(function(){return Ln})),n.d(t,"ssrContextKey",(function(){return to})),n.d(t,"ssrUtils",(function(){return co})),n.d(t,"toHandlers",(function(){return oo})),n.d(t,"transformVNodeArgs",(function(){return Zr})),n.d(t,"useContext",(function(){return Zi})),n.d(t,"useSSRContext",(function(){return no})),n.d(t,"useTransitionState",(function(){return Cn})),n.d(t,"version",(function(){return ao})),n.d(t,"warn",(function(){return Be})),n.d(t,"watch",(function(){return _n})),n.d(t,"watchEffect",(function(){return En})),n.d(t,"withCtx",(function(){return Wt})),n.d(t,"withDirectives",(function(){return er})),n.d(t,"withScopeId",(function(){return Zt})),n.d(t,"Transition",(function(){return Go})),n.d(t,"TransitionGroup",(function(){return ls})),n.d(t,"createApp",(function(){return Hs})),n.d(t,"createSSRApp",(function(){return $s})),n.d(t,"hydrate",(function(){return qs})),n.d(t,"render",(function(){return Vs})),n.d(t,"useCssModule",(function(){return Vo})),n.d(t,"useCssVars",(function(){return qo})),n.d(t,"vModelCheckbox",(function(){return ws})),n.d(t,"vModelDynamic",(function(){return Cs})),n.d(t,"vModelRadio",(function(){return Os})),n.d(t,"vModelSelect",(function(){return _s})),n.d(t,"vModelText",(function(){return bs})),n.d(t,"vShow",(function(){return Rs})),n.d(t,"withKeys",(function(){return js})),n.d(t,"withModifiers",(function(){return Ns})),n.d(t,"compile",(function(){return Gs}));var r=n("9ff4");const i=new WeakMap,o=[];let s;const a=Symbol(""),c=Symbol("");function u(e){return e&&!0===e._isEffect}function l(e,t=r["EMPTY_OBJ"]){u(e)&&(e=e.raw);const n=f(e,t);return t.lazy||n(),n}function h(e){e.active&&(p(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let d=0;function f(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!o.includes(n)){p(n);try{return y(),o.push(n),s=n,e()}finally{o.pop(),b(),s=o[o.length-1]}}};return n.id=d++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function p(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let g=!0;const m=[];function v(){m.push(g),g=!1}function y(){m.push(g),g=!0}function b(){const e=m.pop();g=void 0===e||e}function w(e,t,n){if(!g||void 0===s)return;let r=i.get(e);r||i.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(s)||(o.add(s),s.deps.push(o))}function E(e,t,n,o,u,l){const h=i.get(e);if(!h)return;const d=new Set,f=e=>{e&&e.forEach(e=>{(e!==s||e.allowRecurse)&&d.add(e)})};if("clear"===t)h.forEach(f);else if("length"===n&&Object(r["isArray"])(e))h.forEach((e,t)=>{("length"===t||t>=o)&&f(e)});else switch(void 0!==n&&f(h.get(n)),t){case"add":Object(r["isArray"])(e)?Object(r["isIntegerKey"])(n)&&f(h.get("length")):(f(h.get(a)),Object(r["isMap"])(e)&&f(h.get(c)));break;case"delete":Object(r["isArray"])(e)||(f(h.get(a)),Object(r["isMap"])(e)&&f(h.get(c)));break;case"set":Object(r["isMap"])(e)&&f(h.get(a));break}const p=e=>{e.options.scheduler?e.options.scheduler(e):e()};d.forEach(p)}const O=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["isSymbol"])),_=A(),T=A(!1,!0),S=A(!0),I=A(!0,!0),C={};function A(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?ce:ae).get(n))return n;const s=Object(r["isArray"])(n);if(!e&&s&&Object(r["hasOwn"])(C,i))return Reflect.get(C,i,o);const a=Reflect.get(n,i,o);if(Object(r["isSymbol"])(i)?O.has(i):"__proto__"===i||"__v_isRef"===i)return a;if(e||w(n,"get",i),t)return a;if(Oe(a)){const e=!s||!Object(r["isIntegerKey"])(i);return e?a.value:a}return Object(r["isObject"])(a)?e?fe(a):he(a):a}}["includes","indexOf","lastIndexOf"].forEach(e=>{const t=Array.prototype[e];C[e]=function(...e){const n=be(this);for(let t=0,i=this.length;t<i;t++)w(n,"get",t+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(be)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{const t=Array.prototype[e];C[e]=function(...e){v();const n=t.apply(this,e);return b(),n}});const k=N(),x=N(!0);function N(e=!1){return function(t,n,i,o){const s=t[n];if(!e&&(i=be(i),!Object(r["isArray"])(t)&&Oe(s)&&!Oe(i)))return s.value=i,!0;const a=Object(r["isArray"])(t)&&Object(r["isIntegerKey"])(n)?Number(n)<t.length:Object(r["hasOwn"])(t,n),c=Reflect.set(t,n,i,o);return t===be(o)&&(a?Object(r["hasChanged"])(i,s)&&E(t,"set",n,i,s):E(t,"add",n,i)),c}}function P(e,t){const n=Object(r["hasOwn"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&E(e,"delete",t,void 0,i),o}function j(e,t){const n=Reflect.has(e,t);return Object(r["isSymbol"])(t)&&O.has(t)||w(e,"has",t),n}function R(e){return w(e,"iterate",Object(r["isArray"])(e)?"length":a),Reflect.ownKeys(e)}const L={get:_,set:k,deleteProperty:P,has:j,ownKeys:R},D={get:S,set(e,t){return!0},deleteProperty(e,t){return!0}},M=Object(r["extend"])({},L,{get:T,set:x}),F=Object(r["extend"])({},D,{get:I}),B=e=>Object(r["isObject"])(e)?he(e):e,U=e=>Object(r["isObject"])(e)?fe(e):e,V=e=>e,q=e=>Reflect.getPrototypeOf(e);function H(e,t,n=!1,r=!1){e=e["__v_raw"];const i=be(e),o=be(t);t!==o&&!n&&w(i,"get",t),!n&&w(i,"get",o);const{has:s}=q(i),a=n?U:r?V:B;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void 0}function $(e,t=!1){const n=this["__v_raw"],r=be(n),i=be(e);return e!==i&&!t&&w(r,"has",e),!t&&w(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function z(e,t=!1){return e=e["__v_raw"],!t&&w(be(e),"iterate",a),Reflect.get(e,"size",e)}function G(e){e=be(e);const t=be(this),n=q(t),r=n.has.call(t,e);return t.add(e),r||E(t,"add",e,e),this}function K(e,t){t=be(t);const n=be(this),{has:i,get:o}=q(n);let s=i.call(n,e);s||(e=be(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["hasChanged"])(t,a)&&E(n,"set",e,t,a):E(n,"add",e,t),this}function W(e){const t=be(this),{has:n,get:r}=q(t);let i=n.call(t,e);i||(e=be(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&E(t,"delete",e,void 0,o),s}function Y(){const e=be(this),t=0!==e.size,n=void 0,r=e.clear();return t&&E(e,"clear",void 0,void 0,n),r}function X(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=be(o),c=e?U:t?V:B;return!e&&w(s,"iterate",a),o.forEach((e,t)=>n.call(r,c(e),c(t),i))}}function J(e,t,n){return function(...i){const o=this["__v_raw"],s=be(o),u=Object(r["isMap"])(s),l="entries"===e||e===Symbol.iterator&&u,h="keys"===e&&u,d=o[e](...i),f=t?U:n?V:B;return!t&&w(s,"iterate",h?c:a),{next(){const{value:e,done:t}=d.next();return t?{value:e,done:t}:{value:l?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function Q(e){return function(...t){return"delete"!==e&&this}}const Z={get(e){return H(this,e)},get size(){return z(this)},has:$,add:G,set:K,delete:W,clear:Y,forEach:X(!1,!1)},ee={get(e){return H(this,e,!1,!0)},get size(){return z(this)},has:$,add:G,set:K,delete:W,clear:Y,forEach:X(!1,!0)},te={get(e){return H(this,e,!0)},get size(){return z(this,!0)},has(e){return $.call(this,e,!0)},add:Q("add"),set:Q("set"),delete:Q("delete"),clear:Q("clear"),forEach:X(!0,!1)},ne=["keys","values","entries",Symbol.iterator];function re(e,t){const n=t?ee:e?te:Z;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["hasOwn"])(n,i)&&i in t?n:t,i,o)}ne.forEach(e=>{Z[e]=J(e,!1,!1),te[e]=J(e,!0,!1),ee[e]=J(e,!1,!0)});const ie={get:re(!1,!1)},oe={get:re(!1,!0)},se={get:re(!0,!1)};const ae=new WeakMap,ce=new WeakMap;function ue(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function le(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ue(Object(r["toRawType"])(e))}function he(e){return e&&e["__v_isReadonly"]?e:ge(e,!1,L,ie)}function de(e){return ge(e,!1,M,oe)}function fe(e){return ge(e,!0,D,se)}function pe(e){return ge(e,!0,F,se)}function ge(e,t,n,i){if(!Object(r["isObject"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=t?ce:ae,s=o.get(e);if(s)return s;const a=le(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function me(e){return ve(e)?me(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ve(e){return!(!e||!e["__v_isReadonly"])}function ye(e){return me(e)||ve(e)}function be(e){return e&&be(e["__v_raw"])||e}function we(e){return Object(r["def"])(e,"__v_skip",!0),e}const Ee=e=>Object(r["isObject"])(e)?he(e):e;function Oe(e){return Boolean(e&&!0===e.__v_isRef)}function _e(e){return Ie(e)}function Te(e){return Ie(e,!0)}class Se{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:Ee(e)}get value(){return w(be(this),"get","value"),this._value}set value(e){Object(r["hasChanged"])(be(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ee(e),E(be(this),"set","value",e))}}function Ie(e,t=!1){return Oe(e)?e:new Se(e,t)}function Ce(e){E(be(e),"set","value",void 0)}function Ae(e){return Oe(e)?e.value:e}const ke={get:(e,t,n)=>Ae(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function xe(e){return me(e)?e:new Proxy(e,ke)}class Ne{constructor(e){this.__v_isRef=!0;const{get:t,set:n}=e(()=>w(this,"get","value"),()=>E(this,"set","value"));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Pe(e){return new Ne(e)}function je(e){const t=Object(r["isArray"])(e)?new Array(e.length):{};for(const n in e)t[n]=Le(e,n);return t}class Re{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Le(e,t){return Oe(e[t])?e[t]:new Re(e,t)}class De{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=l(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,E(be(this),"set","value"))}}),this["__v_isReadonly"]=n}get value(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),w(be(this),"get","value"),this._value}set value(e){this._setter(e)}}function Me(e){let t,n;return Object(r["isFunction"])(e)?(t=e,n=r["NOOP"]):(t=e.get,n=e.set),new De(t,n,Object(r["isFunction"])(e)||!e.set)}const Fe=[];function Be(e,...t){v();const n=Fe.length?Fe[Fe.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=Ue();if(r)ze(r,n,11,[e+t.join(""),n&&n.proxy,i.map(({vnode:e})=>`at <${Wi(n,e.type)}>`).join("\n"),i]);else{const n=["[Vue warn]: "+e,...t];i.length&&n.push("\n",...Ve(i)),console.warn(...n)}b()}function Ue(){let e=Fe[Fe.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function Ve(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...qe(e))}),t}function qe({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,i=" at <"+Wi(e.component,e.type,r),o=">"+n;return e.props?[i,...He(e.props),o]:[i+o]}function He(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...$e(n,e[n]))}),n.length>3&&t.push(" ..."),t}function $e(e,t,n){return Object(r["isString"])(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:Oe(t)?(t=$e(e,be(t.value),!0),n?t:[e+"=Ref<",t,">"]):Object(r["isFunction"])(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=be(t),n?t:[e+"=",t])}function ze(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Ke(o,t,n)}return i}function Ge(e,t,n,i){if(Object(r["isFunction"])(e)){const o=ze(e,t,n,i);return o&&Object(r["isPromise"])(o)&&o.catch(e=>{Ke(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(Ge(e[r],t,n,i));return o}function Ke(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void ze(s,null,10,[e,i,o])}We(e,n,i,r)}function We(e,t,n,r=!0){console.error(e)}let Ye=!1,Xe=!1;const Je=[];let Qe=0;const Ze=[];let et=null,tt=0;const nt=[];let rt=null,it=0;const ot=Promise.resolve();let st=null,at=null;function ct(e){const t=st||ot;return e?t.then(this?e.bind(this):e):t}function ut(e){Je.length&&Je.includes(e,Ye&&e.allowRecurse?Qe+1:Qe)||e===at||(Je.push(e),lt())}function lt(){Ye||Xe||(Xe=!0,st=ot.then(yt))}function ht(e){const t=Je.indexOf(e);t>-1&&Je.splice(t,1)}function dt(e,t,n,i){Object(r["isArray"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),lt()}function ft(e){dt(e,et,Ze,tt)}function pt(e){dt(e,rt,nt,it)}function gt(e,t=null){if(Ze.length){for(at=t,et=[...new Set(Ze)],Ze.length=0,tt=0;tt<et.length;tt++)et[tt]();et=null,tt=0,at=null,gt(e,t)}}function mt(e){if(nt.length){const e=[...new Set(nt)];if(nt.length=0,rt)return void rt.push(...e);for(rt=e,rt.sort((e,t)=>vt(e)-vt(t)),it=0;it<rt.length;it++)rt[it]();rt=null,it=0}}const vt=e=>null==e.id?1/0:e.id;function yt(e){Xe=!1,Ye=!0,gt(e),Je.sort((e,t)=>vt(e)-vt(t));try{for(Qe=0;Qe<Je.length;Qe++){const e=Je[Qe];e&&ze(e,null,14)}}finally{Qe=0,Je.length=0,mt(e),Ye=!1,st=null,(Je.length||nt.length)&&yt(e)}}new Set;new Map;let bt;function wt(e){bt=e}function Et(e,t,...n){const i=e.vnode.props||r["EMPTY_OBJ"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["EMPTY_OBJ"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["toNumber"]))}let c=Object(r["toHandlerKey"])(Object(r["camelize"])(t)),u=i[c];!u&&s&&(c=Object(r["toHandlerKey"])(Object(r["hyphenate"])(t)),u=i[c]),u&&Ge(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else(e.emitted={})[c]=!0;Ge(l,e,6,o)}}function Ot(e,t,n=!1){if(!t.deopt&&void 0!==e.__emits)return e.__emits;const i=e.emits;let o={},s=!1;if(!Object(r["isFunction"])(e)){const i=e=>{s=!0,Object(r["extend"])(o,Ot(e,t,!0))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return i||s?(Object(r["isArray"])(i)?i.forEach(e=>o[e]=null):Object(r["extend"])(o,i),e.__emits=o):e.__emits=null}function _t(e,t){return!(!e||!Object(r["isOn"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["hasOwn"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["hasOwn"])(e,Object(r["hyphenate"])(t))||Object(r["hasOwn"])(e,t))}let Tt=null;function St(e){Tt=e}function It(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:g}=e;let m;Tt=e;try{let e;if(4&n.shapeFlag){const t=o||i;m=ui(h.call(t,t,d,s,p,f,g)),e=u}else{const n=t;0,m=ui(n.length>1?n(s,{attrs:u,slots:c,emit:l}):n(s,null)),e=t.props?u:At(u)}let v=m;if(!1!==t.inheritAttrs&&e){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&(1&n||6&n)&&(a&&t.some(r["isModelListener"])&&(e=kt(e,a)),v=oi(v,e))}n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v}catch(v){Ke(v,e,1),m=ri(Vr)}return Tt=null,m}function Ct(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!Jr(r))return;if(r.type!==Vr||"v-if"===r.children){if(t)return;t=r}}return t}const At=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["isOn"])(n))&&((t||(t={}))[n]=e[n]);return t},kt=(e,t)=>{const n={};for(const i in e)Object(r["isModelListener"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function xt(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Nt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Nt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!_t(u,n))return!0}}return!1}function Nt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!_t(n,o))return!0}return!1}function Pt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const jt=e=>e.__isSuspense,Rt={__isSuspense:!0,process(e,t,n,r,i,o,s,a,c){null==e?Dt(t,n,r,i,o,s,a,c):Mt(e,t,n,r,i,s,c)},hydrate:Bt,create:Ft},Lt=Rt;function Dt(e,t,n,r,i,o,s,a){const{p:c,o:{createElement:u}}=a,l=u("div"),h=e.suspense=Ft(e,i,r,t,l,n,o,s,a);c(null,h.pendingBranch=e.ssContent,l,null,r,h,o),h.deps>0?(c(null,e.ssFallback,t,n,r,null,o),Ht(h,e.ssFallback)):h.resolve()}function Mt(e,t,n,i,o,s,{p:a,um:c,o:{createElement:u}}){const l=t.suspense=e.suspense;l.vnode=t,t.el=e.el;const h=t.ssContent,d=t.ssFallback,{activeBranch:f,pendingBranch:p,isInFallback:g,isHydrating:m}=l;if(p)l.pendingBranch=h,Qr(h,p)?(a(p,h,l.hiddenContainer,null,o,l,s),l.deps<=0?l.resolve():g&&(a(f,d,n,i,o,null,s),Ht(l,d))):(l.pendingId++,m?(l.isHydrating=!1,l.activeBranch=p):c(p,o,l),l.deps=0,l.effects.length=0,l.hiddenContainer=u("div"),g?(a(null,h,l.hiddenContainer,null,o,l,s),l.deps<=0?l.resolve():(a(f,d,n,i,o,null,s),Ht(l,d))):f&&Qr(h,f)?(a(f,h,n,i,o,l,s),l.resolve(!0)):(a(null,h,l.hiddenContainer,null,o,l,s),l.deps<=0&&l.resolve()));else if(f&&Qr(h,f))a(f,h,n,i,o,l,s),Ht(l,h);else{const e=t.props&&t.props.onPending;if(Object(r["isFunction"])(e)&&e(),l.pendingBranch=h,l.pendingId++,a(null,h,l.hiddenContainer,null,o,l,s),l.deps<=0)l.resolve();else{const{timeout:e,pendingId:t}=l;e>0?setTimeout(()=>{l.pendingId===t&&l.fallback(d)},e):0===e&&l.fallback(d)}}}function Ft(e,t,n,i,o,s,a,c,u,l=!1){const{p:h,m:d,um:f,n:p,o:{parentNode:g,remove:m}}=u,v=Object(r["toNumber"])(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:a,container:i,hiddenContainer:o,anchor:s,deps:0,pendingId:0,timeout:"number"===typeof v?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:i,pendingId:o,effects:s,parentComponent:a,container:c}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&i.transition&&"out-in"===i.transition.mode;e&&(n.transition.afterLeave=()=>{o===y.pendingId&&d(i,c,t,0)});let{anchor:t}=y;n&&(t=p(n),f(n,a,y,!0)),e||d(i,c,t,0)}Ht(y,i),y.pendingBranch=null,y.isInFallback=!1;let u=y.parent,l=!1;while(u){if(u.pendingBranch){u.effects.push(...s),l=!0;break}u=u.parent}l||pt(s),y.effects=[];const h=t.props&&t.props.onResolve;Object(r["isFunction"])(h)&&h()},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:i,container:o,isSVG:s}=y,a=t.props&&t.props.onFallback;Object(r["isFunction"])(a)&&a();const c=p(n),u=()=>{y.isInFallback&&(h(null,e,o,c,i,null,s),Ht(y,e))},l=e.transition&&"out-in"===e.transition.mode;l&&(n.transition.afterLeave=u),f(n,i,null,!0),y.isInFallback=!0,l||u()},move(e,t,n){y.activeBranch&&d(y.activeBranch,e,t,n),y.container=e},next(){return y.activeBranch&&p(y.activeBranch)},registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const r=e.vnode.el;e.asyncDep.catch(t=>{Ke(t,e,0)}).then(i=>{if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:o}=e;Ui(e,i),r&&(o.el=r);const s=!r&&e.subTree.el;t(e,o,g(r||e.subTree.el),r?null:p(e.subTree),y,a,c),s&&m(s),Pt(e,o.el),n&&0===--y.deps&&y.resolve()})},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&f(y.activeBranch,n,e,t),y.pendingBranch&&f(y.pendingBranch,n,e,t)}};return y}function Bt(e,t,n,r,i,o,s,a){const c=t.suspense=Ft(t,r,n,e.parentNode,document.createElement("div"),null,i,o,s,!0),u=a(e,c.pendingBranch=t.ssContent,n,c,o);return 0===c.deps&&c.resolve(),u}function Ut(e){const{shapeFlag:t,children:n}=e;let r,i;return 32&t?(r=Vt(n.default),i=Vt(n.fallback)):(r=Vt(n),i=ui(null)),{content:r,fallback:i}}function Vt(e){if(Object(r["isFunction"])(e)&&(e=e()),Object(r["isArray"])(e)){const t=Ct(e);0,e=t}return ui(e)}function qt(e,t){t&&t.pendingBranch?Object(r["isArray"])(e)?t.effects.push(...e):t.effects.push(e):pt(e)}function Ht(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,i=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=i,Pt(r,i))}let $t=0;const zt=e=>$t+=e;function Gt(e,t,n={},r){let i=e[t];$t++,zr();const o=i&&Kt(i(n)),s=Xr(Br,{key:n.key||"_"+t},o||(r?r():[]),o&&1===e._?64:-2);return $t--,s}function Kt(e){return e.some(e=>!Jr(e)||e.type!==Vr&&!(e.type===Br&&!Kt(e.children)))?e:null}function Wt(e,t=Tt){if(!t)return e;const n=(...n)=>{$t||zr(!0);const r=Tt;St(t);const i=e(...n);return St(r),$t||Gr(),i};return n._c=!0,n}let Yt=null;const Xt=[];function Jt(e){Xt.push(Yt=e)}function Qt(){Xt.pop(),Yt=Xt[Xt.length-1]||null}function Zt(e){return t=>Wt((function(){Jt(e);const n=t.apply(this,arguments);return Qt(),n}))}function en(e,t,n,i=!1){const o={},s={};Object(r["def"])(s,ei,1),nn(e,t,o,s),n?e.props=i?o:de(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function tn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=be(o),[u]=e.propsOptions;if(!(i||a>0)||16&a){let i;nn(e,t,o,s);for(const s in c)t&&(Object(r["hasOwn"])(t,s)||(i=Object(r["hyphenate"])(s))!==s&&Object(r["hasOwn"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=rn(u,t||r["EMPTY_OBJ"],s,void 0,e)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["hasOwn"])(t,e)||delete s[e]}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){const a=n[i],l=t[a];if(u)if(Object(r["hasOwn"])(s,a))s[a]=l;else{const t=Object(r["camelize"])(a);o[t]=rn(u,c,t,l,e)}else s[a]=l}}E(e,"set","$attrs")}function nn(e,t,n,i){const[o,s]=e.propsOptions;if(t)for(const a in t){const s=t[a];if(Object(r["isReservedProp"])(a))continue;let c;o&&Object(r["hasOwn"])(o,c=Object(r["camelize"])(a))?n[c]=s:_t(e.emitsOptions,a)||(i[a]=s)}if(s){const t=be(n);for(let r=0;r<s.length;r++){const i=s[r];n[i]=rn(o,t,i,t[i],e)}}}function rn(e,t,n,i,o){const s=e[n];if(null!=s){const e=Object(r["hasOwn"])(s,"default");if(e&&void 0===i){const e=s.default;s.type!==Function&&Object(r["isFunction"])(e)?(Li(o),i=e(t),Li(null)):i=e}s[0]&&(Object(r["hasOwn"])(t,n)||e?!s[1]||""!==i&&i!==Object(r["hyphenate"])(n)||(i=!0):i=!1)}return i}function on(e,t,n=!1){if(!t.deopt&&e.__props)return e.__props;const i=e.props,o={},s=[];let a=!1;if(!Object(r["isFunction"])(e)){const i=e=>{a=!0;const[n,i]=on(e,t,!0);Object(r["extend"])(o,n),i&&s.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!i&&!a)return e.__props=r["EMPTY_ARR"];if(Object(r["isArray"])(i))for(let c=0;c<i.length;c++){0;const e=Object(r["camelize"])(i[c]);sn(e)&&(o[e]=r["EMPTY_OBJ"])}else if(i){0;for(const e in i){const t=Object(r["camelize"])(e);if(sn(t)){const n=i[e],a=o[t]=Object(r["isArray"])(n)||Object(r["isFunction"])(n)?{type:n}:n;if(a){const e=un(Boolean,a.type),n=un(String,a.type);a[0]=e>-1,a[1]=n<0||e<n,(e>-1||Object(r["hasOwn"])(a,"default"))&&s.push(t)}}}}return e.__props=[o,s]}function sn(e){return"$"!==e[0]}function an(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function cn(e,t){return an(e)===an(t)}function un(e,t){if(Object(r["isArray"])(t)){for(let n=0,r=t.length;n<r;n++)if(cn(t[n],e))return n}else if(Object(r["isFunction"])(t))return cn(t,e)?0:-1;return-1}function ln(e,t,n=ji,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;v(),Li(n);const i=Ge(t,n,e,r);return Li(null),b(),i});return r?i.unshift(o):i.push(o),o}}const hn=e=>(t,n=ji)=>!Mi&&ln(e,t,n),dn=hn("bm"),fn=hn("m"),pn=hn("bu"),gn=hn("u"),mn=hn("bum"),vn=hn("um"),yn=hn("rtg"),bn=hn("rtc"),wn=(e,t=ji)=>{ln("ec",e,t)};function En(e,t){return Tn(e,null,t)}const On={};function _n(e,t,n){return Tn(e,t,n)}function Tn(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["EMPTY_OBJ"],c=ji){let u,d,f=!1;if(Oe(e)?(u=()=>e.value,f=!!e._shallow):me(e)?(u=()=>e,i=!0):u=Object(r["isArray"])(e)?()=>e.map(e=>Oe(e)?e.value:me(e)?In(e):Object(r["isFunction"])(e)?ze(e,c,2):void 0):Object(r["isFunction"])(e)?t?()=>ze(e,c,2):()=>{if(!c||!c.isUnmounted)return d&&d(),ze(e,c,3,[p])}:r["NOOP"],t&&i){const e=u;u=()=>In(e())}const p=e=>{d=y.options.onStop=()=>{ze(e,c,4)}};let g=Object(r["isArray"])(e)?[]:On;const m=()=>{if(y.active)if(t){const e=y();(i||f||Object(r["hasChanged"])(e,g))&&(d&&d(),Ge(t,c,3,[e,g===On?void 0:g,p]),g=e)}else y()};let v;m.allowRecurse=!!t,v="sync"===o?m:"post"===o?()=>gr(m,c&&c.suspense):()=>{!c||c.isMounted?ft(m):m()};const y=l(u,{lazy:!0,onTrack:s,onTrigger:a,scheduler:v});return $i(y,c),t?n?m():g=y():"post"===o?gr(y,c&&c.suspense):y(),()=>{h(y),c&&Object(r["remove"])(c.effects,y)}}function Sn(e,t,n){const i=this.proxy,o=Object(r["isString"])(e)?()=>i[e]:e.bind(i);return Tn(o,t.bind(i),n,this)}function In(e,t=new Set){if(!Object(r["isObject"])(e)||t.has(e))return e;if(t.add(e),Oe(e))In(e.value,t);else if(Object(r["isArray"])(e))for(let n=0;n<e.length;n++)In(e[n],t);else if(Object(r["isSet"])(e)||Object(r["isMap"])(e))e.forEach(e=>{In(e,t)});else for(const n in e)In(e[n],t);return e}function Cn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fn(()=>{e.isMounted=!0}),mn(()=>{e.isUnmounting=!0}),e}const An=[Function,Array],kn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},setup(e,{slots:t}){const n=Ri(),r=Cn();let i;return()=>{const o=t.default&&Dn(t.default(),!0);if(!o||!o.length)return;const s=be(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return jn(c);const u=Rn(c);if(!u)return jn(c);const l=Pn(u,s,r,n);Ln(u,l);const h=n.subTree,d=h&&Rn(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==Vr&&(!Qr(u,d)||f)){const e=Pn(d,s,r,n);if(Ln(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},jn(c);"in-out"===a&&(e.delayLeave=(e,t,n)=>{const i=Nn(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},xn=kn;function Nn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Pn(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),w=Nn(n,e),E=(e,t)=>{e&&Ge(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const o=w[b];o&&Qr(e,o)&&o.el._leaveCb&&o.el._leaveCb(),E(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=m||c,r=v||u,o=y||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?p:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return Pn(e,t,n,r)}};return O}function jn(e){if(Mn(e))return e=oi(e),e.children=null,e}function Rn(e){return Mn(e)?e.children?e.children[0]:void 0:e}function Ln(e,t){6&e.shapeFlag&&e.component?Ln(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Dn(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Br?(128&o.patchFlag&&r++,n=n.concat(Dn(o.children,t))):(t||o.type!==Vr)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}const Mn=e=>e.type.__isKeepAlive,Fn={name:"KeepAlive",__isKeepAlive:!0,inheritRef:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=new Map,i=new Set;let o=null;const s=Ri(),a=s.suspense,c=s.ctx,{renderer:{p:u,m:l,um:h,o:{createElement:d}}}=c,f=d("div");function p(e){zn(e),h(e,s,a)}function g(e){n.forEach((t,n)=>{const r=Ki(t.type);!r||e&&e(r)||m(n)})}function m(e){const t=n.get(e);o&&t.type===o.type?o&&zn(o):p(t),n.delete(e),i.delete(e)}c.activate=(e,t,n,i,o)=>{const s=e.component;l(e,t,n,0,a),u(s.vnode,e,t,n,s,a,i,o),gr(()=>{s.isDeactivated=!1,s.a&&Object(r["invokeArrayFns"])(s.a);const t=e.props&&e.props.onVnodeMounted;t&&wr(t,s.parent,e)},a)},c.deactivate=e=>{const t=e.component;l(e,f,null,1,a),gr(()=>{t.da&&Object(r["invokeArrayFns"])(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&wr(n,t.parent,e),t.isDeactivated=!0},a)},_n(()=>[e.include,e.exclude],([e,t])=>{e&&g(t=>Un(e,t)),t&&g(e=>!Un(t,e))},{flush:"post",deep:!0});let v=null;const y=()=>{null!=v&&n.set(v,Gn(s.subTree))};return fn(y),gn(y),mn(()=>{n.forEach(e=>{const{subTree:t,suspense:n}=s,r=Gn(t);if(e.type!==r.type)p(e);else{zn(r);const e=r.component.da;e&&gr(e,n)}})}),()=>{if(v=null,!t.default)return null;const r=t.default(),s=r[0];if(r.length>1)return o=null,r;if(!Jr(s)||!(4&s.shapeFlag)&&!(128&s.shapeFlag))return o=null,s;let a=Gn(s);const c=a.type,u=Ki(c),{include:l,exclude:h,max:d}=e;if(l&&(!u||!Un(l,u))||h&&u&&Un(h,u))return o=a,s;const f=null==a.key?c:a.key,p=n.get(f);return a.el&&(a=oi(a),128&s.shapeFlag&&(s.ssContent=a)),v=f,p?(a.el=p.el,a.component=p.component,a.transition&&Ln(a,a.transition),a.shapeFlag|=512,i.delete(f),i.add(f)):(i.add(f),d&&i.size>parseInt(d,10)&&m(i.values().next().value)),a.shapeFlag|=256,o=a,s}}},Bn=Fn;function Un(e,t){return Object(r["isArray"])(e)?e.some(e=>Un(e,t)):Object(r["isString"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Vn(e,t){Hn(e,"a",t)}function qn(e,t){Hn(e,"da",t)}function Hn(e,t,n=ji){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(ln(t,r,n),n){let e=n.parent;while(e&&e.parent)Mn(e.parent.vnode)&&$n(r,t,n,e),e=e.parent}}function $n(e,t,n,i){const o=ln(t,e,i,!0);vn(()=>{Object(r["remove"])(i[t],o)},n)}function zn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Gn(e){return 128&e.shapeFlag?e.ssContent:e}const Kn=e=>"_"===e[0]||"$stable"===e,Wn=e=>Object(r["isArray"])(e)?e.map(ui):[ui(e)],Yn=(e,t,n)=>Wt(e=>Wn(t(e)),n),Xn=(e,t)=>{const n=e._ctx;for(const i in e){if(Kn(i))continue;const o=e[i];if(Object(r["isFunction"])(o))t[i]=Yn(i,o,n);else if(null!=o){0;const e=Wn(o);t[i]=()=>e}}},Jn=(e,t)=>{const n=Wn(t);e.slots.default=()=>n},Qn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=t,Object(r["def"])(t,"_",n)):Xn(t,e.slots={})}else e.slots={},t&&Jn(e,t);Object(r["def"])(e.slots,ei,1)},Zn=(e,t)=>{const{vnode:n,slots:i}=e;let o=!0,s=r["EMPTY_OBJ"];if(32&n.shapeFlag){const e=t._;e?1===e?o=!1:Object(r["extend"])(i,t):(o=!t.$stable,Xn(t,i)),s=t}else t&&(Jn(e,t),s={default:1});if(o)for(const r in i)Kn(r)||r in s||delete i[r]};function er(e,t){const n=Tt;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["EMPTY_OBJ"]]=t[s];Object(r["isFunction"])(e)&&(e={mounted:e,updated:e}),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function tr(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);const c=a.dir[r];c&&Ge(c,n,8,[e.el,a,e,t])}}function nr(){return{app:null,config:{isNativeTag:r["NO"],performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:r["NO"],errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}let rr=0;function ir(e,t){return function(n,i=null){null==i||Object(r["isObject"])(i)||(i=null);const o=nr(),s=new Set;let a=!1;const c=o.app={_uid:rr++,_component:n,_props:i,_container:null,_context:o,version:ao,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["isFunction"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["isFunction"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||(o.mixins.push(e),(e.props||e.emits)&&(o.deopt=!0)),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s){if(!a){const u=ri(n,i);return u.appContext=o,s&&t?t(u,r):e(u,r),a=!0,c._container=r,r.__vue_app__=c,u.component.proxy}},unmount(){a&&e(null,c._container)},provide(e,t){return o.provides[e]=t,c}};return c}}let or=!1;const sr=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,ar=e=>8===e.nodeType;function cr(e){const{mt:t,p:n,o:{patchProp:i,nextSibling:o,parentNode:s,remove:a,insert:c,createComment:u}}=e,l=(e,t)=>{or=!1,h(t.firstChild,e,null,null),mt(),or&&console.error("Hydration completed but contains mismatches.")},h=(n,r,i,a,c=!1)=>{const u=ar(n)&&"["===n.data,l=()=>g(n,r,i,a,u),{type:v,ref:y,shapeFlag:b}=r,w=n.nodeType;r.el=n;let E=null;switch(v){case Ur:3!==w?E=l():(n.data!==r.children&&(or=!0,n.data=r.children),E=o(n));break;case Vr:E=8!==w||u?l():o(n);break;case qr:if(1===w){E=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=E.outerHTML),t===r.staticCount-1&&(r.anchor=E),E=o(E);return E}E=l();break;case Br:E=u?p(n,r,i,a,c):l();break;default:if(1&b)E=1!==w||r.type!==n.tagName.toLowerCase()?l():d(n,r,i,a,c);else if(6&b){const e=s(n),l=()=>{t(r,e,null,i,a,sr(e),c)},h=r.type.__asyncLoader;h?h().then(l):l(),E=u?m(n):o(n)}else 64&b?E=8!==w?l():r.type.hydrate(n,r,i,a,c,e,f):128&b&&(E=r.type.hydrate(n,r,i,a,sr(s(n)),c,e,h))}return null!=y&&mr(y,null,a,r),E},d=(e,t,n,o,s)=>{s=s||!!t.dynamicChildren;const{props:c,patchFlag:u,shapeFlag:l,dirs:h}=t;if(-1!==u){if(h&&tr(t,null,n,"created"),c)if(!s||16&u||32&u)for(const t in c)!Object(r["isReservedProp"])(t)&&Object(r["isOn"])(t)&&i(e,t,null,c[t]);else c.onClick&&i(e,"onClick",null,c.onClick);let d;if((d=c&&c.onVnodeBeforeMount)&&wr(d,n,t),h&&tr(t,null,n,"beforeMount"),((d=c&&c.onVnodeMounted)||h)&&qt(()=>{d&&wr(d,n,t),h&&tr(t,null,n,"mounted")},o),16&l&&(!c||!c.innerHTML&&!c.textContent)){let r=f(e.firstChild,t,e,n,o,s);while(r){or=!0;const e=r;r=r.nextSibling,a(e)}}else 8&l&&e.textContent!==t.children&&(or=!0,e.textContent=t.children)}return e.nextSibling},f=(e,t,r,i,o,s)=>{s=s||!!t.dynamicChildren;const a=t.children,c=a.length;for(let u=0;u<c;u++){const t=s?a[u]:a[u]=ui(a[u]);e?e=h(e,t,i,o,s):(or=!0,n(null,t,r,null,i,o,sr(r)))}return e},p=(e,t,n,r,i)=>{const a=s(e),l=f(o(e),t,a,n,r,i);return l&&ar(l)&&"]"===l.data?o(t.anchor=l):(or=!0,c(t.anchor=u("]"),a,l),l)},g=(e,t,r,i,c)=>{if(or=!0,t.el=null,c){const t=m(e);while(1){const n=o(e);if(!n||n===t)break;a(n)}}const u=o(e),l=s(e);return a(e),n(null,t,l,u,r,i,sr(l)),u},m=e=>{let t=0;while(e)if(e=o(e),e&&ar(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return o(e);t--}return e};return[l,h]}function ur(){}function lr(e){return Object(r["isFunction"])(e)?{setup:e,name:e.name}:e}const hr=e=>!!e.type.__asyncLoader;function dr(e){Object(r["isFunction"])(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:o=200,timeout:s,suspensible:a=!0,onError:c}=e;let u,l=null,h=0;const d=()=>(h++,l=null,f()),f=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:new Error(String(e)),c)return new Promise((t,n)=>{const r=()=>t(d()),i=()=>n(e);c(e,r,i,h+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),u=t,t)))};return lr({__asyncLoader:f,name:"AsyncComponentWrapper",setup(){const e=ji;if(u)return()=>fr(u,e);const t=t=>{l=null,Ke(t,e,13,!i)};if(a&&e.suspense)return f().then(t=>()=>fr(t,e)).catch(e=>(t(e),()=>i?ri(i,{error:e}):null));const r=_e(!1),c=_e(),h=_e(!!o);return o&&setTimeout(()=>{h.value=!1},o),null!=s&&setTimeout(()=>{if(!r.value&&!c.value){const e=new Error(`Async component timed out after ${s}ms.`);t(e),c.value=e}},s),f().then(()=>{r.value=!0}).catch(e=>{t(e),c.value=e}),()=>r.value&&u?fr(u,e):c.value&&i?ri(i,{error:c.value}):n&&!h.value?ri(n):void 0}})}function fr(e,{vnode:{ref:t,props:n,children:r}}){const i=ri(e,n,r);return i.ref=t,i}const pr={scheduler:ut,allowRecurse:!0};const gr=qt,mr=(e,t,n,i)=>{if(Object(r["isArray"])(e))return void e.forEach((e,o)=>mr(e,t&&(Object(r["isArray"])(t)?t[o]:t),n,i));let o;o=!i||hr(i)?null:4&i.shapeFlag?i.component.exposed||i.component.proxy:i.el;const{i:s,r:a}=e;const c=t&&t.r,u=s.refs===r["EMPTY_OBJ"]?s.refs={}:s.refs,l=s.setupState;if(null!=c&&c!==a&&(Object(r["isString"])(c)?(u[c]=null,Object(r["hasOwn"])(l,c)&&(l[c]=null)):Oe(c)&&(c.value=null)),Object(r["isString"])(a)){const e=()=>{u[a]=o,Object(r["hasOwn"])(l,a)&&(l[a]=o)};o?(e.id=-1,gr(e,n)):e()}else if(Oe(a)){const e=()=>{a.value=o};o?(e.id=-1,gr(e,n)):e()}else Object(r["isFunction"])(a)&&ze(a,s,12,[o,u])};function vr(e){return br(e)}function yr(e){return br(e,cr)}function br(e,t){ur();const{insert:n,remove:i,patchProp:o,forcePatchProp:s,createElement:a,createText:c,createComment:u,setText:d,setElementText:f,parentNode:p,nextSibling:g,setScopeId:m=r["NOOP"],cloneNode:v,insertStaticContent:y}=e,b=(e,t,n,r=null,i=null,o=null,s=!1,a=!1)=>{e&&!Qr(e,t)&&(r=K(e),q(e,i,o,!0),e=null),-2===t.patchFlag&&(a=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:l}=t;switch(c){case Ur:w(e,t,n,r);break;case Vr:E(e,t,n,r);break;case qr:null==e&&O(t,n,r,s);break;case Br:P(e,t,n,r,i,o,s,a);break;default:1&l?S(e,t,n,r,i,o,s,a):6&l?j(e,t,n,r,i,o,s,a):(64&l||128&l)&&c.process(e,t,n,r,i,o,s,a,Y)}null!=u&&i&&mr(u,e&&e.ref,o,t)},w=(e,t,r,i)=>{if(null==e)n(t.el=c(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},E=(e,t,r,i)=>{null==e?n(t.el=u(t.children||""),r,i):t.el=e.el},O=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r)},_=({el:e,anchor:t},r,i)=>{let o;while(e&&e!==t)o=g(e),n(e,r,i),e=o;n(t,r,i)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=g(e),i(e),e=n;i(t)},S=(e,t,n,r,i,o,s,a)=>{s=s||"svg"===t.type,null==e?I(t,n,r,i,o,s,a):k(e,t,i,o,s,a)},I=(e,t,i,s,c,u,l)=>{let h,d;const{type:p,props:g,shapeFlag:m,transition:y,scopeId:b,patchFlag:w,dirs:E}=e;if(e.el&&void 0!==v&&-1===w)h=e.el=v(e.el);else{if(h=e.el=a(e.type,u,g&&g.is),8&m?f(h,e.children):16&m&&A(e.children,h,null,s,c,u&&"foreignObject"!==p,l||!!e.dynamicChildren),E&&tr(e,null,s,"created"),g){for(const t in g)Object(r["isReservedProp"])(t)||o(h,t,null,g[t],u,e.children,s,c,G);(d=g.onVnodeBeforeMount)&&wr(d,s,e)}C(h,b,e,s)}E&&tr(e,null,s,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(h),n(h,t,i),((d=g&&g.onVnodeMounted)||O||E)&&gr(()=>{d&&wr(d,s,e),O&&y.enter(h),E&&tr(e,null,s,"mounted")},c)},C=(e,t,n,r)=>{if(t&&m(e,t),r){const i=r.type.__scopeId;i&&i!==t&&m(e,i+"-s");let o=r.subTree;0,n===o&&C(e,r.vnode.scopeId,r.vnode,r.parent)}},A=(e,t,n,r,i,o,s,a=0)=>{for(let c=a;c<e.length;c++){const a=e[c]=s?li(e[c]):ui(e[c]);b(null,a,t,n,r,i,o,s)}},k=(e,t,n,i,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=t;l|=16&e.patchFlag;const p=e.props||r["EMPTY_OBJ"],g=t.props||r["EMPTY_OBJ"];let m;if((m=g.onVnodeBeforeUpdate)&&wr(m,n,t,e),d&&tr(t,e,n,"beforeUpdate"),l>0){if(16&l)N(u,t,p,g,n,i,a);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,a),4&l&&o(u,"style",p.style,g.style,a),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const c=r[t],l=p[c],h=g[c];(h!==l||s&&s(u,c))&&o(u,c,l,h,a,e.children,n,i,G)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=h||N(u,t,p,g,n,i,a);const v=a&&"foreignObject"!==t.type;h?x(e.dynamicChildren,h,u,n,i,v):c||F(e,t,u,null,n,i,v),((m=g.onVnodeUpdated)||d)&&gr(()=>{m&&wr(m,n,t,e),d&&tr(t,e,n,"updated")},i)},x=(e,t,n,r,i,o)=>{for(let s=0;s<t.length;s++){const a=e[s],c=t[s],u=a.type===Br||!Qr(a,c)||6&a.shapeFlag||64&a.shapeFlag?p(a.el):n;b(a,c,u,null,r,i,o,!0)}},N=(e,t,n,i,a,c,u)=>{if(n!==i){for(const l in i){if(Object(r["isReservedProp"])(l))continue;const h=i[l],d=n[l];(h!==d||s&&s(e,l))&&o(e,l,d,h,u,t.children,a,c,G)}if(n!==r["EMPTY_OBJ"])for(const s in n)Object(r["isReservedProp"])(s)||s in i||o(e,s,n[s],null,u,t.children,a,c,G)}},P=(e,t,r,i,o,s,a,u)=>{const l=t.el=e?e.el:c(""),h=t.anchor=e?e.anchor:c("");let{patchFlag:d,dynamicChildren:f}=t;d>0&&(u=!0),null==e?(n(l,r,i),n(h,r,i),A(t.children,r,h,o,s,a,u)):d>0&&64&d&&f&&e.dynamicChildren?(x(e.dynamicChildren,f,r,o,s,a),(null!=t.key||o&&t===o.subTree)&&Er(e,t,!0)):F(e,t,r,h,o,s,a,u)},j=(e,t,n,r,i,o,s,a)=>{null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,a):R(t,n,r,i,o,s,a):L(e,t,a)},R=(e,t,n,r,i,o,s)=>{const a=e.component=Pi(e,r,i);if(Mn(e)&&(a.ctx.renderer=Y),Fi(a),a.asyncDep){if(i&&i.registerDep(a,D),!e.el){const e=a.subTree=ri(Vr);E(null,e,t,n)}}else D(a,e,t,n,i,o,s)},L=(e,t,n)=>{const r=t.component=e.component;if(xt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void M(r,t,n);r.next=t,ht(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,i,o,s,a)=>{e.update=l((function(){if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,h=n;0,n?(n.el=l.el,M(e,n,a)):n=l,i&&Object(r["invokeArrayFns"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&wr(t,u,n,l);const d=It(e);0;const f=e.subTree;e.subTree=d,b(f,d,p(f.el),K(f),e,o,s),n.el=d.el,null===h&&Pt(e,d.el),c&&gr(c,o),(t=n.props&&n.props.onVnodeUpdated)&&gr(()=>{wr(t,u,n,l)},o)}else{let a;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e;l&&Object(r["invokeArrayFns"])(l),(a=u&&u.onVnodeBeforeMount)&&wr(a,d,t);const f=e.subTree=It(e);if(c&&J?J(t.el,f,e,o):(b(null,f,n,i,e,o,s),t.el=f.el),h&&gr(h,o),a=u&&u.onVnodeMounted){const e=t;gr(()=>{wr(a,d,e)},o)}const{a:p}=e;p&&256&t.shapeFlag&&gr(p,o),e.isMounted=!0,t=n=i=null}}),pr)},M=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,tn(e,t.props,r,n),Zn(e,t.children),gt(void 0,e.update)},F=(e,t,n,r,i,o,s,a=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,l=t.children,{patchFlag:h,shapeFlag:d}=t;if(h>0){if(128&h)return void U(c,l,n,r,i,o,s,a);if(256&h)return void B(c,l,n,r,i,o,s,a)}8&d?(16&u&&G(c,i,o),l!==c&&f(n,l)):16&u?16&d?U(c,l,n,r,i,o,s,a):G(c,i,o,!0):(8&u&&f(n,""),16&d&&A(l,n,r,i,o,s,a))},B=(e,t,n,i,o,s,a,c)=>{e=e||r["EMPTY_ARR"],t=t||r["EMPTY_ARR"];const u=e.length,l=t.length,h=Math.min(u,l);let d;for(d=0;d<h;d++){const r=t[d]=c?li(t[d]):ui(t[d]);b(e[d],r,n,null,o,s,a,c)}u>l?G(e,o,s,!0,!1,h):A(t,n,i,o,s,a,c,h)},U=(e,t,n,i,o,s,a,c)=>{let u=0;const l=t.length;let h=e.length-1,d=l-1;while(u<=h&&u<=d){const r=e[u],i=t[u]=c?li(t[u]):ui(t[u]);if(!Qr(r,i))break;b(r,i,n,null,o,s,a,c),u++}while(u<=h&&u<=d){const r=e[h],i=t[d]=c?li(t[d]):ui(t[d]);if(!Qr(r,i))break;b(r,i,n,null,o,s,a,c),h--,d--}if(u>h){if(u<=d){const e=d+1,r=e<l?t[e].el:i;while(u<=d)b(null,t[u]=c?li(t[u]):ui(t[u]),n,r,o,s,a),u++}}else if(u>d)while(u<=h)q(e[u],o,s,!0),u++;else{const f=u,p=u,g=new Map;for(u=p;u<=d;u++){const e=t[u]=c?li(t[u]):ui(t[u]);null!=e.key&&g.set(e.key,u)}let m,v=0;const y=d-p+1;let w=!1,E=0;const O=new Array(y);for(u=0;u<y;u++)O[u]=0;for(u=f;u<=h;u++){const r=e[u];if(v>=y){q(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(m=p;m<=d;m++)if(0===O[m-p]&&Qr(r,t[m])){i=m;break}void 0===i?q(r,o,s,!0):(O[i-p]=u+1,i>=E?E=i:w=!0,b(r,t[i],n,null,o,s,a,c),v++)}const _=w?Or(O):r["EMPTY_ARR"];for(m=_.length-1,u=y-1;u>=0;u--){const e=p+u,r=t[e],c=e+1<l?t[e+1].el:i;0===O[u]?b(null,r,n,c,o,s,a):w&&(m<0||u!==_[m]?V(r,n,c,2):m--)}}},V=(e,t,r,i,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void V(e.component.subTree,t,r,i);if(128&l)return void e.suspense.move(t,r,i);if(64&l)return void a.move(e,t,r,Y);if(a===Br){n(s,t,r);for(let e=0;e<u.length;e++)V(u[e],t,r,i);return void n(e.anchor,t,r)}if(a===qr)return void _(e,t,r);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(s),n(s,t,r),gr(()=>c.enter(s),o);else{const{leave:e,delayLeave:i,afterLeave:o}=c,a=()=>n(s,t,r),u=()=>{e(s,()=>{a(),o&&o()})};i?i(s,a,u):u()}else n(s,t,r)},q=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&mr(a,null,n,null),256&l)return void t.ctx.deactivate(e);const f=1&l&&d;let p;if((p=s&&s.onVnodeBeforeUnmount)&&wr(p,t,e),6&l)z(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&tr(e,null,t,"beforeUnmount"),u&&(o!==Br||h>0&&64&h)?G(u,t,n,!1,!0):(o===Br&&(128&h||256&h)||!i&&16&l)&&G(c,t,n),64&l&&(r||!Tr(e.props))&&e.type.remove(e,Y),r&&H(e)}((p=s&&s.onVnodeUnmounted)||f)&&gr(()=>{p&&wr(p,t,e),f&&tr(e,null,t,"unmounted")},n)},H=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Br)return void $(n,r);if(t===qr)return void T(e);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,i=()=>t(n,s);r?r(e.el,s,i):i()}else s()},$=(e,t)=>{let n;while(e!==t)n=g(e),i(e),e=n;i(t)},z=(e,t,n)=>{const{bum:i,effects:o,update:s,subTree:a,um:c}=e;if(i&&Object(r["invokeArrayFns"])(i),o)for(let r=0;r<o.length;r++)h(o[r]);s&&(h(s),q(a,e,t,n)),c&&gr(c,t),gr(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)q(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),W=(e,t)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):b(t._vnode||null,e,t),mt(),t._vnode=e},Y={p:b,um:q,m:V,r:H,mt:R,mc:A,pc:F,pbc:x,n:K,o:e};let X,J;return t&&([X,J]=t(Y)),{render:W,hydrate:X,createApp:ir(W,X)}}function wr(e,t,n,r=null){Ge(e,t,7,[n,r])}function Er(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["isArray"])(i)&&Object(r["isArray"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=li(o[r]),t.el=e.el),n||Er(e,t))}}function Or(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=(o+s)/2|0,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const _r=e=>e.__isTeleport,Tr=e=>e&&(e.disabled||""===e.disabled),Sr=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Ir=(e,t)=>{const n=e&&e.to;if(Object(r["isString"])(n)){if(t){const e=t(n);return e}return null}return n},Cr={__isTeleport:!0,process(e,t,n,r,i,o,s,a,c){const{mc:u,pc:l,pbc:h,o:{insert:d,querySelector:f,createText:p,createComment:g}}=c,m=Tr(t.props),{shapeFlag:v,children:y}=t;if(null==e){const e=t.el=p(""),c=t.anchor=p("");d(e,n,r),d(c,n,r);const l=t.target=Ir(t.props,f),h=t.targetAnchor=p("");l&&(d(h,l),s=s||Sr(l));const g=(e,t)=>{16&v&&u(y,e,t,i,o,s,a)};m?g(n,c):l&&g(l,h)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,d=t.targetAnchor=e.targetAnchor,p=Tr(e.props),g=p?n:u,v=p?r:d;if(s=s||Sr(u),t.dynamicChildren?(h(e.dynamicChildren,t.dynamicChildren,g,i,o,s),Er(e,t,!0)):a||l(e,t,g,v,i,o,s),m)p||Ar(t,n,r,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Ir(t.props,f);e&&Ar(t,e,null,c,0)}else p&&Ar(t,u,d,c,1)}},remove(e,{r:t,o:{remove:n}}){const{shapeFlag:r,children:i,anchor:o}=e;if(n(o),16&r)for(let s=0;s<i.length;s++)t(i[s])},move:Ar,hydrate:kr};function Ar(e,t,n,{o:{insert:r},m:i},o=2){0===o&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===o;if(h&&r(s,t,n),(!h||Tr(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function kr(e,t,n,r,i,{o:{nextSibling:o,parentNode:s,querySelector:a}},c){const u=t.target=Ir(t.props,a);if(u){const a=u._lpa||u.firstChild;16&t.shapeFlag&&(Tr(t.props)?(t.anchor=c(o(e),t,s(e),n,r,i),t.targetAnchor=a):(t.anchor=o(e),t.targetAnchor=c(a,t,u,n,r,i)),u._lpa=t.targetAnchor&&o(t.targetAnchor))}return t.anchor&&o(t.anchor)}const xr=Cr,Nr="components",Pr="directives";function jr(e){return Mr(Nr,e)||e}const Rr=Symbol();function Lr(e){return Object(r["isString"])(e)?Mr(Nr,e,!1)||e:e||Rr}function Dr(e){return Mr(Pr,e)}function Mr(e,t,n=!0){const i=Tt||ji;if(i){const n=i.type;if(e===Nr){if("_self"===t)return n;const e=Ki(n);if(e&&(e===t||e===Object(r["camelize"])(t)||e===Object(r["capitalize"])(Object(r["camelize"])(t))))return n}const o=Fr(i[e]||n[e],t)||Fr(i.appContext[e],t);return o}}function Fr(e,t){return e&&(e[t]||e[Object(r["camelize"])(t)]||e[Object(r["capitalize"])(Object(r["camelize"])(t))])}const Br=Symbol(void 0),Ur=Symbol(void 0),Vr=Symbol(void 0),qr=Symbol(void 0),Hr=[];let $r=null;function zr(e=!1){Hr.push($r=e?null:[])}function Gr(){Hr.pop(),$r=Hr[Hr.length-1]||null}let Kr,Wr=1;function Yr(e){Wr+=e}function Xr(e,t,n,i,o){const s=ri(e,t,n,i,o,!0);return s.dynamicChildren=$r||r["EMPTY_ARR"],Gr(),Wr>0&&$r&&$r.push(s),s}function Jr(e){return!!e&&!0===e.__v_isVNode}function Qr(e,t){return e.type===t.type&&e.key===t.key}function Zr(e){Kr=e}const ei="__vInternal",ti=({key:e})=>null!=e?e:null,ni=({ref:e})=>null!=e?Object(r["isString"])(e)||Oe(e)||Object(r["isFunction"])(e)?{i:Tt,r:e}:e:null,ri=ii;function ii(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Rr||(e=Vr),Jr(e)){const r=oi(e,t,!0);return n&&hi(r,n),r}if(Yi(e)&&(e=e.__vccOpts),t){(ye(t)||ei in t)&&(t=Object(r["extend"])({},t));let{class:e,style:n}=t;e&&!Object(r["isString"])(e)&&(t.class=Object(r["normalizeClass"])(e)),Object(r["isObject"])(n)&&(ye(n)&&!Object(r["isArray"])(n)&&(n=Object(r["extend"])({},n)),t.style=Object(r["normalizeStyle"])(n))}const a=Object(r["isString"])(e)?1:jt(e)?128:_r(e)?64:Object(r["isObject"])(e)?4:Object(r["isFunction"])(e)?2:0;const c={__v_isVNode:!0,["__v_skip"]:!0,type:e,props:t,key:t&&ti(t),ref:t&&ni(t),scopeId:Yt,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};if(hi(c,n),128&a){const{content:e,fallback:t}=Ut(c);c.ssContent=e,c.ssFallback=t}return Wr>0&&!s&&$r&&(i>0||6&a)&&32!==i&&$r.push(c),c}function oi(e,t,n=!1){const{props:i,ref:o,patchFlag:s}=e,a=t?di(i||{},t):i;return{__v_isVNode:!0,["__v_skip"]:!0,type:e.type,props:a,key:a&&ti(a),ref:t&&t.ref?n&&o?Object(r["isArray"])(o)?o.concat(ni(t)):[o,ni(t)]:ni(t):o,scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Br?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&oi(e.ssContent),ssFallback:e.ssFallback&&oi(e.ssFallback),el:e.el,anchor:e.anchor}}function si(e=" ",t=0){return ri(Ur,null,e,t)}function ai(e,t){const n=ri(qr,null,e);return n.staticCount=t,n}function ci(e="",t=!1){return t?(zr(),Xr(Vr,null,e)):ri(Vr,null,e)}function ui(e){return null==e||"boolean"===typeof e?ri(Vr):Object(r["isArray"])(e)?ri(Br,null,e):"object"===typeof e?null===e.el?e:oi(e):ri(Ur,null,String(e))}function li(e){return null===e.el?e:oi(e)}function hi(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["isArray"])(t))n=16;else if("object"===typeof t){if(1&i||64&i){const n=t.default;return void(n&&(n._c&&zt(1),hi(e,n()),n._c&&zt(-1)))}{n=32;const r=t._;r||ei in t?3===r&&Tt&&(1024&Tt.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=Tt}}else Object(r["isFunction"])(t)?(t={default:t,_ctx:Tt},n=32):(t=String(t),64&i?(n=16,t=[si(t)]):n=8);e.children=t,e.shapeFlag|=n}function di(...e){const t=Object(r["extend"])({},e[0]);for(let n=1;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["normalizeClass"])([t.class,i.class]));else if("style"===e)t.style=Object(r["normalizeStyle"])([t.style,i.style]);else if(Object(r["isOn"])(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,i[e]):r)}else""!==e&&(t[e]=i[e])}return t}function fi(e,t){if(ji){let n=ji.provides;const r=ji.parent&&ji.parent.provides;r===n&&(n=ji.provides=Object.create(r)),n[e]=t}else 0}function pi(e,t,n=!1){const i=ji||Tt;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["isFunction"])(t)?t():t}else 0}let gi=!1;function mi(e,t,n=[],i=[],o=[],s=!1){const{mixins:a,extends:c,data:u,computed:l,methods:h,watch:d,provide:f,inject:p,components:g,directives:m,beforeMount:v,mounted:y,beforeUpdate:b,updated:w,activated:E,deactivated:O,beforeDestroy:_,beforeUnmount:T,destroyed:S,unmounted:I,render:C,renderTracked:A,renderTriggered:k,errorCaptured:x,expose:N}=t,P=e.proxy,j=e.ctx,R=e.appContext.mixins;s&&C&&e.render===r["NOOP"]&&(e.render=C),s||(gi=!0,vi("beforeCreate","bc",t,e,R),gi=!1,wi(e,R,n,i,o)),c&&mi(e,c,n,i,o,!0),a&&wi(e,a,n,i,o);if(p)if(Object(r["isArray"])(p))for(let r=0;r<p.length;r++){const e=p[r];j[e]=pi(e)}else for(const L in p){const e=p[L];Object(r["isObject"])(e)?j[L]=pi(e.from||L,e.default,!0):j[L]=pi(e)}if(h)for(const L in h){const e=h[L];Object(r["isFunction"])(e)&&(j[L]=e.bind(P))}if(s?u&&n.push(u):(n.length&&n.forEach(t=>Ei(e,t,P)),u&&Ei(e,u,P)),l)for(const L in l){const e=l[L],t=Object(r["isFunction"])(e)?e.bind(P,P):Object(r["isFunction"])(e.get)?e.get.bind(P,P):r["NOOP"];0;const n=!Object(r["isFunction"])(e)&&Object(r["isFunction"])(e.set)?e.set.bind(P):r["NOOP"],i=Xi({get:t,set:n});Object.defineProperty(j,L,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(d&&i.push(d),!s&&i.length&&i.forEach(e=>{for(const t in e)Oi(e[t],j,P,t)}),f&&o.push(f),!s&&o.length&&o.forEach(e=>{const t=Object(r["isFunction"])(e)?e.call(P):e;Reflect.ownKeys(t).forEach(e=>{fi(e,t[e])})}),s&&(g&&Object(r["extend"])(e.components||(e.components=Object(r["extend"])({},e.type.components)),g),m&&Object(r["extend"])(e.directives||(e.directives=Object(r["extend"])({},e.type.directives)),m)),s||vi("created","c",t,e,R),v&&dn(v.bind(P)),y&&fn(y.bind(P)),b&&pn(b.bind(P)),w&&gn(w.bind(P)),E&&Vn(E.bind(P)),O&&qn(O.bind(P)),x&&wn(x.bind(P)),A&&bn(A.bind(P)),k&&yn(k.bind(P)),T&&mn(T.bind(P)),I&&vn(I.bind(P)),Object(r["isArray"])(N))if(s)0;else if(N.length){const t=e.exposed||(e.exposed=xe({}));N.forEach(e=>{t[e]=Le(P,e)})}else e.exposed||(e.exposed=r["EMPTY_OBJ"])}function vi(e,t,n,r,i){bi(e,t,i,r);const{extends:o,mixins:s}=n;o&&yi(e,t,o,r),s&&bi(e,t,s,r);const a=n[e];a&&Ge(a.bind(r.proxy),r,t)}function yi(e,t,n,r){n.extends&&yi(e,t,n.extends,r);const i=n[e];i&&Ge(i.bind(r.proxy),r,t)}function bi(e,t,n,r){for(let i=0;i<n.length;i++){const o=n[i].mixins;o&&bi(e,t,o,r);const s=n[i][e];s&&Ge(s.bind(r.proxy),r,t)}}function wi(e,t,n,r,i){for(let o=0;o<t.length;o++)mi(e,t[o],n,r,i,!0)}function Ei(e,t,n){const i=t.call(n,n);Object(r["isObject"])(i)&&(e.data===r["EMPTY_OBJ"]?e.data=he(i):Object(r["extend"])(e.data,i))}function Oi(e,t,n,i){const o=i.includes(".")?_i(n,i):()=>n[i];if(Object(r["isString"])(e)){const n=t[e];Object(r["isFunction"])(n)&&_n(o,n)}else if(Object(r["isFunction"])(e))_n(o,e.bind(n));else if(Object(r["isObject"])(e))if(Object(r["isArray"])(e))e.forEach(e=>Oi(e,t,n,i));else{const i=Object(r["isFunction"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["isFunction"])(i)&&_n(o,i,e)}else 0}function _i(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Ti(e){const t=e.type,{__merged:n,mixins:r,extends:i}=t;if(n)return n;const o=e.appContext.mixins;if(!o.length&&!r&&!i)return t;const s={};return o.forEach(t=>Si(s,t,e)),Si(s,t,e),t.__merged=s}function Si(e,t,n){const i=n.appContext.config.optionMergeStrategies,{mixins:o,extends:s}=t;s&&Si(e,s,n),o&&o.forEach(t=>Si(e,t,n));for(const a in t)i&&Object(r["hasOwn"])(i,a)?e[a]=i[a](e[a],t[a],n.proxy,a):e[a]=t[a]}const Ii=e=>e&&(e.proxy?e.proxy:Ii(e.parent)),Ci=Object(r["extend"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ii(e.parent),$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>Ti(e),$forceUpdate:e=>()=>ut(e.update),$nextTick:e=>ct.bind(e.proxy),$watch:e=>Sn.bind(e)}),Ai={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;if("__v_skip"===t)return!0;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 0:return i[t];case 1:return o[t];case 3:return n[t];case 2:return s[t]}else{if(i!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(i,t))return a[t]=0,i[t];if(o!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(o,t))return a[t]=1,o[t];if((l=e.propsOptions[0])&&Object(r["hasOwn"])(l,t))return a[t]=2,s[t];if(n!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(n,t))return a[t]=3,n[t];gi||(a[t]=4)}}const h=Ci[t];let d,f;return h?("$attrs"===t&&w(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(n,t)?(a[t]=3,n[t]):(f=u.config.globalProperties,Object(r["hasOwn"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(o,t))o[t]=n;else if(i!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(i,t))i[t]=n;else if(t in e.props)return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||e!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(e,a)||t!==r["EMPTY_OBJ"]&&Object(r["hasOwn"])(t,a)||(c=s[0])&&Object(r["hasOwn"])(c,a)||Object(r["hasOwn"])(i,a)||Object(r["hasOwn"])(Ci,a)||Object(r["hasOwn"])(o.config.globalProperties,a)}};const ki=Object(r["extend"])({},Ai,{get(e,t){if(t!==Symbol.unscopables)return Ai.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!Object(r["isGloballyWhitelisted"])(t);return n}});const xi=nr();let Ni=0;function Pi(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||xi,s={uid:Ni++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:on(i,o),emitsOptions:Ot(i,o),emit:null,emitted:null,ctx:r["EMPTY_OBJ"],data:r["EMPTY_OBJ"],props:r["EMPTY_OBJ"],attrs:r["EMPTY_OBJ"],slots:r["EMPTY_OBJ"],refs:r["EMPTY_OBJ"],setupState:r["EMPTY_OBJ"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Et.bind(null,s),s}let ji=null;const Ri=()=>ji||Tt,Li=e=>{ji=e};let Di,Mi=!1;function Fi(e,t=!1){Mi=t;const{props:n,children:r,shapeFlag:i}=e.vnode,o=4&i;en(e,n,o,t),Qn(e,r);const s=o?Bi(e,t):void 0;return Mi=!1,s}function Bi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ai);const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Hi(e):null;ji=e,v();const o=ze(i,e,0,[e.props,n]);if(b(),ji=null,Object(r["isPromise"])(o)){if(t)return o.then(t=>{Ui(e,t)});e.asyncDep=o}else Ui(e,o)}else qi(e)}function Ui(e,t,n){Object(r["isFunction"])(t)?e.render=t:Object(r["isObject"])(t)&&(e.setupState=xe(t)),qi(e)}function Vi(e){Di=e}function qi(e,t){const n=e.type;e.render||(Di&&n.template&&!n.render&&(n.render=Di(n.template,{isCustomElement:e.appContext.config.isCustomElement,delimiters:n.delimiters})),e.render=n.render||r["NOOP"],e.render._rc&&(e.withProxy=new Proxy(e.ctx,ki))),ji=e,v(),mi(e,n),b(),ji=null}function Hi(e){const t=t=>{e.exposed=xe(t)};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}function $i(e,t=ji){t&&(t.effects||(t.effects=[])).push(e)}const zi=/(?:^|[-_])(\w)/g,Gi=e=>e.replace(zi,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ki(e){return Object(r["isFunction"])(e)&&e.displayName||e.name}function Wi(e,t,n=!1){let r=Ki(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Gi(r):n?"App":"Anonymous"}function Yi(e){return Object(r["isFunction"])(e)&&"__vccOpts"in e}function Xi(e){const t=Me(e);return $i(t.effect),t}function Ji(){return null}function Qi(){return null}function Zi(){const e=Ri();return e.setupContext||(e.setupContext=Hi(e))}function eo(e,t,n){const i=arguments.length;return 2===i?Object(r["isObject"])(t)&&!Object(r["isArray"])(t)?Jr(t)?ri(e,null,[t]):ri(e,t):ri(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Jr(n)&&(n=[n]),ri(e,t,n))}const to=Symbol(""),no=()=>{{const e=pi(to);return e||Be("Server rendering context not provided. Make sure to only call useSsrContext() conditionally in the server build."),e}};function ro(){return void 0}function io(e,t){let n;if(Object(r["isArray"])(e)||Object(r["isString"])(e)){n=new Array(e.length);for(let r=0,i=e.length;r<i;r++)n[r]=t(e[r],r)}else if("number"===typeof e){0,n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(Object(r["isObject"])(e))if(e[Symbol.iterator])n=Array.from(e,t);else{const r=Object.keys(e);n=new Array(r.length);for(let i=0,o=r.length;i<o;i++){const o=r[i];n[i]=t(e[o],o,i)}}else n=[];return n}function oo(e){const t={};for(const n in e)t[Object(r["toHandlerKey"])(n)]=e[n];return t}function so(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(Object(r["isArray"])(i))for(let t=0;t<i.length;t++)e[i[t].name]=i[t].fn;else i&&(e[i.name]=i.fn)}return e}const ao="3.0.5",co=null,uo="http://www.w3.org/2000/svg",lo="undefined"!==typeof document?document:null;let ho,fo;const po={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?lo.createElementNS(uo,e):lo.createElement(e,n?{is:n}:void 0),createText:e=>lo.createTextNode(e),createComment:e=>lo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lo.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){return e.cloneNode(!0)},insertStaticContent(e,t,n,r){const i=r?fo||(fo=lo.createElementNS(uo,"svg")):ho||(ho=lo.createElement("div"));i.innerHTML=e;const o=i.firstChild;let s=o,a=s;while(s)a=s,po.insert(s,t,n),s=i.firstChild;return[o,a]}};function go(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}function mo(e,t,n){const i=e.style;if(n)if(Object(r["isString"])(n))t!==n&&(i.cssText=n);else{for(const e in n)yo(i,e,n[e]);if(t&&!Object(r["isString"])(t))for(const e in t)null==n[e]&&yo(i,e,"")}else e.removeAttribute("style")}const vo=/\s*!important$/;function yo(e,t,n){if(Object(r["isArray"])(n))n.forEach(n=>yo(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Eo(e,t);vo.test(n)?e.setProperty(Object(r["hyphenate"])(i),n.replace(vo,""),"important"):e[i]=n}}const bo=["Webkit","Moz","ms"],wo={};function Eo(e,t){const n=wo[t];if(n)return n;let i=Object(r["camelize"])(t);if("filter"!==i&&i in e)return wo[t]=i;i=Object(r["capitalize"])(i);for(let r=0;r<bo.length;r++){const n=bo[r]+i;if(n in e)return wo[t]=n}return t}const Oo="http://www.w3.org/1999/xlink";function _o(e,t,n,i){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Oo,t.slice(6,t.length)):e.setAttributeNS(Oo,t,n);else{const i=Object(r["isSpecialBooleanAttr"])(t);null==n||i&&!1===n?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function To(e,t,n,r,i,o,s){if("innerHTML"===t||"textContent"===t)return r&&s(r,i,o),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName){if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){0}}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}let So=Date.now;"undefined"!==typeof document&&So()>document.createEvent("Event").timeStamp&&(So=()=>performance.now());let Io=0;const Co=Promise.resolve(),Ao=()=>{Io=0},ko=()=>Io||(Co.then(Ao),Io=So());function xo(e,t,n,r){e.addEventListener(t,n,r)}function No(e,t,n,r){e.removeEventListener(t,n,r)}function Po(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=Ro(t);if(r){const s=o[t]=Lo(r,i);xo(e,n,s,a)}else s&&(No(e,n,s,a),o[t]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function Ro(e){let t;if(jo.test(e)){let n;t={};while(n=e.match(jo))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e.slice(2).toLowerCase(),t]}function Lo(e,t){const n=e=>{const r=e.timeStamp||So();r>=n.attached-1&&Ge(Do(e,n.value),t,5,[e])};return n.value=e,n.attached=ko(),n}function Do(e,t){if(Object(r["isArray"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Mo=/^on[a-z]/,Fo=(e,t)=>"value"===t,Bo=(e,t,n,i,o=!1,s,a,c,u)=>{switch(t){case"class":go(e,i,o);break;case"style":mo(e,n,i);break;default:Object(r["isOn"])(t)?Object(r["isModelListener"])(t)||Po(e,t,n,i,a):Uo(e,t,i,o)?To(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),_o(e,t,i,o));break}};function Uo(e,t,n,i){return i?"innerHTML"===t||!!(t in e&&Mo.test(t)&&Object(r["isFunction"])(n)):"spellcheck"!==t&&"draggable"!==t&&(("form"!==t||"string"!==typeof n)&&(("list"!==t||"INPUT"!==e.tagName)&&((!Mo.test(t)||!Object(r["isString"])(n))&&t in e)))}function Vo(e="$style"){{const t=Ri();if(!t)return r["EMPTY_OBJ"];const n=t.type.__cssModules;if(!n)return r["EMPTY_OBJ"];const i=n[e];return i||r["EMPTY_OBJ"]}}function qo(e){const t=Ri();if(!t)return;const n=()=>Ho(t.subTree,e(t.proxy));fn(()=>En(n,{flush:"post"})),gn(n)}function Ho(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ho(n.activeBranch,t)})}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el){const n=e.el.style;for(const e in t)n.setProperty("--"+e,t[e])}else e.type===Br&&e.children.forEach(e=>Ho(e,t))}const $o="transition",zo="animation",Go=(e,{slots:t})=>eo(xn,Yo(e),t);Go.displayName="Transition";const Ko={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wo=Go.props=Object(r["extend"])({},xn.props,Ko);function Yo(e){let{name:t="v",type:n,css:i=!0,duration:o,enterFromClass:s=t+"-enter-from",enterActiveClass:a=t+"-enter-active",enterToClass:c=t+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=t+"-leave-from",leaveActiveClass:f=t+"-leave-active",leaveToClass:p=t+"-leave-to"}=e;const g={};for(const r in e)r in Ko||(g[r]=e[r]);if(!i)return g;const m=Xo(o),v=m&&m[0],y=m&&m[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:E,onLeave:O,onLeaveCancelled:_,onBeforeAppear:T=b,onAppear:S=w,onAppearCancelled:I=E}=g,C=(e,t,n)=>{Zo(e,t?h:c),Zo(e,t?l:a),n&&n()},A=(e,t)=>{Zo(e,p),Zo(e,f),t&&t()},k=e=>(t,r)=>{const i=e?S:w,o=()=>C(t,e,r);i&&i(t,o),es(()=>{Zo(t,e?u:s),Qo(t,e?h:c),i&&i.length>1||ns(t,n,v,o)})};return Object(r["extend"])(g,{onBeforeEnter(e){b&&b(e),Qo(e,s),Qo(e,a)},onBeforeAppear(e){T&&T(e),Qo(e,u),Qo(e,l)},onEnter:k(!1),onAppear:k(!0),onLeave(e,t){const r=()=>A(e,t);Qo(e,d),ss(),Qo(e,f),es(()=>{Zo(e,d),Qo(e,p),O&&O.length>1||ns(e,n,y,r)}),O&&O(e,r)},onEnterCancelled(e){C(e,!1),E&&E(e)},onAppearCancelled(e){C(e,!0),I&&I(e)},onLeaveCancelled(e){A(e),_&&_(e)}})}function Xo(e){if(null==e)return null;if(Object(r["isObject"])(e))return[Jo(e.enter),Jo(e.leave)];{const t=Jo(e);return[t,t]}}function Jo(e){const t=Object(r["toNumber"])(e);return t}function Qo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function Zo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function es(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ts=0;function ns(e,t,n,r){const i=e._endId=++ts,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=rs(e,t);if(!s)return r();const u=s+"end";let l=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function rs(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r($o+"Delay"),o=r($o+"Duration"),s=is(i,o),a=r(zo+"Delay"),c=r(zo+"Duration"),u=is(a,c);let l=null,h=0,d=0;t===$o?s>0&&(l=$o,h=s,d=o.length):t===zo?u>0&&(l=zo,h=u,d=c.length):(h=Math.max(s,u),l=h>0?s>u?$o:zo:null,d=l?l===$o?o.length:c.length:0);const f=l===$o&&/\b(transform|all)(,|$)/.test(n[$o+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function is(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>os(t)+os(e[n])))}function os(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ss(){return document.body.offsetHeight}const as=new WeakMap,cs=new WeakMap,us={name:"TransitionGroup",props:Object(r["extend"])({},Wo,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ri(),r=Cn();let i,o;return gn(()=>{if(!i.length)return;const t=e.moveClass||(e.name||"v")+"-move";if(!ps(i[0].el,n.vnode.el,t))return;i.forEach(hs),i.forEach(ds);const r=i.filter(fs);ss(),r.forEach(e=>{const n=e.el,r=n.style;Qo(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,Zo(n,t))};n.addEventListener("transitionend",i)})}),()=>{const s=be(e),a=Yo(s),c=s.tag||Br;i=o,o=t.default?Dn(t.default()):[];for(let e=0;e<o.length;e++){const t=o[e];null!=t.key&&Ln(t,Pn(t,a,r,n))}if(i)for(let e=0;e<i.length;e++){const t=i[e];Ln(t,Pn(t,a,r,n)),as.set(t,t.el.getBoundingClientRect())}return ri(c,null,o)}}},ls=us;function hs(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ds(e){cs.set(e,e.el.getBoundingClientRect())}function fs(e){const t=as.get(e),n=cs.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ps(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=rs(r);return i.removeChild(r),o}const gs=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["isArray"])(t)?e=>Object(r["invokeArrayFns"])(t,e):t};function ms(e){e.target.composing=!0}function vs(e){const t=e.target;t.composing&&(t.composing=!1,ys(t,"input"))}function ys(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const bs={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=gs(o);const s=i||"number"===e.type;xo(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["toNumber"])(i)),e._assign(i)}),n&&xo(e,"change",()=>{e.value=e.value.trim()}),t||(xo(e,"compositionstart",ms),xo(e,"compositionend",vs),xo(e,"change",vs))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:i}},o){if(e._assign=gs(o),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((i||"number"===e.type)&&Object(r["toNumber"])(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}},ws={created(e,t,n){e._assign=gs(n),xo(e,"change",()=>{const t=e._modelValue,n=Ss(e),i=e.checked,o=e._assign;if(Object(r["isArray"])(t)){const e=Object(r["looseIndexOf"])(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if(Object(r["isSet"])(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(Is(e,i))})},mounted:Es,beforeUpdate(e,t,n){e._assign=gs(n),Es(e,t,n)}};function Es(e,{value:t,oldValue:n},i){e._modelValue=t,Object(r["isArray"])(t)?e.checked=Object(r["looseIndexOf"])(t,i.props.value)>-1:Object(r["isSet"])(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=Object(r["looseEqual"])(t,Is(e,!0)))}const Os={created(e,{value:t},n){e.checked=Object(r["looseEqual"])(t,n.props.value),e._assign=gs(n),xo(e,"change",()=>{e._assign(Ss(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=gs(i),t!==n&&(e.checked=Object(r["looseEqual"])(t,i.props.value))}},_s={created(e,{value:t,modifiers:{number:n}},i){const o=Object(r["isSet"])(t);xo(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(r["toNumber"])(Ss(e)):Ss(e));e._assign(e.multiple?o?new Set(t):t:t[0])}),e._assign=gs(i)},mounted(e,{value:t}){Ts(e,t)},beforeUpdate(e,t,n){e._assign=gs(n)},updated(e,{value:t}){Ts(e,t)}};function Ts(e,t){const n=e.multiple;if(!n||Object(r["isArray"])(t)||Object(r["isSet"])(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=Ss(o);if(n)Object(r["isArray"])(t)?o.selected=Object(r["looseIndexOf"])(t,s)>-1:o.selected=t.has(s);else if(Object(r["looseEqual"])(Ss(o),t))return void(e.selectedIndex=i)}n||(e.selectedIndex=-1)}}function Ss(e){return"_value"in e?e._value:e.value}function Is(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Cs={created(e,t,n){As(e,t,n,null,"created")},mounted(e,t,n){As(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){As(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){As(e,t,n,r,"updated")}};function As(e,t,n,r,i){let o;switch(e.tagName){case"SELECT":o=_s;break;case"TEXTAREA":o=bs;break;default:switch(n.props&&n.props.type){case"checkbox":o=ws;break;case"radio":o=Os;break;default:o=bs}}const s=o[i];s&&s(e,t,n,r)}const ks=["ctrl","shift","alt","meta"],xs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ks.some(n=>e[n+"Key"]&&!t.includes(n))},Ns=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=xs[t[e]];if(r&&r(n,t))return}return e(n,...r)},Ps={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},js=(e,t)=>n=>{if(!("key"in n))return;const i=Object(r["hyphenate"])(n.key);return t.some(e=>e===i||Ps[e]===i)?e(n):void 0},Rs={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Ls(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){r&&t!==n?t?(r.beforeEnter(e),Ls(e,!0),r.enter(e)):r.leave(e,()=>{Ls(e,!1)}):Ls(e,t)},beforeUnmount(e,{value:t}){Ls(e,t)}};function Ls(e,t){e.style.display=t?e._vod:"none"}const Ds=Object(r["extend"])({patchProp:Bo,forcePatchProp:Fo},po);let Ms,Fs=!1;function Bs(){return Ms||(Ms=vr(Ds))}function Us(){return Ms=Fs?Ms:yr(Ds),Fs=!0,Ms}const Vs=(...e)=>{Bs().render(...e)},qs=(...e)=>{Us().hydrate(...e)},Hs=(...e)=>{const t=Bs().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=zs(e);if(!i)return;const o=t._component;Object(r["isFunction"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t},$s=(...e)=>{const t=Us().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=zs(e);if(t)return n(t,!0)},t};function zs(e){if(Object(r["isString"])(e)){const t=document.querySelector(e);return t}return e}const Gs=()=>{0}},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7b3e":function(e,t,n){"use strict";var r,i=n("a3de");
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function o(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,o=n in document;if(!o){var s=document.createElement("div");s.setAttribute(n,"return;"),o="function"===typeof s[n]}return!o&&r&&"wheel"===e&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}i.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=o},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}w=r?y(r):b();var e=s.length;while(e--)delete w[f][s[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=w(),void 0===t?n:o(n,t)}},"7d4e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"===typeof window;t.default=r},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),s=n("ae40"),a="find",c=!0,u=s(a);a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},"7dd6":function(e,t,n){},"7f9a":function(e,t,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;e.exports="function"===typeof o&&/native code/.test(i(o))},"808c":function(e,t,n){var r=n("8b0e"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"816e":function(e,t,n){var r=n("0828"),i=n("f385"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},8181:function(e,t,n){var r=n("2505"),i=n("d0c8"),o=n("6dca");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"81d5":function(e,t,n){"use strict";var r=n("7b0b"),i=n("23cb"),o=n("50c4");e.exports=function(e){var t=r(this),n=o(t.length),s=arguments.length,a=i(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>a)t[a++]=e;return t}},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"82b1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),i=n("7422"),o=n("9892"),s=(n("f41e"),n("1b84")),a=n("34e1"),c=n("119a"),u=n("14c2");function l(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var h=l(i),d=l(c);const f="show",p="hide";function g(e,t){const n=r.computed(()=>{let t;return t=a.isString(e.width)?e.width:e.width+"px",{width:t,zIndex:d["default"].nextZIndex()}}),o=i.usePopper(e,t);return r.watch(o.visibility,e=>{t.emit(e?f:p)}),Object.assign(Object.assign({},o),{popperStyle:n})}const m=["update:visible","after-enter","after-leave",f,p],v="ElPopover",y={key:0,class:"el-popover__title",role:"title"};var b=r.defineComponent({name:v,components:{ElPopper:h["default"]},props:Object.assign(Object.assign({},i.defaultProps),{content:{type:String},trigger:{type:String,default:"click"},title:{type:String},transition:{type:String,default:"fade-in-linear"},width:{type:[String,Number],default:150},appendToBody:{type:Boolean,default:!0}}),emits:m,setup(e,t){const n=g(e,t);return n},render(){const{$slots:e}=this,t=e.reference?e.reference():null,n=s.renderIf(this.title,"div",y,r.toDisplayString(this.title),s.PatchFlags.TEXT),a=r.renderSlot(e,"default",{},()=>[r.createTextVNode(r.toDisplayString(this.content),s.PatchFlags.TEXT)]),{events:c,onAfterEnter:u,onAfterLeave:l,onPopperMouseEnter:h,onPopperMouseLeave:d,popperStyle:f,popperId:p,popperClass:g,showArrow:m,transition:v,visibility:b}=this,w=[this.content?"el-popover--plain":"","el-popover",g].join(" ");let E=i.renderPopper({effect:i.Effect.LIGHT,name:v,popperClass:w,popperStyle:f,popperId:p,visibility:b,onMouseEnter:h,onMouseLeave:d,onAfterEnter:u,onAfterLeave:l,stopPopperMouseEvent:!1},[n,a,i.renderArrow(m)]);const O=t?i.renderTrigger(t,Object.assign({ariaDescribedby:p,ref:"triggerRef"},c)):r.createCommentVNode("v-if",!0);return s.renderBlock(r.Fragment,null,["click"===this.trigger?r.withDirectives(O,[[o.ClickOutside,this.hide]]):O,r.createVNode(r.Teleport,{disabled:!this.appendToBody,to:"body"},[E],s.PatchFlags.PROPS,["disabled"])])}});b.__file="packages/popover/src/index.vue";const w=(e,t,n)=>{const r=t.arg||t.value,i=n.dirs[0].instance.$refs[r];i&&(i.triggerRef=e,Object.entries(i.events).map(([t,n])=>{u.on(e,t.toLowerCase().slice(2),n)}))};var E={mounted(e,t,n){w(e,t,n)},updated(e,t,n){w(e,t,n)}};const O="popover";b.install=e=>{e.component(b.name,b),e.directive(O,E)},b.directive=E;const _=b;t.default=_},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"841c":function(e,t,n){"use strict";var r=n("d784"),i=n("825a"),o=n("1d80"),s=n("129f"),a=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var o=i(e),c=String(this),u=o.lastIndex;s(u,0)||(o.lastIndex=0);var l=a(o,c);return s(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]}))},"857a":function(e,t,n){var r=n("1d80"),i=/"/g;e.exports=function(e,t,n,o){var s=String(r(e)),a="<"+t;return""!==n&&(a+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),a+">"+s+"</"+t+">"}},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},8779:function(e,t,n){var r=n("a714");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8925:function(e,t,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},"894d":function(e,t,n){var r=n("d0c8"),i=n("4b41"),o=n("8b0e"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8b0e":function(e,t,n){var r=n("09e4"),i=n("0828"),o=n("dba8"),s=n("f385"),a=n("20a7"),c=n("aa51"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},"8d23":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"8eb7":function(e,t){var n,r,i,o,s,a,c,u,l,h,d,f,p,g,m,v=!1;function y(){if(!v){v=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),y=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(f=/\b(iPhone|iP[ao]d)/.exec(e),p=/\b(iP[ao]d)/.exec(e),h=/Android/i.exec(e),g=/FBAN\/\w+;/i.exec(e),m=/Mobile/i.exec(e),d=!!/Win64/.exec(e),t){n=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,n&&document&&document.documentMode&&(n=document.documentMode);var b=/(?:Trident\/(\d+.\d+))/.exec(e);a=b?parseFloat(b[1])+4:n,r=t[2]?parseFloat(t[2]):NaN,i=t[3]?parseFloat(t[3]):NaN,o=t[4]?parseFloat(t[4]):NaN,o?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),s=t&&t[1]?parseFloat(t[1]):NaN):s=NaN}else n=r=i=s=o=NaN;if(y){if(y[1]){var w=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);c=!w||parseFloat(w[1].replace("_","."))}else c=!1;u=!!y[2],l=!!y[3]}else c=u=l=!1}}var b={ie:function(){return y()||n},ieCompatibilityMode:function(){return y()||a>n},ie64:function(){return b.ie()&&d},firefox:function(){return y()||r},opera:function(){return y()||i},webkit:function(){return y()||o},safari:function(){return b.webkit()},chrome:function(){return y()||s},windows:function(){return y()||u},osx:function(){return y()||c},linux:function(){return y()||l},iphone:function(){return y()||f},mobile:function(){return y()||f||p||h||m},nativeApp:function(){return y()||g},android:function(){return y()||h},ipad:function(){return y()||p}};e.exports=b},"8f08":function(e,t,n){var r=n("09e4"),i=n("c0c7"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ar})),n.d(t,"b",(function(){return xr})),n.d(t,"c",(function(){return kr})),n.d(t,"d",(function(){return Pr})),n.d(t,"e",(function(){return Nr})),n.d(t,"f",(function(){return jr})),n.d(t,"g",(function(){return Rr})),n.d(t,"h",(function(){return Ir})),n.d(t,"i",(function(){return Cr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,E={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete E[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const O=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},_=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let o=0;o<r;o++)o in i&&t.call(n,i[o],o,e)};function T(e){e:{var t=qn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function S(e){return Array.prototype.concat.apply([],arguments)}function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e){return/^[\s\xa0]*$/.test(e)}var A,k=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return-1!=e.indexOf(t)}function N(e,t){return e<t?-1:e>t?1:0}e:{var P=a.navigator;if(P){var j=P.userAgent;if(j){A=j;break e}}A=""}function R(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}var D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<D.length;t++)n=D[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function B(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var U,V=x(A,"Opera"),q=x(A,"Trident")||x(A,"MSIE"),H=x(A,"Edge"),$=H||q,z=x(A,"Gecko")&&!(x(A.toLowerCase(),"webkit")&&!x(A,"Edge"))&&!(x(A,"Trident")||x(A,"MSIE"))&&!x(A,"Edge"),G=x(A.toLowerCase(),"webkit")&&!x(A,"Edge");function K(){var e=a.document;return e?e.documentMode:void 0}e:{var W="",Y=function(){var e=A;return z?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):G?/WebKit\/(\S+)/.exec(e):V?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Y&&(W=Y?Y[1]:""),q){var X=K();if(null!=X&&X>parseFloat(W)){U=String(X);break e}}U=W}var J,Q={};function Z(){return B((function(){let e=0;const t=k(String(U)).split("."),n=k("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=N(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||N(0==i[2].length,0==o[2].length)||N(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(a.document&&q){var ee=K();J=ee||(parseInt(U,10)||void 0)}else J=void 0;var te=J,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){e:{try{F(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:oe[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},y(ie,re);var oe={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=O(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ca&&o.listener==t&&o.capture==!!n&&o.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=de(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):(t=new ce(t,this.src,o,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function ge(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)ge(e,t[o],n,r,i);return null}return n=Se(n),e&&e[se]?e.N(t,n,l(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=_e(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ee(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}var t=Oe;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)ye(e,t[o],n,r,i);return null}return n=Se(n),e&&e[se]?e.O(t,n,l(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)be(e,t[o],n,r,i);else r=l(r)?!!r.capture:!!r,n=Se(n),e&&e[se]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=de(o,n,r,i),-1<n&&(ue(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=_e(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[se])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ee(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=_e(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function Ee(e){return e in pe?pe[e]:pe[e]="on"+e}function Oe(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function _e(e){return e=e[fe],e instanceof le?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Ie(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function Ce(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Ae(s,r,!0,t)&&i}if(s=t.g=e,i=Ae(s,r,!0,t)&&i,i=Ae(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Ae(s,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&he(e.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(Ie,b),Ie.prototype[se]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},Ie.prototype.M=function(){if(Ie.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},Ie.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ke=a.JSON.stringify;function xe(){var e=Be;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=je.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Pe,je=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Re,e=>e.reset());class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){a.setTimeout(()=>{throw e},0)}function De(e,t){Pe||Me(),Fe||(Pe(),Fe=!0),Be.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);Pe=function(){e.then(Ue)}}var Fe=!1,Be=new Ne;function Ue(){for(var e;e=xe();){try{e.h.call(e.g)}catch(n){Le(n)}var t=je;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function Ve(e,t){Ie.call(this),this.h=e||1,this.g=t||a,this.j=m(this.kb,this),this.l=Date.now()}function qe(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"===typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function $e(e){e.g=He(()=>{e.g=null,e.i&&(e.i=!1,$e(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(Ve,Ie),r=Ve.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ce(this,"tick"),this.da&&(qe(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ve.Z.M.call(this),qe(this),delete this.g};class ze extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(e){b.call(this),this.h=e,this.g={}}y(Ge,b);var Ke=[];function We(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var o=ge(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Ye(e){R(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Xe(){this.g=!0}function Je(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}function Qe(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return ke(n)}catch(a){return t}}Ge.prototype.M=function(){Ge.Z.M.call(this),Ye(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xe.prototype.Aa=function(){this.g=!1},Xe.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new Ie}function ot(e){re.call(this,nt.Ma,e)}function st(e){const t=it();Ce(t,new ot(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Ce(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",y(ot,re),nt.STAT_EVENT="statevent",y(at,re),nt.Na="timingevent",y(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function gt(){}ft.prototype.h=null;var mt,vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yt(){re.call(this,"d")}function bt(){re.call(this,"c")}function wt(){}function Et(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ge(this),this.P=_t,e=$?125:void 0,this.W=new Ve(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ot}function Ot(){this.i=null,this.g="",this.h=!1}y(yt,re),y(bt,re),y(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var _t=45e3,Tt={},St={};function It(e,t,n){e.K=1,e.v=Jt(zt(t)),e.s=n,e.U=!0,Ct(e,null)}function Ct(e,t){e.F=Date.now(),Nt(e),e.A=zt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ot,e.g=br(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ze(m(e.Ia,e,e.g),e.O)),We(e.V,e.g,"readystatechange",e.gb),t=e.H?L(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),st(1),Je(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function kt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=xt(e,n),r==St){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Dt(e,r)}At(e)&&r!=St&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Rt(e))}function xt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.Y=Date.now()+e.P,Pt(e,e.P)}function Pt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(m(e.eb,e),t)}function jt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.G||e.I||pr(e.l,e)}function Lt(e){jt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qe(e.W),Ye(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Dt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||En(n.i,e)))if(n.I=e.N,!e.J&&En(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((e.J||n.g==e)&&fr(n),!C(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.i;!o.g&&(x(e,"spdy")||x(e,"quic")||x(e,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(On(o,o.h),o.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Xt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=e;if(r.oa=yr(r,r.H?r.la:null,r.W),s.J){_n(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(jt(a),Nt(a)),r.g=s}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}st(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)_(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}}function Bt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Bt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Ut(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Vt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Vt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Vt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=Et.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Wn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Wn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||$||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=h||7==t||st(8==t||0>=d?3:2),jt(this);var n=this.g.ba();this.N=n;t:if(At(this)){var r=Yn(this.g);e="";var i=r.length,o=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Rt(this);var s="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Lt(this),Rt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dt(this,n)}this.U?(kt(this,h,s),$&&this.i&&3==h&&(We(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,s,null),Dt(this,s)),4==h&&Lt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Lt(this),Rt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Wn(this.g),t=this.g.ga();this.C<t.length&&(jt(this),kt(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,Lt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(st(3),ct(17)),Lt(this),this.o=2,Rt(this)):Pt(this,this.Y-e)},r=Bt.prototype,r.R=function(){Ut(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Ut(this),this.g.concat()},r.get=function(e,t){return Vt(this.h,e)?this.h[e]:t},r.set=function(e,t){Vt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);e.call(t,o,i,this)}};var qt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ht(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof $t){this.g=void 0!==t?t:e.g,Gt(this,e.j),this.s=e.s,Kt(this,e.i),Wt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Bt(t.g),n.h=t.h),Yt(this,n),this.o=e.o}else e&&(n=String(e).match(qt))?(this.g=!!t,Gt(this,n[1]||"",!0),this.s=en(n[2]||""),Kt(this,n[3]||"",!0),Wt(this,n[4]),this.l=en(n[5]||"",!0),Yt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function zt(e){return new $t(e)}function Gt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kt(e,t,n){e.i=n?en(t,!0):t}function Wt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Yt(e,t,n){t instanceof un?(e.h=t,gn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Xt(e,t,n){e.h.set(t,n)}function Jt(e){return Xt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qt(e){return e instanceof $t?zt(e):new $t(e,void 0)}function Zt(e,t,n,r){var i=new $t(null,void 0);return e&&Gt(i,e),t&&Kt(i,t),n&&Wt(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?sn:on,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,on=/[#\?:]/g,sn=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Bt,e.h=0,e.i&&Ht(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),Vt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Vt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ut(e)))}function dn(e,t){return ln(e),t=pn(e,t),Vt(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),I(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){_(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],o=0;o<i.length;o++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=S(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=S(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),e.push(s)}}return this.i=e.join("&")};var mn=class{constructor(e,t){this.h=e,this.g=t}};function vn(e){this.l=e||yn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function En(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function On(e,t){e.g?e.g.add(t):e.h=t}function _n(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Tn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return I(e.i)}function Sn(){}function In(){this.g=new Sn}function Cn(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;l(e)&&(i=ke(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function An(e,t){const n=new Xe;if(a.Image){const r=new Image;r.onload=v(kn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=v(kn,n,r,"TestLoadImage: error",!1,t),r.onabort=v(kn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=v(kn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function kn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(o){}}function xn(e){this.l=e.$b||null,this.j=e.ib||!1}function Nn(e,t){Ie.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Sn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Sn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(xn,ft),xn.prototype.g=function(){return new Nn(this.l,this.j)},xn.prototype.i=function(e){return function(){return e}}({}),y(Nn,Ie);var Pn=0;function jn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Rn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ln(e)}function Ln(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Nn.prototype,r.open=function(e,t){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ln(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rn(this)),this.readyState=Pn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rn(this):Ln(this),3==this.readyState&&jn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Rn(this))},r.Ta=function(e){this.g&&(this.response=e,Rn(this))},r.ha=function(){this.g&&Rn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Dn=a.JSON.parse;function Mn(e){Ie.call(this),this.headers=new Bt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Mn,Ie);var Fn="",Bn=/^https?$/i,Un=["POST","PUT"];function Vn(e){return q&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function qn(e){return"content-type"==e.toLowerCase()}function Hn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,$n(e),Gn(e)}function $n(e){e.D||(e.D=!0,Ce(e,"complete"),Ce(e,"error"))}function zn(e){if(e.h&&"undefined"!=typeof s&&(!e.C[1]||4!=Wn(e)||2!=e.ba()))if(e.v&&4==Wn(e))He(e.Fa,0,e);else if(Ce(e,"readystatechange"),4==Wn(e)){e.h=!1;try{const s=e.ba();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){var i=String(e.H).match(qt)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!Bn.test(i?i.toLowerCase():"")}n=r}if(n)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var c=2<Wn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",$n(e)}}finally{Gn(e)}}}function Gn(e,t){if(e.g){Kn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||Ce(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Kn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Wn(e){return e.g?e.g.readyState:0}function Yn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Xn(e){let t="";return R(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Jn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Xt(e,t,n))}function Qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Xe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qn("baseRetryDelayMs",5e3,e),this.$a=Qn("retryDelaySeedMs",1e4,e),this.Ya=Qn("forwardChannelMaxRetries",2,e),this.ra=Qn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(e&&e.concurrentRequestLimit),this.Ca=new In,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=zt(e.F);Xt(n,"SID",e.J),Xt(n,"RID",t),Xt(n,"TYPE","terminate"),ar(e,n),t=new Et(e,e.h,t,void 0),t.K=2,t.v=Jt(zt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=br(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Nt(t)}vr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new mn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){bn(e.i)||e.m||(e.m=!0,De(e.Ha,e),e.C=0)}function or(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(m(e.Ha,e,t),gr(e,e.C)),e.C++,!0))}function sr(e,t){var n;n=t?t.m:e.V++;const r=zt(e.F);Xt(r,"SID",e.J),Xt(r,"RID",n),Xt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Jn(r,e.o,e.s),n=new Et(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),On(e.i,n),It(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Xt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),s=!1;else try{Cn(c,e,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,De(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(m(e.Ga,e),gr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new Et(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=zt(e.oa);Xt(t,"RID","rpc"),Xt(t,"SID",e.J),Xt(t,"CI",e.N?"0":"1"),Xt(t,"AID",e.U),ar(e,t),Xt(t,"TYPE","xmlhttp"),e.o&&e.s&&Jn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Jt(zt(t)),n.s=null,n.U=!0,Ct(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!En(e.i,t))return;n=t.D,_n(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Ce(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&or(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:mr(e,5);break;case 4:mr(e,10);break;case 3:mr(e,6);break;default:mr(e,2)}}function gr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function mr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Gt(n,"https"),Jt(n)),An(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),vr(e),nr(e)}function vr(e){e.G=0,e.I=-1,e.j&&(0==Tn(e.i).length&&0==e.l.length||(e.i.i.length=0,I(e.l),e.l.length=0),e.j.ua())}function yr(e,t,n){let r=Qt(n);if(""!=r.i)t&&Kt(r,t+"."+r.i),Wt(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&R(e.aa,(function(e,t){Xt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Xt(r,t,n),Xt(r,"VER",e.ma),ar(e,r),r}function br(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new xn({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function Er(){if(q&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Or(e,t){Ie.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!C(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Sr(this)}function _r(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Tr(){bt.call(this),this.status=1}function Sr(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?pt(this.u):pt(mt),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){return void Hn(this,o)}e=n||"";const i=new Bt(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=T(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=O(Un,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Vn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Hn(this,o)}},r.pa=function(){"undefined"!=typeof s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),Gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?zn(this):this.cb())},r.cb=function(){zn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Dn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Et(this,this.h,e,void 0);let o=this.s;if(this.P&&(o?(o=L(o),M(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=zt(this.F),Xt(n,"RID",e),Xt(n,"CVER",22),this.D&&Xt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&o&&Jn(n,this.o,o),On(this.i,i),this.Ra&&Xt(n,"TYPE","init"),this.ja?(Xt(n,"$req",t),Xt(n,"SID","null"),i.$=!0,It(i,n,null)):It(i,n,t),this.G=2}}else 3==this.G&&(e?sr(this,e):0==this.l.length||bn(this.i)||sr(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(m(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Er.prototype.g=function(e,t){return new Or(e,t)},y(Or,Ie),Or.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),De(m(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=yr(e,null,e.W),ir(e)},Or.prototype.close=function(){er(this.g)},Or.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=ke(e),rr(this.g,t)):rr(this.g,e)},Or.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Or.Z.M.call(this)},y(_r,yt),y(Tr,bt),y(Sr,wr),Sr.prototype.xa=function(){Ce(this.g,"a")},Sr.prototype.wa=function(e){Ce(this.g,new _r(e))},Sr.prototype.va=function(e){Ce(this.g,new Tr(e))},Sr.prototype.ua=function(){Ce(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Or.prototype.send=Or.prototype.u,Or.prototype.open=Or.prototype.m,Or.prototype.close=Or.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",gt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Ir=o.createWebChannelTransport=function(){return new Er},Cr=o.getStatEventTarget=function(){return it()},Ar=o.ErrorCode=ht,kr=o.EventType=dt,xr=o.Event=nt,Nr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=o.FetchXmlHttpFactory=xn,jr=o.WebChannel=gt,Rr=o.XhrIo=Mn}).call(this,n("c8ba"))},"8fe4":function(e,t,n){var r=n("d0c8"),i=n("bb6e"),o=n("761e");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"91c5":function(e,t,n){var r=n("09e4"),i=n("2505"),o=n("bfa1"),s=n("d0c8"),a=n("dcbd"),c=n("c35a"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,s=String.prototype.replace,a=o,c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],h=c||l||u;h&&(a=function(e){var t,n,i,a,h=this,d=u&&h.sticky,f=r.call(h),p=h.source,g=0,m=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(e).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==e[h.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,g++),n=new RegExp("^(?:"+p+")",f)),l&&(n=new RegExp("^"+p+"$(?!\\s)",f)),c&&(t=h.lastIndex),i=o.call(d?n:h,m),d?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=h.lastIndex,h.lastIndex+=i[0].length):h.lastIndex=0:c&&i&&(h.lastIndex=h.global?i.index+i[0].length:t),l&&i&&i.length>1&&s.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),e.exports=a},"94ca":function(e,t,n){var r=n("d039"),i=/#|\.prototype\./,o=function(e,t){var n=a[s(e)];return n==u||n!=c&&("function"==typeof t?r(t):!!t)},s=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),s=new k(r||[]);return o._invoke=S(e,n,s),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(x([])));E&&E!==n&&r.call(E,o)&&(b=E);var O=y.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(i,o,s,a){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=I(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function x(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=y,c(O,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},_(T.prototype),c(T.prototype,s,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new T(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},_(O),c(O,a,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9892:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("14c2"),i=n("7d4e"),o=n("7a23"),s=n("fb61"),a=n("c098");function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var u=c(i),l=c(a);const h=new Map;let d;function f(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:n.push(t.arg),function(r,i){const o=t.instance.popperRef,s=r.target,a=i.target,c=!t||!t.instance,u=!s||!a,l=e.contains(s)||e.contains(a),h=e===s,d=n.length&&n.some(e=>null===e||void 0===e?void 0:e.contains(s))||n.length&&n.includes(a),f=o&&(o.contains(s)||o.contains(a));c||u||l||h||d||f||t.value()}}u["default"]||(r.on(document,"mousedown",e=>d=e),r.on(document,"mouseup",e=>{for(const{documentHandler:t}of h.values())t(e,d)}));const p={beforeMount(e,t){h.set(e,{documentHandler:f(e,t),bindingFn:t.value})},updated(e,t){h.set(e,{documentHandler:f(e,t),bindingFn:t.value})},unmounted(e){h.delete(e)}};var g={beforeMount(e,t){let n,i=null;const o=()=>t.value&&t.value(),s=()=>{Date.now()-n<100&&o(),clearInterval(i),i=null};r.on(e,"mousedown",e=>{0===e.button&&(n=Date.now(),r.once(document,"mouseup",s),clearInterval(i),i=setInterval(o,100))})}};const m="_trap-focus-children",v="_trap-focus-handler",y={beforeMount(e){e[m]=s.obtainAllFocusableElements(e),e[v]=t=>{const n=e[m];if(n.length>0&&t.code===s.EVENT_CODE.tab){if(1===n.length)return t.preventDefault(),void(document.activeElement!==n[0]&&n[0].focus());const e=t.shiftKey,r=t.target===n[0],i=t.target===n[n.length-1];r&&e&&(t.preventDefault(),n[n.length-1].focus()),i&&!e&&(t.preventDefault(),n[0].focus())}},r.on(document,"keydown",e[v])},updated(e){o.nextTick(()=>{e[m]=s.obtainAllFocusableElements(e)})},unmounted(e){r.off(document,"keydown",e[v])}},b="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1,w=function(e,t){if(e&&e.addEventListener){const n=function(e){const n=l["default"](e);t&&t.apply(this,[e,n])};b?e.addEventListener("DOMMouseScroll",n):e.onmousewheel=n}},E={beforeMount(e,t){w(e,t.value)}};t.ClickOutside=p,t.Mousewheel=E,t.RepeatClick=g,t.TrapFocus=y},9911:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(e){return i(this,"a","href",e)}})},"997c":function(e,t,n){var r=n("6185"),i=n("d0c8"),o=n("ba83");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},"9aed":function(e,t,n){var r=n("09e4"),i=n("dba8"),o=n("4650"),s=n("ebca"),a=n("816e"),c=n("8779"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("c04e"),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=s(t,!0),o(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9e20":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"9eec":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"9ff4":function(e,t,n){"use strict";n.r(t),function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"EMPTY_ARR",(function(){return q})),n.d(t,"EMPTY_OBJ",(function(){return V})),n.d(t,"NO",(function(){return $})),n.d(t,"NOOP",(function(){return H})),n.d(t,"PatchFlagNames",(function(){return i})),n.d(t,"babelParserDefaultPlugins",(function(){return U})),n.d(t,"camelize",(function(){return ge})),n.d(t,"capitalize",(function(){return ye})),n.d(t,"def",(function(){return Oe})),n.d(t,"escapeHtml",(function(){return P})),n.d(t,"escapeHtmlComment",(function(){return R})),n.d(t,"extend",(function(){return W})),n.d(t,"generateCodeFrame",(function(){return u})),n.d(t,"getGlobalThis",(function(){return Se})),n.d(t,"hasChanged",(function(){return we})),n.d(t,"hasOwn",(function(){return J})),n.d(t,"hyphenate",(function(){return ve})),n.d(t,"invokeArrayFns",(function(){return Ee})),n.d(t,"isArray",(function(){return Q})),n.d(t,"isBooleanAttr",(function(){return d})),n.d(t,"isDate",(function(){return te})),n.d(t,"isFunction",(function(){return ne})),n.d(t,"isGloballyWhitelisted",(function(){return a})),n.d(t,"isHTMLTag",(function(){return A})),n.d(t,"isIntegerKey",(function(){return he})),n.d(t,"isKnownAttr",(function(){return y})),n.d(t,"isMap",(function(){return Z})),n.d(t,"isModelListener",(function(){return K})),n.d(t,"isNoUnitNumericStyleProp",(function(){return v})),n.d(t,"isObject",(function(){return oe})),n.d(t,"isOn",(function(){return G})),n.d(t,"isPlainObject",(function(){return le})),n.d(t,"isPromise",(function(){return se})),n.d(t,"isReservedProp",(function(){return de})),n.d(t,"isSSRSafeAttrName",(function(){return g})),n.d(t,"isSVGTag",(function(){return k})),n.d(t,"isSet",(function(){return ee})),n.d(t,"isSpecialBooleanAttr",(function(){return h})),n.d(t,"isString",(function(){return re})),n.d(t,"isSymbol",(function(){return ie})),n.d(t,"isVoidTag",(function(){return x})),n.d(t,"looseEqual",(function(){return D})),n.d(t,"looseIndexOf",(function(){return M})),n.d(t,"makeMap",(function(){return r})),n.d(t,"normalizeClass",(function(){return T})),n.d(t,"normalizeStyle",(function(){return b})),n.d(t,"objectToString",(function(){return ae})),n.d(t,"parseStringStyle",(function(){return O})),n.d(t,"propsToAttrMap",(function(){return m})),n.d(t,"remove",(function(){return Y})),n.d(t,"slotFlagsText",(function(){return o})),n.d(t,"stringifyStyle",(function(){return _})),n.d(t,"toDisplayString",(function(){return F})),n.d(t,"toHandlerKey",(function(){return be})),n.d(t,"toNumber",(function(){return _e})),n.d(t,"toRawType",(function(){return ue})),n.d(t,"toTypeString",(function(){return ce}));const i={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"HYDRATE_EVENTS",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},o={[1]:"STABLE",[2]:"DYNAMIC",[3]:"FORWARDED"},s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl",a=r(s),c=2;function u(e,t=0,n=e.length){const r=e.split(/\r?\n/);let i=0;const o=[];for(let s=0;s<r.length;s++)if(i+=r[s].length+1,i>=t){for(let e=s-c;e<=s+c||n>i;e++){if(e<0||e>=r.length)continue;const a=e+1;o.push(`${a}${" ".repeat(Math.max(3-String(a).length,0))}|  ${r[e]}`);const c=r[e].length;if(e===s){const e=t-(i-c)+1,r=Math.max(1,n>i?c-e:n-t);o.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>s){if(n>i){const e=Math.max(Math.min(n-i,c),1);o.push("   |  "+"^".repeat(e))}i+=c+1}}break}return o.join("\n")}const l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",h=r(l),d=r(l+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"),f=/[>/="'\u0009\u000a\u000c\u0020]/,p={};function g(e){if(p.hasOwnProperty(e))return p[e];const t=f.test(e);return t&&console.error("unsafe attribute name: "+e),p[e]=!t}const m={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},v=r("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width"),y=r("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");function b(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(re(r)?O(r):r);if(i)for(const e in i)t[e]=i[e]}return t}if(oe(e))return e}const w=/;(?![^(]*\))/g,E=/:(.+)/;function O(e){const t={};return e.split(w).forEach(e=>{if(e){const n=e.split(E);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function _(e){let t="";if(!e)return t;for(const n in e){const r=e[n],i=n.startsWith("--")?n:ve(n);(re(r)||"number"===typeof r&&v(i))&&(t+=`${i}:${r};`)}return t}function T(e){let t="";if(re(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++)t+=T(e[n])+" ";else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const S="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",I="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",C="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",A=r(S),k=r(I),x=r(C),N=/["'&<>]/;function P(e){const t=""+e,n=N.exec(t);if(!n)return t;let r,i,o="",s=0;for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==i&&(o+=t.substring(s,i)),s=i+1,o+=r}return s!==i?o+t.substring(s,i):o}const j=/^-?>|<!--|-->|--!>|<!-$/g;function R(e){return e.replace(j,"")}function L(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=D(e[r],t[r]);return n}function D(e,t){if(e===t)return!0;let n=te(e),r=te(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=Q(e),r=Q(t),n||r)return!(!n||!r)&&L(e,t);if(n=oe(e),r=oe(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!D(e[n],t[n]))return!1}}return String(e)===String(t)}function M(e,t){return e.findIndex(e=>D(e,t))}const F=e=>null==e?"":oe(e)?JSON.stringify(e,B,2):String(e),B=(e,t)=>Z(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:ee(t)?{[`Set(${t.size})`]:[...t.values()]}:!oe(t)||Q(t)||le(t)?t:String(t),U=["bigInt","optionalChaining","nullishCoalescingOperator"],V={},q=[],H=()=>{},$=()=>!1,z=/^on[^a-z]/,G=e=>z.test(e),K=e=>e.startsWith("onUpdate:"),W=Object.assign,Y=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},X=Object.prototype.hasOwnProperty,J=(e,t)=>X.call(e,t),Q=Array.isArray,Z=e=>"[object Map]"===ce(e),ee=e=>"[object Set]"===ce(e),te=e=>e instanceof Date,ne=e=>"function"===typeof e,re=e=>"string"===typeof e,ie=e=>"symbol"===typeof e,oe=e=>null!==e&&"object"===typeof e,se=e=>oe(e)&&ne(e.then)&&ne(e.catch),ae=Object.prototype.toString,ce=e=>ae.call(e),ue=e=>ce(e).slice(8,-1),le=e=>"[object Object]"===ce(e),he=e=>re(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,de=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fe=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},pe=/-(\w)/g,ge=fe(e=>e.replace(pe,(e,t)=>t?t.toUpperCase():"")),me=/\B([A-Z])/g,ve=fe(e=>e.replace(me,"-$1").toLowerCase()),ye=fe(e=>e.charAt(0).toUpperCase()+e.slice(1)),be=fe(e=>e?"on"+ye(e):""),we=(e,t)=>e!==t&&(e===e||t===t),Ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Oe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_e=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Te;const Se=()=>Te||(Te="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}.call(this,n("c8ba"))},a257:function(e,t,n){var r=n("09e4"),i=n("2505"),o=n("4650"),s=n("bb6e"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},a3de:function(e,t,n){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=i},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),h=n("ae40"),d=l("splice"),f=h("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!f},{splice:function(e,t){var n,r,l,h,d,f,y=a(this),b=s(y.length),w=i(e,b),E=arguments.length;if(0===E?n=r=0:1===E?(n=0,r=b-w):(n=E-2,r=g(p(o(t),0),b-w)),b+n-r>m)throw TypeError(v);for(l=c(y,r),h=0;h<r;h++)d=w+h,d in y&&u(l,h,y[d]);if(l.length=r,n<r){for(h=w;h<b-r;h++)d=h+r,f=h+n,d in y?y[f]=y[d]:delete y[f];for(h=b;h>b-r+n;h--)delete y[h-1]}else if(n>r)for(h=b-r;h>w;h--)d=h+r-1,f=h+n-1,d in y?y[f]=y[d]:delete y[f];for(h=0;h<n;h++)y[h+w]=arguments[h+2];return y.length=b-r+n,l}})},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),h=n("5135"),d=n("e8b5"),f=n("861d"),p=n("825a"),g=n("7b0b"),m=n("fc6a"),v=n("c04e"),y=n("5c6c"),b=n("7c73"),w=n("df75"),E=n("241c"),O=n("057f"),_=n("7418"),T=n("06cf"),S=n("9bf2"),I=n("d1e7"),C=n("9112"),A=n("6eeb"),k=n("5692"),x=n("f772"),N=n("d012"),P=n("90e3"),j=n("b622"),R=n("e538"),L=n("746f"),D=n("d44e"),M=n("69f3"),F=n("b727").forEach,B=x("hidden"),U="Symbol",V="prototype",q=j("toPrimitive"),H=M.set,$=M.getterFor(U),z=Object[V],G=i.Symbol,K=o("JSON","stringify"),W=T.f,Y=S.f,X=O.f,J=I.f,Q=k("symbols"),Z=k("op-symbols"),ee=k("string-to-symbol-registry"),te=k("symbol-to-string-registry"),ne=k("wks"),re=i.QObject,ie=!re||!re[V]||!re[V].findChild,oe=a&&l((function(){return 7!=b(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=W(z,t);r&&delete z[t],Y(e,t,n),r&&e!==z&&Y(z,t,r)}:Y,se=function(e,t){var n=Q[e]=b(G[V]);return H(n,{type:U,tag:e,description:t}),a||(n.description=t),n},ae=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof G},ce=function(e,t,n){e===z&&ce(Z,t,n),p(e);var r=v(t,!0);return p(n),h(Q,r)?(n.enumerable?(h(e,B)&&e[B][r]&&(e[B][r]=!1),n=b(n,{enumerable:y(0,!1)})):(h(e,B)||Y(e,B,y(1,{})),e[B][r]=!0),oe(e,r,n)):Y(e,r,n)},ue=function(e,t){p(e);var n=m(t),r=w(n).concat(pe(n));return F(r,(function(t){a&&!he.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?b(e):ue(b(e),t)},he=function(e){var t=v(e,!0),n=J.call(this,t);return!(this===z&&h(Q,t)&&!h(Z,t))&&(!(n||!h(this,t)||!h(Q,t)||h(this,B)&&this[B][t])||n)},de=function(e,t){var n=m(e),r=v(t,!0);if(n!==z||!h(Q,r)||h(Z,r)){var i=W(n,r);return!i||!h(Q,r)||h(n,B)&&n[B][r]||(i.enumerable=!0),i}},fe=function(e){var t=X(m(e)),n=[];return F(t,(function(e){h(Q,e)||h(N,e)||n.push(e)})),n},pe=function(e){var t=e===z,n=X(t?Z:m(e)),r=[];return F(n,(function(e){!h(Q,e)||t&&!h(z,e)||r.push(Q[e])})),r};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=P(e),n=function(e){this===z&&n.call(Z,e),h(this,B)&&h(this[B],t)&&(this[B][t]=!1),oe(this,t,y(1,e))};return a&&ie&&oe(z,t,{configurable:!0,set:n}),se(t,e)},A(G[V],"toString",(function(){return $(this).tag})),A(G,"withoutSetter",(function(e){return se(P(e),e)})),I.f=he,S.f=ce,T.f=de,E.f=O.f=fe,_.f=pe,R.f=function(e){return se(j(e),e)},a&&(Y(G[V],"description",{configurable:!0,get:function(){return $(this).description}}),s||A(z,"propertyIsEnumerable",he,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),F(w(ne),(function(e){L(e)})),r({target:U,stat:!0,forced:!c},{for:function(e){var t=String(e);if(h(ee,t))return ee[t];var n=G(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!ae(e))throw TypeError(e+" is not a symbol");if(h(te,e))return te[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),r({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(e){return _.f(g(e))}}),K){var ge=!c||l((function(){var e=G();return"[null]"!=K([e])||"{}"!=K({a:e})||"{}"!=K(Object(e))}));r({target:"JSON",stat:!0,forced:ge},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(f(t)||void 0!==e)&&!ae(e))return d(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!ae(t))return t}),i[1]=t,K.apply(null,i)}})}G[V][q]||C(G[V],q,G[V].valueOf),D(G,U),N[B]=!0},a547:function(e,t,n){var r,i,o,s=n("0d05"),a=n("09e4"),c=n("6185"),u=n("bb6e"),l=n("3261"),h=n("dba8"),d=n("db8f"),f=n("816e"),p=n("1fc1"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(e){return o(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var w=d.state||(d.state=new v),E=c(w.get),O=c(w.has),_=c(w.set);r=function(e,t){if(O(w,e))throw new m(g);return t.facade=e,_(w,e,t),t},i=function(e){return E(w,e)||{}},o=function(e){return O(w,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(h(e,T))throw new m(g);return t.facade=e,l(e,T,t),t},i=function(e){return h(e,T)?e[T]:{}},o=function(e){return h(e,T)}}e.exports={set:r,get:i,has:o,enforce:y,getterFor:b}},a580:function(e,t,n){"use strict";var r=n("199f"),i=n("2505"),o=n("0f33"),s=n("4b5c"),a=n("4650"),c=n("0049"),u=n("9aed"),l=n("997c"),h=n("77da"),d=n("3261"),f=n("7024"),p=n("8b0e"),g=n("ca70"),m=n("65ee"),v=s.PROPER,y=s.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,E=p("iterator"),O="keys",_="values",T="entries",S=function(){return this};e.exports=function(e,t,n,s,p,m,I){c(n,t,s);var C,A,k,x=function(e){if(e===p&&L)return L;if(!w&&e in j)return j[e];switch(e){case O:return function(){return new n(this,e)};case _:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",P=!1,j=e.prototype,R=j[E]||j["@@iterator"]||p&&j[p],L=!w&&R||x(p),D="Array"==t&&j.entries||R;if(D&&(C=u(D.call(new e)),C!==Object.prototype&&C.next&&(o||u(C)===b||(l?l(C,b):a(C[E])||f(C,E,S)),h(C,N,!0,!0),o&&(g[N]=S))),v&&p==_&&R&&R.name!==_&&(!o&&y?d(j,"name",_):(P=!0,L=function(){return i(R,this)})),p)if(A={values:x(_),keys:m?L:x(O),entries:x(T)},I)for(k in A)(w||P||!(k in j))&&f(j,k,A[k]);else r({target:t,proto:!0,forced:w||P},A);return o&&!I||j[E]===L||f(j,E,L,{name:p}),g[t]=L,A}},a5b6:function(e,t){t.f=Object.getOwnPropertySymbols},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a714:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},a84f:function(e,t,n){var r=n("774c"),i=n("76af");e.exports=function(e){return r(i(e))}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),h=n("d039"),d=n("7c73"),f=n("241c").f,p=n("06cf").f,g=n("9bf2").f,m=n("58a8").trim,v="Number",y=i[v],b=y.prototype,w=c(d(b))==v,E=function(e){var t,n,r,i,o,s,a,c,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=m(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),s=o.length,a=0;a<s;a++)if(c=o.charCodeAt(a),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var O,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(w?h((function(){b.valueOf.call(n)})):c(n)!=v)?u(new y(E(t)),n,_):E(t)},T=r?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;T.length>S;S++)a(y,O=T[S])&&!a(_,O)&&g(_,O,p(y,O));_.prototype=b,b.constructor=_,s(i,v,_)}},aa51:function(e,t,n){var r=n("20a7");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},ab13:function(e,t,n){var r=n("b622"),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},acc7:function(e,t,n){},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},ae40:function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("5135"),s=Object.defineProperty,a={},c=function(e){throw e};e.exports=function(e,t){if(o(a,e))return a[e];t||(t={});var n=[][e],u=!!o(t,"ACCESSORS")&&t.ACCESSORS,l=o(t,0)?t[0]:c,h=o(t,1)?t[1]:void 0;return a[e]=!!n&&!i((function(){if(u&&!r)return!0;var e={length:-1};u?s(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,l,h)}))}},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(e){return""}}})},b139:function(e,t,n){var r=n("09d1");e.exports=function(e){return r(e.length)}},b1b0:function(e,t,n){var r=n("09e4");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;e.exports=function(e){return o(u,e)||(a&&o(l,e)?u[e]=l[e]:u[e]=h("Symbol."+e)),u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,h=6==e,d=5==e||h;return function(f,p,g,m){for(var v,y,b=o(f),w=i(b),E=r(p,g,3),O=s(w.length),_=0,T=m||a,S=t?T(f,O):n?T(f,0):void 0;O>_;_++)if((d||_ in w)&&(v=w[_],y=E(v,_,b),e))if(t)S[_]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return _;case 2:c.call(S,v)}else if(l)return!1;return h?-1:u||l?l:S}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},b973:function(e,t,n){var r=n("0ee6"),i=n("6185"),o=n("fdbe"),s=n("a5b6"),a=n("d0c8"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},ba83:function(e,t,n){var r=n("09e4"),i=n("4650"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},bb6e:function(e,t,n){var r=n("4650");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},bf45:function(e,t,n){var r=n("0368"),i=n("a714"),o=n("c4dd");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},bfa1:function(e,t,n){var r=n("09e4"),i=n("4650"),o=n("dcbd"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},c04e:function(e,t,n){var r=n("861d");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},c098:function(e,t,n){e.exports=n("d4af")},c0c7:function(e,t,n){var r=n("6185");e.exports=r({}.isPrototypeOf)},c272:function(e,t,n){var r=n("a84f"),i=n("fb8a"),o=n("b139"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},c35a:function(e,t,n){var r=n("7820"),i=n("6dca"),o=n("ca70"),s=n("8b0e"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},c430:function(e,t){e.exports=!1},c4dd:function(e,t,n){var r=n("09e4"),i=n("bb6e"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},c51e:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c740:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,o=n("44d2"),s=n("ae40"),a="findIndex",c=!0,u=s(a);a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},c85d:function(e,t,n){var r=n("09e4");e.exports=r.Promise},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c8d2:function(e,t,n){var r=n("d039"),i=n("5899"),o="​᠎";e.exports=function(e){return r((function(){return!!i[e]()||o[e]()!=o||i[e].name!==e}))}},ca70:function(e,t){e.exports={}},ca84:function(e,t,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");e.exports=function(e,t){var n,a=i(e),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(t.length>c)r(a,n=t[c++])&&(~o(u,n)||u.push(n));return u}},caad:function(e,t,n){var r=n("8b0e"),i=n("ca70"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},caad6:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2"),s=n("ae40"),a=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cb29:function(e,t,n){var r=n("23e7"),i=n("81d5"),o=n("44d2");r({target:"Array",proto:!0},{fill:i}),o("fill")},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},ce28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r="update:modelValue",i="change",o={validating:"el-icon-loading",success:"el-icon-circle-check",error:"el-icon-circle-close"};t.CHANGE_EVENT=i,t.UPDATE_MODEL_EVENT=r,t.VALIDATE_STATE_MAP=o},ce4e:function(e,t,n){var r=n("da84"),i=n("9112");e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("428f"),i=n("da84"),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},d0c8:function(e,t,n){var r=n("09e4"),i=n("bb6e"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},d4af:function(e,t,n){"use strict";var r=n("8eb7"),i=n("7b3e"),o=10,s=40,a=800;function c(e){var t=0,n=0,r=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=t*o,i=n*o,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||i)&&e.deltaMode&&(1==e.deltaMode?(r*=s,i*=s):(r*=a,i*=a)),r&&!t&&(t=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:i}}c.getEventType=function(){return r.firefox()?"DOMMouseScroll":i("wheel")?"wheel":"mousewheel"},e.exports=c},d714:function(e,t,n){var r=n("6185"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),s=n("9263"),a=n("9112"),c=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),h=o("replace"),d=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,h){var p=o(e),g=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=g&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!g||!m||"replace"===e&&(!u||!l||d)||"split"===e&&!f){var v=/./[p],y=n(p,""[e],(function(e,t,n,r,i){return t.exec===s?g&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=y[0],w=y[1];r(String.prototype,e,b),r(RegExp.prototype,p,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}h&&a(RegExp.prototype[p],"sham",!0)}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))},db8f:function(e,t,n){var r=n("09e4"),i=n("79ae"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},dba8:function(e,t,n){var r=n("6185"),i=n("ebca"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dcbd:function(e,t,n){var r=n("09e4"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},df84:function(e,t,n){var r=n("0368"),i=n("4c07"),o=n("d0c8"),s=n("a84f"),a=n("f14a");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),c=a(t),u=c.length,l=0;while(u>l)i.f(e,n=c[l++],r[n]);return e}},dfee:function(e,t,n){var r=n("6185");e.exports=r([].slice)},e379:function(e,t,n){"use strict";var r,i,o,s,a=n("199f"),c=n("0f33"),u=n("09e4"),l=n("0ee6"),h=n("2505"),d=n("c85d"),f=n("7024"),p=n("2ba0"),g=n("997c"),m=n("77da"),v=n("793f"),y=n("bfa1"),b=n("4650"),w=n("bb6e"),E=n("8f08"),O=n("0209"),_=n("0761"),T=n("808c"),S=n("894d"),I=n("0fd9").set,C=n("5923"),A=n("8fe4"),k=n("b1b0"),x=n("761e"),N=n("189d"),P=n("9e20"),j=n("a547"),R=n("25d0"),L=n("8b0e"),D=n("562f"),M=n("6629"),F=n("fce5"),B=L("species"),U="Promise",V=j.getterFor(U),q=j.set,H=j.getterFor(U),$=d&&d.prototype,z=d,G=$,K=u.TypeError,W=u.document,Y=u.process,X=x.f,J=X,Q=!!(W&&W.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,oe=1,se=2,ae=!1,ce=R(U,(function(){var e=O(z),t=e!==String(z);if(!t&&66===F)return!0;if(c&&!G["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new z((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[B]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&D&&!Z})),ue=ce||!T((function(e){z.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!w(e)||!b(t=e.then))&&t},he=function(e,t){var n,r,i,o=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&me(t),t.rejection=oe),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(K("Promise-chain cycle")):(r=le(n))?h(r,n,c,u):c(n)):u(o)}catch(d){l&&!i&&l.exit(),u(d)}},de=function(e,t){e.notified||(e.notified=!0,C((function(){var n,r=e.reactions;while(n=r.get())he(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var r,i;Q?(r=W.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(i=u["on"+e])?i(r):e===ee&&k("Unhandled promise rejection",n)},pe=function(e){h(I,u,(function(){var t,n=e.facade,r=e.value,i=ge(e);if(i&&(t=N((function(){M?Y.emit("unhandledRejection",r,n):fe(ee,n,r)})),e.rejection=M||ge(e)?se:oe,t.error))throw t.value}))},ge=function(e){return e.rejection!==oe&&!e.parent},me=function(e){h(I,u,(function(){var t=e.facade;M?Y.emit("rejectionHandled",t):fe(te,t,e.value)}))},ve=function(e,t,n){return function(r){e(t,r,n)}},ye=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,de(e,!0))},be=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw K("Promise can't be resolved itself");var r=le(t);r?C((function(){var n={done:!1};try{h(r,t,ve(be,n,e),ve(ye,n,e))}catch(i){ye(n,i,e)}})):(e.value=t,e.state=re,de(e,!1))}catch(i){ye({done:!1},i,e)}}};if(ce&&(z=function(e){E(this,G),y(e),h(r,this);var t=V(this);try{e(ve(be,t),ve(ye,t))}catch(n){ye(t,n)}},G=z.prototype,r=function(e){q(this,{type:U,done:!1,notified:!1,parent:!1,reactions:new P,rejection:!1,state:ne,value:void 0})},r.prototype=p(G,{then:function(e,t){var n=H(this),r=X(S(this,z));return n.parent=!0,r.ok=!b(e)||e,r.fail=b(t)&&t,r.domain=M?Y.domain:void 0,n.state==ne?n.reactions.add(r):C((function(){he(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=V(e);this.promise=e,this.resolve=ve(be,t),this.reject=ve(ye,t)},x.f=X=function(e){return e===z||e===o?new i(e):J(e)},!c&&b(d)&&$!==Object.prototype)){s=$.then,ae||(f($,"then",(function(e,t){var n=this;return new z((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0}),f($,"catch",G["catch"],{unsafe:!0}));try{delete $.constructor}catch(we){}g&&g($,G)}a({global:!0,wrap:!0,forced:ce},{Promise:z}),m(z,U,!1,!0),v(U),o=l(U),a({target:U,stat:!0,forced:ce},{reject:function(e){var t=X(this);return h(t.reject,void 0,e),t.promise}}),a({target:U,stat:!0,forced:c||ce},{resolve:function(e){return A(c&&this===o?z:this,e)}}),a({target:U,stat:!0,forced:ue},{all:function(e){var t=this,n=X(t),r=n.resolve,i=n.reject,o=N((function(){var n=y(t.resolve),o=[],s=0,a=1;_(e,(function(e){var c=s++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=X(t),r=n.reject,i=N((function(){var i=y(t.resolve);_(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e3f1:function(e,t,n){var r=n("fe68"),i=n("fa60");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e623:function(e,t,n){"use strict";var r=n("a84f"),i=n("613f"),o=n("ca70"),s=n("a547"),a=n("4c07").f,c=n("a580"),u=n("0f33"),l=n("0368"),h="Array Iterator",d=s.set,f=s.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e71f:function(e,t,n){"use strict";var r=n("0829");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]})),n.d(t,"g",(function(){return r["g"]})),n.d(t,"h",(function(){return r["h"]}))},e893:function(e,t,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=i(t),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ot})),n.d(t,"b",(function(){return at})),n.d(t,"c",(function(){return ur})),n.d(t,"d",(function(){return ht})),n.d(t,"e",(function(){return ct})),n.d(t,"f",(function(){return lt}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(e,...t){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function E(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["h"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function _(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||Object(r["l"])()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["q"])()||Object(r["r"])()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},j=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return D(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["v"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?x(e.config,i):`${e.config.apiScheme}://${i}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),j.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t=!1){const n=Object(r["j"])(e),i=await n.getIdToken(t),o=G(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:H(z(o.auth_time)),issuedAtTime:H(z(o.iat)),expirationTime:H(z(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function G(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function K(e){const t=G(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await W(e,q(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=Object(r["j"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await D(e,{},async()=>{const n=Object(r["v"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await W(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await W(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:E,providerData:O,stsTokenManager:_}=t;v(b&&_,e,"internal-error");const T=re.fromJSON(this.name,_);v("string"===typeof b,e,"internal-error"),ie(l,e.name),ie(h,e.name),v("boolean"===typeof w,e,"internal-error"),v("boolean"===typeof E,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(y,e.name);const S=new oe({uid:b,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return O&&Array.isArray(O)&&(S.providerData=O.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(E(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||E(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["k"])()){return/firefox\//i.test(e)}function de(e=Object(r["k"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["k"])()){return/crios\//i.test(e)}function pe(e=Object(r["k"])()){return/iemobile/i.test(e)}function ge(e=Object(r["k"])()){return/android/i.test(e)}function me(e=Object(r["k"])()){return/blackberry/i.test(e)}function ve(e=Object(r["k"])()){return/webos/i.test(e)}function ye(e=Object(r["k"])()){return/iphone|ipad|ipod/i.test(e)}function be(e=Object(r["k"])()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return Object(r["o"])()&&10===document.documentMode}function Ee(e=Object(r["k"])()){return ye(e)||ge(e)||ve(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["k"])());break;case"Worker":n=`${le(Object(r["k"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ie(this),this.idTokenSubscription=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["j"])(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_e(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return Object(r["j"])(e)}class Ie{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["g"])(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ke(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Ne(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Ce{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ke(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ne(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="http://localhost";class Le extends Ce{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Le(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,je(e,t)}buildRequest(){const e={requestUri:Re,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["v"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function Me(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function Fe(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const Be={["USER_NOT_FOUND"]:"user-not-found"};async function Ue(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),Be)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Ce{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ve({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ve({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Me(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ue(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ve({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=Object(r["w"])(Object(r["i"])(e))["link"],n=t?Object(r["w"])(Object(r["i"])(t))["deep_link_id"]:null,i=Object(r["w"])(Object(r["i"])(e))["deep_link_id"],o=i?Object(r["w"])(Object(r["i"])(i))["link"]:null;return o||i||n||t||e}class $e{constructor(e){var t,n,i,o,s,a;const c=Object(r["w"])(Object(r["i"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qe(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=He(e);try{return new $e(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=$e.parseLink(t);return v(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Ge{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We extends Ke{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch(t){return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com",We.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ke{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ke{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qe(e,t){return M(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je.TWITTER_SIGN_IN_METHOD="twitter.com",Je.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await W(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await W(e,nt(r,i,t,e),n);v(o.idToken,r,"internal-error");const s=G(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(Se(e),t)}async function at(e,t,n){const r=Se(e),i=await Qe(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ct(e,t,n){return st(Object(r["j"])(e),ze.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["j"])(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await W(i,ut(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return Object(r["j"])(e).setPersistence(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function ft(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const pt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pt,"1"),this.storage.removeItem(pt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){const e=Object(r["k"])();return de(e)||ye(e)}const vt=1e3,yt=10;class bt extends gt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mt()&&Oe(),this.fallbackToPolling=Ee(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bt.type="LOCAL";const wt=bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends gt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Et.type="SESSION";const Ot=Et;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Tt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await _t(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.receivers=[];class It{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=St("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function At(e){Ct().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return"undefined"!==typeof Ct()["WorkerGlobalScope"]&&"function"===typeof Ct()["importScripts"]}async function xt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Nt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Pt(){return kt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="firebaseLocalStorageDb",Rt=1,Lt="firebaseLocalStorage",Dt="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ft(e,t){return e.transaction([Lt],t?"readwrite":"readonly").objectStore(Lt)}function Bt(){const e=indexedDB.deleteDatabase(jt);return new Mt(e).toPromise()}function Ut(){const e=indexedDB.open(jt,Rt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Lt,{keyPath:Dt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Lt)?t(n):(n.close(),await Bt(),t(await Ut()))})})}async function Vt(e,t,n){const r=Ft(e,!0).put({[Dt]:t,value:n});return new Mt(r).toPromise()}async function qt(e,t){const n=Ft(e,!1).get(t),r=await new Mt(n).toPromise();return void 0===r?null:r.value}function Ht(e,t){const n=Ft(e,!0).delete(t);return new Mt(n).toPromise()}const $t=800,zt=3;class Gt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ut()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(Pt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xt(),!this.activeServiceWorker)return;this.sender=new It(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Nt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ut();return await Vt(e,pt,"1"),await Ht(e,pt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>qt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ht(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ft(e,!1).getAll();return new Mt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gt.type="LOCAL";const Kt=Gt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function Yt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Xt().appendChild(r)})}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qt("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt="recaptcha";async function en(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===Zt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await dt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await Wt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e){this.providerId=tn.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return en(this.auth,e,Object(r["j"])(t))}static credential(e,t){return Ve._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tn.credentialFromTaggedObject(t)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ve._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e,t){return t?E(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class rn extends Ce{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function on(e){return ot(e.auth,new rn(e),e.bypassAuthState)}function sn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new rn(e),e.bypassAuthState)}async function an(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new rn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new k(2e3,1e4);class ln extends cn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=St();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,un.get())};e()}}ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="pendingRedirect",dn=new Map;class fn extends cn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const t=await pn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(e,t){const n=mn(t),r=gn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function gn(e){return E(e._redirectPersistence)}function mn(e){return ce(hn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(e,t,n=!1){const r=Se(e),i=nn(r,t),o=new fn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=6e5;class bn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!On(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!En(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(e))}saveEventToCache(e){this.cachedEventUids.add(wn(e)),this.lastProcessedEventTime=Date.now()}}function wn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function En({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function On(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return En(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sn=/^https?/;async function In(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _n(e);for(const r of t)try{if(Cn(r))return}catch(n){}f(e,"unauthorized-domain")}function Cn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Sn.test(n))return!1;if(Tn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new k(3e4,6e4);function kn(){const e=Ct().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise((t,n)=>{var r,i,o;function s(){kn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{kn(),n(p(e,"network-request-failed"))},timeout:An.get()})}if(null===(i=null===(r=Ct().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Ct().gapi)||void 0===o?void 0:o.load)){const t=Qt("iframefcb");return Ct()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Nn=null,e})}let Nn=null;function Pn(e){return Nn=Nn||xn(e),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new k(5e3,15e3),Rn="__/auth/iframe",Ln="emulator/auth/iframe",Dn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,Ln):`https://${e.config.authDomain}/${Rn}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Mn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["v"])(o).slice(1)}`}async function Bn(e){const t=await Pn(e),n=Ct().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Fn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Ct().setTimeout(()=>{r(i)},jn.get());function s(){Ct().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,qn=600,Hn="_blank",$n="http://localhost";class zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gn(e,t,n,i=Vn,o=qn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Un),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["k"])().toLowerCase();n&&(c=fe(l)?Hn:n),he(l)&&(t=t||$n,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(be(l)&&"_self"!==c)return Kn(t||"",c),new zn(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new zn(d)}function Kn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="__/auth/handler",Yn="emulator/auth/handler";function Xn(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof Ge){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["n"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ke){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Jn(e)}?${Object(r["v"])(u).slice(1)}`}function Jn({config:e}){return e.emulator?x(e,Yn):`https://${e.authDomain}/${Wn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="webStorageSupport";class Zn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ot,this._completeRedirectFn=vn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Xn(e,t,n,T(),r);return Gn(e,o,St())}async _openRedirect(e,t,n,r){return await this._originValidation(e),At(Xn(e,t,n,T(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Bn(e),n=new bn(e);return t.register("authEvent",t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Qn,{type:Qn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Qn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=In(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ee()||de()||ye()}}const er=Zn;class tr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class nr extends tr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nr(e)}_finalizeEnroll(e,t,n){return ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Yt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class rr{constructor(){}static assertion(e){return nr._fromCredential(e)}}rr.FACTOR_ID="phone";var ir="@firebase/auth",or="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{v(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_e(e)},a=new Te(t,r,i);return _(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new sr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(ir,or,ar(e)),Object(i["g"])(ir,or,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e=Object(i["e"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:er,persistence:[Kt,wt,Ot]})}cr("Browser")},ebca:function(e,t,n){var r=n("09e4"),i=n("76af"),o=r.Object;e.exports=function(e){return o(i(e))}},f14a:function(e,t,n){var r=n("f55b"),i=n("c51e");e.exports=Object.keys||function(e){return r(e,i)}},f385:function(e,t,n){var r=n("6185"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},f3fc:function(e,t,n){},f41e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r extends Error{constructor(e){super(e),this.name="ElementPlusError"}}var i=(e,t)=>{throw new r(`[${e}] ${t}`)};function o(e,t){console.warn(new r(`[${e}] ${t}`))}t.default=i,t.warn=o},f440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),i=n("7422"),o=n("ce28"),s=n("f41e");function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var c=a(i),u=a(s),l=r.defineComponent({name:"ElTooltip",components:{ElPopper:c["default"]},props:{effect:{type:String,default:"dark"},class:{type:String,default:""},content:{type:String,default:""},disabled:{type:Boolean,default:!1},enterable:{type:Boolean,default:!0},hideAfter:{type:Number,default:0},manual:{type:Boolean,default:!1},modelValue:{type:Boolean,validator:e=>"boolean"===typeof e,default:void 0},offset:{type:Number,default:12},openDelay:{type:Number,default:0},placement:{type:String,default:"bottom"},popperOptions:{type:Object,default:()=>null},showAfter:{type:Number,default:0},transition:{type:String,default:"el-fade-in-linear"},trigger:{type:[String,Array],default:()=>["hover"]},visibleArrow:{type:Boolean,default:!0},stopPopperMouseEvent:{type:Boolean,default:!0}},emits:[o.UPDATE_MODEL_EVENT],setup(e,t){e.manual&&"undefined"===typeof e.modelValue&&u["default"]("[ElTooltip]","You need to pass a v-model to el-tooltip when `manual` is true");const n=r.ref(null),i=e=>{t.emit(o.UPDATE_MODEL_EVENT,e)},s=()=>n.value.update();return{popper:n,onUpdateVisible:i,updatePopper:s}},render(){const{$slots:e,content:t,disabled:n,effect:i,enterable:o,hideAfter:s,manual:a,offset:u,openDelay:l,onUpdateVisible:h,placement:d,popperOptions:f,showAfter:p,transition:g,trigger:m,visibleArrow:v,stopPopperMouseEvent:y}=this,b=r.h(c["default"],{ref:"popper",appendToBody:!0,class:this.class,disabled:n,effect:i,enterable:o,hideAfter:s,manualMode:a,offset:u,placement:d,showAfter:l||p,showArrow:v,stopPopperMouseEvent:y,transition:g,trigger:m,popperOptions:f,visible:this.modelValue,"onUpdate:visible":h},{default:()=>e.content?e.content():t,trigger:()=>e.default()});return b}});l.install=e=>{e.component(l.name,l)},t.default=l},f514:function(e,t,n){var r=n("5f2f");e.exports=/web0s(?!.*chrome)/i.test(r)},f55b:function(e,t,n){var r=n("6185"),i=n("dba8"),o=n("a84f"),s=n("c272").indexOf,a=n("1fc1"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},f5df:function(e,t,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=Object(e),s))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},f9d5:function(e,t,n){(function(t){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{},n={exports:{}};n.exports=function(){const e=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),t=e=>{const t=[];for(let n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},n=e=>e.charAt(0).toUpperCase()+e.slice(1),r=e=>Array.prototype.slice.call(e),i=e=>{},o=e=>{},s=[],a=e=>{s.includes(e)||(s.push(e),i(e))},c=(e,t)=>{a('"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'))},u=e=>"function"==typeof e?e():e,l=e=>e&&"function"==typeof e.toPromise,h=e=>l(e)?e.toPromise():Promise.resolve(e),d=e=>e&&Promise.resolve(e)===e,f=e=>"object"==typeof e&&e.jquery,p=e=>e instanceof Element||f(e),g=e=>{const t={};return"object"!=typeof e[0]||p(e[0])?["title","html","icon"].forEach((n,r)=>{const i=e[r];"string"==typeof i||p(i)?t[n]=i:void 0!==i&&o("Unexpected type of ".concat(n,'! Expected "string" or "Element", got ').concat(typeof i))}):Object.assign(t,e[0]),t},m="swal2-",v=e=>{const t={};for(const n in e)t[e[n]]=m+e[n];return t},y=v(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),b=v(["success","warning","info","question","error"]),w=()=>document.body.querySelector(".".concat(y.container)),E=e=>{const t=w();return t?t.querySelector(e):null},O=e=>E(".".concat(e)),_=()=>O(y.popup),T=()=>O(y.icon),S=()=>O(y.title),I=()=>O(y["html-container"]),C=()=>O(y.image),A=()=>O(y["progress-steps"]),k=()=>O(y["validation-message"]),x=()=>E(".".concat(y.actions," .").concat(y.confirm)),N=()=>E(".".concat(y.actions," .").concat(y.deny)),P=()=>O(y["input-label"]),j=()=>E(".".concat(y.loader)),R=()=>E(".".concat(y.actions," .").concat(y.cancel)),L=()=>O(y.actions),D=()=>O(y.footer),M=()=>O(y["timer-progress-bar"]),F=()=>O(y.close),B='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',U=()=>{const e=r(_().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>(e=parseInt(e.getAttribute("tabindex")))>(t=parseInt(t.getAttribute("tabindex")))?1:e<t?-1:0),n=r(_().querySelectorAll(B)).filter(e=>"-1"!==e.getAttribute("tabindex"));return t(e.concat(n)).filter(e=>se(e))},V=()=>!q()&&!document.body.classList.contains(y["no-backdrop"]),q=()=>document.body.classList.contains(y["toast-shown"]),H=()=>_().hasAttribute("data-loading"),$={previousBodyPadding:null},z=(e,t)=>{if(e.textContent="",t){const n=(new DOMParser).parseFromString(t,"text/html");r(n.querySelector("head").childNodes).forEach(t=>{e.appendChild(t)}),r(n.querySelector("body").childNodes).forEach(t=>{e.appendChild(t)})}},G=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let r=0;r<n.length;r++)if(!e.classList.contains(n[r]))return!1;return!0},K=(e,t)=>{r(e.classList).forEach(n=>{Object.values(y).includes(n)||Object.values(b).includes(n)||Object.values(t.showClass).includes(n)||e.classList.remove(n)})},W=(e,t,n)=>{if(K(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return i("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"'));Q(e,t.customClass[n])}},Y=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return ee(e,y[t]);case"checkbox":return e.querySelector(".".concat(y.checkbox," input"));case"radio":return e.querySelector(".".concat(y.radio," input:checked"))||e.querySelector(".".concat(y.radio," input:first-child"));case"range":return e.querySelector(".".concat(y.range," input"));default:return ee(e,y.input)}},X=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},J=(e,t,n)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(t=>{e.forEach?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},Q=(e,t)=>{J(e,t,!0)},Z=(e,t)=>{J(e,t,!1)},ee=(e,t)=>{for(let n=0;n<e.childNodes.length;n++)if(G(e.childNodes[n],t))return e.childNodes[n]},te=(e,t,n)=>{n==="".concat(parseInt(n))&&(n=parseInt(n)),n||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},ne=(e,t="flex")=>{e.style.display=t},re=e=>{e.style.display="none"},ie=(e,t,n,r)=>{const i=e.querySelector(t);i&&(i.style[n]=r)},oe=(e,t,n)=>{t?ne(e,n):re(e)},se=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),ae=()=>!se(x())&&!se(N())&&!se(R()),ce=e=>!!(e.scrollHeight>e.clientHeight),ue=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||r>0},le=(e,t=!1)=>{const n=M();se(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"},10))},he=()=>{const e=M(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=parseInt(window.getComputedStyle(e).width),r=parseInt(t/n*100);e.style.removeProperty("transition"),e.style.width="".concat(r,"%")},de=()=>"undefined"==typeof window||"undefined"==typeof document,fe='\n <div aria-labelledby="'.concat(y.title,'" aria-describedby="').concat(y["html-container"],'" class="').concat(y.popup,'" tabindex="-1">\n   <button type="button" class="').concat(y.close,'"></button>\n   <ul class="').concat(y["progress-steps"],'"></ul>\n   <div class="').concat(y.icon,'"></div>\n   <img class="').concat(y.image,'" />\n   <h2 class="').concat(y.title,'" id="').concat(y.title,'"></h2>\n   <div class="').concat(y["html-container"],'" id="').concat(y["html-container"],'"></div>\n   <input class="').concat(y.input,'" />\n   <input type="file" class="').concat(y.file,'" />\n   <div class="').concat(y.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(y.select,'"></select>\n   <div class="').concat(y.radio,'"></div>\n   <label for="').concat(y.checkbox,'" class="').concat(y.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(y.label,'"></span>\n   </label>\n   <textarea class="').concat(y.textarea,'"></textarea>\n   <div class="').concat(y["validation-message"],'" id="').concat(y["validation-message"],'"></div>\n   <div class="').concat(y.actions,'">\n     <div class="').concat(y.loader,'"></div>\n     <button type="button" class="').concat(y.confirm,'"></button>\n     <button type="button" class="').concat(y.deny,'"></button>\n     <button type="button" class="').concat(y.cancel,'"></button>\n   </div>\n   <div class="').concat(y.footer,'"></div>\n   <div class="').concat(y["timer-progress-bar-container"],'">\n     <div class="').concat(y["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),pe=()=>{const e=w();return!!e&&(e.remove(),Z([document.documentElement,document.body],[y["no-backdrop"],y["toast-shown"],y["has-column"]]),!0)},ge=()=>{Rr.isVisible()&&Rr.resetValidationMessage()},me=()=>{const e=_(),t=ee(e,y.input),n=ee(e,y.file),r=e.querySelector(".".concat(y.range," input")),i=e.querySelector(".".concat(y.range," output")),o=ee(e,y.select),s=e.querySelector(".".concat(y.checkbox," input")),a=ee(e,y.textarea);t.oninput=ge,n.onchange=ge,o.onchange=ge,s.onchange=ge,a.oninput=ge,r.oninput=()=>{ge(),i.value=r.value},r.onchange=()=>{ge(),r.nextSibling.value=r.value}},ve=e=>"string"==typeof e?document.querySelector(e):e,ye=e=>{const t=_();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},be=e=>{"rtl"===window.getComputedStyle(e).direction&&Q(w(),y.rtl)},we=e=>{const t=pe();if(de())return void o("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=y.container,t&&Q(n,y["no-transition"]),z(n,fe);const r=ve(e.target);r.appendChild(n),ye(e),be(r),me()},Ee=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?Oe(e,t):e&&z(t,e)},Oe=(e,t)=>{e.jquery?_e(t,e):z(t,e.toString())},_e=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},Te=(()=>{if(de())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),Se=()=>{const e=document.createElement("div");e.className=y["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Ie=(e,t)=>{const n=L(),r=j(),i=x(),o=N(),s=R();t.showConfirmButton||t.showDenyButton||t.showCancelButton||re(n),W(n,t,"actions"),Ae(i,"confirm",t),Ae(o,"deny",t),Ae(s,"cancel",t),Ce(i,o,s,t),t.reverseButtons&&(n.insertBefore(s,r),n.insertBefore(o,r),n.insertBefore(i,r)),z(r,t.loaderHtml),W(r,t,"loader")};function Ce(e,t,n,r){if(!r.buttonsStyling)return Z([e,t,n],y.styled);Q([e,t,n],y.styled),r.confirmButtonColor&&(e.style.backgroundColor=r.confirmButtonColor,Q(e,y["default-outline"])),r.denyButtonColor&&(t.style.backgroundColor=r.denyButtonColor,Q(t,y["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,Q(n,y["default-outline"]))}function Ae(e,t,r){oe(e,r["show".concat(n(t),"Button")],"inline-block"),z(e,r["".concat(t,"ButtonText")]),e.setAttribute("aria-label",r["".concat(t,"ButtonAriaLabel")]),e.className=y[t],W(e,r,"".concat(t,"Button")),Q(e,r["".concat(t,"ButtonClass")])}function ke(e,t){"string"==typeof t?e.style.background=t:t||Q([document.documentElement,document.body],y["no-backdrop"])}function xe(e,t){t in y?Q(e,y[t]):(i('The "position" parameter is not valid, defaulting to "center"'),Q(e,y.center))}function Ne(e,t){if(t&&"string"==typeof t){const n="grow-".concat(t);n in y&&Q(e,y[n])}}const Pe=(e,t)=>{const n=w();n&&(ke(n,t.backdrop),xe(n,t.position),Ne(n,t.grow),W(n,t,"container"))};var je={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Re=["input","file","range","select","radio","checkbox","textarea"],Le=(e,t)=>{const n=_(),r=je.innerParams.get(e),i=!r||t.input!==r.input;Re.forEach(e=>{const r=y[e],o=ee(n,r);Fe(e,t.inputAttributes),o.className=r,i&&re(o)}),t.input&&(i&&De(t),Be(t))},De=e=>{if(!He[e.input])return o('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=qe(e.input),n=He[e.input](t,e);ne(n),setTimeout(()=>{X(n)})},Me=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["type","value","style"].includes(n)||e.removeAttribute(n)}},Fe=(e,t)=>{const n=Y(_(),e);if(n){Me(n);for(const e in t)n.setAttribute(e,t[e])}},Be=e=>{const t=qe(e.input);e.customClass&&Q(t,e.customClass.input)},Ue=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Ve=(e,t,n)=>{if(n.inputLabel){e.id=y.input;const r=document.createElement("label"),i=y["input-label"];r.setAttribute("for",e.id),r.className=i,Q(r,n.customClass.inputLabel),r.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",r)}},qe=e=>{const t=y[e]?y[e]:y.input;return ee(_(),t)},He={};He.text=He.email=He.password=He.number=He.tel=He.url=(e,t)=>("string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:d(t.inputValue)||i('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),Ve(e,e,t),Ue(e,t),e.type=t.input,e),He.file=(e,t)=>(Ve(e,e,t),Ue(e,t),e),He.range=(e,t)=>{const n=e.querySelector("input"),r=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,r.value=t.inputValue,Ve(n,e,t),e},He.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");z(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return Ve(e,e,t),e},He.radio=e=>(e.textContent="",e),He.checkbox=(e,t)=>{const n=Y(_(),"checkbox");n.value=1,n.id=y.checkbox,n.checked=Boolean(t.inputValue);const r=e.querySelector("span");return z(r,t.inputPlaceholder),e},He.textarea=(e,t)=>{e.value=t.inputValue,Ue(e,t),Ve(e,e,t);const n=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(_()).width);new MutationObserver(()=>{const r=e.offsetWidth+n(e);_().style.width=r>t?"".concat(r,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})}return e};const $e=(e,t)=>{const n=I();W(n,t,"htmlContainer"),t.html?(Ee(t.html,n),ne(n,"block")):t.text?(n.textContent=t.text,ne(n,"block")):re(n),Le(e,t)},ze=(e,t)=>{const n=D();oe(n,t.footer),t.footer&&Ee(t.footer,n),W(n,t,"footer")},Ge=(e,t)=>{const n=F();z(n,t.closeButtonHtml),W(n,t,"closeButton"),oe(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},Ke=(e,t)=>{const n=je.innerParams.get(e),r=T();return n&&t.icon===n.icon?(Xe(r,t),void We(r,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(b).indexOf(t.icon)?(o('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),re(r)):(ne(r),Xe(r,t),We(r,t),void Q(r,t.showClass.icon)):re(r)},We=(e,t)=>{for(const n in b)t.icon!==n&&Z(e,b[n]);Q(e,b[t.icon]),Je(e,t),Ye(),W(e,t,"icon")},Ye=()=>{const e=_(),t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=t},Xe=(e,t)=>{e.textContent="",t.iconHtml?z(e,Qe(t.iconHtml)):"success"===t.icon?z(e,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===t.icon?z(e,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):z(e,Qe({question:"?",warning:"!",info:"i"}[t.icon]))},Je=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ie(e,n,"backgroundColor",t.iconColor);ie(e,".swal2-success-ring","borderColor",t.iconColor)}},Qe=e=>'<div class="'.concat(y["icon-content"],'">').concat(e,"</div>"),Ze=(e,t)=>{const n=C();if(!t.imageUrl)return re(n);ne(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),te(n,"width",t.imageWidth),te(n,"height",t.imageHeight),n.className=y.image,W(n,t,"image")},et=e=>{const t=document.createElement("li");return Q(t,y["progress-step"]),z(t,e),t},tt=e=>{const t=document.createElement("li");return Q(t,y["progress-step-line"]),e.progressStepsDistance&&(t.style.width=e.progressStepsDistance),t},nt=(e,t)=>{const n=A();if(!t.progressSteps||0===t.progressSteps.length)return re(n);ne(n),n.textContent="",t.currentProgressStep>=t.progressSteps.length&&i("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach((e,r)=>{const i=et(e);if(n.appendChild(i),r===t.currentProgressStep&&Q(i,y["active-progress-step"]),r!==t.progressSteps.length-1){const e=tt(t);n.appendChild(e)}})},rt=(e,t)=>{const n=S();oe(n,t.title||t.titleText,"block"),t.title&&Ee(t.title,n),t.titleText&&(n.innerText=t.titleText),W(n,t,"title")},it=(e,t)=>{const n=w(),r=_();t.toast?(te(n,"width",t.width),r.style.width="100%",r.insertBefore(j(),T())):te(r,"width",t.width),te(r,"padding",t.padding),t.background&&(r.style.background=t.background),re(k()),ot(r,t)},ot=(e,t)=>{e.className="".concat(y.popup," ").concat(se(e)?t.showClass.popup:""),t.toast?(Q([document.documentElement,document.body],y["toast-shown"]),Q(e,y.toast)):Q(e,y.modal),W(e,t,"popup"),"string"==typeof t.customClass&&Q(e,t.customClass),t.icon&&Q(e,y["icon-".concat(t.icon)])},st=(e,t)=>{it(e,t),Pe(e,t),nt(e,t),Ke(e,t),Ze(e,t),rt(e,t),Ge(e,t),$e(e,t),Ie(e,t),ze(e,t),"function"==typeof t.didRender&&t.didRender(_())},at=()=>se(_()),ct=()=>x()&&x().click(),ut=()=>N()&&N().click(),lt=()=>R()&&R().click();function ht(...e){return new this(...e)}function dt(e){class t extends(this){_main(t,n){return super._main(t,Object.assign({},e,n))}}return t}const ft=e=>{let t=_();t||Rr.fire(),t=_();const n=j();q()?re(T()):pt(t,e),ne(n),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},pt=(e,t)=>{const n=L(),r=j();!t&&se(x())&&(t=x()),ne(n),t&&(re(t),r.setAttribute("data-button-to-replace",t.className)),r.parentNode.insertBefore(r,t),Q([e,n],y.loading)},gt=100,mt={},vt=()=>{mt.previousActiveElement&&mt.previousActiveElement.focus?(mt.previousActiveElement.focus(),mt.previousActiveElement=null):document.body&&document.body.focus()},yt=e=>new Promise(t=>{if(!e)return t();const n=window.scrollX,r=window.scrollY;mt.restoreFocusTimeout=setTimeout(()=>{vt(),t()},gt),window.scrollTo(n,r)}),bt=()=>mt.timeout&&mt.timeout.getTimerLeft(),wt=()=>{if(mt.timeout)return he(),mt.timeout.stop()},Et=()=>{if(mt.timeout){const e=mt.timeout.start();return le(e),e}},Ot=()=>{const e=mt.timeout;return e&&(e.running?wt():Et())},_t=e=>{if(mt.timeout){const t=mt.timeout.increase(e);return le(t,!0),t}},Tt=()=>mt.timeout&&mt.timeout.isRunning();let St=!1;const It={};function Ct(e="data-swal-template"){It[e]=this,St||(document.body.addEventListener("click",At),St=!0)}const At=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in It){const n=t.getAttribute(e);if(n)return void It[e].fire({template:n})}},kt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},xt=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Nt={},Pt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],jt=e=>Object.prototype.hasOwnProperty.call(kt,e),Rt=e=>-1!==xt.indexOf(e),Lt=e=>Nt[e],Dt=e=>{jt(e)||i('Unknown parameter "'.concat(e,'"'))},Mt=e=>{Pt.includes(e)&&i('The parameter "'.concat(e,'" is incompatible with toasts'))},Ft=e=>{Lt(e)&&c(e,Lt(e))},Bt=e=>{!e.backdrop&&e.allowOutsideClick&&i('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)Dt(t),e.toast&&Mt(t),Ft(t)};var Ut=Object.freeze({isValidParameter:jt,isUpdatableParameter:Rt,isDeprecatedParameter:Lt,argsToParams:g,isVisible:at,clickConfirm:ct,clickDeny:ut,clickCancel:lt,getContainer:w,getPopup:_,getTitle:S,getHtmlContainer:I,getImage:C,getIcon:T,getInputLabel:P,getCloseButton:F,getActions:L,getConfirmButton:x,getDenyButton:N,getCancelButton:R,getLoader:j,getFooter:D,getTimerProgressBar:M,getFocusableElements:U,getValidationMessage:k,isLoading:H,fire:ht,mixin:dt,showLoading:ft,enableLoading:ft,getTimerLeft:bt,stopTimer:wt,resumeTimer:Et,toggleTimer:Ot,increaseTimer:_t,isTimerRunning:Tt,bindClickHandler:Ct});function Vt(){const e=je.innerParams.get(this);if(!e)return;const t=je.domCache.get(this);re(t.loader),q()?e.icon&&ne(T()):qt(t),Z([t.popup,t.actions],y.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const qt=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ne(t[0],"inline-block"):ae()&&re(e.actions)};function Ht(e){const t=je.innerParams.get(e||this),n=je.domCache.get(e||this);return n?Y(n.popup,t.input):null}const $t=()=>{null===$.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&($.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat($.previousBodyPadding+Se(),"px"))},zt=()=>{null!==$.previousBodyPadding&&(document.body.style.paddingRight="".concat($.previousBodyPadding,"px"),$.previousBodyPadding=null)},Gt=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!G(document.body,y.iosfix)){const e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),Q(document.body,y.iosfix),Wt(),Kt()}},Kt=()=>{if(!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)){const e=44;_().scrollHeight>window.innerHeight-e&&(w().style.paddingBottom="".concat(e,"px"))}},Wt=()=>{const e=w();let t;e.ontouchstart=e=>{t=Yt(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},Yt=e=>{const t=e.target,n=w();return!(Xt(e)||Jt(e)||t!==n&&(ce(n)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||ce(I())&&I().contains(t)))},Xt=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Jt=e=>e.touches&&e.touches.length>1,Qt=()=>{if(G(document.body,y.iosfix)){const e=parseInt(document.body.style.top,10);Z(document.body,y.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},Zt=()=>{r(document.body.children).forEach(e=>{e===w()||e.contains(w())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},en=()=>{r(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})};var tn={swalPromiseResolve:new WeakMap};function nn(e,t,n,r){q()?un(e,r):(yt(n).then(()=>un(e,r)),mt.keydownTarget.removeEventListener("keydown",mt.keydownHandler,{capture:mt.keydownListenerCapture}),mt.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),V()&&(zt(),Qt(),en()),rn()}function rn(){Z([document.documentElement,document.body],[y.shown,y["height-auto"],y["no-backdrop"],y["toast-shown"]])}function on(e){const t=_();if(!t)return;e=sn(e);const n=je.innerParams.get(this);if(!n||G(t,n.hideClass.popup))return;const r=tn.swalPromiseResolve.get(this);Z(t,n.showClass.popup),Q(t,n.hideClass.popup);const i=w();Z(i,n.showClass.backdrop),Q(i,n.hideClass.backdrop),an(this,t,n),r(e)}const sn=e=>void 0===e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),an=(e,t,n)=>{const r=w(),i=Te&&ue(t);"function"==typeof n.willClose&&n.willClose(t),i?cn(e,t,r,n.returnFocus,n.didClose):nn(e,r,n.returnFocus,n.didClose)},cn=(e,t,n,r,i)=>{mt.swalCloseEventFinishedCallback=nn.bind(null,e,n,r,i),t.addEventListener(Te,(function(e){e.target===t&&(mt.swalCloseEventFinishedCallback(),delete mt.swalCloseEventFinishedCallback)}))},un=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()})};function ln(e,t,n){const r=je.domCache.get(e);t.forEach(e=>{r[e].disabled=n})}function hn(e,t){if(!e)return!1;if("radio"===e.type){const n=e.parentNode.parentNode.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}function dn(){ln(this,["confirmButton","denyButton","cancelButton"],!1)}function fn(){ln(this,["confirmButton","denyButton","cancelButton"],!0)}function pn(){return hn(this.getInput(),!1)}function gn(){return hn(this.getInput(),!0)}function mn(e){const t=je.domCache.get(this),n=je.innerParams.get(this);z(t.validationMessage,e),t.validationMessage.className=y["validation-message"],n.customClass&&n.customClass.validationMessage&&Q(t.validationMessage,n.customClass.validationMessage),ne(t.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid",!0),r.setAttribute("aria-describedby",y["validation-message"]),X(r),Q(r,y.inputerror))}function vn(){const e=je.domCache.get(this);e.validationMessage&&re(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),Z(t,y.inputerror))}function yn(){return je.domCache.get(this).progressSteps}class bn{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}var wn={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function En(e){e.inputValidator||Object.keys(wn).forEach(t=>{e.input===t&&(e.inputValidator=wn[t])})}function On(e){(!e.target||"string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(i('Target parameter is not valid, defaulting to "body"'),e.target="body")}function _n(e){En(e),e.showLoaderOnConfirm&&!e.preConfirm&&i("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),On(e),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),we(e)}const Tn=["swal-title","swal-html","swal-footer"],Sn=e=>{const t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return Pn(n),Object.assign(In(n),Cn(n),An(n),kn(n),xn(n),Nn(n,Tn))},In=e=>{const t={};return r(e.querySelectorAll("swal-param")).forEach(e=>{jn(e,["name","value"]);const n=e.getAttribute("name");let r=e.getAttribute("value");"boolean"==typeof kt[n]&&"false"===r&&(r=!1),"object"==typeof kt[n]&&(r=JSON.parse(r)),t[n]=r}),t},Cn=e=>{const t={};return r(e.querySelectorAll("swal-button")).forEach(e=>{jn(e,["type","color","aria-label"]);const r=e.getAttribute("type");t["".concat(r,"ButtonText")]=e.innerHTML,t["show".concat(n(r),"Button")]=!0,e.hasAttribute("color")&&(t["".concat(r,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t["".concat(r,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}),t},An=e=>{const t={},n=e.querySelector("swal-image");return n&&(jn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},kn=e=>{const t={},n=e.querySelector("swal-icon");return n&&(jn(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},xn=e=>{const t={},n=e.querySelector("swal-input");n&&(jn(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const i=e.querySelectorAll("swal-input-option");return i.length&&(t.inputOptions={},r(i).forEach(e=>{jn(e,["value"]);const n=e.getAttribute("value"),r=e.innerHTML;t.inputOptions[n]=r})),t},Nn=(e,t)=>{const n={};for(const r in t){const i=t[r],o=e.querySelector(i);o&&(jn(o,[]),n[i.replace(/^swal-/,"")]=o.innerHTML.trim())}return n},Pn=e=>{const t=Tn.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);r(e.children).forEach(e=>{const n=e.tagName.toLowerCase();-1===t.indexOf(n)&&i("Unrecognized element <".concat(n,">"))})},jn=(e,t)=>{r(e.attributes).forEach(n=>{-1===t.indexOf(n.name)&&i(['Unrecognized attribute "'.concat(n.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])})},Rn=10,Ln=e=>{const t=w(),n=_();"function"==typeof e.willOpen&&e.willOpen(n);const r=window.getComputedStyle(document.body).overflowY;Bn(t,n,e),setTimeout(()=>{Mn(t,n)},Rn),V()&&(Fn(t,e.scrollbarPadding,r),Zt()),q()||mt.previousActiveElement||(mt.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout(()=>e.didOpen(n)),Z(t,y["no-transition"])},Dn=e=>{const t=_();if(e.target!==t)return;const n=w();t.removeEventListener(Te,Dn),n.style.overflowY="auto"},Mn=(e,t)=>{Te&&ue(t)?(e.style.overflowY="hidden",t.addEventListener(Te,Dn)):e.style.overflowY="auto"},Fn=(e,t,n)=>{Gt(),t&&"hidden"!==n&&$t(),setTimeout(()=>{e.scrollTop=0})},Bn=(e,t,n)=>{Q(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),ne(t,"grid"),setTimeout(()=>{Q(t,n.showClass.popup),t.style.removeProperty("opacity")},Rn),Q([document.documentElement,document.body],y.shown),n.heightAuto&&n.backdrop&&!n.toast&&Q([document.documentElement,document.body],y["height-auto"])},Un=(e,t)=>{"select"===t.input||"radio"===t.input?zn(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(l(t.inputValue)||d(t.inputValue))&&(ft(x()),Gn(e,t))},Vn=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return qn(n);case"radio":return Hn(n);case"file":return $n(n);default:return t.inputAutoTrim?n.value.trim():n.value}},qn=e=>e.checked?1:0,Hn=e=>e.checked?e.value:null,$n=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,zn=(e,t)=>{const n=_(),r=e=>Kn[t.input](n,Wn(e),t);l(t.inputOptions)||d(t.inputOptions)?(ft(x()),h(t.inputOptions).then(t=>{e.hideLoading(),r(t)})):"object"==typeof t.inputOptions?r(t.inputOptions):o("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions))},Gn=(e,t)=>{const n=e.getInput();re(n),h(t.inputValue).then(r=>{n.value="number"===t.input?parseFloat(r)||0:"".concat(r),ne(n),n.focus(),e.hideLoading()}).catch(t=>{o("Error in inputValue promise: ".concat(t)),n.value="",ne(n),n.focus(),e.hideLoading()})},Kn={select:(e,t,n)=>{const r=ee(e,y.select),i=(e,t,r)=>{const i=document.createElement("option");i.value=r,z(i,t),i.selected=Yn(r,n.inputValue),e.appendChild(i)};t.forEach(e=>{const t=e[0],n=e[1];if(Array.isArray(n)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,r.appendChild(e),n.forEach(t=>i(e,t[1],t[0]))}else i(r,n,t)}),r.focus()},radio:(e,t,n)=>{const r=ee(e,y.radio);t.forEach(e=>{const t=e[0],i=e[1],o=document.createElement("input"),s=document.createElement("label");o.type="radio",o.name=y.radio,o.value=t,Yn(t,n.inputValue)&&(o.checked=!0);const a=document.createElement("span");z(a,i),a.className=y.label,s.appendChild(o),s.appendChild(a),r.appendChild(s)});const i=r.querySelectorAll("input");i.length&&i[0].focus()}},Wn=e=>{const t=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach((e,n)=>{let r=e;"object"==typeof r&&(r=Wn(r)),t.push([n,r])}):Object.keys(e).forEach(n=>{let r=e[n];"object"==typeof r&&(r=Wn(r)),t.push([n,r])}),t},Yn=(e,t)=>t&&t.toString()===e.toString(),Xn=(e,t)=>{e.disableButtons(),t.input?Zn(e,t,"confirm"):rr(e,t,!0)},Jn=(e,t)=>{e.disableButtons(),t.returnInputValueOnDeny?Zn(e,t,"deny"):tr(e,t,!1)},Qn=(t,n)=>{t.disableButtons(),n(e.cancel)},Zn=(e,t,n)=>{const r=Vn(e,t);t.inputValidator?er(e,t,r,n):e.getInput().checkValidity()?"deny"===n?tr(e,t,r):rr(e,t,r):(e.enableButtons(),e.showValidationMessage(t.validationMessage))},er=(e,t,n,r)=>{e.disableInput(),Promise.resolve().then(()=>h(t.inputValidator(n,t.validationMessage))).then(i=>{e.enableButtons(),e.enableInput(),i?e.showValidationMessage(i):"deny"===r?tr(e,t,n):rr(e,t,n)})},tr=(e,t,n)=>{t.showLoaderOnDeny&&ft(N()),t.preDeny?Promise.resolve().then(()=>h(t.preDeny(n,t.validationMessage))).then(t=>{!1===t?e.hideLoading():e.closePopup({isDenied:!0,value:void 0===t?n:t})}):e.closePopup({isDenied:!0,value:n})},nr=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},rr=(e,t,n)=>{t.showLoaderOnConfirm&&ft(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(()=>h(t.preConfirm(n,t.validationMessage))).then(t=>{se(k())||!1===t?e.hideLoading():nr(e,void 0===t?n:t)})):nr(e,n)},ir=(e,t,n,r)=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=t=>cr(e,t,r),t.keydownTarget=n.keydownListenerCapture?window:_(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},or=(e,t,n)=>{const r=U();if(r.length)return(t+=n)===r.length?t=0:-1===t&&(t=r.length-1),r[t].focus();_().focus()},sr=["ArrowRight","ArrowDown"],ar=["ArrowLeft","ArrowUp"],cr=(e,t,n)=>{const r=je.innerParams.get(e);r&&(r.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?ur(e,t,r):"Tab"===t.key?lr(t,r):[...sr,...ar].includes(t.key)?hr(t.key):"Escape"===t.key&&dr(t,r,n))},ur=(e,t,n)=>{if(!t.isComposing&&t.target&&e.getInput()&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;ct(),t.preventDefault()}},lr=(e,t)=>{const n=e.target,r=U();let i=-1;for(let o=0;o<r.length;o++)if(n===r[o]){i=o;break}e.shiftKey?or(t,i,-1):or(t,i,1),e.stopPropagation(),e.preventDefault()},hr=e=>{if(![x(),N(),R()].includes(document.activeElement))return;const t=sr.includes(e)?"nextElementSibling":"previousElementSibling",n=document.activeElement[t];n&&n.focus()},dr=(t,n,r)=>{u(n.allowEscapeKey)&&(t.preventDefault(),r(e.esc))},fr=(e,t,n)=>{je.innerParams.get(e).toast?pr(e,t,n):(mr(t),vr(t),yr(e,t,n))},pr=(t,n,r)=>{n.popup.onclick=()=>{const n=je.innerParams.get(t);n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton||n.timer||n.input||r(e.close)}};let gr=!1;const mr=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(gr=!0)}}},vr=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(gr=!0)}}},yr=(t,n,r)=>{n.container.onclick=i=>{const o=je.innerParams.get(t);gr?gr=!1:i.target===n.container&&u(o.allowOutsideClick)&&r(e.backdrop)}};function br(e,t={}){Bt(Object.assign({},t,e)),mt.currentInstance&&mt.currentInstance._destroy(),mt.currentInstance=this;const n=wr(e,t);_n(n),Object.freeze(n),mt.timeout&&(mt.timeout.stop(),delete mt.timeout),clearTimeout(mt.restoreFocusTimeout);const r=Or(this);return st(this,n),je.innerParams.set(this,n),Er(this,r,n)}const wr=(e,t)=>{const n=Sn(e),r=Object.assign({},kt,t,n,e);return r.showClass=Object.assign({},kt.showClass,r.showClass),r.hideClass=Object.assign({},kt.hideClass,r.hideClass),r},Er=(t,n,r)=>new Promise(i=>{const o=e=>{t.closePopup({isDismissed:!0,dismiss:e})};tn.swalPromiseResolve.set(t,i),n.confirmButton.onclick=()=>Xn(t,r),n.denyButton.onclick=()=>Jn(t,r),n.cancelButton.onclick=()=>Qn(t,o),n.closeButton.onclick=()=>o(e.close),fr(t,n,o),ir(t,mt,r,o),Un(t,r),Ln(r),_r(mt,r,o),Tr(n,r),setTimeout(()=>{n.container.scrollTop=0})}),Or=e=>{const t={popup:_(),container:w(),actions:L(),confirmButton:x(),denyButton:N(),cancelButton:R(),loader:j(),closeButton:F(),validationMessage:k(),progressSteps:A()};return je.domCache.set(e,t),t},_r=(e,t,n)=>{const r=M();re(r),t.timer&&(e.timeout=new bn(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(ne(r),setTimeout(()=>{e.timeout&&e.timeout.running&&le(t.timer)})))},Tr=(e,t)=>{if(!t.toast)return u(t.allowEnterKey)?void(Sr(e,t)||or(t,-1,1)):Ir()},Sr=(e,t)=>t.focusDeny&&se(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&se(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!se(e.confirmButton)||(e.confirmButton.focus(),0)),Ir=()=>{document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};function Cr(e){const t=_(),n=je.innerParams.get(this);if(!t||G(t,n.hideClass.popup))return i("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const r={};Object.keys(e).forEach(t=>{Rr.isUpdatableParameter(t)?r[t]=e[t]:i('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))});const o=Object.assign({},n,r);st(this,o),je.innerParams.set(this,o),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}function Ar(){const e=je.domCache.get(this),t=je.innerParams.get(this);t&&(e.popup&&mt.swalCloseEventFinishedCallback&&(mt.swalCloseEventFinishedCallback(),delete mt.swalCloseEventFinishedCallback),mt.deferDisposalTimer&&(clearTimeout(mt.deferDisposalTimer),delete mt.deferDisposalTimer),"function"==typeof t.didDestroy&&t.didDestroy(),kr(this))}const kr=e=>{delete e.params,delete mt.keydownHandler,delete mt.keydownTarget,xr(je),xr(tn)},xr=e=>{for(const t in e)e[t]=new WeakMap};var Nr=Object.freeze({hideLoading:Vt,disableLoading:Vt,getInput:Ht,close:on,closePopup:on,closeModal:on,closeToast:on,enableButtons:dn,disableButtons:fn,enableInput:pn,disableInput:gn,showValidationMessage:mn,resetValidationMessage:vn,getProgressSteps:yn,_main:br,update:Cr,_destroy:Ar});let Pr;class jr{constructor(...e){if("undefined"==typeof window)return;Pr=this;const t=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:t,writable:!1,enumerable:!0,configurable:!0}});const n=this._main(this.params);je.promise.set(this,n)}then(e){return je.promise.get(this).then(e)}finally(e){return je.promise.get(this).finally(e)}}Object.assign(jr.prototype,Nr),Object.assign(jr,Ut),Object.keys(Nr).forEach(e=>{jr[e]=function(...t){if(Pr)return Pr[e](...t)}}),jr.DismissReason=e,jr.version="11.0.18";const Rr=jr;return Rr.default=Rr,Rr}(),void 0!==e&&e.Sweetalert2&&(e.swal=e.sweetAlert=e.Swal=e.SweetAlert=e.Sweetalert2);var r=n.exports;return class{static install(e,t={}){var n;const i=r.mixin(t),o=function(...e){return i.fire.call(i,...e)};Object.assign(o,r),Object.keys(r).filter(e=>"function"==typeof r[e]).forEach(e=>{o[e]=i[e].bind(i)}),(null==(n=e.config)?void 0:n.globalProperties)&&!e.config.globalProperties.$swal?(e.config.globalProperties.$swal=o,e.provide("$swal",o)):Object.prototype.hasOwnProperty.call(e,"$swal")||(e.prototype.$swal=o,e.swal=o)}}}))}).call(this,n("c8ba"))},fa60:function(e,t,n){var r=n("09e4"),i=n("0ee6"),o=n("4650"),s=n("c0c7"),a=n("aa51"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},fb61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace"},i='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',o=e=>{const t=getComputedStyle(e);return"fixed"!==t.position&&null!==e.offsetParent},s=e=>Array.from(e.querySelectorAll(i)).filter(a).filter(o),a=e=>{if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return!("hidden"===e.type||"file"===e.type);case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},c=e=>{var t;return!!a(e)&&(l.IgnoreUtilFocusChanges=!0,null===(t=e.focus)||void 0===t||t.call(e),l.IgnoreUtilFocusChanges=!1,document.activeElement===e)},u=function(e,t,...n){let r;r=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const i=document.createEvent(r);return i.initEvent(t,...n),e.dispatchEvent(i),e},l={IgnoreUtilFocusChanges:!1,focusFirstDescendant:function(e){for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(c(n)||this.focusFirstDescendant(n))return!0}return!1},focusLastDescendant:function(e){for(let t=e.childNodes.length-1;t>=0;t--){const n=e.childNodes[t];if(c(n)||this.focusLastDescendant(n))return!0}return!1}};t.EVENT_CODE=r,t.attemptFocus=c,t.default=l,t.isFocusable=a,t.isVisible=o,t.obtainAllFocusableElements=s,t.triggerEvent=u},fb8a:function(e,t,n){var r=n("4705"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce5:function(e,t,n){var r,i,o=n("09e4"),s=n("5f2f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbe:function(e,t,n){var r=n("f55b"),i=n("c51e"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fe68:function(e,t,n){var r=n("09e4"),i=n("2505"),o=n("bb6e"),s=n("fa60"),a=n("6dca"),c=n("a257"),u=n("8b0e"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}}}]);
//# sourceMappingURL=chunk-vendors.41848f4e.js.map