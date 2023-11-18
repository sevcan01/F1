import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stack, Tabs, withLayoutContext } from "expo-router";




const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator)

export default function RaceLayout() {
    return <TopTabs />
}