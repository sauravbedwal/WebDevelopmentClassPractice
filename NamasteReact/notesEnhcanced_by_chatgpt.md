Got it! I'll edit your notes to improve readability by bolding keywords, headings, and subheadings, while breaking long lines into smaller ones to avoid horizontal scrolling. Let me format it for you.

Here is your improved and formatted Markdown file with bolded keywords and headings, and long lines split for readability:

---

# **Class 1**

### **Browsers Do Not Understand React Code**

- **React** is just **JavaScript (JS) code** behind the scenes.
- When we create an element like `<h1>` and log it to the console, we get a **JS object** with **props** and **children**.
- The **render method** is responsible for:
  - Taking a **React element** (an object).
  - Converting it into **HTML tags**.
  - Placing it on the **DOM**.
- **React element structure:**
  - 1st: The **tag**.
  - 2nd: The **attribute object**.
  - 3rd: Content (can also include arrays for more elements).

This demonstrates that **React** is not limited to **JSX**.  
- The **core of React** relies on **JavaScript**, but **JSX** simplifies the process when creating tags.  

### **React Can Be Used for Small Parts of an App**

- **React** is a **library**, so it can be used in small portions of an application, e.g., a navbar or footer.
- Using `root.render()` affects only the `root` **div**.  
  - The rest of the HTML remains unchanged.

---

### **What is Emmet?**

- **Emmet** is a **built-in feature** of **VS Code** that requires no installation.
- It **improves** and **speeds up** HTML and CSS workflows using **shorthand and abbreviations**.
  - Example 1: `div.title` results in `<div class="title"></div>`.
  - Example 2: `div>h1>p` results in:
    ```html
    <div>
      <h1>
        <p></p>
      </h1>
    </div>
    ```

---

### **Difference Between a Library and a Framework**

- A **library** performs **specific, well-defined operations** and is a collection of **class definitions**.
- A **framework** includes many libraries and provides everything needed to build an app.
- **Key difference**:  
  - **Libraries** target **specific functionalities**.  
  - **Frameworks** provide **comprehensive tools** for developing complete applications.

---

### **What is a CDN? Why Do We Use It?**

- **CDN** stands for **Content Delivery Network** or **Content Distribution Network**.
- It is a network of **interconnected servers** that:
  - **Caches content** closer to users.
  - Speeds up webpage loading, especially for data-heavy apps.
  - Reduces **web traffic** and **bandwidth consumption**.
- React libraries are hosted on CDNs, allowing us to fetch them into projects.

---

### **Why is React Called React?**

- **React** is a **JavaScript library** developed by Facebook in 2013 for building UIs.
- It is called **React** because it helps developers create **responsive** (or **reactive**) interfaces by reacting to **data changes**.

---

### **What is `crossorigin` in Script Tags?**

- The **`crossorigin` attribute** sets the mode of the request for an HTTP **CORS Request**.
- It allows **resources** (like stylesheets, images, or scripts) to be loaded from other domains.

---

### **Difference Between React and ReactDOM**

- **React**: A **JavaScript library** for building UIs.
- **ReactDOM**: Connects **React** to the **DOM**, enabling it to render UI components on the web.

---

### **Difference Between `react.development.js` and `react.production.js`**

- **Development mode**: Includes tools for debugging; not optimized for performance.
- **Production mode**: **Compressed** and **minified** for better performance.

---

### **What are `async` and `defer`?**

- **`async`**: Runs the script **as soon as it’s loaded**, without blocking other elements.
- **`defer`**: Executes the script **only after the page has finished loading**.
- **Best choice**: Use `defer` for **optimal performance**.

---

Let me know if this meets your expectations or if you'd like further adjustments!


Here's an improved version of your notes with some rephrasing for clarity and structure while maintaining the original meaning. I've also enhanced the formatting for better readability and flow:

---

# **Class 2**


## **React Notes**  

When you install a package like **Parcel** with a caret (`^2.8.4`) in your `package.json`,  
it allows the package to automatically update to newer **minor** and **patch** versions  
that are compatible with version **2.8.4**.  

For example, if a newer version like **2.8.8** is released, running `npm install`  
will update your `package-lock.json` to reflect this version. The latest compatible version  
will be installed, while your `package.json` will still show `^2.8.4` to indicate  
the specified version range.  

