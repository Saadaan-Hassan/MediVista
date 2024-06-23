import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
	const { state } = useLocation();
	console.log(state);
	return (
		<Box p={10}>
			<Heading mb={6}>{state.name}</Heading>
			<Image src={state.image} alt={state.name} mb={4} />
			<Text mb={2}>Company: {state.company}</Text>
			<Text mb={2}>Price: ${state.price}</Text>
			<Text mb={2}>Description: {state.description}</Text>
			{/* Add more fields as necessary */}
			<Button colorScheme='teal' mt={4}>
				Edit Product
			</Button>
		</Box>
	);
}
