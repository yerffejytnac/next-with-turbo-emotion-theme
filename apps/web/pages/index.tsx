import { Box, Layout, Text, Button } from "@shared/core";

const IndexPage = () => {
  return (
    <Layout>
      <Box
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.8, xl: 0.6 }}
        mx={{ _: 0, lg: "auto" }}
      >
        <Text as="h1" variant="text-headline-medium" mb={[3, 2]}>
          Vaporware scenester organic, yr JOMO 3 wolf moon polaroid sartorial.
        </Text>
        <Text variant="text-body-large" mb={4}>
          Lumbersexual jianbing marfa, DSA disrupt slow-carb palo santo
          intelligentsia readymade mustache. DSA chillwave messenger bag viral
          meditation, ennui DIY swag vegan praxis portland pop-up. Woke squid
          viral hella affogato neutra.
        </Text>
        <Box
          display="grid"
          gridAutoFlow={{ _: "row", lg: "column" }}
          gridGap="4"
        >
          <Button variant="elevated" onPress={() => alert("Button pressed!")}>
            Elevated Button
          </Button>
          <Button variant="filled">Filled Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="text">Text Button</Button>
          <Button variant="tonal">Tonal Button</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
