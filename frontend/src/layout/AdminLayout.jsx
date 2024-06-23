import { Outlet } from "react-router-dom";
import {
	Grid,
	GridItem,
	Heading,
	Flex,
	StatGroup,
	Stat,
	StatLabel,
	StatNumber,
	Input,
	Button,
} from "@chakra-ui/react";
import DashboardSidebar from "../components/DashboardSidebar";
import { PlusCircle, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminLayout() {
	const location = useLocation();
	const [showStock, setShowStock] = useState(true);

	useEffect(() => {
		if (location.pathname === "/dashboard/profile") {
			setShowStock(false);
		} else {
			setShowStock(true);
		}
	}, [location.pathname]);

	return (
		<Grid templateColumns={"repeat(6,1fr)"}>
			<GridItem as={"aside"} minH={"100vh"} width={"fit-content"}>
				<DashboardSidebar />
			</GridItem>
			<GridItem as={"main"} colSpan={5}>
				<Flex justify={"space-between"} align={"center"} p={4}>
					<Heading>Store Name</Heading>

					{showStock && (
						<StatGroup alignItems={"center"}>
							<Stat m={4} mt={0} pr={4}>
								<StatLabel>Products</StatLabel>
								<StatNumber>50</StatNumber>
							</Stat>
							<Button
								ml={4}
								colorScheme='gray'
								bg={"gray.700"}
								color={"whitesmoke"}
								_hover={{
									bg: "gray.800",
								}}>
								<PlusCircle style={{ marginRight: "5px" }} /> Add Product
							</Button>
						</StatGroup>
					)}
				</Flex>

				{showStock && (
					<Flex m={4}>
						<Input placeholder='Search products...' mr={2} />
						<Button
							ml={4}
							colorScheme='gray'
							bg={"gray.700"}
							color={"whitesmoke"}
							_hover={{
								bg: "gray.800",
							}}>
							<Search size={24} />
						</Button>
					</Flex>
				)}
				<Outlet />
			</GridItem>
		</Grid>
	);
}
