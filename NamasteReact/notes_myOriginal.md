Got it! I will strictly preserve your original wording, only formatting headings, subheadings, and keywords (bold or underlined) while breaking long lines as needed. Let me update it accordingly.

Here's the updated and formatted version of your notes, keeping your original wording intact while adding bold formatting and splitting long lines for readability:

---

# **Class 1**

### **Browsers do not understand React code**

- React is just **JS code** behind the scenes.
- When we created an element like **h1** and console it, we got a **JS object** with **props** and **children**.
- **Render method** is responsible to:
  - Take **React element** which is an object.
  - Convert it into (HTML) tags.
  - Put it up on the **DOM**.
- **Structure**:
  - 1st is the **tag**.
  - 2nd is the **attribute object**.
  - 3rd is what we put inside (can use an array for more elements).

This is to show those who think that **React** can only be written in **JSX**,  
as in reality the base or core of React is this. JSX makes it easy when we  
have to create tags.

- **React** being a library can be used in a small portion of the app too,  
like only on the navbar or footer or a particular component.

- When we do **root.render**, it will only affect the **root div**  
(replace/overwrite), as the rest of the HTML will remain the same.

---

### **What is Emmet?**

- **Emmet** is a built-in feature of **VS Code**, so it doesn’t require any additional installation.  
- By using **shorthand and abbreviations**, **Emmet** greatly improves and speeds up your **HTML and CSS workflow**,  
  saving you the stress of having to manually type out the code in full.

Examples:  
1. We use `div.title` - that's a shorthand which will result in a `<div>` tag with the class `title`.  
2. `div>h1>p` - It will result in nested tags as `<p>` inside `<h1>`, and `<h1>` inside `<div>`.

---

### **Difference between a Library and Framework?**

- A **framework** will usually include many **libraries** to make your work easier.  
- A **library** performs specific, well-defined operations.  
- A **library** is just a collection of **class definitions**.

Both **framework** and **library** are pre-coded support programs to develop complex software applications.  
However:  
- **Libraries** target a specific functionality.  
- A **framework** tries to provide everything required to develop a complete application.

---

### **What is CDN? Why do we use it?**

- **CDN** stands for **Content Delivery Network** or **Content Distribution Network**.  
- It is a **network of interconnected servers** that speeds up webpage loading for data-heavy applications.  
- A **CDN**:
  - Caches content close to end users.  
  - Decreases **web traffic** to the web server.  
  - Reduces **bandwidth consumption**.  
  - Improves user experience for applications.

- Content delivery network: These are the websites where the **React library** has been hoisted,  
  and we are just pulling/fetching **React** from there into our project.

---

### **Why is React known as React?**

- React is a **JavaScript library** for building user interfaces, developed by **Facebook**.  
- It was originally released in **2013**.  
- The name "React" was chosen because it is meant to help developers build UIs that are:  
  - Fast.  
  - Responsive, or **“reactive”** to changes in data.

---

### **What is crossorigin in script tag?**

- The **crossorigin attribute** sets the mode of the request to an HTTP **CORS Request**.  
- Web pages often make requests to load resources on other servers.  
- A **cross-origin request** is a request for a resource (e.g., stylesheets, iframes, images, fonts, or scripts)  
  from another domain.

---

### **What is the difference between React and ReactDOM?**

- **React**: A **JavaScript library** for building user interfaces.  
- **ReactDOM**: The **JavaScript library** that allows React to interact with the **DOM**.  
  - Think of it as the **glue** between React and the DOM.

---

### **What is the difference between react.development.js and react.production.js files via CDN?**

- **Development mode**: For debugging; no compression or minification happens.  
- **Production mode**: The code is compressed and minified for performance.  
- **Performance** is faster in production mode compared to development mode.

---

### **What is async and defer?**

- **Async**: Allows your script to run as soon as it's loaded, without blocking other elements on the page.  
- **Defer**: Means your script will execute only after the page has finished loading.

- **Defer** is the best choice in most cases for **optimal page speed and user experience**.

---

# **Class 2**


## **React Notes**  

When you install a package like Parcel with a caret (^2.8.4) in your `package.json`,  
it will automatically update to newer **minor** and **patch** versions  
that are compatible with version 2.8.4.  

So, if a newer version like **2.8.8** is released, running `npm install` will  
update `package-lock.json` to this version, reflecting the latest compatible version installed.  

Your `package-lock.json` will update to reflect the current version installed, like **2.8.8**,  
while your `package.json` will still show `^2.8.4`, indicating the version range you've specified.  

This allows for **flexibility** in updating to compatible versions.  

