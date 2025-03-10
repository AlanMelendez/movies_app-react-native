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
import { Stack } from "expo-router";
const RootLayout = () => {
  // nowPlaying();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{headerShown:false}}/>
    </QueryClientProvider>
  );
};

export default RootLayout;
