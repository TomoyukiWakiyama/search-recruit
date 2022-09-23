import {
  Box,
  Link,
  Radio,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { memo, useState } from "react";
import EditModal from "./modal/EditModal";
import DeleteModal from "./modal/DeleteModal";
import SubItems from "./SubItems/SubItems";

const RecruitTable = memo(({ recruits, setRecruits }) => {
  // console
  console.log("called Table");

  // states
  const [isVariant, setIsVariant] = useState(false);
  //   console.log(
  //     "🚀 ~ file: RecruitTable.js ~ line 30 ~ RecruitTable ~ isVariant",
  //     isVariant
  //   );
  const [selectIndex, setSelectIndex] = useState(null);
  console.log(
    "🚀 ~ file: RecruitTable.js ~ line 37 ~ RecruitTable ~ selectIndex",
    selectIndex
  );

  const handleSplice = (index, type) => {
    let numI = Number(index);
    console.log(index);

    const newRecruits = [...recruits];
    const spliceItem = newRecruits.splice(numI, 1);
    if (type === "D") {
      // 配列index判定
      if (recruits.length === numI + 1) {
        console.log(recruits.length);
        console.log(" -- ラストindex -- ");
        return;
      }
      newRecruits.splice(numI + 1, 0, ...spliceItem);
      setRecruits(newRecruits);
      setSelectIndex(String(numI + 1));
      console.log(
        "🚀 ~ file: Experiment.js ~ line 31 ~ handleSplice ~ String(i + 1)",
        String(numI + 1)
      );
    } else {
      // 配列index判定
      if (Math.sign(numI) === 0) {
        console.log(" -- スタートindex -- ");
        return;
      }
      newRecruits.splice(numI - 1, 0, ...spliceItem);
      setRecruits(newRecruits);
      setSelectIndex(String(numI - 1));
      console.log(
        "🚀 ~ file: Experiment.js ~ line 33 ~ handleSplice ~ String(i - 1)",
        String(numI - 1)
      );
    }
  };

  const handleDelete = (id) => {
    const newRecruits = [...recruits];
    const filtItems = newRecruits.filter((item) => item.id !== id);
    setRecruits(filtItems);
  };

  return (
    <>
      {/* SubItemsの高さ確保でmbを入れる */}
      <Box mb="60px">
        <TableContainer>
          <Table
            variant={isVariant ? "striped" : "simple"}
            size="sm"
            colorScheme={isVariant ? "orange" : null}
          >
            <TableCaption>Thank you for Gaggle</TableCaption>
            <Thead>
              <Tr>
                <Th></Th>
                {/* index */}
                <Th>ランク</Th>
                {/* companyName */}
                <Th>会社名</Th>
                {/* location */}
                <Th>勤務地</Th>
                {/* business */}
                <Th>業務内容</Th>
                {/* requirement */}
                <Th>必要条件</Th>
                {/* employment */}
                <Th>雇用形態</Th>
                {/* salary */}
                <Th>給与</Th>
                {/* experienced */}
                <Th>未経験</Th>
                {/* recruitLink */}
                {/* companyLink */}
                <Th>リンク</Th>
                <Th>備考</Th>
                <Th>編集</Th>
                <Th>削除</Th>
              </Tr>
            </Thead>
            {/* <RadioGroup onChange={setSelectIndex} value={selectIndex}> */}
            <Tbody>
              {recruits.map((item, index) => {
                return (
                  <Tr
                    key={item.id}
                    backgroundColor={
                      selectIndex === String(index) ? "yellow.100" : ""
                    }
                  >
                    <Td px={4} py={0}>
                      <Radio
                        key={item.content}
                        value={String(index)}
                        isChecked={String(index) === selectIndex}
                        onChange={(e) => setSelectIndex(e.target.value)}
                        //   isChecked={value === index + 1 ? "true" : "false"}
                        //   onChange={(e) => setValue(index)}
                      />
                    </Td>
                    <Td>
                      <Text w="30px" textOverflow="ellipsis" overflow="hidden">
                        {index + 1}
                      </Text>
                    </Td>
                    <Td>
                      <Text w="180px" textOverflow="ellipsis" overflow="hidden">
                        {item.companyName}
                      </Text>
                    </Td>
                    <Td>
                      <Text w="200px" textOverflow="ellipsis" overflow="hidden">
                        {item.location}
                      </Text>
                    </Td>
                    <Td>
                      <Text w="200px" textOverflow="ellipsis" overflow="hidden">
                        {item.business}
                      </Text>
                    </Td>
                    <Td>
                      <Text w="200px" textOverflow="ellipsis" overflow="hidden">
                        {item.requirement}
                      </Text>
                    </Td>

                    <Td>
                      <Text w="100px" textOverflow="ellipsis" overflow="hidden">
                        {item.employment}
                      </Text>
                    </Td>
                    <Td>
                      <Text w="150px" textOverflow="ellipsis" overflow="hidden">
                        {item.salary}
                      </Text>
                    </Td>
                    <Td>{item.experienced === "可" ? "可" : "不可"}</Td>
                    <Td>
                      {item.recruitLink ? (
                        <Link href={item.recruitLink} target="_blank">
                          求人
                        </Link>
                      ) : null}
                      {item.recruitLink && item.companyLink ? " / " : null}
                      {item.companyLink ? (
                        <Link href={item.companyLink} target="_blank">
                          会社
                        </Link>
                      ) : null}
                    </Td>
                    <Td>
                      <Text w="150px" textOverflow="ellipsis" overflow="hidden">
                        {item.remarks}
                      </Text>
                    </Td>
                    <Td>
                      <EditModal
                        item={item}
                        recruits={recruits}
                        setRecruits={setRecruits}
                      />
                    </Td>
                    <Td>
                      <DeleteModal item={item} handleDelete={handleDelete} />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            {/* </RadioGroup> */}
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th>LANK</Th>
                <Th isNumeric>companyName</Th>
                <Th isNumeric>location</Th>
                <Th isNumeric>business</Th>
                <Th isNumeric>requirement</Th>
                <Th isNumeric>employment</Th>
                <Th isNumeric>salary</Th>
                <Th isNumeric>experienced</Th>
                <Th isNumeric>link</Th>
                <Th isNumeric>remarks</Th>
                <Th isNumeric>edit</Th>
                <Th isNumeric>delete</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
      <SubItems
        recruits={recruits}
        isVariant={isVariant}
        setIsVariant={setIsVariant}
        selectIndex={selectIndex}
        setSelectIndex={setSelectIndex}
        handleSplice={handleSplice}
      />
    </>
  );
});

export default RecruitTable;
