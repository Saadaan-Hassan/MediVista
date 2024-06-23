import {
	SimpleGrid,
	Box,
	Heading,
	Stat,
	StatLabel,
	StatNumber,
	StatGroup,
	Input,
	Button,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Image,
	Flex,
} from "@chakra-ui/react";
import { useNavigate, redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const products = [
	{
		id: 1,
		name: "Product 1",
		description: "Description of Product 1",
		company: "Company A",
		category: "Category 1",
		image: "path/to/image1.jpg",
		price: 100,
		discountedPrice: 80,
		stock: 50,
	},
	// Add more products as needed
];

export default function Dashboard() {
	const navigate = useNavigate();
	return (
		<Box p={10}>
			<Heading mb={6}>Store Name</Heading>

			<StatGroup mb={6}>
				<Stat>
					<StatLabel>Products</StatLabel>
					<StatNumber>50</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Categories</StatLabel>
					<StatNumber>10</StatNumber>
				</Stat>
				{/* Add more stats as needed */}
			</StatGroup>

			<Flex mb={6}>
				<Input placeholder='Search products...' mr={2} />
				<Button colorScheme='teal'>Search</Button>
				<Button ml={4} colorScheme='teal'>
					Add New Product
				</Button>
			</Flex>

			<Table variant='simple' mb={10}>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Company</Th>
						<Th>Price</Th>
						<Th>Discounted Price</Th>
						<Th>Stock</Th>
						<Th>Actions</Th>
					</Tr>
				</Thead>
				<Tbody>
					{products.map((product) => (
						<Tr key={product.id}>
							<Td>{product.name}</Td>
							<Td>{product.company}</Td>
							<Td>{product.price}</Td>
							<Td>{product.discountedPrice}</Td>
							<Td>{product.stock}</Td>
							<Td>
								<Button size='sm' colorScheme='teal'>
									Edit
								</Button>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>

			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
				{products.map((product) => (
					<Box
						key={product.id}
						borderWidth='1px'
						borderRadius='lg'
						overflow='hidden'
						p={5}>
						<Image src={product.image} alt={product.name} mb={4} />
						<Heading size='md' mb={2}>
							{product.name}
						</Heading>
						<Box mb={2}>Company: {product.company}</Box>
						<Box mb={2}>Price: ${product.price}</Box>
						<Button
							mt={2}
							colorScheme='teal'
							onClick={() => {
								navigate(`/dashboard/product/${product.id}`, {
									state: product,
								});
							}}>
							View Details
						</Button>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
}
