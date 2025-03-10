import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { nowPlaying } from "@/core/actions/movies/now-playin.action";
const RootLayout = () => {
  // nowPlaying();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-3xl text-cyan-600">RootLayout</Text>
      </View>
    </QueryClientProvider>
  );
};

export default RootLayout;
