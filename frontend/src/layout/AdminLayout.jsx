import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import DashboardSidebar from "../components/DashboardSidebar";

export default function AdminLayout() {
	return (
		<Grid templateColumns={"repeat(6,1fr)"}>
			<GridItem
				as={"aside"}
				bg={"gray.100"}
				minH={"100vh"}
				width={"fit-content"}>
				<DashboardSidebar />
			</GridItem>
			<GridItem as={"main"} colSpan={5}>
				<Outlet />
			</GridItem>
		</Grid>
	);
}
