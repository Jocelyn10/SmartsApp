import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/ui/Layout/Layout";
import LoadingScreen from "./components/pages/LoadingScreen/LoadingScreen";

import "./components/common/variables/color.css";

const Home = lazy(() => import("./components/pages/Home/Home"));
const Login = lazy(() => import("./components/pages/Login/Login"));
const Register = lazy(() => import("./components/pages/Register/Register"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingScreen />}>
				<Layout>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
					</Switch>
				</Layout>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
