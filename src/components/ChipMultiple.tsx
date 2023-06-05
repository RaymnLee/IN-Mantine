import { useEffect, useState } from "react";
import { Chip, Group } from "@mantine/core";


function Multiple() {
  // array of strings value when multiple is true
  const [value, setValue] = useState(['react']);
  
  useEffect (() => {
    console.log(value)
  })

  return (
    <Chip.Group multiple value={value} onChange={setValue}>
      <Group spacing="xl">
        <Chip defaultChecked color="orange" variant="filled" size="md" radius="sm" value="react">React</Chip>
        <Chip defaultChecked color="orange" variant="filled" size="md" radius="sm" value="ng">Angular</Chip>
        <Chip defaultChecked color="orange" variant="filled" size="md" radius="sm" value="svelte">Svelte</Chip>
        <Chip defaultChecked color="orange" variant="filled" size="md" radius="sm" value="vue">Vue</Chip>
      </Group>
    </Chip.Group>
  );
}

export default Multiple;