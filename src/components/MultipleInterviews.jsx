import React, { useState } from 'react';
import {
  Code,
  Layers,
  List,
  Cpu,
  Activity,
  Zap,
  GitMerge,
  Bell,
  Smartphone,
  Box,
  RefreshCw,
  Globe,
  FileJson,
  ArrowDown,
  EyeOff,
  Server,
  Menu,
  X,
  ChevronRight,
  Copy,
  Check,
  Hash,
  Database,
  Layout,
  Terminal,
  Shield,
  Search,
  Key
} from 'lucide-react';

const topics = [
  {
    id: 1,
    title: "Closure in JavaScript",
    category: "JavaScript",
    icon: <Code className="w-5 h-5" />,
    description: "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
    content: "# Deep Dive\nIn JavaScript, closures are created every time a function is created, at function creation time. To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.\n\nThe inner function will have access to the variables in the outer function scope, even after the outer function has returned.\n\n# Key Use Cases\n1. Data Privacy/Emulation of Private Methods: Variables can be hidden within the scope of the parent function.\n2. Partial Applications & Currying: Pre-filling arguments.\n3. Event Handlers & Callbacks: Maintaining state in asynchronous operations.",
    code: "function makeCounter() {\n  let count = 0; // consistent state\n\n  return function() {\n    return count++; // access to outer scope\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 0\nconsole.log(counter()); // 1\n// 'count' variable is not accessible directly "
  },
  {
    id: 2,
    title: "Hoisting",
    category: "JavaScript",
    icon: <ArrowDown className="w-5 h-5" />,
    description: "Hoisting is JavaScript's default behavior of moving declarations to the top.",
    content: "# Deep Dive\nIn JavaScript, a variable can be declared after it has been used. In other words, a variable can be used before it has been declared.\n\nImportant Nuances:\n- var: Hoisted and initialized with `undefined`.\n- let and const: Hoisted but not initialized. They enter a \"Temporal Dead Zone\" (TDZ) from the start of the block until the declaration is processed. Accessing them before declaration throws a `ReferenceError`.\n- Function Declarations: Completely hoisted (name and body).\n- Function Expressions: Only the variable declaration is hoisted, not the assignment.",
    code: "// Function Hoisting\nsayHello(); // Works! \"Hello\"\nfunction sayHello() {\n  console.log(\"Hello\");\n}\n\n// var Hoisting\nconsole.log(myVar); // undefined\nvar myVar = 5;\n\n// let Hoisting (TDZ)\ntry {\n  console.log(myLet); // ReferenceError\n} catch(e) { console.log(e.message); }\nlet myLet = 10;"
  },
  {
    id: 3,
    title: "FlatList Properties (React Native)",
    category: "React Native",
    icon: <List className="w-5 h-5" />,
    description: "Key properties for optimizing lists in React Native.",
    content: "# Deep Dive\n`FlatList` is the core component for performant lists in React Native.\n\nEssential Properties:\n- `data`: The array of data to render.\n- `renderItem`: Function that returns the JSX for each item.\n- `keyExtractor`: Unique key for caching and re-ordering.\n- `getItemLayout`: Optimization to skip measurement of dynamic content if height is fixed.\n- `initialNumToRender`: How many items to render in the initial batch.\n- `windowSize`: Measurement unit for the virtualization window.\n- `onEndReached` & `onEndReachedThreshold`: For infinite scrolling.\n- `ListHeaderComponent` / `ListFooterComponent`: Static views above/below the list.\n- `numColumns`: For grid layouts.",
    code: "<FlatList\n  data={DATA}\n  keyExtractor={item => item.id}\n  renderItem={({ item }) => <Item title={item.title} />}\n  getItemLayout={(data, index) => (\n    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}\n  )}\n  initialNumToRender={10}\n  maxToRenderPerBatch={10}\n  windowSize={21}\n  onEndReached={loadMore}\n  onEndReachedThreshold={0.5}\n/>"
  },
  {
    id: 4,
    title: "Old vs New Architecture (React Native)",
    category: "React Native",
    icon: <Cpu className="w-5 h-5" />,
    description: "The transition from the Bridge to the JSI (JavaScript Interface).",
    content: "# The Old Architecture (The Bridge)\n- Serialization: Communication between JS and Native happened over an asynchronous bridge.\n- JSON: Data was serialized to JSON, sent across, and deserialized.\n- Bottleneck: High throughput (like scroll events or animations) caused congestion.\n\n# The New Architecture (Fabric & TurboModules)\n- JSI (JavaScript Interface): Allows JS to hold references to C++ Host Objects and invoke methods on them directly.\n- Synchronous Execution: JS can call Native functions synchronously.\n- Shared Memory: No serialization overhead.\n- Fabric: The new UI Rendering system.\n- TurboModules: Lazy-loaded native modules.",
    code: "// Old (Bridge) - Async & Serialized\nNativeModules.MyModule.doSomething((res) => { ... });\n\n// New (JSI) - Direct & Synchronous\n// C++ Bindings allow direct access\nconst result = global.myNativeFunction();"
  },
  {
    id: 5,
    title: "Event Loop",
    category: "JavaScript",
    icon: <Activity className="w-5 h-5" />,
    description: "How JavaScript handles asynchronous operations despite being single-threaded.",
    content: "# Deep Dive\nJavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.\n\nComponents:\n1. Call Stack: LIFO structure where code execution happens.\n2. Web API / Node APIs: Where async tasks (setTimeout, fetch, file I/O) run.\n3. Callback Queue (Task Queue): Where callbacks from APIs wait (setTimeout).\n4. Microtask Queue: Higher priority queue for Promises, queueMicrotask.\n\nThe Loop:\n1. Execute everything in the Call Stack.\n2. If Stack is empty, check Microtask Queue and execute ALL of them.\n3. Then, pick ONE task from Callback Queue and push to Call Stack.\n4. Repeat.",
    code: "console.log('Start'); // 1. Stack\n\nsetTimeout(() => {\n  console.log('Timeout'); // 4. Callback Queue\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise'); // 3. Microtask Queue\n});\n\nconsole.log('End'); // 2. Stack\n\n// Output: Start, End, Promise, Timeout"
  },
  {
    id: 6,
    title: "Promise",
    category: "JavaScript",
    icon: <Zap className="w-5 h-5" />,
    description: "An object representing the eventual completion or failure of an asynchronous operation.",
    content: "# Deep Dive\nA Promise is in one of these states:\n- pending: initial state, neither fulfilled nor rejected.\n- fulfilled: meaning that the operation was completed successfully.\n- rejected: meaning that the operation failed.\n\nPromises solved the \"Callback Hell\" problem by allowing chaining (`.then()`) and cleaner error handling (`.catch()`).",
    code: "const myPromise = new Promise((resolve, reject) => {\n  const success = true;\n  if (success) {\n    resolve(\"Operation Successful\");\n  } else {\n    reject(\"Operation Failed\");\n  }\n});\n\nmyPromise\n  .then(res => console.log(res))\n  .catch(err => console.error(err))\n  .finally(() => console.log(\"Done\"));"
  },
  {
    id: 7,
    title: "Promise.all vs Promise.allSettled",
    category: "JavaScript",
    icon: <GitMerge className="w-5 h-5" />,
    description: "Handling multiple concurrent promises.",
    content: "# Promise.all\n- Takes an iterable of promises.\n- Short-circuit: Rejects immediately if ANY of the input promises reject.\n- Returns a single Promise that resolves to an array of results.\n- Use case: When you need *all* operations to succeed to proceed.\n\n# Promise.allSettled\n- Takes an iterable of promises.\n- Waits for all: Resolves after *all* of the given promises have either fulfilled or rejected.\n- Returns an array of objects describing the outcome of each promise.\n- Use case: When you want to know the result of every operation, regardless of success/failure.",
    code: "const p1 = Promise.resolve(3);\nconst p2 = Promise.reject('Error');\n\n// Promise.all\nPromise.all([p1, p2])\n  .then(values => console.log(values))\n  .catch(err => console.log('All failed:', err)); \n  // Output: 'All failed: Error'\n\n// Promise.allSettled\nPromise.allSettled([p1, p2])\n  .then(results => console.log(results));\n  /* Output: [\n       { status: 'fulfilled', value: 3 },\n       { status: 'rejected', reason: 'Error' }\n     ] */"
  },
  {
    id: 8,
    title: "Firebase FCM vs APN",
    category: "Mobile",
    icon: <Bell className="w-5 h-5" />,
    description: "Push notification services for Android and iOS.",
    content: "# FCM (Firebase Cloud Messaging)\n- Cross-Platform: Works on Android, iOS, and Web.\n- Google's Service: Default for Android.\n- Usage on iOS: On iOS, FCM acts as a proxy. It receives the message from your server and forwards it to APNs (Apple Push Notification service) to deliver to the device.\n\n# APNs (Apple Push Notification service)\n- iOS Exclusive: Apple's proprietary service.\n- Required for iOS: Ultimately, ALL notifications on iOS must go through APNs to reach the device.\n- Certificate Based: Requires .p8 or .p12 certificates from Apple Developer account.\n\nKey Difference: You can use APNs directly for iOS, but FCM provides a unified API for both platforms.",
    code: "// React Native Firebase Example\nimport messaging from '@react-native-firebase/messaging';\n\nasync function requestUserPermission() {\n  const authStatus = await messaging().requestPermission();\n  const enabled =\n    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||\n    authStatus === messaging.AuthorizationStatus.PROVISIONAL;\n\n  if (enabled) {\n    console.log('Authorization status:', authStatus);\n  }\n}"
  },
  {
    id: 9,
    title: "Native Side Code in React Native",
    category: "React Native",
    icon: <Smartphone className="w-5 h-5" />,
    description: "Writing Android (Java/Kotlin) and iOS (Obj-C/Swift) code.",
    content: "# Why Write Native Code?\n- React Native doesn't cover every single native API.\n- Performance intensive tasks (Image processing, complex calculations).\n- Integrating existing native SDKs.\n\n# Where it lives\n- Android: `android/app/src/main/java/com/yourname/`\n- iOS: `ios/YourProject/`\n\nYou edit `MainApplication.java` / `AppDelegate.m` to configure initialization, and create separate files for Modules and ViewManagers.",
    code: "/* iOS (Objective-C) Header */\n#import <React/RCTBridgeModule.h>\n@interface RCTCalendarModule : NSObject <RCTBridgeModule>\n@end\n\n/* iOS Implementation */\n@implementation RCTCalendarModule\nRCT_EXPORT_MODULE();\n\nRCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)\n{\n  RCTLogInfo(@\"Pretending to create an event %@ at %@\", name, location);\n}\n@end"
  },
  {
    id: 10,
    title: "Native Modules",
    category: "React Native",
    icon: <Box className="w-5 h-5" />,
    description: "The bridge between JavaScript and Native Code.",
    content: "# Concept\nA Native Module is a set of native functions that are exposed to JavaScript.\n\n# Steps to Create\n1. Create Native Class: Implement the bridge protocol (`RCTBridgeModule` on iOS, `ReactContextBaseJavaModule` on Android).\n2. Register Module: Name the module so JS can find it.\n3. Export Methods: Annotate methods to be visible to JS (`@ReactMethod` on Android, `RCT_EXPORT_METHOD` on iOS).\n4. Access in JS: Use `NativeModules` from `react-native`.",
    code: "// JavaScript Usage\nimport { NativeModules } from 'react-native';\nconst { CalendarModule } = NativeModules;\n\nconst onPress = () => {\n  CalendarModule.createCalendarEvent('Party', 'My House');\n};"
  },
  {
    id: 11,
    title: "React.memo vs useMemo vs useCallback",
    category: "React",
    icon: <RefreshCw className="w-5 h-5" />,
    description: "Optimization techniques to prevent unnecessary re-renders.",
    content: "# React.memo (HOC)\n- Target: Entire Components.\n- Purpose: Prevents a functional component from re-rendering if its props haven't changed.\n- Comparison: Shallow comparison of props by default.\n\n# useMemo (Hook)\n- Target: Computed Values / Expensive Calculations.\n- Purpose: Caches the *result* of a function. Re-calculates only when dependencies change.\n- Returns: A value.\n\n# useCallback (Hook)\n- Target: Functions.\n- Purpose: Caches the *function definition* itself. Prevents the function from being recreated on every render.\n- Returns: A function instance.\n- Best paired with: passing functions to `React.memo`ized child components.",
    code: "// React.memo\nconst Child = React.memo(({ data }) => {\n  return <div>{data}</div>;\n});\n\n// Parent\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  // useMemo: Expensive calculation\n  const expensiveValue = useMemo(() => compute(count), [count]);\n\n  // useCallback: Stable function reference\n  const handleClick = useCallback(() => {\n    console.log('Clicked');\n  }, []); // No deps, never changes\n\n  return <Child data={expensiveValue} onClick={handleClick} />;\n}"
  },
  {
    id: 12,
    title: "Scope in JavaScript",
    category: "JavaScript",
    icon: <Globe className="w-5 h-5" />,
    description: "The context in which values and expressions are visible.",
    content: "# Types of Scope\n1. Global Scope: Accessible everywhere.\n2. Function Scope: Accessible only within the function (var).\n3. Block Scope: Accessible only within the block `{}` (let, const).\n4. Module Scope: Variables in a module are scoped to that module unless exported.\n\n# Lexical Scope\nInner functions contain the scope of parent functions even if the parent function has returned (basis for Closures). The scope is determined by where the code is written, not where it is called.",
    code: "let globalVar = \"I am global\";\n\nfunction outer() {\n  let outerVar = \"I am outer\";\n  \n  if (true) {\n    let blockVar = \"I am block\";\n    var functionVar = \"I am function/global depending on strict mode\";\n    console.log(blockVar); // OK\n  }\n  \n  // console.log(blockVar); // Error\n  console.log(outerVar); // OK\n}\n\nouter();"
  },
  {
    id: 13,
    title: "TypeScript vs JavaScript",
    category: "Languages",
    icon: <FileJson className="w-5 h-5" />,
    description: "Static typing vs Dynamic typing.",
    content: "# JavaScript\n- Dynamic Typing: Types are resolved at runtime.\n- Flexible: Easy to start, harder to maintain at scale.\n- Errors: Many errors found only during execution.\n\n# TypeScript\n- Super-set: Valid JS is valid TS.\n- Static Typing: Types are checked at compile time.\n- Interfaces & Generics: Better tooling for OOP and complex data structures.\n- Compilation: Transpiles down to JavaScript.\n- Pros: Intellisense, refactoring safety, early bug detection.",
    code: "// JavaScript\nfunction add(a, b) {\n  return a + b;\n}\nadd(\"5\", 1); // \"51\" (No error)\n\n// TypeScript\nfunction add(a: number, b: number): number {\n  return a + b;\n}\nadd(\"5\", 1); // Error: Argument type '\"5\"' is not assignable to 'number'."
  },
  {
    id: 14,
    title: "Prop Drilling",
    category: "React",
    icon: <ArrowDown className="w-5 h-5" />,
    description: "Passing data through multiple levels of components unnecessarily.",
    content: "# The Problem\nWhen component A needs to pass data to component Z, but they are 5 layers apart, you must pass props through B, C, D, and E, even if they don't use the data. This makes code hard to maintain and refactor.\n\n# The Solutions\n1. Composition: \"Lift\" the component up and pass it as a child.\n2. Context API: Create a global/scoped provider to access data directly.\n3. State Management Libraries: Redux, Zustand, Recoil.",
    code: "// Problem: Prop Drilling\n<GrandParent data={data} />\nconst GrandParent = ({data}) => <Parent data={data} />\nconst Parent = ({data}) => <Child data={data} />\nconst Child = ({data}) => <div>{data}</div>\n\n// Solution: Context\nconst DataContext = createContext();\n\n<DataContext.Provider value={data}>\n  <GrandParent />\n</DataContext.Provider>\n\n// Inside Child (anywhere deep)\nconst data = useContext(DataContext);"
  },
  {
    id: 15,
    title: "Update State Without Re-rendering",
    category: "React",
    icon: <EyeOff className="w-5 h-5" />,
    description: "Using refs to hold mutable values.",
    content: "# useRef Hook\nThe `useRef` hook allows you to persist values between renders. Crucially, updating a ref does not trigger a re-render.\n\n# Use Cases\n1. Accessing DOM elements: Focus input, scroll position.\n2. Mutable variables: Tracking previous state, timers, or values that don't affect the visual output immediately.",
    code: "import { useRef } from 'react';\n\nfunction Timer() {\n  const countRef = useRef(0); // Initial value 0\n\n  const handleClick = () => {\n    countRef.current = countRef.current + 1;\n    console.log('Count is:', countRef.current);\n    // UI does NOT update here\n  };\n\n  return <button onClick={handleClick}>Click me</button>;\n}"
  },
  {
    id: 16,
    title: "Threads & Platform Specifics",
    category: "System",
    icon: <Server className="w-5 h-5" />,
    description: "Understanding the execution model of React Native.",
    content: "# Application Threads\n1. Main Thread (UI Thread): Handles Android/iOS UI rendering and user gestures. Blocking this freezes the app.\n2. JavaScript Thread: Runs the business logic and React reconciliation.\n3. Shadow Thread: Layout calculation (Yoga engine).\n4. Native Modules Thread: For specific native module operations.\n\n# Platform Specific Code\nUsing `Platform.OS` or `.ios.js` / `.android.js` extensions to run code only on specific devices.\n\n# Permissions\nHandled differently on iOS (Info.plist + runtime request) and Android (AndroidManifest.xml + runtime request for dangerous permissions).",
    code: "// Platform Specific\nimport { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  header: {\n    ...Platform.select({\n      ios: { paddingTop: 20 },\n      android: { paddingTop: 0 },\n    }),\n  },\n});\n\n// Threads logic\n// Avoid heavy calculations on UI thread\n// Offload to JS thread or C++ via JSI"
  },
  {
    id: 17,
    title: "map() vs forEach()",
    category: "JavaScript",
    icon: <List className="w-5 h-5" />,
    description: "Differences in return values and chainability.",
    content: "# map()\n- Returns: A new array.\n- Chainable: Yes, because it returns an array.\n- Use Case: Transforming data.\n\n# forEach()\n- Returns: `undefined`.\n- Chainable: No.\n- Use Case: Side effects (logging, saving to DB).",
    code: "const arr = [1, 2, 3];\n\n// map - returns new array\nconst doubled = arr.map(x => x * 2); \nconsole.log(doubled); // [2, 4, 6]\n\n// forEach - no return\narr.forEach(x => console.log(x));"
  },
  {
    id: 18,
    title: "== vs ===",
    category: "JavaScript",
    icon: <Code className="w-5 h-5" />,
    description: "Loose equality vs Strict equality.",
    content: "# == (Loose Equality)\nPerforms type coercion before comparison. e.g., `'5' == 5` is `true`.\n\n# === (Strict Equality)\nChecks both value AND type. No coercion. e.g., `'5' === 5` is `false`.\n\nBest Practice: Always use `===` to avoid unexpected bugs.",
    code: "console.log(5 == '5');  // true\nconsole.log(5 === '5'); // false\nconsole.log(null == undefined); // true\nconsole.log(null === undefined); // false"
  },
  {
    id: 19,
    title: "call, apply, and bind",
    category: "JavaScript",
    icon: <Anchor className="w-5 h-5" />,
    description: "Methods to control the `this` context.",
    content: "# call(thisArg, arg1, arg2)\nInvokes the function immediately with specific `this` and arguments provided individually.\n\n# apply(thisArg, [argsArray])\nInvokes the function immediately with specific `this` and arguments provided as an array.\n\n# bind(thisArg, arg1, arg2)\nReturns a new function with `this` permanently bound. Does not invoke immediately.",
    code: "const person = { name: 'John' };\nfunction greet(greeting, punctuation) {\n  console.log(`${greeting}, ${this.name}${punctuation}`);\n}\n\n// call\ngreet.call(person, 'Hello', '!'); // Hello, John!\n\n// apply\ngreet.apply(person, ['Hi', '?']); // Hi, John?\n\n// bind\nconst greetJohn = greet.bind(person);\ngreetJohn('Welcome', '.'); // Welcome, John."
  },
  {
    id: 20,
    title: "Frequency of Elements in Array",
    category: "Coding Challenge",
    icon: <Hash className="w-5 h-5" />,
    description: "Write a program to count how many times each element appears in an array.",
    content: "# Approach\nUse a Javascript Object or a Map to store the counts. Iterate through the array, and for each element, increment its count in the storage.\n\n# Complexity\n- Time: O(n)\n- Space: O(n)",
    code: "function getFrequency(arr) {\n  const frequency = {};\n  \n  for (const item of arr) {\n    frequency[item] = (frequency[item] || 0) + 1;\n  }\n  \n  return frequency;\n}\n\nconst nums = [1, 2, 2, 3, 3, 3, 4];\nconsole.log(getFrequency(nums));\n// Output: { '1': 1, '2': 2, '3': 3, '4': 1 }"
  },
  {
    id: 21,
    title: "Debouncing vs Throttling",
    category: "JavaScript",
    icon: <Activity className="w-5 h-5" />,
    description: "Optimizing performace by limiting function execution rate.",
    content: "# Debouncing\nEnsures a function is not called again until a certain amount of time has passed since the *last* call. Good for search inputs.\n\n# Throttling\nEnsures a function is called at most once in a specified time period. Good for scroll events.",
    code: "// Debounce\nfunction debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}\n\n// Throttle\nfunction throttle(func, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      func.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}"
  },
  {
    id: 22,
    title: "Deep Copy vs Shallow Copy",
    category: "JavaScript",
    icon: <Layers className="w-5 h-5" />,
    description: "How objects are copied in memory.",
    content: "# Shallow Copy\nCopies the object structure, but nested objects are still references to the original. \nMethods: `Object.assign()`, Spread `...`\n\n# Deep Copy\nCreates a completely independent copy of the object and all nested objects.\nMethods: `JSON.parse(JSON.stringify())`, `structuredClone()`",
    code: "const original = { a: 1, b: { c: 2 } };\n\n// Shallow Copy\nconst shallow = { ...original };\nshallow.b.c = 99;\nconsole.log(original.b.c); // 99 (Modified!)\n\n// Deep Copy\nconst deep = JSON.parse(JSON.stringify(original));\ndeep.b.c = 100;\nconsole.log(original.b.c); // 99 (Unchanged)"
  },
  {
    id: 23,
    title: "This Keyword",
    category: "JavaScript",
    icon: <Code className="w-5 h-5" />,
    description: "Understanding the context of function execution.",
    content: "The value of `this` depends on *how* the function is called:\n1. Global context: window/global.\n2. Object method: the object itself.\n3. Event handler: the element that received the event.\n4. Arrow function: lexical `this` (inherits from parent scope).",
    code: "const obj = {\n  name: 'Alice',\n  regularFn: function() { console.log(this.name) },\n  arrowFn: () => { console.log(this.name) }\n};\n\nobj.regularFn(); // Alice\nobj.arrowFn(); // undefined (window/global name)"
  },
  {
    id: 24,
    title: "Prototypal Inheritance",
    category: "JavaScript",
    icon: <GitMerge className="w-5 h-5" />,
    description: "How objects inherit properties from other objects.",
    content: "JavaScript uses prototypes. Every object has a property `__proto__` pointing to its parent. When reading a property, JS checks the object, then its prototype, then the prototype's prototype up the chain.",
    code: "const animal = { eats: true };\nconst rabbit = { jumps: true };\n\nrabbit.__proto__ = animal;\n\nconsole.log(rabbit.eats); // true (inherited)\nconsole.log(rabbit.jumps); // true (own)"
  },
  {
    id: 25,
    title: "ES6 Features",
    category: "JavaScript",
    icon: <Zap className="w-5 h-5" />,
    description: "Modern JavaScript syntax improvements.",
    content: "# Key Features\n1. Arrow Functions: Concise syntax, lexical `this`.\n2. Template Literals: `Hello ${name}`.\n3. Destructuring: `const { name } = person`.\n4. Spread/Rest: `...array`.\n5. Classes: Syntactic sugar for prototypes.\n6. Modules: `import/export`.",
    code: "// Destructuring\nconst user = { id: 1, name: 'Bob' };\nconst { name } = user;\n\n// Spread\nconst arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]"
  },
  {
    id: 26,
    title: "React Lifecycle Methods vs Hooks",
    category: "React",
    icon: <RefreshCw className="w-5 h-5" />,
    description: "Equivalent concepts in Class vs Functional components.",
    content: "# Class Components\n- `componentDidMount()`\n- `componentDidUpdate()`\n- `componentWillUnmount()`\n\n# Hooks (Functional)\n- `useEffect(() => {}, [])`: Mount\n- `useEffect(() => {})`: Update\n- `useEffect(() => { return () => {} }, [])`: Unmount cleanup",
    code: "// Class\ncomponentDidMount() {\n  console.log('Mounted');\n}\n\n// Hook\nuseEffect(() => {\n  console.log('Mounted');\n}, []);"
  },
  {
    id: 27,
    title: "useEffect Dependency Array",
    category: "React",
    icon: <EyeOff className="w-5 h-5" />,
    description: "Controlling when effects run.",
    content: "- No Array: Runs on *every* render.\n- Empty Array []: Runs *only once* on mount.\n- [prop, state]: Runs on mount AND when `prop` or `state` changes.",
    code: "useEffect(() => {\n  console.log('Count changed');\n}, [count]); // Runs only when count changes"
  },
  {
    id: 28,
    title: "Virtual DOM vs Real DOM",
    category: "React",
    icon: <Layers className="w-5 h-5" />,
    description: "How React optimizes rendering.",
    content: "# Real DOM\nUpdating the browser's DOM directly is slow and expensive (reflows/repaints).\n\n# Virtual DOM\nA lightweight copy of the DOM in memory. React compares the new Virtual DOM with the old one (Diffing) and updates only the changed parts in the Real DOM (Reconciliation).",
    code: "// React updates this VDOM object efficienty\nconst element = {\n  type: 'h1',\n  props: { children: 'Hello' }\n};"
  },
  {
    id: 29,
    title: "Redux Principles",
    category: "State Management",
    icon: <Database className="w-5 h-5" />,
    description: "Predictable state container for apps.",
    content: "# Three Principles\n1. Single Source of Truth: The state of your whole app is stored in an object tree within a single store.\n2. State is Read-Only: The only way to change the state is to emit an action.\n3. Changes are made with Pure Functions: Reducers specify how the state tree is transformed by actions.",
    code: "// Reducer\nfunction counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    default:\n      return state;\n  }\n}"
  },
  {
    id: 30,
    title: "Controlled vs Uncontrolled Components",
    category: "React",
    icon: <Layout className="w-5 h-5" />,
    description: "Handling form inputs in React.",
    content: "# Controlled\nForm data is handled by React state. Value is passed via props, changes via `onChange`. Recommended.\n\n# Uncontrolled\nForm data is handled by the DOM itself. Accessed via `ref`.",
    code: "// Controlled\n<input value={value} onChange={e => setValue(e.target.value)} />\n\n// Uncontrolled\n<input ref={inputRef} />"
  },
  {
    id: 31,
    title: "Higher Order Components (HOC)",
    category: "React",
    icon: <Layers className="w-5 h-5" />,
    description: "Pattern for reusing component logic.",
    content: "A Higher-Order Component is a function that takes a component and returns a new component, adding additional props or logic.",
    code: "function withLogger(WrappedComponent) {\n  return function(props) {\n    console.log('Component rendered');\n    return <WrappedComponent {...props} />;\n  }\n}"
  },
  {
    id: 32,
    title: "Error Boundaries",
    category: "React",
    icon: <Shield className="w-5 h-5" />,
    description: "Catching JavaScript errors in component trees.",
    content: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.",
    code: "class ErrorBoundary extends React.Component {\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n  render() {\n    if (this.state.hasError) return <h1>Something went wrong.</h1>;\n    return this.props.children;\n  }\n}"
  },
  {
    id: 33,
    title: "React Portals",
    category: "React",
    icon: <Globe className="w-5 h-5" />,
    description: "Rendering children outside the parent DOM hierarchy.",
    content: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Useful for Modals, Tooltips.",
    code: "ReactDOM.createPortal(\n  <div className=\"modal\">This is a modal</div>,\n  document.getElementById('modal-root')\n);"
  },
  {
    id: 34,
    title: "Capitalize First Letter",
    category: "Coding Challenge",
    icon: <Code className="w-5 h-5" />,
    description: "Capitalize the First Letter of Each Word in a Sentence.",
    content: "# Approach\nSplit the string into an array of words. Map over the array, capitalizing the first character and concatenating strict the rest. Finally, join them back.",
    code: "function capitalizeWords(str) {\n  return str.split(' ')\n    .map(word => \n      word.charAt(0).toUpperCase() + word.slice(1)\n    )\n    .join(' ');\n}\n\nconsole.log(capitalizeWords('hello world from js'));\n// \"Hello World From Js\""
  },
  {
    id: 35,
    title: "Reverse a String",
    category: "Coding Challenge",
    icon: <Code className="w-5 h-5" />,
    description: "Reverse a given string.",
    content: "# Approach\n1. Built-in: `split('').reverse().join('')`\n2. Loop: Iterate backwards and build new string.",
    code: "function reverseString(str) {\n  return str.split('').reverse().join('');\n}\n\nconsole.log(reverseString(\"hello\")); // \"olleh\""
  },
  {
    id: 36,
    title: "Palindrome Check",
    category: "Coding Challenge",
    icon: <Check className="w-5 h-5" />,
    description: "Check if a string reads the same forward and backward.",
    content: "# Approach\nRemove non-alphanumeric characters and convert to lowercase. Compare the string with its reversed version.",
    code: "function isPalindrome(str) {\n  const clean = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();\n  return clean === clean.split('').reverse().join('');\n}\n\nconsole.log(isPalindrome(\"A man, a plan, a canal: Panama\")); // true"
  },
  {
    id: 37,
    title: "Fibonacci Sequence",
    category: "Coding Challenge",
    icon: <Hash className="w-5 h-5" />,
    description: "Generate the nth Fibonacci number.",
    content: "# Approach\nUsing recursion or iteration. `F(n) = F(n-1) + F(n-2)`.",
    code: "function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nconsole.log(fibonacci(6)); // 8 (0,1,1,2,3,5,8)"
  },
  {
    id: 38,
    title: "Factorial Calculation",
    category: "Coding Challenge",
    icon: <Hash className="w-5 h-5" />,
    description: "Calculate n!",
    content: "# Approach\nProduct of all positive integers less than or equal to n.",
    code: "function factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // 120"
  },
  {
    id: 39,
    title: "Anagram Check",
    category: "Coding Challenge",
    icon: <Search className="w-5 h-5" />,
    description: "Check if two strings are anagrams of each other.",
    content: "# Approach\nSort both strings and compare them. If they match, they are anagrams.",
    code: "function areAnagrams(str1, str2) {\n  const s1 = str1.split('').sort().join('');\n  const s2 = str2.split('').sort().join('');\n  return s1 === s2;\n}\n\nconsole.log(areAnagrams('listen', 'silent')); // true"
  },
  {
    id: 40,
    title: "Remove Duplicates from Array",
    category: "Coding Challenge",
    icon: <List className="w-5 h-5" />,
    description: "Return array with unique values only.",
    content: "# Approach\nUse a Javascript `Set` which automatically stores unique values.",
    code: "const nums = [1, 2, 2, 3, 4, 4];\nconst unique = [...new Set(nums)];\nconsole.log(unique); // [1, 2, 3, 4]"
  },
  {
    id: 41,
    title: "Find Max/Min in Array",
    category: "Coding Challenge",
    icon: <ArrowDown className="w-5 h-5" />,
    description: "Find the largest and smallest number in an array.",
    content: "# Approach\nUse `Math.max` and `Math.min` with the spread operator.",
    code: "const nums = [5, 1, 9, 3];\nconst max = Math.max(...nums);\nconst min = Math.min(...nums);\n\nconsole.log(max, min); // 9, 1"
  },
  {
    id: 42,
    title: "RN StyleSheet vs Inline",
    category: "React Native",
    icon: <Smartphone className="w-5 h-5" />,
    description: "Why use StyleSheet.create?",
    content: "1. Performance: Styles are sent across the bridge once and referenced by ID.\n2. Validation: Validates properties at build time (sometimes).\n3. Maintainability: Separates styles from logic.",
    code: "const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24\n  }\n});"
  },
  {
    id: 43,
    title: "Image vs FastImage",
    category: "React Native",
    icon: <Smartphone className="w-5 h-5" />,
    description: "When to use react-native-fast-image.",
    content: "Standard `Image` component may have issues with caching and flickering on lists. `FastImage` handles caching better, supports priority, and preloading.",
    code: "<FastImage\n  style={{ width: 200, height: 200 }}\n  source={{\n    uri: 'https://unsplash.it/400/400',\n    priority: FastImage.priority.normal,\n  }}\n/>"
  },
  {
    id: 44,
    title: "Flexbox in React Native",
    category: "React Native",
    icon: <Layout className="w-5 h-5" />,
    description: "Layout system difference from Web.",
    content: "React Native uses Flexbox for layout. Key differences:\n- flexDirection: defaults to `column` (web is `row`).\n- flex: number (usually 0 or 1), not a shorthand string.",
    code: "<View style={{ flex: 1, flexDirection: 'row' }}>\n  <View style={{ flex: 1, backgroundColor: 'red' }} />\n  <View style={{ flex: 2, backgroundColor: 'blue' }} />\n</View>"
  },
  {
    id: 45,
    title: "Handling Gestures",
    category: "React Native",
    icon: <Activity className="w-5 h-5" />,
    description: "Responding to touch.",
    content: "Use `Pressable` for simple taps. For complex gestures (pan, pinch, swipe), use `react-native-gesture-handler` (part of new architecture compatible libraries).",
    code: "<Pressable \n  onPress={() => console.log('Pressed')}\n  style={({ pressed }) => [\n    { opacity: pressed ? 0.5 : 1.0 }\n  ]}\n>\n  <Text>Button</Text>\n</Pressable>"
  },
  {
    id: 46,
    title: "useEffect Cleanup",
    category: "React",
    icon: <RefreshCw className="w-5 h-5" />,
    description: "Preventing memory leaks.",
    content: "If your effect sets up a subscription, timer, or listener, you MUST return a cleanup function to tear it down when the component unmounts.",
    code: "useEffect(() => {\n  const timer = setInterval(() => {\n    console.log('Tick');\n  }, 1000);\n\n  // Cleanup function\n  return () => clearInterval(timer);\n}, []);"
  },
  {
    id: 47,
    title: "useReducer Hook",
    category: "React",
    icon: <Database className="w-5 h-5" />,
    description: "Alternative to useState for complex state logic.",
    content: "Similar to Redux reducer pattern. Useful when next state depends on previous state or there are multiple sub-values.",
    code: "const [state, dispatch] = useReducer(reducer, initialState);\n\n/* reducer(state, action) => newState */\ndispatch({ type: 'increment' });"
  },
  {
    id: 48,
    title: "useContext Hook",
    category: "React",
    icon: <Globe className="w-5 h-5" />,
    description: "Consuming context values.",
    content: "Accepts a context object (the value returned from `React.createContext`) and returns the current context value for that context.",
    code: "const value = useContext(MyContext);\nreturn <div>{value}</div>;"
  },
  {
    id: 49,
    title: "Count Vowels in String",
    category: "Coding Challenge",
    icon: <Code className="w-5 h-5" />,
    description: "Count the number of vowels (a, e, i, o, u) in a string.",
    content: "# Approach\nUse regex match with the global flag `gi` (global, case-insensitive) and get the length of the matches array.",
    code: "function countVowels(str) {\n  const matches = str.match(/[aeiou]/gi);\n  return matches ? matches.length : 0;\n}\n\nconsole.log(countVowels(\"JavaScript\")); // 3 (a, a, i)"
  },
  {
    id: 50,
    title: "Get Unique Characters",
    category: "Coding Challenge",
    icon: <Key className="w-5 h-5" />,
    description: "Extract unique characters from a string.",
    content: "# Approach\nSplit string -> Set (removes duplicates) -> Join back.",
    code: "function getUniqueChars(str) {\n  return [...new Set(str.split(''))].join('');\n}\n\nconsole.log(getUniqueChars(\"banana\")); // \"ban\""
  },
  {
    id: 51,
    title: "Merge Two Sorted Arrays",
    category: "Coding Challenge",
    icon: <GitMerge className="w-5 h-5" />,
    description: "Merge two sorted arrays into one sorted array.",
    content: "# Approach\nUse pointers or simply concat and sort (n log n). For O(n) perform pointer comparison.",
    code: "function mergeSorted(arr1, arr2) {\n  return [...arr1, ...arr2].sort((a,b) => a - b);\n}\n\n// Efficient O(n) pointer approach omitted for brevity\nconsole.log(mergeSorted([1,3], [2,4])); // [1,2,3,4]"
  },
  {
    id: 52,
    title: "Flatten Deeply Nested Array",
    category: "Coding Challenge",
    icon: <Layers className="w-5 h-5" />,
    description: "Convert a nested array structure into a flat array.",
    content: "# Approach\nUse `Array.prototype.flat(Infinity)`.",
    code: "const nested = [1, [2, [3, [4]]]];\nconst flat = nested.flat(Infinity);\nconsole.log(flat); // [1, 2, 3, 4]"
  }
];

