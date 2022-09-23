import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateCompany = ({ recruits, setRecruits }) => {
  const toast = useToast();

  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [business, setBusiness] = useState("");
  const [requirement, setRequirement] = useState("");
  const [employment, setEmployment] = useState("");
  const [salary, setSalary] = useState("");
  const [experienced, setExperienced] = useState("可");
  const [recruitLink, setRecruitLink] = useState("");
  const [companyLink, setcompanyLink] = useState("");
  const [remarks, setremarks] = useState("");

  const successToast = (title, message) => {
    toast({
      title: `${title} created.`,
      description: message,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleCreate = () => {
    setRecruits([
      ...recruits,
      {
        id: uuidv4(),
        companyName: companyName,
        location: location,
        business: business,
        requirement: requirement,
        employment: employment,
        salary: salary,
        experienced: experienced,
        recruitLink: recruitLink,
        companyLink: companyLink,
        remarks: remarks,
      },
    ]);
    setCompanyName("");
    setLocation("");
    setBusiness("");
    setRequirement("");
    setEmployment("");
    setSalary("");
    setExperienced("可");
    setRecruitLink("");
    setcompanyLink("");
    setremarks("");

    successToast("Company", "投稿が完了しました");
  };

  return (
    <Accordion defaultIndex={[1]} allowMultiple>
      <AccordionItem>
        <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
          <Box flex="1" textAlign="left">
            Click me to add a company
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel py={8}>
          <Container>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="companyName">会社名</FormLabel>
                <Input
                  id="companyName"
                  variant="flushed"
                  placeholder="Please enter company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="location">勤務地</FormLabel>
                <Input
                  id="location"
                  variant="flushed"
                  placeholder="Please enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="business">業務内容</FormLabel>
                <Input
                  id="business"
                  variant="flushed"
                  placeholder="Please enter business"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="requirement">必要条件</FormLabel>
                <Input
                  id="requirement"
                  variant="flushed"
                  placeholder="Please enter requirement"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="employment">雇用形態</FormLabel>
                <Input
                  id="employment"
                  variant="flushed"
                  placeholder="Please enter employment"
                  value={employment}
                  onChange={(e) => setEmployment(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="salary">給与</FormLabel>
                <Input
                  id="salary"
                  variant="flushed"
                  placeholder="Please enter salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </Box>

              <Box>
                <RadioGroup
                  value={experienced}
                  onChange={(e) => setExperienced(e)}
                >
                  <Stack direction="row">
                    <Radio value="可">可</Radio>
                    <Radio value="不可" colorScheme="red">
                      不可
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="salary">リンク</FormLabel>
                <VStack>
                  <Input
                    id="salary"
                    variant="flushed"
                    placeholder="求人リンク"
                    value={recruitLink}
                    onChange={(e) => setRecruitLink(e.target.value)}
                  />
                  <Input
                    id="salary"
                    variant="flushed"
                    placeholder="会社リンク"
                    value={companyLink}
                    onChange={(e) => setcompanyLink(e.target.value)}
                  />
                </VStack>
              </Box>

              <Box>
                <FormLabel htmlFor="remarks">備考</FormLabel>
                <Input
                  id="remarks"
                  variant="flushed"
                  placeholder="Please enter remarks"
                  value={remarks}
                  onChange={(e) => setremarks(e.target.value)}
                />
              </Box>
            </Stack>
            <Button
              mt={8}
              display="block"
              width="200px"
              mx="auto"
              colorScheme="blue"
              onClick={handleCreate}
            >
              Submit
            </Button>
          </Container>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CreateCompany;