This approach ensures **flexibility** in updates while maintaining compatibility.  

The `dist` folder bundles all **HTML**, **CSS**, and **JS** files together for both  
**development** and **production** environments, ensuring easy deployment.  

---

Our `package.json` file contains **dependencies**, and each of these dependencies may also rely on additional dependencies, which in turn can have their own dependencies. This cascading relationship is referred to as **transitive dependencies**.

**Transitive dependencies** refer to the dependencies of your project's direct dependencies. These are packages that your dependencies rely on to function correctly. In other words, if **A** depends on **B**, and **B** depends on **C**, then **C** is a transitive dependency of **A**.  

**Transitive dependencies** are the dependencies of your direct dependencies. They are automatically installed and can affect your project, even though they aren’t explicitly listed in your `package.json`.

---

### **Parcel Features**  

1. **Dev Build**: Enables fast builds during development.  
2. **Local Server**: Simplifies local testing and preview.  
3. **HMR (Hot Module Replacement)**: Automatically updates modules in the browser  
   without requiring a full page reload, enabled by a **File Watching Algorithm**  
   written in **C++**.  
4. **Caching**: Speeds up builds by caching files in `.parcel-cache`.  
5. **Image Optimization**: Compresses images for better performance.  
6. **Minification**: Reduces file sizes by removing unnecessary code.  
7. **Bundling**: Combines multiple files into optimized bundles.  
8. **Compression**: Shrinks files for faster loading.  
9. **Consistent Hashing**: Ensures efficient browser caching by providing unique hashes.  
10. **Code Splitting**: Divides the code into smaller, lazy-loaded chunks.  
11. **Differential Bundling**: Supports both modern and older browsers by creating  
    separate bundles.  
12. **Diagnostics**: Provides insights to debug errors efficiently.  
13. **Error Handling**: Simplifies the identification and resolution of build errors.  
14. **HTTPS**: Supports secure communication during development.  
15. **Tree Shaking**: Removes unused code to optimize the final bundle.  
16. Different **development** and **production** bundles: Tailors the build  
    for the respective environments.  

---

### **Key Notes**  

- Always keep your `package.json` flexible with version ranges to ensure smooth updates.  
- Use Parcel's features to optimize performance and simplify development workflows.  
- The `dist` folder is crucial for bundling files, ensuring your app is ready for deployment.  

---


Here is your content formatted with **bolded** and **underlined** keywords, headings, and subheadings, while breaking long lines into shorter ones to avoid horizontal scrolling in GitHub markdown:  

---

## **Class 3**  

### **Package.json Overview**  

- **start**: Starts the project in **development mode**.  
- **build**: Builds the project in **production mode**.  

To install Parcel, use:  
```bash
npm i parcel
```  

To add it as a **dev dependency**, use:  
```bash
npm i -D parcel
```  

For **execution**, use:  
- **Development mode**: `npx parcel index.html`  
- **Production mode**: `npx parcel build index.html`  

For a **shortcut**, you can use:  
- **Development**: `npm start` (same as `npm run start`)  
- **Build**: `npm run build`  

---

### **React.createElement**  

`React.createElement` creates a **ReactElement** (JS Object),  
which is rendered to the **DOM** as an **HTML Element**.  

Example:  
```javascript
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading); // outputs an object
```

---

### **JSX (JavaScript XML)**  

- **JSX** is a **JavaScript syntax** that makes it easier to create React elements.  
- JSX is **not a part of React**; it’s a separate convention.  
- Applications can be built without JSX, but it simplifies development with  
  its **HTML-like syntax**.  

#### **Key Points About JSX**  

- JSX merges **JS** and **HTML** together.  
- JSX **looks like HTML** but it’s not actual HTML. As is actually a **syntax** that gets transpiled.  
- Browsers and JS engines don’t understand JSX directly.  
- JSX is transpiled to **React.createElement** by **Babel** (via Parcel).  
- **Babel** is a JS compiler/transpiler that converts JSX into browser-understandable code.  

**Workflow**:  
```plaintext
JSX => Babel transpiles it to React.createElement => ReactElement (JS Object) => HTML Element (rendered)
```  

**Example**:  
```javascript
// JSX
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxHeading); // outputs a React element (JS object)
```

---