The `dist` folder keeps the bundle of all **HTML**, **CSS**, and **JS** files together  
in both **development** and **production** (build) environments.  

---

Our `package.json` file contains **dependencies**, and each of these dependencies may also rely on additional dependencies, which in turn can have their own dependencies. This cascading relationship is referred to as **transitive dependencies**.

**Transitive dependencies** refer to the dependencies of your project's direct dependencies. These are packages that your dependencies rely on to function correctly. In other words, if **A** depends on **B**, and **B** depends on **C**, then **C** is a transitive dependency of **A**.  

**Transitive dependencies** are the dependencies of your direct dependencies. They are automatically installed and can affect your project, even though they aren’t explicitly listed in your `package.json`.

---

### **Parcel Features**  

- **Dev Build**  
- **Local Server**  
- **HMR** - Hot Module Replacement  
- **File Watching Algorithm** - written in **C++**  
  (HMR happens because of this)  
- **Caching** - Faster Builds (Each save takes less time due to  
  caching in `.parcel-cache`)  
- **Image Optimization**  
- **Minification**  
- **Bundling**  
- **Compression**  
- **Consistent Hashing**  
- **Code Splitting**  
- **Differential Bundling** - supports older browsers  
- **Diagnostics**  
- **Error Handling**  
- **HTTPS**  
- **Tree Shaking** - removes unused code  
- Different **development** and **production** bundles  

---

# **Class 3**

---

## **Package.json Overview**  

- **start**: starting the project in **dev mode**.  
- **build**: build our project in **production mode**.  

### **Installing Parcel**  

For installing, we use:  
```bash
npm i parcel
```  
If we want it to be in **dev dependencies**, use:  
```bash
npm i -D parcel
```  

### **Execution Commands**  

- **Dev mode**: `npx parcel index.html`  
- **Production mode**: `npx parcel build index.html`  

### **Shortcut Commands**  

- We can also use `npm start` directly, but it will only work for **dev mode**.  
- For build, we have to use:  
```bash
npm run build
```  
- `npm start` = `npm run start`  

---

## **React.createElement**  

`React.createElement => Object => (WHEN RENDERING THIS OBJECT ON TO THE DOM IT BECOMES) => HTML Element`  

```javascript
// React.createElement => ReactElement (JS Object) => HTML Element (render)

// Creating element using core React
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading); // object
```

React **creates the element**, but to render it to the DOM and display it in the browser, we use **ReactDOM**.  

---

## **JSX (JavaScript XML)**  

- **JSX** is a JavaScript syntax that makes it easier to create React elements.  
- JSX is **not a part of React**, as they are very different.  
- We can make a big application without JSX, but JSX makes the developer's life easier because its syntax is simpler compared to React.  

### **Key Features of JSX**  

- **JSX** is a **convention** where we merge **JS and HTML** together.  
- JSX is not HTML inside JS; it looks like HTML but is actually an **HTML-like syntax**.  
- JSX is not pure JS, as **JS engines/browsers don’t understand JSX**.  

---

### **How JSX Works**  

- JS engines understand only **ECMAScript**, not JSX.  
- JSX is **transpiled before it reaches the JS engine**, which then receives code the browser can understand.  
- The **transpiling** is done by **Parcel**, and Parcel uses **Babel** (a JS compiler and transpiler) for this.  

```plaintext
JSX => Babel transpiles it to React.createElement => ReactElement (JS Object) => HTML Element (rendered)
```

#### **Example**  

```javascript
// JSX - HTML-like or XML-like syntax
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxHeading); // ReactElement (JS Object)
```

---

## **React Components**  

### **Types of Components**  

1. **Class-Based Component** - OLD  
2. **Functional Component** - NEW  

### **Functional Components**  

- A **Functional Component** is a normal JS function that returns a piece of **JSX** or some JSX element.  

```javascript
const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>;
};

const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;
```  

Both are the same. If there is only one statement, we can avoid using `return` and curly braces.  

---

### **Component Composition**  

**What is Component Composition?**  
Composing one component into another.  

#### **Example**  

```javascript
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
```  

We can render:  
- A **React Element** inside another React Element.  
- A **React Component** inside another React Component.  
- A React Element inside a React Component.  
- A React Component inside a React Element.  

For React Elements, use `{}`.  
For React Components, use `< />`.  

---

### **JSX Security**  

JSX **sanitizes data** before executing it. If an API returns malicious data, it won’t execute because JSX ensures safe rendering.  

---

### **Additional Notes**  

- `<Title /> = <Title></Title>` (Both are the same).  
- React components can also be called like `{Title()}` because React is JavaScript, and we can call JS inside `{}`.  

