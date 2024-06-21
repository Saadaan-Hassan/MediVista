import { Flex, HStack, Box, Spacer, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<Flex as={"nav"} bg={"gray.800"} color={"white"} p={4} align='center'>
				<Box as={"h1"}>MediVista</Box>

				<Spacer />

				<HStack spacing={4}>
					<Image src='/user.jpg' alt='user' boxSize='40px' borderRadius={100} />
					<Box as={Link} to={"/profile"}>
						test@gmail.com
					</Box>
					<Button size='sm'>Logout</Button>
				</HStack>
			</Flex>
		</>
	);
}
