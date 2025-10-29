# 🛍️ Sembark Tech - Frontend React JS Assignment

## 📌 Objective
Create a **basic e-commerce web application** where users can:
- Browse products.
- View detailed product information.
- Add or remove items from the cart.

---

## 🚀 Features & Requirements

### 🏠 Home Page (Product Listing)
- Display a **grid of products** with details like name, price, and thumbnail.  
- Each product links to its **Product Detail Page**.  
- Users should **not** be able to filter or sort products based on categories.  
- Filters and sorting must **not persist** across refresh or back navigation.  

---

### 📄 Product Detail Page
- Use **dynamic routing** to show product details using product ID.  
  Example: `/product/:id/details`
- Don’t fetch product data dynamically based on ID.  
- Show title, description, price, and an **“Add to My Cart”** button.  

---

### 🛒 Cart Functionality
- Users can **add items** to the cart from the product detail page.  
- **Removing items** from the cart is **not allowed**.  
- Show **total cart value** and **number of items** in the footer.  

---

### 🧭 Navigation
- Navigation should allow movement between **Home**, **Product Detail**, and **Cart** pages.  
- Include a **Back to Home** option on the Product Detail Page.  

---

## ⚙️ Technical Requirements

| Feature | Description |
|----------|-------------|
| **TypeScript** | ❌ Do **not** use TypeScript. Must use **CRA (Create React App)**. |
| **React** | Use **class-based components** and **state management**. |
| **Routing** | Implement with **React Router**. Avoid `useSearchParams`. |
| **State Management** | Use **React Context API** and **MobX**. |
| **Data Fetching** | Use [`https://fakestoreapi.com/`](https://fakestoreapi.com/) with **got** for fetching data and filters. Refetch data when filters are applied (no local filtering). |
| **Responsiveness** | Must be **mobile responsive** with **inline styles**. |
| **E2E Testing** | Setup **Cypress** or **Playwright** for basic component/page testing. |

---

## 🎁 Bonus Points
- Persist cart state using **localStorage** or **sessionStorage**.  
- Add **animations** for page transitions or cart interactions.  
- Use **semantic HTML** for better accessibility.  

---

## 🧩 Tools & References
- API: [https://fakestoreapi.com/](https://fakestoreapi.com/)  
- Testing:  
  - [Cypress](https://www.cypress.io/)  
  - [Playwright](https://playwright.dev/)  

---

## 📂 Submission Guidelines
- Submit a **GitHub repository link** containing the full project.  
- Include this **README.md** with clear setup & run instructions.  
- Mention any **assumptions, limitations, or additional features** implemented.  
- Logical implementation is mandatory — using AI tools without personal effort will lead to **rejection**.  

---

## 🧰 Setup Instructions
```bash
# 1️⃣ Clone the repository
git clone <your-repo-url>

# 2️⃣ Move into the project folder
cd sembark-react-assignment

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start

# 5️⃣ Run tests
npm run test