--- 

# **Class 4**

---

## **Inline CSS in React**  

- **Inline CSS** in React is written as a **JS object**, so it will be inside `{}`.  
- In inline CSS, we use `{{}}` because:  
  - The **outer `{}`** is for writing JS code.  
  - The **inner `{}`** represents a JS object (similar to how `[]` is used for arrays).  

```javascript
const headingStyle = {
    color: "blue",
    fontSize: "24px",
};

const Heading = () => <h1 style={headingStyle}>Hello, React!</h1>;
```

---

## **Props (Properties)**  

- **Props** are properties that we can pass to a component.  
- As **functional components** are like JS functions, props act like normal **arguments to a function**.  
- When we pass a prop to a component, it is exactly like passing an argument to a function.  

### **How React Handles Props**  

- React takes all properties and wraps them into an **object** called `props`.  
- This `props` object is then passed to the component.

---

## **Ways to Use Props**

### **1. Directly without Destructuring**  

```javascript
const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" 
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
        </div>
    );
};
```

### **2. Destructured in Code**  

```javascript
const RestaurantCard = (props) => {
    const { resName, cuisine } = props;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" 
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
        </div>
    );
};
```

### **3. Destructured in Parameters**  

```javascript
const RestaurantCard = ({ resName, cuisine }) => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" 
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
        </div>
    );
};
```

---

## **Config-Driven UI**  

- **Config-Driven UI** is when a website’s UI is controlled by **data or config** from the backend.  
- Example: Swiggy shows different offers based on location (e.g., offers in Delhi but none in Mumbai).  
- The website remains the same, but the details change according to the data/config.  

### **Definition**  
- A **Config-Driven UI** means **controlling the UI** using data or configs sent by the backend.  

---

## **Props and Keys**  

- In props, the **left side** is the **key** and the **right side** is the **value/property**.  
- Example:  
    ```jsx
    <RestaurantCard resName="Meghna Foods" /> 
    <RestaurantCard resName="KFC" />
    ```

- If passing a single object:  
    ```jsx
    <RestaurantCard resData={resObj} />
    ```
- If passing an array of objects, use `.map`:  
    ```jsx
    resList.map((resObj) => (
        <RestaurantCard key={resObj.id} resData={resObj} />
    ));
    ```

---

## **Why Use Keys in Loops?**  

- **Keys** help React uniquely identify elements in a list.  
- Without keys, React cannot efficiently determine which items changed, were added, or removed.  

### **Example**  
If a new `RestaurantCard` is added:  
- React **renders all cards** without keys (inefficient).  
- React **renders only the new card** if unique keys are provided.  

### **Best Practices for Keys**  
1. **Unique IDs** from the backend (**Best**).  
2. Use **index as keys** only if no unique IDs are available (**Last Option**).  
3. **Never skip keys** when using `.map`.

### **Why Avoid Using Index as Keys?**  
- Using **index as keys** can lead to bugs during updates.  
- Example: Infinite scroll or reordering items can cause React to re-render incorrectly.

---


# **Class 4 Exact my words we can see later on as above one i find better will check again**

---

## **Inline CSS**  

- inline css when we give its JS object means it will be inside `{}`. and in inline we use `{{}}` like this bcoz  
  outer `{}` are bcox we writing js code so we have to use it and inner `{}` bcoz we its an object and for object  
  we use `{}` like we use `[]` for array.  
- first bracket telling that there is some piece of js code inside it and second bracket is js object.  

---

## **Props**  

### **Definition**  
props- properties that we can pass to the component.  
- as functional component is like a js function end of the day same like props are normal arguments to a function.  

- when we say we passing a prop to a component it is exactly like saying passing argument to a function.  
- react will take all the properties and wrap it inside an object and will pass it as props.  

---

### **Props use by 3 ways:**  

1. **Directly without Destructuring**  

```javascript
const RestaurantCard = (props) => {
        return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
        </div>
    )
}
```

2. **Destructured in code**  

```javascript
const RestaurantCard = (props) => {
 const {resName, cuisine} = props;
        return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
        </div>
    )
}
```

3. **Destructured in parameter already**  

```javascript
const RestaurantCard = ({resName, cuisine}) => {
        return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
        </div>
    )
}
```

---

## **Config driven UI**  

- Website driven by data/config is Config Driven UI like swiggy shows some offer at Delhi location but  
  some different offers at pune location and may be no offer for mumbai location so that all happens due to  
  data/config. As website is same but details changing as per data/configs. Website is driven by data this  
  is known as Config Driven UI.  

- **Configdriven UI** - Controlling our UI driven/using by a config/data coming from backend.  

