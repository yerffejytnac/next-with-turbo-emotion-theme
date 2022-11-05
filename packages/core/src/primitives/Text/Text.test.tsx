import { screen, renderWithProviders } from "@tests/renderWithProviders";
import { Text } from ".";

describe("Text", () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Text as="h1" variant="text-display-large">
        Hello
      </Text>
    );

  test("should render children", () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });

  test("should render as an h1 tag", () => {
    givenComponentRendered();
    screen.getByRole("heading", { level: 1, name: /Hello/i });
  });
});
