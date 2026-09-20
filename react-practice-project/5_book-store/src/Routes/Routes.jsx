import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
import ListBooks from "../pages/ListBooks/ListBooks";
import ReadBook from "../pages/ReadBook/ReadBook";
import BookDetails from "../pages/BookDetails/BookDetails";

const promissData = fetch("/booksData.json").then(res => res.json());

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Loader/>}>
                    <Home promissData={promissData}></Home>
                </Suspense>
            },
            {
                path: "/listbooks",
                Component: ListBooks
            },
            {
                path: "/readpages",
                Component: ReadBook
            },
            {
                path: "/bookdetails/:id",
                loader: () => fetch(`/booksData.json`),
                Component: BookDetails
            }
        ]
    },
]);