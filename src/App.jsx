import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/dashboard' element={<AdminLayout />}>
				<Route index element={<Dashboard />} />
				<Route path='profile' element={<Profile />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
