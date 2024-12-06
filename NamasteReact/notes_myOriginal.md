Got it! I will strictly preserve your original wording, only formatting headings, subheadings, and keywords (bold or underlined) while breaking long lines as needed. Let me update it accordingly.

Here's the updated and formatted version of your notes, keeping your original wording intact while adding bold formatting and splitting long lines for readability:

---

# **Class 1: React Introduction**

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

Let me know if you need further modifications!