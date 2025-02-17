// import React from 'react'
// import Navbar from './components/Navbar'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Dashboard from "./pages/Dashboard";
// import Assessments from "./pages/Assessments"
// import Calendar from "./pages/Calendar"
// import Blog from "./pages/Blog"
// import Store from "./pages/Store"
// import News from "./pages/News"
// import Classrooms from './pages/Classrooms';
// import Profile from './pages/Profile';

// import MyAccount from './pages/MyAccount';
// import MySettings from './pages/MySettings';

// import PageNotFound from "./pages/PageNotFound"

// const App = () => {
// 	return (
// 		<div>
// 			<BrowserRouter>
// 					<Navbar/>
// 					<Routes>
// 							<Route path='/' element={<Dashboard/>}/>
// 							<Route path='/assessments' element={<Assessments/>}/>
// 							<Route path='/calendar' element={<Calendar/>}/>
// 							<Route path='/classrooms' element={<Classrooms/>}/>
// 							<Route path='/blog' element={<Blog/>}/>
// 							<Route path='/store' element={<Store/>}/>
// 							<Route path='/news' element={<News/>}/>

// 							<Route path='/profile' element={<Profile/>} />
// 								<Route path='/profile/myaccount' element={<MyAccount/>} />
// 								<Route path='/profile/mysettings' element={<MySettings/>} />

// 							<Route path='*' element={<PageNotFound/>}/>

// 					</Routes>
// 			</BrowserRouter>
// 		</div>
// 	)
// }

// export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./CRUDcomponents/Home";
import Create from './CRUDcomponents/Create';
import Edit from './CRUDcomponents/Edit';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
	<div>
		<BrowserRouter>
		<ToastContainer></ToastContainer>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path="/create" element={<Create/>} />
				<Route path='/edit/:id' element={<Edit/>} />
			</Routes>
		</BrowserRouter>
	</div>
  )
}

export default App