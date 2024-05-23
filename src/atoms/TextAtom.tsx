import React from "react";
import { Text } from "react-native";

interface labelInterface {
    label: string;
}

export const TextAtom = (label: labelInterface) => {
    return <Text>{label.label}</Text>
}