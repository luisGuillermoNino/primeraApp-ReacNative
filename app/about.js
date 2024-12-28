import { Link } from "expo-router";
import { styled } from "nativewind";
import { Pressable, ScrollView, Text } from "react-native";
import { Home } from "../components/Icons";
import { Screen } from "../components/Screen";

const StyledPressable = styled(Pressable);
export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-20`}>
            <Home />
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
        <Text className="text-white /90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          eget, lorem, lorem ipsum lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut purus eget, lorem, lorem ipsum lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed ut purus eget, lorem,
          lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut purus eget, lorem, lorem ipsum
        </Text>
      </ScrollView>
    </Screen>
  );
}
