import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets//logo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser, FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { HiBars3CenterLeft } from "react-icons/hi2";
import ContactTitle from "../layouts/ContactTitle";
import ContactForm from "../layouts/ContactForm";
import GoogleMap from "../layouts/GoogleMap";
const Contact = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
    <ContactTitle/>
    <ContactForm/>
    <GoogleMap/>
    </>
  );
};

export default Contact;