---

### **Props Example**  

in props left side one is the key that will go to different components and right side one is property.  
for ex :  
`resName = Meghna Foods` so resName is here the key and proeprty is Meghna Foods so now when we take it as prop in other component then we will use resName.  

---

Also, if we are getting one single object we can pass it like:  
`resData={resObj}`  
But if we are getting an **array of objects**, we have to **loop** and map each object using the `map` method.  

---

## **Why Use Key While Looping?**  

while looping over an array or using `.map` **always give a key**, and key can be a **unique id**.  

### **Reason for Keys**  

- Keys help React uniquely identify elements in the DOM.  
- Without unique keys, React will re-render all components unnecessarily.  

### **Best Practice for Keys**  

1. **Unique ID** (best practice).  
2. **Index as Key** (only if no unique id is available).  
3. **Never use no keys** (unacceptable).  

--- 


# **Class 5**

---

## **Utils**  

- **Utils** stands for utilities that we use **all across the app**.  
- To organize, we create a **`utils` folder** and store common data there.  

---

## **Export and Import**  

### **Types of Export and Import**  

1. **Default Export/Import**  
    ```js
    export default Component;  
    import Component from "path";  
    ```

2. **Named Export/Import**  
    ```js
    export const Component;  
    import { Component } from "path";  
    ```  

- **Key Difference**:  
  - **Default Export**: We can export only **one thing** from a file.  
  - **Named Export**: Used when we want to export **multiple things** from the same file.  

---

## **Key React Concepts**  

1. **Functional Component**: End of the day, it is a **normal JS function**.  
2. **React Element**: End of the day, it is a **plain JS object**.  
3. **React Hook**: A **normal JS function** provided by React.  

---

## **React Hooks**  

- **Hooks** are **normal JS utility functions** provided by React.  
- **Common Hooks**:  
    1. **`useState()`**: Super-powerful state variables in React.  
    2. **`useEffect()`**: For side effects in components.  

### **`useState()` Hook**  

- Used to create **local state variables** inside functional components.  
- **Never use it outside of components.**  

- **Key Features:**  
    - Returns an **array**:  
        1. The **first element** is a local state variable.  
        2. The **second element** is a function to modify the state variable.  
    - **UI Changes**: Use **state variables** to reflect changes in the UI.  
    - **Best Practice**: Always create `useState` at the top, not inside loops or conditions.  

**Example:**

```jsx
// HTML-style variable (doesn't update the UI)
let listOfRestaurants = [];

// React State Variable
const [listOfRestaurants, setListOfRestaurants] = useState([]);
```

### **Why `useState` is Powerful?**  
- Keeps the **UI in sync** with the variable.  
- When the state variable changes, React **automatically re-renders** the component.  

---

## **React Fiber and Reconciliation**  

1. **Reconciliation Algorithm**:  
   - React 16 introduced a new algorithm for DOM updates called **Reconciliation**.  
   - React Fiber is the improved version of Reconciliation.  
   - Helps React efficiently find changes in the UI and update the DOM.  

2. **How React Handles DOM Updates**:  
   - Changes to the **UI** are handled through the **Virtual DOM**.  
   - React compares the **updated Virtual DOM** with the **previous Virtual DOM** to find the difference.  

---

## **Virtual DOM**  

- The **Virtual DOM** is an **object representation** of the **Actual DOM**. 
- **Virtual DOM** represented as an JS object and **Actual DOM** represented as Tree like structure.
- **Example:**  

  - **Actual DOM:**  
    ```html
    <div>
      <h1>
        <img />
      </h1>
    </div>
    ```

  - **Virtual DOM:**  
    ```js
    React.createElement("h1", {}, "Text");
    ```

  - The `React.createElement()` function generates a **React Element**, which is just a **JS object**.  

---

## **Diff Algorithm**  

- React uses the **Diff Algorithm** to calculate differences between the **updated Virtual DOM** and the **previous Virtual DOM**.  
- React then updates only the **necessary parts** of the Actual DOM.  

### **Why React is Fast?**  
- React does **efficient DOM manipulation** using the Virtual DOM.  
- It only updates the **changed parts**, improving performance.  

---

- **Virtual DOM**:  
  - Represents the **Actual DOM** as a **JavaScript object**.  
  - It is lightweight and optimized for comparisons and updates.  

- **Actual DOM**:  
  - Represents the document as a **tree-like structure** (DOM tree).  
  - Each element, attribute, or piece of text is a **node** in this tree.  

### Why is Virtual DOM an Object?  
- Being a **JavaScript object**, the Virtual DOM is faster to manipulate and compare than directly interacting with the 
Actual DOM (which is slower due to browser APIs).  

