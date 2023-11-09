import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView , Center, VStack, FormControl, Input, Button} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {
    return ( 
      <SafeAreaView>
        <Center w="100%">
      
      <Image
          source={require('../assets/sayur.png')}
          style={{ width: 120, height: 120,marginTop:50,marginRight:200 }}
          />

        <Box safeArea p="2" w="90%" maxW="290" >
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Daftar dulu ya
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Nama</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input type="Email" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="Password" />
            </FormControl>
            <Button mt="2" colorScheme="lime">
              Daftar
            </Button>
            <Box 
            
            >
        <Text
        textAlign="center"
        >Sudah punya akun? Masuk</Text>
       </Box> 
          </VStack>
        </Box>
        
        
      </Center>
      </SafeAreaView>
);
       
  };

export default Home;