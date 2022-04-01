import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps { 
  showProfileData?: boolean
}
export function Profile({showProfileData=true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && ( // <<< isso é um IF
        <Box mr="4" textAlign="right">
          <Text>Sergio</Text> 
          <Text color="gray.300" fontSize="small">sergio.luiz@havan.com.br</Text>
        </Box>
      )}
      <Avatar size="md" name="Sergio Santos" />
    </Flex>
  );
}