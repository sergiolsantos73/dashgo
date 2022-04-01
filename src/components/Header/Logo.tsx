import { Text } from "@chakra-ui/react";

export function Logo() {
  return(
    <Text
      fontSize={["2xl", "3xl"]} // tamanho da fonte responsivo
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  );
}