import React from "react";
import { Text } from "../../../../components/typography/text.component";
import { format } from "../../../../components/utility/functions";
import { CustomerOrderCard, Info, LeftInfo, RightInfo, Icon, IconInverse, HeaderFooterInfo } from "../customer-order-info-card/customer-order-info-card.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { url } from "../../../../api/url";

export const DeliveredCustomerOrder = ({ order, status, token, loadOrder }) => {
	return (
		<>
			{status == 0 && (
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
				</CustomerOrderCard>
			)}
		</>
	);
};