This separation allows React to perform efficient updates by comparing Virtual DOMs (using the **Diff Algorithm**) and 
applying only the necessary changes to the Actual DOM.

---

## **Behind the Scenes: `useState`**  

- The `useState` hook works through **array destructuring** in JS.  
- **Example:**  

    ```js
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // Equivalent to:
    const arr = useState(resList);
    const listOfRestaurants = arr[0];
    const setListOfRestaurants = arr[1];
    ```

- This is **pure JS destructuring** and shows how the `useState` hook returns its values.  


## **Is Reconciliation Algorithm, React Fiber and Diff Algorithm are they same?

The **Reconciliation Algorithm**, **React Fiber**, and **Diff Algorithm** are closely related but not the same. They serve different purposes in React, and here's how they differ:

---

### **1. Reconciliation Algorithm**  
- **Definition**: The **Reconciliation Algorithm** is the general process React uses to compare the **current Virtual DOM** and the **updated Virtual DOM** to determine the minimal number of changes needed to update the Actual DOM efficiently.  
- **Purpose**: Handles **how React updates the UI** when state or props change.  
- **Key Component**: The **Diff Algorithm** is a part of the Reconciliation process.  

---

### **2. Diff Algorithm**  
- **Definition**: The **Diff Algorithm** is a specific part of the Reconciliation process. It determines the **differences** between the previous and updated Virtual DOMs.  
- **Purpose**:  
  - Compares the two Virtual DOM  objects by traversing their hierarchical structure (conceptually like a trees node-by-node).
  - Updates only the parts of the Actual DOM that have changed.  
  - Uses heuristics (e.g., elements with the same type and key are treated as the same).  
- **Scope**: Focuses only on **finding differences** and creating a list of changes.  
- **Relation to Reconciliation**: It is the **heart** of the Reconciliation process.

---

### **3. React Fiber**  
- **Definition**: **React Fiber** is a **new implementation of the Reconciliation Algorithm** introduced in React 16.  
- **Purpose**:  
  - Breaks rendering work into small chunks called "units of work" to make React updates **interruptible**.  
  - Improves performance for large or complex applications by allowing **prioritization** of updates (e.g., animations vs. data updates).  
- **Key Features**:  
  - **Incremental Rendering**: React doesn’t block the main thread while rendering.  
  - **Prioritized Updates**: Handles updates based on their priority.  
  - **Concurrency**: Enables React to work with asynchronous rendering.  

---

### Why Call Them by Different Names?  
- **Reconciliation Algorithm**: Refers to the **overall process** React uses to update the UI.  
- **Diff Algorithm**: A **part of the Reconciliation Algorithm** that handles **finding differences**.  
- **React Fiber**: A **specific implementation** of the Reconciliation Algorithm introduced in React 16 for **better performance and flexibility**.  

Think of it this way:  
- **Reconciliation** is the process.  
- **Diff Algorithm** is a tool used in this process.  
- **React Fiber** is the modernized way React implements Reconciliation.  

---

### Analogy:  
- **Reconciliation** is like planning a trip from one city to another.  
- **Diff Algorithm** is figuring out the shortest path for the journey.  
- **React Fiber** is like upgrading to a faster, smarter car for the trip.  

By keeping these terms separate, React documentation highlights specific aspects of the rendering process, making it easier to focus on individual components of the system when debugging or optimizing.


---

# **Class 6**

---

# Class 6 Notes

## **1. Monolith Architecture**  
- Traditionally, web apps were developed using **Monolith Architecture**.  
  - Huge **big project** as it has code of **API, UI, AUTHENTICATION, DATABASE, SMS** inside the same project.  
  - Single change, like changing the color of a button, requires building and deploying the whole project.  
  - In **Monolith Architecture**, if we have one big project (e.g., a JAVA application), then we have to do everything in JAVA.

---

## **2. Microservice Architecture**  
- Different services for different jobs like **Backend service, UI service, AUTHENTICATION service, DATABASE service, SMS service**, etc.  
  - All **microservices combined together** form a big app.  
  - This is known as **Separation of Concerns** and **Single Responsibility Principle**.  
  - Each service has its own job with no interference from others.  
  - All services talk to each other, e.g., **UI talks to Backend**, **Backend talks to DATABASE**.  
  - In Microservices, we can have different tech stacks for different things:  
    - UI in **React**  
    - Backend in **JAVA**  
    - DATABASE in **Python**  
    - SMS service in **GoLang**  
  - All services run on their own specific ports, e.g.:  
    - Port `1234`: **UI**  
    - Port `1000`: **Backend**  
    - Port `3000`: **SMS**  
  - At the end, all these ports can be mapped to a **domain name**:  
    - Example:  
      - `namastereact.com`  
      - `namastereact.com/api` for API service  
      - `namastereact.com/sms` for SMS service  
      - UI can also be deployed directly on `/`.

