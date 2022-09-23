import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Switch } from "@chakra-ui/react";
import { BsSortNumericUp, BsSortNumericDown, BsDownload } from "react-icons/bs";
import { useCSVDownloader } from "react-papaparse";

const SubItems = ({
  recruits,
  isVariant,
  setIsVariant,
  selectIndex,
  setSelectIndex,
  handleSplice,
}) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const formControlRef = () => {
    return (
      <Box>
        <FormControl display="flex" alignItems="center">
          <FormLabel
            htmlFor="email-alerts"
            color={isVariant ? "gray.500" : "orange.500"}
          >
            {isVariant ? "Stop striped?" : "Use striped?"}
          </FormLabel>
          <Switch id="email-alerts" onChange={() => setIsVariant(!isVariant)} />
        </FormControl>
      </Box>
    );
  };
  const handleSpliceBtnRef = () => {
    return (
      <Flex alignItems="center">
        <Button
          display="flex"
          alignItems="center"
          justifyContent="center"
          colorScheme="blue"
          size="sm"
          variant="ghost"
          onClick={() => setSelectIndex(null)}
        >
          <Icon as={BsDownload} mr={2} />
          <CSVDownloader
            type={Type.Link}
            filename={"filename"}
            bom={true}
            data={recruits}
          >
            Download
          </CSVDownloader>
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setSelectIndex(null)}>
          Uncheck?
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => handleSplice(selectIndex)}
        >
          {/* <Icon as={BsArrowUp} /> */}
          <Icon as={BsSortNumericUp} />
        </Button>
        <Button
          colorScheme="red"
          variant="ghost"
          onClick={() => handleSplice(selectIndex, "D")}
        >
          {/* <Icon as={BsArrowDown} /> */}
          <Icon as={BsSortNumericDown} />
        </Button>
      </Flex>
    );
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      bottom="0"
      letf="0"
      width="100%"
      h="60px"
      py={2}
      px={4}
      backgroundColor="rgba(255,255,255,0.6)"
      boxShadow="0px -5px 5px -6px rgba(0,0,0,0.4)"
    >
      {formControlRef()}
      {handleSpliceBtnRef()}
    </Box>
  );
};

export default SubItems;
