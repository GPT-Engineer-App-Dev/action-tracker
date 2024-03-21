import React, { useState } from "react";
import { Box, Input, IconButton, VStack, HStack, Text, Heading, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const addTask = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No task entered",
        description: "Please enter a task before adding.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setTasks([...tasks, { id: Date.now(), content: inputValue }]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo App</Heading>
      <HStack>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add a task..." />
        <IconButton colorScheme="blue" aria-label="Add todo" icon={<FaPlus />} onClick={addTask} />
      </HStack>
      <VStack spacing={4} align="stretch" mt={4}>
        {tasks.map((task) => (
          <HStack key={task.id}>
            <Text flex={1} p={4} borderWidth="1px" borderRadius="lg">
              {task.content}
            </Text>
            <IconButton colorScheme="red" aria-label="Delete todo" icon={<FaTrash />} onClick={() => deleteTask(task.id)} />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;
