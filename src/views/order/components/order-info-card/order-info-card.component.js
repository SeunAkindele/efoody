import React, { useContext } from "react";
import { Alert } from "react-native";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { format, readableDate } from "../../../../components/utility/functions";
import { OrderContext } from "../../context/order.context";
import { Icon, IconInverse, OrderCard, Info, LeftInfo, RightInfo, Trash, HeaderFooterInfo, Check } from "./order-info-card.styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { url } from "../../../../api/url";

export const OrderInfoCard = ({ item: { amount, status, token, date, pay_type, order }, loadOrder }) => {
	const { cancleOrder, confirmDelivery } = useContext(OrderContext);

	return (
		<>
			{status == 2 && (
				<OrderCard elevation={5}>
					<HeaderFooterInfo>
						<LeftInfo>
							{!loadOrder ? (
								<Trash
									onPress={() => {
										Alert.alert(
											"Cancle Order",
											"Are you sure?",
											[
												{
													text: "Cancel",
													style: "cancel",
												},
												{ text: "OK", onPress: () => cancleOrder(token) },
											],
											{ cancelable: false },
										);
									}}
									name="closecircle"
								/>
							) : (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="tag">x</Text>
								</>
							)}
						</LeftInfo>
						<RightInfo>
							<Text variant="small">
								{!loadOrder ? <FontAwesome5 name="calendar-alt" /> : "---"}
								{!loadOrder ? `   ${readableDate(date)}` : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>

					{order.map((item, i) => (
						<Info key={i}>
							<LeftInfo>
								{!loadOrder ? <Icon source={{ uri: url("vendor/images/", item.image) }} /> : <IconInverse name="ios-ellipsis-horizontal-circle" />}

								<Text variant="tag">{!loadOrder ? item.name : "--- ---"}</Text>
								<Spacer position="right" size="large" />
								<Text variant="tag">{!loadOrder ? item.qty : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? "x" : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? item.price : "--- ---"}</Text>
							</LeftInfo>
							<RightInfo>
								<Text variant="tag">{!loadOrder ? `₦${format(amount)}` : "--- ---"}</Text>
							</RightInfo>
						</Info>
					))}
					<Spacer position="top" size="medium" />
					<HeaderFooterInfo>
						<LeftInfo>
							{!loadOrder ? (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="small">{token}</Text>
								</>
							) : (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="tag">---</Text>
								</>
							)}
						</LeftInfo>
						<RightInfo>
							<Text color="orange" variant="small">
								{!loadOrder ? "PENDING" : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>
					<Spacer position="bottom" size="medium" />
				</OrderCard>
			)}
			{status == 1 && (
				<OrderCard elevation={5}>
					<HeaderFooterInfo>
						<LeftInfo>
							{!loadOrder ? (
								<Check
									onPress={() => {
										Alert.alert(
											"Confirm Delivery",
											"Are you sure?",
											[
												{
													text: "Cancel",
													style: "cancel",
												},
												{ text: "OK", onPress: () => confirmDelivery(token) },
											],
											{ cancelable: false },
										);
									}}
									name="checkcircle"
								/>
							) : (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="tag">x</Text>
								</>
							)}
						</LeftInfo>
						<RightInfo>
							<Text variant="small">
								{!loadOrder ? <FontAwesome5 name="calendar-alt" /> : "---"}
								{!loadOrder ? `   ${readableDate(date)}` : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>

					{order.map((item, i) => (
						<Info key={i}>
							<LeftInfo>
								{!loadOrder ? <Icon source={{ uri: url("vendor/images/", item.image) }} /> : <IconInverse name="ios-ellipsis-horizontal-circle" />}

								<Text variant="tag">{!loadOrder ? item.name : "--- ---"}</Text>
								<Spacer position="right" size="large" />
								<Text variant="tag">{!loadOrder ? item.qty : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? "x" : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? item.price : "--- ---"}</Text>
							</LeftInfo>
							<RightInfo>
								<Text variant="tag">{!loadOrder ? `₦${format(amount)}` : "--- ---"}</Text>
							</RightInfo>
						</Info>
					))}
					<Spacer position="top" size="medium" />
					<HeaderFooterInfo>
						<LeftInfo>
							{!loadOrder ? (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="small">{token}</Text>
								</>
							) : (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="tag">---</Text>
								</>
							)}
						</LeftInfo>
						<RightInfo>
							<Text color="blue" variant="small">
								{!loadOrder ? "DISPATCHED" : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>
					<Spacer position="bottom" size="medium" />
				</OrderCard>
			)}
			{status == 0 && (
				<OrderCard elevation={5}>
					<Spacer position="top" size="medium" />
					<HeaderFooterInfo>
						<LeftInfo></LeftInfo>
						<RightInfo>
							<Text variant="small">
								{!loadOrder ? <FontAwesome5 name="calendar-alt" /> : "---"}
								{!loadOrder ? `   ${readableDate(date)}` : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>

					{order.map((item, i) => (
						<Info key={i}>
							<LeftInfo>
								{!loadOrder ? <Icon source={{ uri: url("vendor/images/", item.image) }} /> : <IconInverse name="ios-ellipsis-horizontal-circle" />}

								<Text variant="tag">{!loadOrder ? item.name : "--- ---"}</Text>
								<Spacer position="right" size="large" />
								<Text variant="tag">{!loadOrder ? item.qty : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? "x" : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? item.price : "--- ---"}</Text>
							</LeftInfo>
							<RightInfo>
								<Text variant="tag">{!loadOrder ? `₦${format(amount)}` : "--- ---"}</Text>
							</RightInfo>
						</Info>
					))}
					<Spacer position="top" size="medium" />
					<HeaderFooterInfo>
						<LeftInfo>
							{!loadOrder ? (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="small">{token}</Text>
								</>
							) : (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="tag">---</Text>
								</>
							)}
						</LeftInfo>
						<RightInfo>
							<Text color="success" variant="small">
								{!loadOrder ? "DELIVERED" : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>
					<Spacer position="bottom" size="medium" />
				</OrderCard>
			)}
			{status == 3 && (
				<OrderCard elevation={5}>
					<Spacer position="top" size="medium" />
					<HeaderFooterInfo>
						<LeftInfo></LeftInfo>
						<RightInfo>
							<Text variant="small">
								{!loadOrder ? <FontAwesome5 name="calendar-alt" /> : "---"}
								{!loadOrder ? `   ${readableDate(date)}` : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>

					{order.map((item, i) => (
						<Info key={i}>
							<LeftInfo>
								{!loadOrder ? <Icon source={{ uri: url("vendor/images/", item.image) }} /> : <IconInverse name="ios-ellipsis-horizontal-circle" />}

								<Text variant="tag">{!loadOrder ? item.name : "--- ---"}</Text>
								<Spacer position="right" size="large" />
								<Text variant="tag">{!loadOrder ? item.qty : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? "x" : "--- ---"}</Text>
								<Spacer position="right" size="small" />
								<Text variant="tag">{!loadOrder ? item.price : "--- ---"}</Text>
							</LeftInfo>
							<RightInfo>
								<Text variant="tag">{!loadOrder ? `₦${format(amount)}` : "--- ---"}</Text>
							</RightInfo>
						</Info>
					))}
					<Spacer position="top" size="medium" />
					<HeaderFooterInfo>
						<LeftInfo>
							{!loadOrder ? (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="small">{token}</Text>
								</>
							) : (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="tag">---</Text>
								</>
							)}
						</LeftInfo>
						<RightInfo>
							<Text color="error" variant="small">
								{!loadOrder ? "CANCLED" : "---"}
							</Text>
							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>
					<Spacer position="bottom" size="medium" />
				</OrderCard>
			)}
		</>
	);
};