### **React Components**  

- **Class-Based Components**: Older approach.  
- **Functional Components**: Modern and preferred approach.  

A **Functional Component** is a regular JS function that returns  
a **React Element** (JSX).  

**Example Functional Component**:  
```javascript
const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>;
};
```  

Or, with a single statement:  
```javascript
const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;
```  

#### **Important Note**:  
If there are multiple statements, wrap them in a `<div>` or React Fragments (`<> </>`).  

---

### **Component Composition**  

**Definition**:  
Composing one component into another.  

**Example**:  
```javascript
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
```  

#### **React Elements vs Components**  
- React components can contain other **components** or **elements**.  
- React elements can contain other **elements** or **components**.  
- Use `{}` for **React Elements** and `< />` for **React Components**.  

**Example**:  
```javascript
<Title /> = <Title></Title>  
{Title()} // calling a React Component as a JS function  
```

---

### **JSX Security**  

- JSX **sanitizes data** before execution, preventing malicious code injection.  
- React components and elements are protected by this mechanism.  

---

### **Key Notes**  

- JSX is **HTML-like syntax** but **not actual HTML**.  
- JSX is transpiled by **Babel** (via Parcel) into `React.createElement` calls.  
- Functional Components are the modern way to build components in React.  

---


## **Class 4**   

---

## **Inline CSS**  

- Inline CSS in React is written as a **JS object**, meaning it will be enclosed inside `{}`.  
- When using inline CSS, we write it as `{{}}`:  
  - Outer `{}`: Indicates that we are writing **JavaScript code**.  
  - Inner `{}`: Represents the **JS object**.  

- **Example:**  
```jsx
<div style={{ color: "red", fontSize: "20px" }}>Hello, World!</div>
```  

---

## **Props**  

### **Definition**  
- **Props** (short for properties) are used to pass data to components.  
- Since functional components are just JS functions, **props work like arguments to a function**.  

### **How React Handles Props**  
- React takes all the properties passed to a component, wraps them in an **object**, and passes that object as `props` to the component.  

### **Three Ways to Use Props**  

1. **Directly without Destructuring**  

```jsx
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

2. **Destructured Inside the Function Body**  

```jsx
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

3. **Destructured Directly in Parameters**  

```jsx
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

- A **Config-Driven UI** is when the UI is determined by external **data** or **configurations**.  
- Example:  
  - Swiggy shows different offers based on the user's location. The same app interface changes dynamically based on backend data.  

### **Key Points**  
- Config-driven UIs make the application flexible and reusable.  
- UI updates are controlled by **backend data** instead of modifying the frontend.  

---

## **Using Keys in Loops**  

- When rendering a list of components (e.g., using `.map`), always provide a **unique key** for each item.  

### **Why Use Keys?**  
1. Keys help React **uniquely identify** elements in the DOM.  
2. Without unique keys, React might re-render **all elements**, leading to poor performance.  
3. If new elements are added to the list, React can **identify changes** using the key.  

### **Best Practices for Keys**  
1. Always use a **unique ID** (best practice).  
2. Use **index as a key** only as a last resort when no unique identifier is available.  
3. Never skip adding keys.

**Example:**  

```jsx
const restaurants = [
    { id: 1, name: "KFC" },
    { id: 2, name: "Meghna Foods" },
];

restaurants.map((restaurant) => (
    <RestaurantCard key={restaurant.id} resName={restaurant.name} />
));
```

---

## **Additional Clarifications**  

### **JSX vs React.createElement**  

- **JSX**:  
  - A syntax extension that looks like HTML but is not HTML.  
  - **Transpiled** to `React.createElement` before being understood by the JS engine.  

- **React.createElement**:  
  - A function that creates **React elements** (JS objects).  
  - These elements are then rendered into actual **HTML elements**.  

**Comparison:**  

```jsx
// Using React.createElement
const heading = React.createElement("h1", { id: "title" }, "Hello, World!");