---

## **3. Two Ways Web Apps Fetch Data from Backend**  
1. **Page Load => API Call (wait for data) => Render**  
2. **Page Load => Render UI (skeleton) => API Call (wait for data) => Re-Render**  
   - **Second approach is preferred** as it provides better UX.  
   - While waiting for data, we render a **skeleton**, so the user sees something instead of a blank screen.

---

## **4. useEffect()**  
- **useEffect** takes two arguments:  
  - A **callback function**.  
  - An **array of dependencies**.  
  ```javascript
  useEffect(() => {
      console.log("useEffect Called");
  }, []);
  ```
- **Execution Flow**:  
  - Runs after the **Component is rendered**.  
  - As soon as the render cycle finishes, the callback function is executed.  
  - Example:  
    ```javascript
    useEffect(() => {
        console.log("useEffect Called");
    }, []);
    console.log("Body rendered");
    ```
    **Output Order**:  
    1. Logs `"Body rendered"`.  
    2. Executes `useEffect` callback.

---

## **5. Fetching Data**  
- **fetch** is provided by browsers as a **superpower** of JavaScript engines.

---

## **6. CORS Policy**  
- Cannot call Swiggy's API (or similar) from localhost due to **CORS policy**.  
- CORS blocks API calls if there is an **origin mismatch** (e.g., localhost to another domain).  
- **Browser blocks the API call** in such cases.

---

## **7. Why useState in React? Why Not Normal Variables?**  
- **Normal JS Variables** do not cause re-rendering, while **useState** does.  
- Example:  
  - If a button initially shows "Login" and we want it to change to "Logout" on click:  
    - **Using a normal variable**:  
      - Console logs show the variable changed, but the UI stays as "Login."  
    - **Using useState**:  
      - Updates both the UI and the variable.  
- **Reason**:  
  - useState ensures the component re-renders, updating the UI dynamically.  
  - When a component re-renders, React identifies the difference between the **old DOM** and the **updated DOM**, then updates the changed part.

---

### **Render Explanation**  
- **Render** means triggering the component to re-execute.  
- Example:  
  ```javascript
  const Header = () => {
    let btnName = "Login";

    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                btnName = "Logout";
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  ```
- Here:  
  - **onClick** updates `btnName` to "Logout" but **doesn't re-render** the component.  
  - Hence, the UI still shows "Login."

---

# **Class 7**

## **1. useEffect**  
- **If no dependency array** → `useEffect` is called on **every render** (component render).  
- **If dependency array is empty `[]`** → `useEffect` is called **on initial/first render** (just once).  
- **If dependency array is `[btnNameReact]`** → `useEffect` is called **every time `btnNameReact` is updated**.  

---

## **2. useState**  
- **Never** use `useState`/create state variable **outside** of the component.  
- Always create the `useState` hook **at the top** inside the component.  
- **Never** create `useState` variables **inside if-else, loops, or functions**.  

---

## **3. Avoid `<a></a>` Tag for Routing**  
- **Do not use** anchor tags `<a></a>` for routing because it **reloads the page**, which is not desirable.

---

## **4. Single Page Application (SPA)**  
- **SPA** does not reload the page; it **refreshes components dynamically**.  
- That’s why React applications are called **Single Page Applications**: Components interchange dynamically instead of reloading.

---

## **5. Types of Routing in Web Apps**  

### **Client-Side Routing**  
- **No network call** is made because all components are **already loaded** into the app.  
- Since all components/pages are preloaded, routing only **loads the required component** dynamically.  
- **Used in SPA (Single Page Applications).**

### **Server-Side Routing**  
- Pages like `index.html`, `about.html`, `contact.html` exist separately on the server.  
- When you click on an anchor tag (e.g., `/about.html`), it **reloads the entire page**:  
  - **Network call** is sent to fetch `about.html`.  
  - The page reloads and renders the new content.  
- **Server-Side Routing** involves fetching pages **from the server** and reloading the UI.  
- **(Old way)**.

---

## **6. Dynamic Routing**  
- For **dynamic routing**, pass the new object in children with the difference: `/` followed by a **variable**.  
  - Example: `/resId` → `/restaurant/:resId`.  

