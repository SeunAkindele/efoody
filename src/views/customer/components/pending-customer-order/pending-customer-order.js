import React, { useContext } from "react";
import { Alert } from "react-native";
import { Text } from "../../../../components/typography/text.component";
import { format } from "../../../../components/utility/functions";
import { CustomerOrderCard, Info, LeftInfo, RightInfo, Trash, Check, Icon, IconInverse, HeaderFooterInfo } from "../customer-order-info-card/customer-order-info-card.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { url } from "../../../../api/url";
import { CustomerContext } from "../../context/customer.context";

export const PendingCustomerOrder = ({ pay_type, order, status, token, customer_id, loadOrder }) => {
	const { cancleOrder, dispatchOrder } = useContext(CustomerContext);
	return (
		<>
			{status == 2 && (
				<CustomerOrderCard elevation={5}>
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
								<Text variant="tag">{!loadOrder ? `₦${item.price}` : "--- ---"}</Text>
							</LeftInfo>
							<RightInfo>
								<Text variant="tag">{!loadOrder ? `₦${format(item.amount)}` : "--- ---"}</Text>
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
									<Spacer position="left" size="medium" />
									<Text variant="small">{pay_type}</Text>
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
									<Check
										onPress={() => {
											Alert.alert(
												"Dispatch Order",
												"Are you sure?",
												[
													{
														text: "Cancel",
														style: "cancel",
													},
													{ text: "OK", onPress: () => dispatchOrder(token, customer_id) },
												],
												{ cancelable: false },
											);
										}}
										name="checkcircle"
									/>
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
				</CustomerOrderCard>
			)}
		</>
	);
};
