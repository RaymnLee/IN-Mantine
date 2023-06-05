import React from 'react';
import { Card, Text, Container, Group, Modal, Title, TypographyStylesProvider, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface CardItemProps {
  name: string;
  description: string;
  likeCount: number;
  date: string;
  detail: string;
}

function CardItem({ name, description, likeCount, date, detail }: CardItemProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card radius="xs" p="0.2rem" style={{ cursor: 'pointer' }}>
      <Container onClick={open}>
        <Group position="apart" mt="0rem" mb="0.2rem">
          <Title order={3} weight={500} size="h5">{name}</Title>
          <Text size="0.8rem" color="dimmed">
            {likeCount}
          </Text>
        </Group>
        <Text size="sm" color="dimmed">
          {description}
        </Text>

        <Text size="sm" color="dimmed">
          {date}
        </Text>
      </Container>

      <Modal opened={opened} onClose={close} title={name} size="auto" scrollAreaComponent={ScrollArea.Autosize}>
        <TypographyStylesProvider>
          <div dangerouslySetInnerHTML={{ __html: detail }} /> 
        </TypographyStylesProvider>
      </Modal>
    </Card>
  );
}

export default CardItem;