// Using JSX (easier to read and write)
const heading = <h1 id="title">Hello, World!</h1>;
```

### **Why JSX?**  
- JSX simplifies the syntax for creating React elements.  
- It ensures **data sanitization**, protecting against malicious scripts.

---

## **Class 5**

Here’s the improved and slightly redefined version of your notes to enhance clarity and add meaningful context while maintaining the structure and tone you prefer.  

---

## **Utils**  

- **Utils** stands for **utilities**—functions or data used **across the app**.  
- To keep code organized, a **`utils` folder** is created, where common utilities are stored for **reusability**.  

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

### **Key Differences**:  
- **Default Export**:  
  - Allows exporting **only one thing** per file.  
  - Simpler syntax for importing.  

- **Named Export**:  
  - Used when we need to export **multiple things** from the same file.  
  - Requires **curly braces** for importing specific items.  

---

## **Key React Concepts**  

1. **Functional Component**:  
   - Essentially a **JavaScript function** that takes props and returns JSX.  

2. **React Element**:  
   - A **plain JavaScript object** that represents a DOM node or a component.  

3. **React Hook**:  
   - **Utility functions** provided by React to add state and lifecycle methods in functional components.  

---

## **React Hooks**  

- **Hooks** are **JavaScript utility functions** provided by React to enhance component functionality.  

### **Common Hooks**:  

1. **`useState()`**:  
   - Used to create and manage **local state variables** within functional components.  
   - React re-renders components whenever the state changes.  

2. **`useEffect()`**:  
   - Executes side effects like fetching data or interacting with the DOM.  

### **How `useState` Works?**  

- **Returns an Array**:  
    - **First Element**: The current state value.  
    - **Second Element**: A function to update the state value.  

- **Best Practices**:  
    - Always define `useState` at the **top level** of the component.  
    - Avoid using it inside loops or conditional blocks.  

**Example:**  

```jsx
// Regular JavaScript variable (doesn't update UI)
let listOfRestaurants = [];

// React State Variable (updates UI on state change)
const [listOfRestaurants, setListOfRestaurants] = useState([]);
```

---

## **React Fiber and Reconciliation**  

1. **Reconciliation Algorithm**:  
   - A **React 16 improvement** for DOM updates.  
   - Ensures UI changes are handled efficiently by **React Fiber** (a virtual DOM diffing algorithm).  

2. **How React Updates the DOM**:  
   - Changes are applied to the **Virtual DOM** first.  
   - React compares the **updated Virtual DOM** to the **previous Virtual DOM**.  
   - Only the necessary changes are applied to the **Actual DOM**.  

---

## **Virtual DOM**  

- The **Virtual DOM** is an **object-based representation** of the **Actual DOM**.  

### **Example:**  

- **Actual DOM:**  
    ```html
    <div>
      <h1>
        <img />
      </h1>
    </div>
    ```

- **Virtual DOM Representation:**  
    ```js
    React.createElement("div", {}, [
        React.createElement("h1", {}, React.createElement("img", {})),
    ]);
    ```

---

## **Diff Algorithm**  

- React uses the **Diff Algorithm** to calculate differences between:  
    - The **previous Virtual DOM**.  
    - The **updated Virtual DOM**.  

- Only the **changed parts** of the Actual DOM are updated.  

---

## **Why is React Fast?**  

- React's speed comes from **efficient DOM manipulation**:  
    - Uses the **Virtual DOM** to track changes.  
    - Updates only what is necessary instead of re-rendering the entire page.  

---

## **Behind the Scenes: `useState`**  

- **How `useState` Works Internally:**  
    - It's based on **array destructuring** in JavaScript.  

**Example:**  

```js
const [listOfRestaurants, setListOfRestaurants] = useState(resList);

