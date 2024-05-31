import RefHook from "../RefHook";
import Dashboard from "../dashboard";
import Parent from "../memo/Parent";
import Product from "../product";
import StyleSample from "../style/StyleSample";

export const privateRoutes: { path: string; element: JSX.Element }[] = [
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/products/*',
        element: <Product />,
    },
    {
        path: '/memo',
        element: <Parent />,
    },
    {
        path: '/ref',
        element: <RefHook />,
    },
    {
        path: '/style',
        element: <StyleSample />,
    }
];