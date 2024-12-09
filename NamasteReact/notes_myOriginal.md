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
