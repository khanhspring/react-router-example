import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="blog-layout">
      <header>
        <Link to="/contact">Trang chủ</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}