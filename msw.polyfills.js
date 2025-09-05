import "fast-text-encoding";
import "react-native-url-polyfill/auto";

// ReferenceError: Property 'MessageEvent' doesn't exist, js engine: hermes 해결 방법
// [관련 GitHub 이슈에서 제안된 해결 방법](https://github.com/mswjs/mswjs.io/issues/453)
function defineMockGlobal(name) {
  if (typeof global[name] === "undefined") {
    global[name] = class {
      constructor(type, eventInitDict) {
        this.type = type;
        Object.assign(this, eventInitDict);
      }
    };
  }
}

["MessageEvent", "Event", "EventTarget", "BroadcastChannel"].forEach(defineMockGlobal);
