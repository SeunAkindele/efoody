import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { OrderIcon, OrderList, OrderHistory, Arrow, Progress, Refresh } from "./order-screen.styles";
import { Text } from "../../../../components/typography/text.component";
import { OrderInfoCard } from "../../components/order-info-card/order-info-card.component";
import { OrderContext } from "../../context/order.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { IsLoading } from "../../../../components/loading/loading.component";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { ErrorContainer } from "../../../../components/utility/error.component.styles";
import { strlen } from "../../../../components/utility/functions";

export const OrderScreen = ({ navigation }) => {
	const { order, getOrder, loading, pending } = useContext(OrderContext);
	const [loadOrder, setLoadOrder] = useState(false);

	useFocusEffect(
		React.useCallback(() => {
			setTimeout(() => {
				getOrder();
			}, 2000);
		}, []),
	);

	const reload = () => {
		setLoadOrder(true);
		setTimeout(() => {
			getOrder();
			setLoadOrder(false);
		}, 2000);
	};

	return (
		<SafeArea>
			<IsLoading loading={loading} />
			{loading && (
				<ErrorContainer>
					<Text variant="error">Fetching Data...</Text>
				</ErrorContainer>
			)}
			{order !== null && strlen(order) > 0 ? (
				<>
					<OrderList
						data={order}
						onRefresh={reload}
						refreshing={loading}
						keyExtractor={(item) => item.token}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("OrderDetails", {
										item: item,
									})
								}
								key={item.id}
							>
								<Spacer position="bottom" size="large">
									<FadeInView>
										<OrderInfoCard item={item} loadOrder={loadOrder} />
									</FadeInView>
								</Spacer>
							</TouchableOpacity>
						)}
					/>
					{pending.includes("2") && (
						<>
							<Refresh name="ios-refresh-circle" onPress={() => reload()} />
						</>
					)}
				</>
			) : (
				order == null && (
					<OrderList
						data={[{ id: 1 }]}
						onRefresh={reload}
						refreshing={loading}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<ErrorContainer>
								<OrderIcon bg="#ccc" icon="close" />
								<Spacer position="bottom" size="large">
									<Text>No orders today yet!</Text>
									<Text>Drag down to Refresh</Text>
								</Spacer>
							</ErrorContainer>
						)}
					/>
				)
			)}
			{order == "" && <View style={{ flex: 1 }}></View>}
			<OrderHistory onPress={() => navigation.navigate("OrderHistory")}>
				<Text color="white" variant="label">
					Past Orders
				</Text>
				<Arrow name="up" />
			</OrderHistory>
		</SafeArea>
	);
};
