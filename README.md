# 🛍️ ShopEase — React E-commerce Application

ShopEase is a responsive e-commerce web application built with React. It allows users to browse products, view product details, manage a shopping cart, and register or log in to their accounts.

The application uses the Fake Store API to fetch product information and React Context API to manage shared application state.

## ✨ Features

- **User Registration** — Register with a name, email, and password.
- **User Login** — Validate login credentials against registered users.
- **Protected Routes** — Restrict access to the main application until login.
- **Product Listing** — Fetch and display products from the Fake Store API.
- **Product Details** — View individual product information.
- **Shopping Cart** — Add products to the cart.
- **Quantity Management** — Increase or decrease product quantities.
- **Remove Products** — Remove individual products from the cart.
- **Toast Notifications** — Display success and error messages.
- **Responsive UI** — Build the interface with Tailwind CSS.
- **Form Validation** — Validate registration and login forms using React Hook Form.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript (ES6+) | Application logic |
| React Router | Navigation and routing |
| Context API | Global state management |
| Axios | Fetching product data from APIs |
| Tailwind CSS | Styling and responsive layouts |
| React Hook Form | Form handling and validation |
| React Toastify | Notifications |
| Lucide React | Icons |
| Local Storage | Persisting registered and logged-in user data |
| Fake Store API | Product data source |
| Vite | Development server and build tool |

## 🖥️ Application Pages

### 1. Login Page
- Enter email and password.
- Validate credentials against registered users.
- Navigate to the main application after successful login.

### 2. Registration Page
- Register with name, email, and password.
- Validate required fields and password length.
- Save registered user data in Local Storage.

### 3. Home Page
- Display products fetched from the Fake Store API.
- View product images, titles, categories, and prices.
- Add products to the shopping cart.
- Navigate to individual product detail pages.

### 4. Product Details Page
- Display the selected product's image, title, category, description, and price.
- Fetch product details using the product ID from the URL.

### 5. Shopping Cart
- View added products.
- Increase or decrease product quantities.
- Remove products from the cart.

## 🔌 API Integration

This project uses the Fake Store API to retrieve product information.

**Get all products:**

`https://fakestoreapi.com/products`

**Get a single product:**

`https://fakestoreapi.com/products/{id}`

Axios is used to make HTTP requests to these endpoints.

API documentation: https://fakestoreapi.com/

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Replace `YOUR_REPOSITORY_URL` with your GitHub repository URL.

### 2. Navigate to the project folder

```bash
cd your-project-folder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

`http://localhost:5173`

## 📂 Project Structure

```text
src/
├── components/
│   ├── Carddata.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── SingalCard.jsx
├── context/
│   ├── Authcontext.jsx
│   ├── MyContext.jsx
│   └── Protectrouted.jsx
├── Layout/
│   ├── Auth.jsx
│   └── Main.jsx
├── page/
│   ├── About.jsx
│   ├── Card.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── routes/
│   └── Approute.jsx
├── App.jsx
├── main.jsx
└── index.css
```

*Note: The structure above is based on the components and files used in the project. Adjust filenames if your actual folder structure differs.*

## 🧠 Key Learning Outcomes

Building ShopEase helped me practice:

- Creating reusable React components.
- Managing global state with Context API.
- Implementing nested and protected routes.
- Fetching API data with Axios and `useEffect`.
- Managing shopping cart operations.
- Handling forms and validation.
- Using Local Storage.
- Creating responsive interfaces with Tailwind CSS.
- Displaying notifications with React Toastify.

## 🔮 Future Improvements

- Persist cart data in Local Storage.
- Add product search, filtering, and sorting.
- Add a wishlist feature.
- Calculate cart subtotal and total price.
- Improve authentication with a backend.
- Add a checkout flow and order management.
- Deploy the application for public access.

## 👨‍💻 Author

**Naresh Kumar Jena**

- GitHub: [Nareshjena2005](https://github.com/Nareshjena2005)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub!