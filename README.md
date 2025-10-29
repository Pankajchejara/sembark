# 🛍️ Sembark Tech - Frontend React JS Assignment

🌐 **Live Demo:** [https://sembark.vercel.app/](https://sembark.vercel.app/)

---

## 📌 Objective
Create a **basic e-commerce web application** where users can:
- Browse products.
- View detailed product information.
- Add or remove items from the cart.

---

## 🚀 Features & Requirements

### 🏠 Home Page (Product Listing)
- Display a **grid of products** showing name, price, and thumbnail.  
- Each product links to its **Product Detail Page**.  
- Users can **filter** or **sort** products based on categories.  
- Filters and sorting preferences **persist across refresh**.

---

### 📄 Product Detail Page
- Use **dynamic routing** to display product details via product ID.  
  Example: `/product/:id`  
- Fetch product data dynamically from the API.  
- Show title, description, price, and an **“Add to My Cart”** button.  

---

### 🛒 Cart Functionality
- Users can **add items** to the cart from the product detail page.  
- **Remove items** from the cart.  
- **Increase or decrease** item quantities in the cart.  
- Cart state **persists using localStorage**.  

---

### 🧭 Navigation
- Navigate easily between **Home**, **Product Detail**, and **Cart** pages.  
- Include a **Back** button on the Product Detail Page.  

---

## ⚙️ Technical Requirements

| Feature | Description |
|----------|-------------|
| **TypeScript** | Full project built using TypeScript for type safety. |
| **React** | Component-based structure with modern hooks. |
| **Routing** | Implemented using **React Router v6**. |
| **State Management** | Uses **React Context API** and **MobX**. |
| **Data Fetching** | Products fetched from [`https://fakestoreapi.com/`](https://fakestoreapi.com/). |
| **Responsive Design** | Fully mobile-friendly layout using Tailwind CSS. |
| **E2E Testing** | Configured with **Cypress** for component and page testing. |

---

## 🎁 Bonus Features
- Cart data **persists via localStorage** even after refresh.  
- Added **smooth animations** for page transitions and cart actions.  
- Clean and **responsive UI** design.  

---

## 🧩 Tools & References
- **API:** [Fake Store API](https://fakestoreapi.com/)  
- **Testing:** [Cypress](https://www.cypress.io/)  
- **Hosting:** [Vercel](https://vercel.com/)  

---

## 🧰 Setup Instructions

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Pankajchejara/sembark.git

# 2️⃣ Move into the project folder
cd sembark

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev

# 5️⃣ Run Cypress E2E tests (keep the local server running)
npm run test:e2e