// Helper icon mapping if needed, otherwise using inline 

function Anchor(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

export default function MultipleInterviews() {
  const [selectedTopicId, setSelectedTopicId] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = topics.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTopic = topics.find(t => t.id === selectedTopicId) || topics[0];
  const categories = [...new Set(filteredTopics.map(t => t.category))];

  const sidebarClasses = "fixed lg:relative z-40 h-full w-80 bg-slate-900 border-r border-slate-800 transition-transform duration-300 ease-in-out flex flex-col " + (isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0');

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden absolute top-4 left-4 z-50 p-2 bg-slate-800 rounded-md border border-slate-700"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={sidebarClasses}>
        <div className="p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Dev Interview Guide
          </h1>
          <p className="text-xs text-slate-500 mt-1">Deep dive into 52 core topics</p>

          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border-none rounded-lg py-2 pl-9 pr-4 text-sm focus:ring-1 focus:ring-blue-500 text-slate-200 placeholder-slate-500"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
          {categories.length === 0 && (
            <p className="text-sm text-center text-slate-500 mt-10">No topics found matching "{searchQuery}"</p>
          )}

          {categories.map(category => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-2">
                {category}
              </h3>
              <div className="space-y-1">
                {filteredTopics.filter(t => t.category === category).map(topic => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setSelectedTopicId(topic.id);
                      if (window.innerWidth < 1024) setIsSidebarOpen(false);
                    }}
                    className={"w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all text-left " + (selectedTopicId === topic.id ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200')}
                  >
                    <span className={"p-1 rounded shrink-0 " + (selectedTopicId === topic.id ? 'bg-blue-500/20' : 'bg-slate-800')}>
                      {topic.icon}
                    </span>
                    <span className="truncate">{topic.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto bg-slate-950 relative scrollbar-thin scrollbar-thumb-slate-700">
        <div className="max-w-4xl mx-auto p-6 lg:p-12 pb-32">

          {/* Header */}
          <div className="mb-8 mt-10 lg:mt-0">
            <div className="flex items-center space-x-2 text-blue-500 mb-2">
              <span className="p-1.5 bg-blue-500/10 rounded-md">
                {selectedTopic.icon}
              </span>
              <span className="text-sm font-medium tracking-wide uppercase">{selectedTopic.category}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">{selectedTopic.title}</h1>
            <p className="text-lg text-slate-400 leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-900/50 py-2 rounded-r-lg">
              {selectedTopic.description}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                Explanation
              </h2>
              <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-7 whitespace-pre-line">
                {selectedTopic.content}
              </div>
            </section>

            {/* Code Block */}
            <section className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">example.js</span>
                  <CopyButton text={selectedTopic.code} />
                </div>
                <div className="p-6 overflow-x-auto bg-slate-950">
                  <pre className="font-mono text-sm text-blue-300">
                    <code>{selectedTopic.code}</code>
                  </pre>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-slate-500 hover:text-white transition-colors flex items-center space-x-1"
    >
      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
      <span className="text-xs">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
