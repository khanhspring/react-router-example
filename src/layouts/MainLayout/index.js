import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <header>
        <Link to="/product">Sản phẩm</Link>
        <Link to="/users">Người dùng</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>
      <div className="container">
        <aside>Sidebar</aside>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  )
}