import styled from "@emotion/styled";

import { Box, Layout, Text, Button } from "@shared/core";

const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-bottom: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.secondary[95]};
  border: 1px solid ${({ theme }) => theme.colors.secondary[80]};
  color: ${({ theme }) => theme.colors.secondary[40]};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes["label-large"]};
`;

const IndexPage = () => {
  return (
    <Layout>
      <Box p={[8, 4]} width={[1, 0.75, 0.5]}>
        <Test children="Test" />
        <Text
          as="h1"
          textStyle={["text-headline-medium", "text-display-small"]}
          mb={[3, 2]}
        >
          Vaporware scenester organic, yr JOMO 3 wolf moon polaroid sartorial.
        </Text>
        <Text textStyle="text-body-large" mb={4}>
          Lumbersexual jianbing marfa, DSA disrupt slow-carb palo santo
          intelligentsia readymade mustache. DSA chillwave messenger bag viral
          meditation, ennui DIY swag vegan praxis portland pop-up. Woke squid
          viral hella affogato neutra.
        </Text>
        <Button>Primary Button</Button>
      </Box>
    </Layout>
  );
};

export default IndexPage;
