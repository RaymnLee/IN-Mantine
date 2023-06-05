import { useEffect, useState } from "react";
import { Chip } from "@mantine/core";

function Single() {
    // string value when multiple is false (default)
    const [value, setValue] = useState('');

    useEffect (() => {
      console.log(value)
    })
  
    return (
      
      <Chip.Group multiple={false} value={value} onChange={setValue}>
        <Chip value="react">React</Chip>
        <Chip value="ng">Angular</Chip>
        <Chip value="svelte">Svelte</Chip>
        <Chip value="vue">Vue</Chip>
    </Chip.Group>
    );
  }

export default Single;