// Equivalent JavaScript breakdown:
const arr = useState(resList);
const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];
```

- This demonstrates how React's `useState` is built using standard JavaScript features.  

---

### **Added Enhancements**:  
- **Defined Virtual DOM:** Clarified its purpose and relationship with Actual DOM.  
- **Explained React Fiber:** Highlighted its importance in efficient DOM manipulation.  
- **Best Practices:** Added recommendations to ensure clean code (e.g., `useState` placement).  

---

# **Class 6**

## **1. Monolith Architecture**  
- Traditionally, web apps were developed using **Monolith Architecture**:  
  - A **huge project** containing all code for **API, UI, Authentication, Database, SMS**, etc., in the same repository.  
  - Even a single change, like updating a button's color, requires **building and deploying** the entire project.  
  - It enforces a single tech stack (e.g., a Java application must handle everything in Java).

---

## **2. Microservice Architecture**  
- Separates applications into **independent services** for specific jobs:  
  - Backend, UI, Authentication, Database, SMS, Email Notifications, etc.  
- **Key Features**:  
  - Promotes **Separation of Concerns** and **Single Responsibility Principle**.  
  - Services communicate with each other (e.g., UI → Backend, Backend → Database).  
  - Each service can use **different tech stacks**:  
    - **React** for UI, **Java** for Backend, **Python** for Database, **GoLang** for SMS services, etc.  
  - Services run on **separate ports**:  
    - E.g., Port `1234` for UI, Port `1000` for Backend, Port `3000` for SMS.  
  - A **domain name** maps these ports:  
    - Example:  
      - `namastereact.com` for UI.  
      - `namastereact.com/api` for Backend.  
      - `namastereact.com/sms` for SMS services.  

---

## **3. Data Fetching from Backend**  
Two common approaches:  
1. **Page Load → API Call → Render**  
2. **Page Load → Render Skeleton → API Call → Re-Render**  

- **Preferred Approach**: Render skeleton first, providing a better **User Experience (UX)**.  
  - Users see a partially loaded page (skeleton) while waiting for data.

---

## **4. useEffect()**  
- **useEffect** takes two arguments:  
  1. A **callback function**.  
  2. An **array of dependencies**.  

Example:  
```javascript
useEffect(() => {
    console.log("useEffect Called");
}, []);
```  

- **Execution Flow**:  
  - Called **after the component renders**.  
  - If there's a `console.log` after `useEffect`, the logs will execute in this order:  
    ```javascript
    useEffect(() => {
        console.log("useEffect Called");
    }, []);
    console.log("Body rendered");
    ```  
    **Output Order**:  
    1. `"Body rendered"` (component render completes).  
    2. `"useEffect Called"` (useEffect callback executes).  

---

## **5. Fetch API**  
- **fetch** is provided by browsers to retrieve data.  
- Example:  
  ```javascript
  fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data));
  ```

---

## **6. CORS Policy**  
- Calling APIs like Swiggy's from **localhost** is blocked due to **CORS (Cross-Origin Resource Sharing) Policy**.  
  - **Reason**: Browsers block API calls between **different origins** for security.  

---

## **7. Why useState in React? Why Not Normal Variables?**  
- **Normal Variables** do not trigger UI updates; **useState** does.  
- Example:  
  - A "Login" button changes to "Logout" on click.  
    - Using a **normal variable**: The console updates, but the UI remains "Login."  
    - Using **useState**: The button updates dynamically to "Logout."  

### **Render Explanation**  
- **Render**: Re-executing a component.  
- React's re-render updates only the **difference between the old and new DOM**.  

Example:  
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
```

Here:  
- The `btnName` variable updates in the console but doesn't trigger a re-render.  
- To update the UI dynamically, use **useState**:  
  ```javascript
  const [btnName, setBtnName] = useState("Login");

  <button onClick={() => setBtnName("Logout")}>{btnName}</button>;
  ```

---

# **Class 7**

---

## **1. useEffect**  
- **If no dependency array** → `useEffect` is called **on every render** (component render).  
- **If dependency array is empty `[]`** → `useEffect` is called **only once** (on initial/first render).  
- **If dependency array contains variables `[btnNameReact]`** → `useEffect` is triggered **every time `btnNameReact` is updated**.  

---

## **2. useState**  
- **Never use** `useState` or create a state variable **outside** of the component.  
- Always declare the `useState` hook **at the top** within the component.  
- **Do not place** `useState` inside:  
  - **If-else blocks**  
  - **Loops**  
  - **Functions**.  

> React hooks must always follow the **"Rules of Hooks"**, which enforce consistent behavior.  

---

## **3. Avoid `<a></a>` Tag for Routing**  
- Avoid using anchor tags (`<a></a>`) for routing because it **reloads the entire page**.  
- Instead, use **`Link`** from libraries like **React Router** for **client-side navigation**.

---

## **4. Single Page Application (SPA)**  
- **SPA** applications **do not reload the entire page**.  
- Instead, components **refresh dynamically**.  
- React achieves this by rendering only the relevant components without full-page reloads.  

> This is why React apps are called **Single Page Applications**.  

---

## **5. Types of Routing in Web Apps**  

