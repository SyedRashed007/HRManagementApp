/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import {
  Box,
  Image,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Circle,
  HStack, 
  Square,
} from "@chakra-ui/react";
import { StarIcon, PhoneIcon } from "@chakra-ui/icons";
import "./chakra.css";

function ChakraUI() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      <Box
        className="box"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <u>
          <p className="typography">Box with Image</p>
        </u>
        <Image
          boxSize="200px"
          src={property.imageUrl}
          alt={property.imageAlt}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
      <u>
        <p className="typography">Breadcrumb</p>
      </u>
      <Breadcrumb className="component">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <u>
        <p className="typography">Center</p>
      </u>
      <HStack className="component">
        <Circle size="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
        <Square size="40px" bg="purple" color="white">
          <PhoneIcon />
        </Square>
      </HStack>
    </>
  );
}

export default ChakraUI;
