import {
  Box,
  Button,
  Container,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsPen } from "react-icons/bs";

const EditModal = ({ item, recruits, setRecruits }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editCompanyName, setEditCompanyName] = useState(item.companyName);
  const [editLocation, setEditLocation] = useState(item.location);
  const [editBusiness, setEditBusiness] = useState(item.business);
  const [editRequirement, setEditRequirement] = useState(item.requirement);
  const [edtiEmployment, setEditEmployment] = useState(item.employment);
  const [editSalary, setEditSalary] = useState(item.salary);
  const [editExperienced, setEditExperienced] = useState(item.experienced);
  const [editRecruitLink, setEditRecruitLink] = useState(item.recruitLink);
  const [editCompanyLink, setEditCompanyLink] = useState(item.companyLink);
  const [editRemarks, setEditrRmarks] = useState(item.remarks);

  const handleEditCompany = (id, onClose) => {
    const newRecruits = [...recruits];
    console.log(
      "🚀 ~ file: EditCompany.js ~ line 36 ~ handleEditCompany ~ newRecruits",
      newRecruits
    );
    const recruit = newRecruits.find((item) => item.id === id);
    console.log(
      "🚀 ~ file: EditCompany.js ~ line 41 ~ handleEditCompany ~ recruit",
      recruit
    );

    recruit.companyName = editCompanyName;
    recruit.location = editLocation;
    recruit.business = editBusiness;
    recruit.requirement = editRequirement;
    recruit.employment = edtiEmployment;
    recruit.salary = editSalary;
    recruit.experienced = editExperienced;
    recruit.recruitLink = editRecruitLink;
    recruit.companyLink = editCompanyLink;
    recruit.remarks = editRemarks;

    setRecruits(newRecruits);
    onClose();
  };
  const openBtnRef = () => {
    return (
      <Button onClick={onOpen} colorScheme="blue" variant="ghost">
        <Icon as={BsPen} />
      </Button>
    );
  };
  const closeBtnRef = () => {
    return (
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
    );
  };
  const editBtnRef = () => {
    return (
      <Button
        variant="ghost"
        onClick={() => handleEditCompany(item.id, onClose)}
      >
        Edit
      </Button>
    );
  };

  const bodyRef = () => {
    return (
      <Container>
        <Stack spacing="24px">
          <Box>
            <FormLabel htmlFor="companyName">会社名</FormLabel>
            <Input
              id="companyName"
              variant="flushed"
              placeholder="Please enter company name"
              value={editCompanyName}
              onChange={(e) => setEditCompanyName(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="location">勤務地</FormLabel>
            <Input
              id="location"
              variant="flushed"
              placeholder="Please enter location"
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="business">業務内容</FormLabel>
            <Input
              id="business"
              variant="flushed"
              placeholder="Please enter business"
              value={editBusiness}
              onChange={(e) => setEditBusiness(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="requirement">必要条件</FormLabel>
            <Input
              id="requirement"
              variant="flushed"
              placeholder="Please enter requirement"
              value={editRequirement}
              onChange={(e) => setEditRequirement(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="employment">雇用形態</FormLabel>
            <Input
              id="employment"
              variant="flushed"
              placeholder="Please enter employment"
              value={edtiEmployment}
              onChange={(e) => setEditEmployment(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="salary">給与</FormLabel>
            <Input
              id="salary"
              variant="flushed"
              placeholder="Please enter salary"
              value={editSalary}
              onChange={(e) => setEditSalary(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="experienced">未経験</FormLabel>
            <Select
              id="experienced"
              variant="flushed"
              defaultValue={editExperienced}
              onChange={(e) => setEditExperienced(e.target.value)}
            >
              <option value="可">可</option>
              <option value="不可">不可</option>
            </Select>
          </Box>

          <Box>
            <FormLabel htmlFor="salary">リンク</FormLabel>
            <VStack>
              <Input
                id="salary"
                variant="flushed"
                placeholder="求人リンク"
                value={editRecruitLink}
                onChange={(e) => setEditRecruitLink(e.target.value)}
              />
              <Input
                id="salary"
                variant="flushed"
                placeholder="会社リンク"
                value={editCompanyLink}
                onChange={(e) => setEditCompanyLink(e.target.value)}
              />
            </VStack>
          </Box>

          <Box>
            <FormLabel htmlFor="salary">備考</FormLabel>
            <Input
              id="remarks"
              variant="flushed"
              placeholder="Please enter remarks"
              value={editRemarks}
              onChange={(e) => setEditrRmarks(e.target.value)}
            />
          </Box>
        </Stack>
      </Container>
    );
  };

  return (
    <>
      {openBtnRef()}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="sm">Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{bodyRef()}</ModalBody>
          <ModalFooter>
            {closeBtnRef()}
            {editBtnRef()}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
