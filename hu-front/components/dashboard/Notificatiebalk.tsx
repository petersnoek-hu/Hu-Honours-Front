import { View, Text, Image } from "react-native";

type NotificatieProps = {
    level: number;
}

export default function NofitifcatieBalk({level}: NotificatieProps){

    return(
        <View>
            <View>
                <Text>Het volgende level wat je kan spelen</Text>
                <Text>Level {level}</Text>
            </View>
        </View>
    )
}