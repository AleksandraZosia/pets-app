import { Stack } from "expo-router";

export default function NewPetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Stack>{children}</Stack>;
}
