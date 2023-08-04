import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/error/ErrorPage';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProductDetail from './pages/product/ProductDetail';
import Product from './pages/product/Product';
import Blog from './pages/blog/Blog';
import BlogLayout from './layouts/BlogLayout';
import Products from './pages/product/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: "",
            element: <Products />,
          },
          {
            path: ":productCode",
            element: <ProductDetail />,
          },
        ]
      }
    ]
  },
  {
    path: "/blog",
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Blog />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
