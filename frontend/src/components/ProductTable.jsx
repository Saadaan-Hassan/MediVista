import React, { useState } from "react";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Button,
	Input,
} from "@chakra-ui/react";
import { SquarePen, Trash2, Save, XCircle } from "lucide-react";

const ProductTable = ({ products }) => {
	const [editRowId, setEditRowId] = useState(null);
	const [editValues, setEditValues] = useState({});
	const [deleteRowId, setDeleteRowId] = useState(null);

	const handleEditClick = (product) => {
		setEditValues(product);
		setEditRowId(product.id);
	};

	const handleSaveClick = (id) => {
		// Save the changes
		console.log(editValues);
		setEditRowId(null);
	};

	const handleCancelClick = () => {
		setEditRowId(null);
	};

	const handleDeleteClick = (product) => {
		setDeleteRowId(product.id);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const inputStyles = {
		borderColor: "gray.700",
		_hover: { borderColor: "gray.600" },
		_focusVisible: { borderColor: "gray.700", borderWidth: "2px" },
		width: "80px",
	};

	return (
		<Table variant='simple' mb={10}>
			<Thead>
				<Tr>
					<Th>Name</Th>
					<Th>Company</Th>
					<Th>Price</Th>
					<Th>Discount</Th>
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
						<Td>
							{editRowId === product.id ? (
								<Input
									type='number'
									name='price'
									value={editValues.price}
									onChange={handleChange}
									{...inputStyles}
								/>
							) : (
								product.price
							)}
						</Td>
						<Td>
							{editRowId === product.id ? (
								<Input
									type='number'
									name='discount'
									value={editValues.discount}
									onChange={handleChange}
									{...inputStyles}
								/>
							) : (
								`${product.discount}%`
							)}
						</Td>
						<Td>
							{editRowId === product.id ? (
								<output style={{ color: "red" }}>
									$
									{editValues.price -
										editValues.price * (editValues.discount / 100)}
								</output>
							) : (
								<output style={{ color: "red" }}>
									${product.price - product.price * (product.discount / 100)}
								</output>
							)}
						</Td>
						<Td>
							{editRowId === product.id ? (
								<Input
									type='number'
									name='stock'
									value={editValues.stock}
									onChange={handleChange}
									{...inputStyles}
								/>
							) : (
								product.stock
							)}
						</Td>
						<Td>
							{editRowId === product.id ? (
								<>
									<Button
										size='sm'
										ml={4}
										colorScheme='green'
										bg={"green.700"}
										color={"whitesmoke"}
										p={4}
										_hover={{
											bg: "green.800",
										}}
										onClick={() => handleSaveClick(product.id)}>
										<Save size={20} />
									</Button>
									<Button
										size='sm'
										ml={4}
										colorScheme='gray'
										bg={"gray.700"}
										color={"whitesmoke"}
										p={4}
										_hover={{
											bg: "gray.800",
										}}
										onClick={handleCancelClick}>
										<XCircle size={20} />
									</Button>
								</>
							) : (
								<>
									<Button
										size='sm'
										ml={4}
										colorScheme='gray'
										bg={"gray.700"}
										color={"whitesmoke"}
										p={4}
										_hover={{
											bg: "gray.800",
										}}
										onClick={() => handleEditClick(product)}>
										<SquarePen size={20} />
									</Button>
									<Button
										size='sm'
										ml={4}
										colorScheme='red'
										bg={"red.700"}
										color={"whitesmoke"}
										p={4}
										_hover={{
											bg: "red.800",
										}}>
										<Trash2 size={20} />
									</Button>
								</>
							)}
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};

export default ProductTable;
