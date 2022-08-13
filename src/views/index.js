import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "../components/theme";
import { MenuContextProvider } from "./menu/context/menu.context";
import { CartContextProvider } from "./cart/context/cart.context";
import { OrderContextProvider } from "./order/context/order.context";
import { StaffContextProvider } from "./staff/context/staff.context";
import { CustomerContextProvider } from "./customer/context/customer.context";
import { ItemContextProvider } from "./item/context/item.context";
import { ItemManagementContextProvider } from "./item/context/item-management.context";
import { LoginContextProvider } from "./account/context/login.context";
import { RegisterContextProvider } from "./account/context/register.context";
import { Navigation } from "../components/navigation";
import { SettingContextProvider } from "./setting/context/setting.context";
import { DashboardContextProvider } from "./dashboard/context/dashboard.context";

const Efoody = () => {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<RegisterContextProvider>
					<LoginContextProvider>
						<SettingContextProvider>
							<ItemManagementContextProvider>
								<ItemContextProvider>
									<CustomerContextProvider>
										<StaffContextProvider>
											<OrderContextProvider>
												<CartContextProvider>
													<MenuContextProvider>
														<DashboardContextProvider>
															<Navigation />
														</DashboardContextProvider>
													</MenuContextProvider>
												</CartContextProvider>
											</OrderContextProvider>
										</StaffContextProvider>
									</CustomerContextProvider>
								</ItemContextProvider>
							</ItemManagementContextProvider>
						</SettingContextProvider>
					</LoginContextProvider>
				</RegisterContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
};

export default Efoody;
