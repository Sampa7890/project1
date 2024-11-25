import { Link } from "react-router-dom";

export const menuItem = [
    {
      title: "Menu",
      submenu: [
        {
          title: <Link to='/Veg'>VEG</Link>,
        },
        {
          title: <Link to='/Nonveg'>NONVEG</Link>,
        },
        {
            title: <Link to='/'>Other Items</Link>,
            submenu: [
                {
                    title: <Link to='/Drinks'>DRINKS</Link>,
                },
                {
                    title: <Link to='/Dessert'>DESSERTS</Link>,
                },
                {
                    title: <Link to='/Snacks'>SNACKS</Link>,
                },            
            ],
        },
      ],
    },
    
];