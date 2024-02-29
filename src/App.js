
import './App.css'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Body from './components/Body';

import store from './utils/store';
import { Provider } from 'react-redux'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import WatchVideo from './components/WatchVideo';

const appRouter = createBrowserRouter([
  {
  path : "/",
  element : <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchVideo/>
    }

  ]
}

])
function App() {
  return (
    <Provider store={store}>
    <div className=" ">
    <Header />
    <RouterProvider router={appRouter}/>
 </div>
 </Provider>
  );
}

export default App;
