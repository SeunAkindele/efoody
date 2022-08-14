import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MenuNavigator } from "./menu.navigator";
import { CartNavigator } from "./cart.navigator";
import { OrderNavigator } from "./order.navigator";
import { StaffNavigator } from "./staff.navigator";
import { AdminNavigator } from "./admin.navigator";
import { SettingNavigator } from "./setting.navigator";
import { CustomerNavigator } from "./customer.navigator";
import { ItemNavigator } from "./item.navigator";
import { DashboardNavigator } from "./dashboard.navigator";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const AppNavigator = ({ authorization }) => {
	const nav = () => {
		if (authorization == 0) {
			return (
				<>
					<Tab.Screen name="Menu" component={MenuNavigator} />
					<Tab.Screen name="Cart" component={CartNavigator} />
					<Tab.Screen name="Order" component={OrderNavigator} />
					<Tab.Screen name="Setting" component={SettingNavigator} />
				</>
			);
		} else if (authorization == 1) {
			return (
				<>
					<Tab.Screen name="Dashboard" component={DashboardNavigator} />
					<Tab.Screen name="Order" component={StaffNavigator} />
					<Tab.Screen name="Customer" component={CustomerNavigator} />
					<Tab.Screen name="Setting" component={SettingNavigator} />
				</>
			);
		} else if (authorization == 2) {
			return (
				<>
					<Tab.Screen name="Dashboard" component={DashboardNavigator} />
					<Tab.Screen name="Order" component={StaffNavigator} />
					<Tab.Screen name="Customer" component={CustomerNavigator} />
					<Tab.Screen name="Staff" component={AdminNavigator} />
					<Tab.Screen name="Item" component={ItemNavigator} />
					<Tab.Screen name="Setting" component={SettingNavigator} />
				</>
			);
		}
	};

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;

					if (route.name === "Menu") {
						iconName = "md-restaurant";
						return <Ionicons name={iconName} size={size} color={color} />;
					} else if (route.name === "Dashboard") {
						iconName = "view-dashboard";
						return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
					} else if (route.name === "Cart") {
						iconName = "shopping-cart";
						return <MaterialIcons name={iconName} size={size} color={color} />;
					} else if (route.name === "Order") {
						iconName = "md-basket";
						return <Ionicons name={iconName} size={size} color={color} />;
					} else if (route.name === "Customer") {
						iconName = "user";
						return <Feather name={iconName} size={size} color={color} />;
					} else if (route.name === "Item") {
						iconName = "fast-food-outline";
						return <Ionicons name={iconName} size={size} color={color} />;
					} else if (route.name === "Staff") {
						iconName = "user";
						return <Feather name={iconName} size={size} color={color} />;
					} else if (route.name === "Setting") {
						iconName = "ios-settings";
						return <Ionicons name={iconName} size={size} color={color} />;
					}
				},
				tabBarActiveTintColor: "#138000",
				tabBarInactiveTintColor: "#ccc",
				headerShown: false,
			})}
		>
			{nav()}
		</Tab.Navigator>
	);
};
