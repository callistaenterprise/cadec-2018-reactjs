import React from "react";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";
import {
  SelectionButton,
  SelectionButtonText,
  TabButton
} from "cadec-2018-styles/web";

const TabButtonLink = TabButton.withComponent(Link);
export default ({ text, icon, link, action }) => (
  <Link to={link} onClick={action}>
    <TabButton>
      <Ionicon icon={icon} fontSize="35px" />
      <SelectionButtonText>{text}</SelectionButtonText>
    </TabButton>
  </Link>
);
