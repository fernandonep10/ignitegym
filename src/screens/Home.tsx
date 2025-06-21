import { VStack, Text, HStack, Heading } from "@gluestack-ui/themed";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada Curvada",
    "Remada Unilateral",
    "Levantamento Terra",
    "3",
    "4",
    "5",
  ]);
  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Tríceps",
    "Ombro",
  ]);
  const [groupSelected, setGroupsSlected] = useState("Costas");
  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={groupSelected.toLowerCase() === item.toLowerCase()}
              onPress={() => setGroupsSlected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 32 }}
          style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
        />
      </HStack>
      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5">
          <Heading color="$gray200" fontSize={"$md"} fontFamily="$heading">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
