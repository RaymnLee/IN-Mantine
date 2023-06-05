import { useState } from "react";
import { Menu, Button, Text } from "@mantine/core";
import { IconStar, IconCalendar } from "@tabler/icons-react";

function SortMenu() {
  const [sortCriteria, setSortCriteria] = useState("Date");

  const handleSortByDate = () => {
    setSortCriteria("Date");
    // Sort the main content by date
    // Implement your sorting logic here
  };

  const handleSortByLikes = () => {
    setSortCriteria("Most Liked");
    // Sort the main content by likes
    // Implement your sorting logic here
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>{`Sort by: ${sortCriteria}`}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Sort By</Menu.Label>
        <Menu.Item onClick={handleSortByDate} icon={<IconCalendar size={14} />}>
          Date
        </Menu.Item>
        <Menu.Item onClick={handleSortByLikes} icon={<IconStar size={14} />}>
          Most Liked
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default SortMenu;
