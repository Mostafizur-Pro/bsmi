import MainLayout from '@/components/layouts/MainLayout'
import LoginPage from '@/components/pages/auth/user/login/Login'
import AboutUsPage from '@/components/pages/publicPage/about/International'
import ContactPage from '@/components/pages/publicPage/contact/ContactPage'
import DocumentationPage from '@/components/pages/publicPage/documents/DocumentationPage'
import EventsPage from '@/components/pages/publicPage/eventResult/EventsPage'
import ResultsPage from '@/components/pages/publicPage/eventResult/ResultsPage'
import Home from '@/components/pages/publicPage/home/Home'
import GalleryPage from '@/components/pages/publicPage/Media/GalleryPage'
import VideosPage from '@/components/pages/publicPage/Media/VideosPage'
import Organizations from '@/components/pages/publicPage/members/Organizations'
// import SingleProduct from '@/components/pages/publicPage/singleProduct/singleProduct'

const PublicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUsPage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
      },
      {
        path: '/result',
        element: <ResultsPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/member_organizations',
        element: <Organizations />,
      },
      {
        path: '/programs',
        element: <DocumentationPage />,
      },
      {
        path: '/videos',
        element: <VideosPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      // {
      //   path: '/product/:id',
      //   element: <SingleProduct />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/api/v1/products/${params.id}`),
      // },

     
    ],
  },
]

export default PublicRoutes
