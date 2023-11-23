import { Flex } from '@chakra-ui/react';
import { EmployeeChain } from '@/components/employeeChain/EmployeeChain.tsx';

function App() {
  return (
    <>
      <Flex w='100%' h='100%' p={4}>
      <EmployeeChain />
      </Flex>
    </>
  );
}

export default App;
