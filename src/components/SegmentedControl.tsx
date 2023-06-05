import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

function Segment() {
  const [value, setValue] = useState("all");
  return (
    <SegmentedControl
      fullWidth
      size="sm"
      value={value}
      onChange={setValue}
      data={[
        { label: "All", value: "all" },
        { label: "Liked", value: "Liked" }
      ]}
    />
  );
}

export default Segment;
