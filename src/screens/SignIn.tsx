import { VStack, Image, Text, Center, Heading } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackGroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SingIn() {
  return (
    <VStack flex={1} bg={"gray.700"} px={10}>
      <Image
        source={BackGroundImg}
        alt={"Pessoas se exercitando"}
        resizeMode={"contain"}
        position={"absolute"}
      />
      <Center my={24}>
        <LogoSvg />
        <Text color={"gray.100"} fontSize={"sm"}>
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading
          color={"gray.100"}
          fontSize={"xl"}
          mb={6}
          fontFamily={"heading"}
        >
          Acesse sua conta
        </Heading>
      </Center>

      <Input
        placeholder={"Email"}
        key={"email-address"}
        autoCapitalize={"none"}
      />
      <Input placeholder={"Senha"} secureTextEntry autoCapitalize={"none"} />

      <Button title={"Acessar"} />
      <Button title={"Criar conta"} variant={"outline"} />
    </VStack>
  );
}
