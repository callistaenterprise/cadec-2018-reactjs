import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const talksToSections = talks =>
  talks.map(talk => ({ key: talk.startDate, data: [talk] }));

export const handleRefreshAsync = async () =>
  new Promise(resolve => {
    setTimeout(resolve, 2000);
  });

export const Icon = ({ icon, size = 35 }) => (
  <Ionicons name={icon} size={size} />
);