### **Client-Side Routing**  
- **No network call** is made because all the components/pages are **already loaded** into the app.  
- Routing happens **locally**:  
  - The app **loads the required component dynamically**.  
  - This method is **fast** and improves user experience (UX).  
- **Used in SPA**.

---

### **Server-Side Routing**  
- **Separate HTML files** (e.g., `index.html`, `about.html`, `contact.html`) are served.  
- Clicking an anchor tag (e.g., `/about.html`) triggers:  
  1. A **network call** to fetch `about.html`.  
  2. The **page reloads completely**.  
- This method is **slower** and was used traditionally.  
- **(Old way of routing)**.

---

## **6. Dynamic Routing**  
- Dynamic Routing allows **passing dynamic parameters** in the URL.  
- Example: `/restaurant/:resId`.  
- **`useParams`** is used to **access the dynamic id**.  

### **Steps for Dynamic Routing**  
1. **Define dynamic routes** using `/:variable` syntax (e.g., `/restaurant/:resId`).  
2. Import **`useParams`** in the target component where the variable/id is needed.  
3. Use `useParams` to **extract the dynamic id** as an object.  
4. Destructure and use the dynamic id, e.g., for **API calls** to fetch specific data.

---

### **How Dynamic Routing Works**  
- On the **main page** (e.g., `Body`), multiple cards are displayed.  
- Clicking on a specific card **navigates** to a new URL with the **dynamic id**:  
   - Example: `/restaurant/1234`.  
- Use **`Link`** for navigation:  
   ```jsx
   <Link to={`/restaurant/${resId}`}>Go to Restaurant</Link>
   ```
- On the new page:  
   - Use `useParams` to access the **dynamic id**.  
   - Example:  
   ```jsx
   import { useParams } from "react-router-dom";  
   const { resId } = useParams();  
   console.log(resId); // 1234  
   ```

- Use this dynamic id for API calls to **fetch specific details** of the restaurant/item.  

---

## **Additional Clarification**  
- **Client-Side Routing** dynamically replaces components without full reloads.  
- **Dynamic Routing** enhances this by enabling pages to load **data dynamically** based on URL parameters.  

---

# **Class 8**

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

Here's your content formatted into markdown with proper headings, bold keywords, and wrapped lines for better readability on GitHub. 

---

# Class 9 Notes

### 1. **Single Responsibility Principle**
- **Definition:** If we have a function, class, or any single identity of code, it should have a single responsibility.  
   - Example: The **Body Component** is a function. Each component has a single responsibility. For instance, the **RestaurantMenu** component's responsibility is to display the restaurant menu.  
   - **Best Practice:**  
     Each component should have a **single responsibility**. Avoid doing too many things in a single component; instead, break it down into smaller components.  

---

### 2. **Why Use Custom Hooks or Functions?**
- **Advantages:**
  - **Modularity:** Break down the code into small modules.
  - **Reusability:** Code becomes reusable.  
  - **Maintainability:** Easier to maintain the code.  
  - **Testability:** Individual components or hooks can be tested in isolation.  

- **Example:**  
  - If we have different components (e.g., a **Restaurant Card**) as single units, we can write test cases specifically for this card.  
  - If a bug exists in this component, the test will catch it.  
  - Without modularity, debugging in large interlinked components becomes harder.  
  - **Custom Hook Example:**  
    - For a **RestaurantMenu** component, creating a custom hook `useRestaurantMenu` makes it more testable.  
    - Bugs in fetching menu logic can be tested in the hook, and issues with displaying data can be tested in the **RestaurantMenu** component.

---

### 3. **What Are Hooks?**
- **Definition:**  
  Hooks are **normal JS functions** with special **superpowers** provided by React.  
  They act like **utility functions** in React.

---

### 4. **Lazy Loading**
- **Parcel's Role:**  
  Parcel is a **bundler** that performs tasks like:  
  - **Dev Build**  
  - **Minification**  
  - **Bundling**  
  - **Compression**  
  - **Hot Module Replacement (HMR)**  

- **Why Bundling Matters:**  
  - Bundlers take all files and merge them into **one JS file**.  
  - However, bundling everything into one file can make the app slow if the file size is too large.  

