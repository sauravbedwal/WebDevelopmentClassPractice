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
