import Dashboard from "../dashboard";
import Product from "../product";

export const privateRoutes: { path: string; element: JSX.Element }[] = [
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/products/*',
        element: <Product />,
    },
];