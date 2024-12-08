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