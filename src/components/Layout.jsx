import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="container">
      <header className="bg-primary p-1">
        <nav className="navbar navbar-expand-lg h-25">
          <ul className="navbar-nav d-flex p-1">
            <li className="nav-item">
              <NavLink
                className="text-white text-uppercase fs-6 fw-semibold nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="text-white text-uppercase fs-6 fw-semibold nav-link"
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense
          fallback={
            <div className="d-flex justify-content-center p-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
