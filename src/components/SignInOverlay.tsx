import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  PasswordInput,
  Flex,
  Space,
  Menu,
  ActionIcon,
  TextInput,
} from "@mantine/core";
import {
  IconUserCircle,
  IconLock,
  IconSettings,
  IconStar,
  IconLogout,
} from "@tabler/icons-react";

function SignInOverlay() {
  const [opened, { open, close }] = useDisclosure(false);
  const [loggedIn, setLoggedIn] = useState(false); // Add loggedIn state

  const handleSignIn = () => {
    // Perform sign-in logic
    setLoggedIn(true); // Update loggedIn state to true
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Sign In" size="md" centered>
          <TextInput
            label="Your email"
            id="input-email"
            placeholder="Your email"
            icon={<IconUserCircle size="1rem" />}>
          </TextInput>

        <Space h="sm" />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          // withAsterisk
          // error="Invalid password"
          icon={<IconLock size="1rem" />}
        />

        <Space h="xs" />

        <Flex justify="center" align="center">
          <Button mt="sm" onClick={handleSignIn} variant="subtle">
            Sign In
          </Button>
        </Flex>
      </Modal>

      <Group position="center">
        {loggedIn ? (
          <Menu shadow="md" width={150}>
            <Menu.Target>
              <ActionIcon>
                <IconUserCircle size="1.5rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<IconStar size={14} />}>Like</Menu.Item>
              <Menu.Item icon={<IconLogout size={14} />}>
                Log out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          // Render "Sign In" button when user is not logged in
          <Button onClick={open}>Sign In</Button>
        )}
      </Group>
    </>
  );
}

export default SignInOverlay;