### **Steps for Dynamic Routing**  
1. Import **`useParams`** where you want to access the dynamic variable/id.  
2. `useParams` returns an **object** with the dynamic id.  
3. Destructure the object to **access the id** and use it.  

### **Example**  
- On the main page (`Body`), all **cards** are listed.  
- When clicking a specific card, routing to a new URL with a **dynamic id** occurs:  
  - **URL**: `/restaurant/:resId`.  
- Use **`Link`** for navigation.  
- Access the dynamic id in the target page with `useParams`.  

### **Usage of Dynamic ID**  
- Use the **dynamic id** while fetching an API:  
  - The API call returns information **for that particular item** only.  

---


# **Class 8 in this my words are changed willl see later on**

---

## **1. Functional Based Component**  
- A **functional-based component** is a function that **returns JSX**.  
- At the end of the day, it is just a **normal JavaScript function**.  

---

## **2. Class-Based Component**  
- A **class-based component** is a class that extends `React.Component`.  
- It has a **`render()` method** that returns JSX.  
- At the end of the day, it is just a **normal JavaScript class**.

---

### **Difference between Functional and Class-Based Components**  
- A **class-based component** has a **`render()` method** which:  
  - Returns JSX, and  
  - That JSX is converted into **HTML** and rendered onto the web page.  

#### **Accessing Props in Class-Based Components**  
- **Using this.props**:  
  - Example: `this.props.name` or `this.props.location`.  
- **Using destructuring**:  
  ```javascript
  const { name, location } = this.props;
  ```

---

## **3. Rendering Functional Components**  
- Rendering a **functional component** means:  
  - **Loading/mounting** that component, or  
  - **Invoking/calling** the functional component.

---

### **Rendering Class-Based Components**  
- Loading a **class-based component** creates an **instance** of that class.  
- **Constructor is called** during instance creation.  

#### **Why Constructor is Important**  
- It is the best place to:  
  - Receive **props**, and  
  - Create **state variables**.  
- **State** is a **big object** where you can define multiple state variables.

---

## **4. NEVER UPDATE STATE VARIABLES DIRECTLY**  

- **Avoid this**:  
  ```javascript
  this.state.count = this.state.count + 1;
  ```  
- **Use `this.setState()` instead**:  
  ```javascript
  this.setState({ count: this.state.count + 1 });
  ```

### **Updating Multiple State Variables**  
- Pass multiple updates in the **same `this.setState()` call**:  
  ```javascript
  this.setState({ count1: 10, count2: 20 });
  ```  
- React only updates the specified variables, leaving others untouched.

---

## **5. React Lifecycle: Mounting**  

### **What is Mounting?**  
- **Mounting** means **loading** a component onto the DOM.  
- **Steps**:  
  1. **Constructor is called.**  
  2. **Render method is called.**  
  3. **ComponentDidMount is called.**

---

### **Key Notes on Class-Based Components**  
1. Use the `class` keyword to define a class-based component.  
2. Extend `React.Component` or use `{ Component }` from `react`.  
   ```javascript
   import { Component } from "react";
   class MyComponent extends Component { }
   ```

---

### **Parent-Child Lifecycle**  
- **Order of execution for Parent and Child components**:  
  1. **Parent Constructor**  
  2. **Parent Render**  
  3. **Child Constructor**  
  4. **Child Render**  
  5. **Child ComponentDidMount**  
  6. **Parent ComponentDidMount**

---

### **React Optimizations with Batching**  
- React batches the **render phase** (constructor + render) of all children components.  
- Once the **render phase** is complete, the **commit phase** (`componentDidMount`) begins for all children.

---

## **6. Updating Lifecycle**  

### **Triggering Updates**  
- Updates are triggered when `this.setState()` is called.  

---

### **Steps in Updating Cycle**  
1. **Render method** is called again with the updated state.  
2. React updates the **DOM** with new values.  
3. **ComponentDidUpdate** is called after the DOM is updated.

---

## **7. Mounting, Updating, and Unmounting Cycle**  

```javascript
// MOUNTING:
Constructor (dummy data)  
Render (dummy data)  
<Component with dummy data>  
ComponentDidMount (API call)  

// UPDATING:
this.setState  
Render (API data)  
<Component with updated data>  
ComponentDidUpdate  

// UNMOUNTING:
ComponentWillUnmount  
```

---

### **Unmounting Lifecycle**  
- **Unmounting** occurs when a component is **removed from the DOM**.  
- The `componentWillUnmount` method is called for cleanup tasks (e.g., clearing intervals).

---

## **8. Avoid Comparing Lifecycle Methods with Functional Components**  
- Lifecycle methods like `componentDidMount` and `componentDidUpdate` should not be directly compared to hooks in **functional components**.

