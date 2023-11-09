import { Heading, Center, Image, Text, Button, HStack } from "native-base";
import { Header } from "../components";
import { Box, ScrollView, VStack, FormControl, Input } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const Order = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <HStack p={3} paddingTop={50}>
          <Center>
            <Image
              source={require('../assets/sayur.png')}
              style={{ width: 120, height: 120 }}
            />
          </Center>
          <VStack px={3}>
            <Heading>
              Wortel Import
            </Heading>
            <Text>Rp 20.000</Text>
            <Text>Jumlah : 1</Text>
            <Text
            fontSize={35}>-    +</Text>


          </VStack>
        </HStack>
        <Box
          // margin={3}
          padding="3"
          rounded={10}

          h="200"
        >
          <Text
            fontSize="30"
            paddingTop={10}
          >
            Order Info
          </Text>
          <Text
          >
            Subtotal
          </Text>
          <Text>
            Pengiriman
          </Text>

        </Box>
        <Box
          padding="3">
          <Button
            mt="2" colorScheme="lime"> Selesai

          </Button>
        </Box>
      </ScrollView>





    </SafeAreaView>

  );
};

export default Order;