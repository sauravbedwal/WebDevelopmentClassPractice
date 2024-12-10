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
