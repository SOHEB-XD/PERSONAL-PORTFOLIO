# **🪐 Digital Voyager Portfolio**

A high-performance, immersive personal portfolio website built with **React** and **Three.js**. featuring a "Liquid Chrome" aesthetic, procedural 3D background, and smooth motion interactions.

## **✨ Features**

* **Immersive 3D Background:** A procedurally generated "Mechanical Atom" scene using Three.js (no external 3D models required).  
* **Liquid Chrome Theme:** A sleek, monochrome aesthetic with high-gloss metallic elements.  
* **Scroll Animations:** Elements fade and slide into view using a custom Intersection Observer hook.  
* **Custom Cursor:** A lag-free, magnetic cursor that blends with the background.  
* **Responsive Design:** Fully adaptive layout for mobile, tablet, and desktop using Tailwind CSS.  
* **Performance:** Optimized rendering loop and lightweight DOM structure.

## **🛠️ Tech Stack**

* **Core:** React 18  
* **Styling:** Tailwind CSS  
* **3D Graphics:** Three.js  
* **Build Tool:** Vite

## **🚀 Getting Started**

Follow these steps to run the project locally on your machine.

### **Prerequisites**

* Node.js (v16 or higher) installed.

### **Installation**

1. **Create a new Vite project:**  
   npm create vite@latest my-portfolio \-- \--template react  
   cd my-portfolio

2. **Install Dependencies:**  
   npm install three  
   npm install \-D tailwindcss postcss autoprefixer

3. **Initialize Tailwind CSS:**  
   npx tailwindcss init \-p

4. Configure Tailwind:  
   Update tailwind.config.js to look like this:  
   /\*\* @type {import('tailwindcss').Config} \*/  
   export default {  
     content: \[  
       "./index.html",  
       "./src/\*\*/\*.{js,ts,jsx,tsx}",  
     \],  
     theme: {  
       extend: {},  
     },  
     plugins: \[\],  
   }

5. Setup CSS:  
   Replace the contents of src/index.css with:  
   @tailwind base;  
   @tailwind components;  
   @tailwind utilities;

   body {  
       background-color: \#000;  
       overflow-x: hidden;  
   }

6. **Add the Application Code:**  
   * Delete the default content in src/App.jsx.  
   * Paste the code from the generated **Portfolio** file into src/App.jsx.  
7. **Run Development Server:**  
   npm run dev

   Open the local link (usually http://localhost:5173) in your browser.

## **📂 Project Structure**

If you decide to split the single file (recommended for larger projects), organize it like this:

src/  
├── components/  
│   ├── layout/  
│   │   ├── Navbar.jsx  
│   │   └── Footer.jsx  
│   ├── sections/  
│   │   ├── Hero.jsx  
│   │   ├── Skills.jsx  
│   │   ├── Projects.jsx  
│   │   └── Education.jsx  
│   ├── three/  
│   │   └── CrystalScene.jsx  \<-- The 3D Code  
│   └── ui/  
│       ├── CustomCursor.jsx  
│       ├── ScrollReveal.jsx  
│       └── Icons.jsx  
├── App.jsx  
└── main.jsx

## **🎨 Customization**

* **Colors:** Modified in Tailwind classes (e.g., text-cyan-500, bg-black).  
* **3D Object:** Modify the CrystalScene component. You can change geometry (Torus, Sphere, Icosahedron) or materials (MeshPhysicalMaterial) to change the look of the floating object.  
* **Data:** Update the arrays in Projects, Skills, and Education components to reflect your own data.

Live: https://sohebportfolio.online/
