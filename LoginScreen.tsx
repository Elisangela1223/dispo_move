import { View } from "react-native";
function LoginScreen(){
    return (

        <SafeAreaView>
        <view>
            <Image source={require('../assets/favicon.png')} />
            <Text>Proeja</Text>
        </view>
        <view>
            <view>
            <Text>Email</Text>
            <textInput>

                placeholder="Insira seu email"
            </textInput>
            </view>
            </view>
</SafeAreaView>

    );
}
