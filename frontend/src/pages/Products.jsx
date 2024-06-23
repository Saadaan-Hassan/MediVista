import { SimpleGrid, Box, Image, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Products() {
	const navigate = useNavigate();

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
		{
			id: 2,
			name: "Product 2",
			description: "Description of Product 2",
			company: "Company B",
			category: "Category 2",
			image: "path/to/image2.jpg",
			price: 200,
			discountedPrice: 150,
			stock: 100,
		},
		{
			id: 3,
			name: "Product 3",
			description: "Description of Product 3",
			company: "Company C",
			category: "Category 3",
			image: "path/to/image3.jpg",
			price: 300,
			discountedPrice: 250,
			stock: 150,
		},
	];

	return (
		<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} m={10}>
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
							navigate(`/dashboard/products/${product.id}`, {
								state: product,
							});
						}}>
						View Details
					</Button>
				</Box>
			))}
		</SimpleGrid>
	);
}
