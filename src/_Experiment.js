import { Box, Button, Stack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React, { useState } from "react";

const Experiment = () => {
  const [value, setValue] = useState(null);
  //   console.log("🚀 ~ file: Experiment.js ~ line 7 ~ Experiment ~ value", value);

  const [items, setItems] = useState([
    {
      content: "First",
    },
    {
      content: "Second",
    },
    {
      content: "Third",
    },
  ]);

  const handleSplice = (index, type) => {
    let numI = Number(index);
    console.log(index);

    const newItems = [...items];
    const spliceItem = newItems.splice(numI, 1);
    if (type === "D") {
      // 配列index判定
      if (items.length === numI + 1) {
        console.log(items.length);
        console.log(" -- ラストindex -- ");
        return;
      }
      newItems.splice(numI + 1, 0, ...spliceItem);
      setItems(newItems);
      setValue(String(numI + 1));
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
      newItems.splice(numI - 1, 0, ...spliceItem);
      setItems(newItems);
      setValue(String(numI - 1));
      console.log(
        "🚀 ~ file: Experiment.js ~ line 33 ~ handleSplice ~ String(i - 1)",
        String(numI - 1)
      );
    }
  };
  return (
    <Box>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="column">
          {items.map((item, index) => (
            <Radio
              key={item.content}
              value={String(index)}
              //   isChecked={value === index + 1 ? "true" : "false"}
              //   onChange={(e) => setValue(index)}
            >
              {item.content}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button onClick={() => handleSplice(value)}>Up</Button>
      <Button onClick={() => handleSplice(value, "D")}>Down</Button>
    </Box>
  );
};

export default Experiment;
