import { Heading, HStack, VStack, Text, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack
      bg="$gray600"
      pt="$16"
      pb="$5"
      px="$8"
      alignItems="center"
      gap={"$4"}
    >
      <UserPhoto
        source={{ uri: "https://github.com/fernandonep10.png" }}
        w="$16"
        h="$16"
        alt="Foto perfil do usuário"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Fernando Nepomuceno
        </Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  );
}
