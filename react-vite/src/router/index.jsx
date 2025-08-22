import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import HomePage from '../components/HomePage/HomePage';
import ReviewsPage from '../components/ReviewsPage/reviewspage';
import ItineraryPage from '../components/ItineraryPage/itinerarypage';


function ErrorBoundary() {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>We encountered an unexpected error. Please try refreshing the page.</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <h1>Plan Your Dream Vacation!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/ReviewsPage",
        element: <ReviewsPage />
      },
      {
        path: "/ItineraryPage",
        element: <ItineraryPage />
      }
      // {
      //   path: "stock/:symbol",
      //   element: <div>Stock page for symbol</div>,
      // },
    ],
  },
]);
