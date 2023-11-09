import { Heading, Center, Image, Text, Button, Flex, HStack } from "native-base";
import { Header } from "../components/";
import { Box, ScrollView, VStack, FormControl, Input } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const Pesan = () => {
    return (

        <SafeAreaView>
            <ScrollView>
            <VStack p={3} paddingTop={10}>
                <Box>
                    <Heading>Alamat</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, diam nec facilisis pulvinar, purus mauris laoreet nisi, ac sollicitudin magna lacus
                    </Text>
                </Box>
                <HStack justifyContent="space-between" paddingTop={10}>
                    <Heading
                        fontSize="16">Metode Pembayaran</Heading>
                    <Text
                    color="primary.400"
                    >
                        Ganti
                    </Text>
                </HStack>
                <HStack paddingTop={1}>
                    <Center>
                        <Image
                            source={require('../assets/dana.jpg')}
                            style={{ width: 120, height: 100}}
                            alt="metod=gambar"
                            />


                    </Center>
                    <Heading paddingLeft={2} >DANA</Heading>

                </HStack>


                <Heading paddingTop={10}>
                    Detail Pembayaran

                </Heading>
                <HStack
                    justifyContent="space-between" paddingTop={1}>
                    <Text
                    >
                        Harga
                    </Text>
                    <Text>
                        Rp 20.000
                    </Text>

                </HStack>
                <HStack
                    justifyContent="space-between" paddingTop={1}>
                    <Text>
                        Biaya Pengiriman
                    </Text>
                    <Text>
                        Rp 10.000
                    </Text>
                </HStack>
                <HStack
                    justifyContent="space-between" paddingTop={50}>
                    <Text>
                        Total Harga
                    </Text>
                </HStack>






            </VStack>
            </ScrollView>
        </SafeAreaView>

    );
};

export default Pesan;