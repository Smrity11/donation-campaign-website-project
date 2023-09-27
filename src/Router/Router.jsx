import {createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import DonationsDetails from '../Component/DonationsDetails/DonationsDetails';
import Error from '../Component/Error/Error';

export const router = createBrowserRouter([
    {
        Path:"/",
        element: <Main></Main>,
        errorElement:<Error></Error> ,
        children:[
            {
            path: '/',
            element: <Home></Home>,
            loader : () => fetch('donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            }
            ,{
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'/donate/:id',
                element:<DonationsDetails></DonationsDetails>,
              
            }

        ]
    }
 ] 
);
export default router