---

## **9. Cleanup on Page Navigation**  
- In **Single Page Applications (SPA)**, when navigating between pages:  
  - Clear resources like `setInterval` using `clearInterval`.  
  - In functional components, cleanup using the **return function** in `useEffect`.  

---

# **Class 8**

---

## **1. Functional Based Component**  
- **Functional Based Component** is a function that **returns some piece of JSX** and, at the end of the day, is a **normal JS Function**.

---

## **2. Class Based Component**  
- **Class Based Component** is a class that extends `React.Component` and has a **render method**, which **returns some piece of JSX**, and at the end of the day, is a **normal JS Class**.

- The **major difference** between Class and Functional Based Components is that **Class Based Component** has a **render method**, which **returns some piece of JSX**, and that JSX will be converted into **HTML** and rendered onto the **web page**.

  - For accessing **props**, we use:  
    - `this.props.name` or `this.props.location`.  
    - Or, destructure them:  
      ```javascript
      const { name, location } = this.props;
      ```

---

## **3. Rendering a Functional Component**  
- Rendering a **Functional Component** means it **loads that Component**, or **mounts that Functional Component**, or **calls/invokes that Functional Component**.

---

## **4. Rendering a Class Based Component**  
- Loading a **Class Based Component** on the web page means we are **creating an instance** of that **Class**.  
- Whenever we **create an instance of a Class**, the **constructor** is called.  
- The **constructor** is the best place to **receive props** and **create state variables**, and the **entire state** is a **big object**, inside which we can create multiple state variables.

---

## **5. NEVER UPDATE STATE VARIABLES DIRECTLY**  

- Example of what **not to do**:  
  ```javascript
  this.state.count = this.state.count + 1;
  ```

- Use **`this.setState()`** to update state variables:  
  ```javascript
  this.setState({ count: this.state.count + 1 });
  ```

- If we want to change **states of multiple state variables**, we do so in the **same `this.setState({})` object**.  
  - For example:  
    ```javascript
    this.setState({ var1: value1, var2: value2 });
    ```  
  - React will only update these two variables and **won't touch the values of other variables**.

---

## **6. Lifecycle**

### **Mounting means Loading**

- When a **Class Based Component** loads, a **new instance of the class** is created.  
- First, the **constructor** is called, followed by the **render method**.

---

### **Parent and Child Lifecycle**  
- If we have a **Class Based Component** and inside that, we are rendering another **Class Based Component**, the lifecycle order is:  
  - Parent **constructor** and **render method** are called first.  
  - Then the child **constructor** and **render method** are called.  
  - After mounting on the **DOM**, the **componentDidMount()** of the **Child Component** is called first, followed by the **Parent Component**.

#### **Use of componentDidMount**
- It is used to **make API calls** because:  
  - We don't want to wait for data to return from the API.  
  - Instead, we **render the component first** and then **fill data after the API call**.

---

### **Multiple Children Components**  
- If there are multiple children components, React **batches the render phase** of all children.  
- **Order of execution**:  
  - **Parent Constructor**  
  - **Parent Render**  
  - **First Child Constructor and Render**  
  - **Second Child Constructor and Render**  
  - **DOM Updated in a Single Batch**  
  - **First Child ComponentDidMount**  
  - **Second Child ComponentDidMount**  
  - **Parent ComponentDidMount**

---

### **Mounting Lifecycle Overview**
```javascript
// MOUNTING:
Constructor (dummy data)  
Render (dummy data)  
<Component with dummy data>  
ComponentDidMount (API call)  

// UPDATING:
this.setState  
Render (API data)  
<Component with updated data>  
ComponentDidUpdate  

// UNMOUNTING:
ComponentWillUnmount  
```

---

## **7. Updating Lifecycle**

- The **updating phase** starts when `this.setState()` is called.  
- **Steps**:  
  - `this.setState` updates the state variable.  
  - The **render method** is called again with updated data.  
  - React updates the **DOM** with the new data.  
  - After DOM updates, **componentDidUpdate** is called.

---

## **8. Unmounting**

- **Unmounting** means the component is **removed from the DOM**.  
- The **componentWillUnmount** method is called before unmounting.  

---

## **9. Avoid Comparing Lifecycle with Functional Components**  
- React lifecycle methods should **not** be compared directly to Functional Component behavior.

---

## **10. Cleanup on Page Navigation**

- React is a **Single Page Application (SPA)**.  
- When navigating between pages:  
  - Clear resources like `setInterval` using **clearInterval()**.  
  - For Functional Components, **return a cleanup function** inside `useEffect`.  

---
