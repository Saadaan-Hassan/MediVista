import {
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
	Flex,
} from "@chakra-ui/react";
import { SquarePen, Trash2 } from "lucide-react";
import ProductTable from "../components/ProductTable";

const products = [
	{
		id: 1,
		name: "Product 1",
		description: "Description of Product 1",
		company: "Company A",
		category: "Category 1",
		image: "path/to/image1.jpg",
		price: 50,
		discount: 50,
		stock: 50,
	},
	// Add more products as needed
];

export default function Dashboard() {
	return (
		<Box m={10}>
			<ProductTable products={products} />
		</Box>
	);
}
