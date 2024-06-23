import {
	Image,
	Flex,
	IconButton,
	List,
	ListItem,
	Box,
	useBreakpointValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, User, LogOut, Box as BoxIcon } from "lucide-react";

export default function DashboardSidebar() {
	// Determine whether to show icons or labels based on screen size
	const displayType = useBreakpointValue({ base: "icons", md: "labels" });

	// Common styles for ListItem
	const listItemStyles = {
		py: displayType === "labels" ? 2 : 0,
		px: displayType === "labels" ? 4 : 0,
		_hover: { bg: "gray.700", borderRadius: "md" },
	};

	// Common styles for NavLink
	const navLinkStyles = {
		display: "flex",
		alignItems: "center",
		justifyContent: displayType === "icons" ? "center" : "flex-start",
	};

	// Array of link objects
	const links = [
		{
			to: "/dashboard",
			icon: <LayoutDashboard size={24} color='lightgreen' />,
			label: "Dashboard",
		},
		{
			to: "/dashboard/products",
			icon: <BoxIcon size={24} color='lightgreen' />,
			label: "Products",
		},
		{
			to: "/dashboard/profile",
			icon: <User size={24} color='lightgreen' />,
			label: "Profile",
		},
	];

	// Function to render the links
	const renderLinks = () => {
		return links.map((link, index) => (
			<ListItem key={index} {...listItemStyles}>
				<NavLink
					to={link.to}
					style={({ isActive }) => ({
						...navLinkStyles,
						backgroundColor: isActive ? "gray.700" : "transparent",
					})}>
					{link.icon}
					{displayType === "labels" && (
						<Box as='span' ml={2}>
							{link.label}
						</Box>
					)}
				</NavLink>
			</ListItem>
		));
	};

	return (
		<Flex
			as='nav'
			bg='gray.900'
			color='white'
			direction='column'
			justifyContent='space-between'
			position='fixed'
			top='0'
			left='0'
			height='100vh'
			width={{ base: "60px", md: "160px" }}
			p={2}>
			{/* Top Section */}
			<Flex direction='column' alignItems='center'>
				{/* Logo */}
				<Flex mb={8} justifyContent='center' alignItems='center' width='100%'>
					<Image
						src={displayType === "icons" ? "/2.png" : "/logo.png"}
						alt='Logo'
						width={"100px"}
					/>
				</Flex>

				{/* Navigation Links */}
				<List width='100%' spacing={displayType === "icons" ? 4 : 0}>
					{renderLinks()}
				</List>
			</Flex>

			{/* Bottom Section */}
			<Flex
				justifyContent={displayType === "labels" ? "flex-start" : "center"}
				alignItems='center'
				mb={4}
				py={2}
				px={4}
				_hover={{ bg: "gray.700", cursor: "pointer", borderRadius: "md" }}>
				<IconButton
					aria-label='Logout'
					size='sm'
					variant='ghost'
					_hover={{ bg: "none" }}
					icon={<LogOut size={20} color='lightgreen' />}
				/>
				{displayType === "labels" && (
					<Box as='span' ml={2}>
						Logout
					</Box>
				)}
			</Flex>
		</Flex>
	);
}