- **Solution:**  
  - Instead of bundling everything together, we create **smaller bundles**.  
  - This process is called **chunking**, **code splitting**, **dynamic bundling**, or **lazy loading**.  

- **Example:**  
  Logical separation of bundles:  
  - A bundle for flights, one for hotels, one for trains, and so on.  
  - Each bundle contains the necessary code for its respective feature.  

- **Advantages of Lazy Loading:**  
  - When the app loads, it doesn't load **all code**.  
  - Code for features (like grocery) is loaded **only when required**.  
  - This improves performance and is called **on-demand loading**.  

- **Steps to Implement Lazy Loading:**  
  - Use `lazy()` from the React library:  
    ```javascript
    const Grocery = lazy(() => import("./components/Grocery"));
    ```  
  - This creates a **separate bundle** for the Grocery component.  
  - **Main bundle** does not contain code for Grocery.  

- **React Suspense:**  
  - Lazy loading may cause rendering suspension if the required component code is not available.  
  - To handle this, use the **Suspense** component:  
    ```javascript
    <Suspense fallback={<div>Loading...</div>}>
      <Grocery />
    </Suspense>
    ```  
  - **Fallback Prop:** Use `fallback` to display content (e.g., loading spinner) until the lazy-loaded component is ready.  

---

Let me know if any further modifications are required! 😊

---

# **Class 10**

---

## **1. CSS in React**

React supports multiple ways of styling components.

### **Common Styling Methods**

1. **Normal CSS**

   * Traditional `.css` files
   * Imported inside components.

2. **SCSS / SASS**

   * CSS preprocessors
   * Provide features like:

     * variables
     * nesting
     * mixins.

3. **Styled Components**

   * A **CSS-in-JS library**.
   * Styles are written **inside JavaScript**.

4. **Component Libraries**

Popular UI libraries include:

* **Bootstrap**
* **Material UI**
* **Chakra UI**
* **Ant Design**

These provide **ready-made components** like:

* Buttons
* Forms
* Modals
* Tables

5. **Tailwind CSS**

Tailwind is a **utility-first CSS framework**.

Example:

```html
<div class="bg-red-500 text-white p-4">
  Hello
</div>
```

Instead of writing CSS files, we directly use **utility classes**.

---

## **2. PostCSS Configuration**

When using **Tailwind with Parcel**, we need to configure **PostCSS**.

### **Why PostCSS is Needed**

Tailwind works using **PostCSS plugins**.

So we create a configuration file:

```
.postcssrc
```

Example:

```json
{
  "plugins": {
    "tailwindcss": {},
    "autoprefixer": {}
  }
}
```

This tells **Parcel**:

* Use **TailwindCSS**
* Process CSS using **PostCSS**

---

## **3. Tailwind Optimization**

Tailwind contains **thousands of utility classes**.

If all of them were included in production builds, the CSS file would become **very large**.

### **How Tailwind Solves This**

Tailwind performs **Tree Shaking**.

Meaning:

* It scans your **project files**
* Finds **only the classes you used**
* Generates CSS **only for those classes**

Example:

If you only use:

```
bg-red-500
text-white
p-4
```

Then **only these styles are included in the final CSS bundle**.

### **Benefits**

* Smaller bundle size
* Faster loading
* Better performance

---

# **Class 11**

---

# **1. Higher Order Component (HOC)**

### **Definition**

A **Higher Order Component** is a **function that takes a component and returns a new enhanced component**.

```
HOC = Function(Component) → Enhanced Component
```

### **Purpose**

HOCs are used to:

* **Reuse component logic**
* **Add extra functionality**
* **Avoid code duplication**

---

### **Example**

```javascript
const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
```

Now the component will render with a **Promoted label**.

---

# **2. React Application Layers**

A React application mainly consists of **two layers**.

### **1. UI Layer**

Responsible for:

* Rendering **JSX**
* Displaying **data**

The UI layer is **static by itself**.

---

### **2. Data Layer**

Responsible for managing **application data**.

It includes:

* **State**
* **Props**
* **Local variables**
* **API data**

---

### **Important Concept**

The **UI Layer is powered by the Data Layer**.

Meaning:

```
Data changes → UI automatically updates
```

---

# **3. Accordion Functionality**

We created an **Accordion UI**.

Example categories:

* Recommended
* Newly Added

