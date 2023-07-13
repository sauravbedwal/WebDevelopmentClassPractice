import { Link, Outlet } from "react-router-dom";

export const Products = () => {
    return (
        <>
        <div>
            <input type="search" placeholder="Search Products" />
            <nav>
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
        </div>
        {/* If we're at the following paths :
        /products          -> <Outlet /> is <FeaturedProducts /> (index route)
        /products/feature  -> <Outlet /> is <FeaturedProducts />
        /products/new      -> <Outlet /> is <NewProducts />
         */}
        <Outlet />
        </>
    );
};