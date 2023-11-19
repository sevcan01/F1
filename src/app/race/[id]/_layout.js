import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stack, Tabs, withLayoutContext } from "expo-router";
import { Colors } from "../../../Contants/Colors";




const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator)

export default function RaceLayout() {
    return (
        <>
            <Stack.Screen options={{ title: 'Race details', headerBackTitleVisible: false }} />
            <TopTabs screenOptions={{ tabBarLabelStyle: { fontFamily: 'F1-Bold' }, tabBarStyle: { backgroundColor: Colors.primary }, tabBarInactiveTintColor: 'gainsboro', tabBarActiveTintColor: 'white', tabBarIndicatorStyle: { backgroundColor: 'white', height: 5 } }} />


        </>
    )
}