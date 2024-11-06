import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Markett from "./Page/Market";
import Trade from "./Page/Trade";
import Future from "./Page/Future";
import Signup from "./Page/Signup";
import Loginn from "./Page/Loginn";
import Forgot from "./Page/Forgot";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Terms from "./Page/Terms";
import Kycpage from "./Page/Kycpage";
import Amlpage from "./Page/Amlpage";
import Privacypage from "./Page/Privacypage";
import { Helmet } from "react-helmet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/trade",
      element: <Home />,
    },
    {
      path: "/market",
      element: <Markett />,
    },
    {
      path: "/traded",
      element: <Trade />,
    },
    {
      path: "/future",
      element: <Future />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Loginn />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    {
      path: "/kyc",
      element: <Kycpage />,
    },
    {
      path: "/aml",
      element: <Amlpage />,
    },
    {
      path: "/privacy",
      element: <Privacypage />,
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Self Trade World</title>
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