Clicking a category **shows items**.

Clicking again **hides items**.

---

### **Problem**

Initially:

* If we open **Recommended**
* Then open **Newly Added**

Both stay open.

But we want:

```
Only ONE accordion open at a time
```

---

### **Solution: Lift State Up**

Earlier:

```
RestaurantCategory → controls its own state
```

Now:

```
RestaurantMenu (Parent)
controls
RestaurantCategory (Child)
```

So the **parent decides which accordion is open**.

---

# **4. Controlled vs Uncontrolled Components**

### **Uncontrolled Component**

When a component **manages its own state**.

Example:

```
RestaurantCategory controls show/hide
```

---

### **Controlled Component**

When the **parent controls the state**.

Example:

```
RestaurantMenu decides
which category should open
```

---

### **Key Idea**

```
Parent controls child behaviour
```

This makes **state management predictable**.

---

# **5. Prop Drilling**

React follows **One-Way Data Flow**.

```
Parent → Child → GrandChild
```

Example:

```
RestaurantMenu
   ↓
RestaurantCategory
   ↓
ItemList
```

---

### **Problem**

Sometimes data is passed through **many components** even though they don't need it.

Example:

```
Component A → B → C → D
```

But only **D uses the data**.

Components **B and C just pass it**.

This is called **Prop Drilling**.

---

### **Solution**

React provides:

* **Context API**
* **Redux**
* **Zustand**

To avoid prop drilling.

---

# **6. Context Provider**

Context allows us to **share data globally** without prop drilling.

---

### **Example**

```javascript
<UserContext.Provider value={{ loggedInUser: userName }}>
  <App />
</UserContext.Provider>
```

Now **all components inside App** can access this value.

---

### **Nested Providers**

Example:

```javascript
<UserContext.Provider value={{ loggedInUser: userName }}>
  <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
    <Header />
  </UserContext.Provider>
</UserContext.Provider>
```

Result:

```
Header → Elon Musk
Other components → userName
```

---

# **Class 12**

---

# **1. Redux**

Redux is a **state management library**.

It is used in **large-scale applications** to manage **global state**.

Important:

```
Redux is NOT part of React
```

They are **separate libraries**.

---

### **Alternative State Libraries**

Examples:

* **Zustand**
* **Recoil**
* **MobX**

But **Redux is the most popular**.

---

# **2. Redux Libraries**

Redux uses two main libraries:

### **React-Redux**

Acts as a **bridge between React and Redux**.

Provides hooks like:

```
useSelector()
useDispatch()
```

---

### **Redux Toolkit**

Modern way of writing Redux.

Benefits:

* Less boilerplate
* Simpler setup
* Built-in best practices

---

# **3. Redux Store**

The **Redux Store** is a **central JavaScript object**.

It stores the **entire application state**.

```
Single Store
Multiple Slices
```

---

### **Slices**

Slices divide the store into **logical parts**.

Examples:

```
cartSlice
userSlice
themeSlice
```

Example:

```
cartSlice → cart items
userSlice → logged-in user
themeSlice → dark/light mode
```

---

# **4. Writing Data to Redux Store**

Components **cannot directly modify the store**.

Instead, we follow this flow:

```
Component
   ↓
Dispatch Action
   ↓
Reducer
   ↓
Redux Store Updated
```

---

### **Example Flow**

```
User clicks "Add Item"
↓
dispatch(addItem())
↓
Reducer updates cartSlice
↓
Store updates
```

---

# **5. Reading Data from Redux Store**

To read data from the store, we use **Selectors**.

Example:

```javascript
const cartItems = useSelector((store) => store.cart.items);
```

This **subscribes the component to the store**.

Meaning:

```
Store updates → Component re-renders
```

---

# **6. Setting Up Redux**

### **Step 1: Create Store**

```javascript
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {},
});

export default appStore;
```

---

### **Step 2: Provide Store**

```javascript
import { Provider } from "react-redux";

<Provider store={appStore}>
  <App />
</Provider>;
```

---

### **Step 3: Create Slice**

```javascript
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {},
});
```

---

### **Step 4: Add Reducers**

Reducers contain **actions**.

Example:

```javascript
reducers: {
  addItem: (state, action) => {},
  removeItem: (state, action) => {},
  clearCart: (state) => {}
}
```