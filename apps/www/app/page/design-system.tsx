import { DemoCode } from "@/app/page/demo-code"
import { BlitzFillIcon } from "@/app/page/icons"
import { HStack, Heading, Span, Stack, Tabs, Text } from "@chakra-ui/react"

const items = [
  {
    value: "design-tokens",
    label: "Design tokens",
    description: "Streamline issues, product and project roadmap",
  },
  {
    value: "typography",
    label: "Typography",
    description: "Customise your font related properties in one place.",
  },
  {
    value: "recipes",
    label: "Recipes",
    description: "Design components variants using a simple, intuitive API",
  },
]

export const DesignSystem = () => {
  return (
    <Stack gap="12" align="center">
      <Stack gap="6" maxW="xl" align="center">
        <HStack gap="4" color="teal.500">
          <BlitzFillIcon />
          <Text fontWeight="bold">Design Tokens</Text>
        </HStack>
        <Heading size="5xl" fontWeight="bold" textAlign="center">
          Build your design system on top of
          <Span
            color="teal.500"
            pos="relative"
            px="2"
            display="inline-block"
            _before={{
              pos: "absolute",
              content: "''",
              w: "full",
              h: "full",
              bg: "teal.500/10",
              bottom: "-3px",
              left: "0",
              borderRight: "solid 1.5px",
              borderColor: "currentColor",
            }}
          >
            Chakra UI
          </Span>
        </Heading>
      </Stack>

      <Tabs.Root defaultValue="design-tokens" variant="plain" maxW="3xl">
        <Tabs.List>
          {items.map((item) => (
            <Tabs.Trigger
              key={item.value}
              value={item.value}
              gap="2"
              alignItems="start"
              borderColor="#001B18"
              w="full"
              h="28"
              px="5"
              py="4"
              bg={{ base: "#050D0D/10", _selected: "#050D0D!" }}
              justifyContent="start"
              border="1px solid #001B18"
              ml="-1px"
              rounded="0"
              cursor="pointer"
              asChild
            >
              <Stack>
                <Text fontWeight="medium" color="white!">
                  {item.label}
                </Text>
                <Text color="gray.400">{item.description}</Text>
              </Stack>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.ContentGroup mt="8">
          {items.map((item) => (
            <Tabs.Content key={item.value} value={item.value}>
              <DemoCode name={item.value} />
            </Tabs.Content>
          ))}
        </Tabs.ContentGroup>
      </Tabs.Root>
    </Stack>
  )
}
