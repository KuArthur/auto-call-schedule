import { Button, Flex, Input, Select } from '@chakra-ui/react';

export const EmployeeChain = () => {
  return (
    <>
    <Flex>
      <Select placeholder='Выберите разработчика' mr={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <Select placeholder='Выберите разработчика' mr={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <Input flexShrink={0} w='45px' mr={4} />
      <Button colorScheme='green' flexShrink={0}>Добавить</Button>
    </Flex>
    </>
  )
}
