Got it! I'll edit your notes to improve readability by bolding keywords, headings, and subheadings, while breaking long lines into smaller ones to avoid horizontal scrolling. Let me format it for you.

Here is your improved and formatted Markdown file with bolded keywords and headings, and long lines split for readability:

---

# **Class 1: React Introduction**

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