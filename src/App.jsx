
import { ToastContainer } from 'react-toastify';

import './App.scss'
import Meta from './assets/components/meta/Meta'
import Auth from './pages/Auth/Auth'
const App = () => {
  return (
    <div>


      <Meta title="Intagram"/>
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
theme="light"
/>
      <Auth/>


    </div>
  )
}

export default App