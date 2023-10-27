import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Errorpage from "../Error/Errorpage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import "../../public/donation.json";
import PaiChart from "../Pages/Statistics/PaiChart";

const MyCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("donation.josn"),
      },
      {
        path: "/statistics",
        element: <PaiChart></PaiChart>,
      },
      {
        path: "/donation/:id",
        element: <Donation></Donation>,
        loader: () => fetch("donation.josn"),
      },
    ],
  },
]);

export default MyCreatedRouter;
