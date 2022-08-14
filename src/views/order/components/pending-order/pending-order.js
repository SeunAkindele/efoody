import React, { useContext } from "react";
import { Alert } from "react-native";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { format } from "../../../../components/utility/functions";
import { OrderContext } from "../../context/order.context";
import { Icon, IconInverse, OrderCard, Info, LeftInfo, RightInfo, HeaderFooterInfo, Trash } from "../order-info-card/order-info-card.styles";
import { url } from "../../../../api/url";

export const PendingOrder = ({ amount, status, token, order, loadOrder }) => {
	const { cancleOrder } = useContext(OrderContext);
	return (
		<>
			{status == 2 && (
				<OrderCard elevation={5}>
					<Spacer position="top" size="medium" />
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
					<Spacer position="top" size="large" />
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
							{!loadOrder ? (
								<>
									<Text color="orange" variant="small">
										PENDING
									</Text>
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
								</>
							) : (
								<>
									<Spacer position="left" size="medium" />
									<Text variant="tag">x</Text>
								</>
							)}

							<Spacer position="right" size="medium" />
						</RightInfo>
					</HeaderFooterInfo>
					<Spacer position="bottom" size="medium" />
				</OrderCard>
			)}
		</>
	);
};
