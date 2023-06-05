import {
  AppShell,
  Header,
  Container,
  Flex,
  Center,
  Title,
} from "@mantine/core";

import Cards from "./cards";
import SignInOverlay from "./SignInOverlay";
import RTE from "./RTE";

export default function Shell() {
  return (
    <AppShell
      header={
        <Header height={60}>
          <Center h={60}>
            <Container miw="90%" p={15}>
              <Flex
                gap="md"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <Title order={1} weight={500} size="h3">
                  Insight Network
                </Title>
                <SignInOverlay />
              </Flex>
            </Container>
          </Center>
        </Header>
      }
    >
      <Cards />

      <RTE />

    </AppShell>
  );
}
