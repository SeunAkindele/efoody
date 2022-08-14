import React from "react";
import { PendingOrder } from "../pending-order/pending-order";
import { DispatchedOrder } from "../dispatched-order/dispatched-order";
import { DeliveredOrder } from "../delivered-order/delivered-order";
import { CancledOrder } from "../cancled-order/cancled-order";

export const OrderInfoCard = ({ item: { amount, status, token, order }, loadOrder }) => {
	return (
		<>
			<PendingOrder amount={amount} status={status} token={token} order={order} loadOrder={loadOrder} />

			<DispatchedOrder amount={amount} status={status} token={token} order={order} loadOrder={loadOrder} />

			<DeliveredOrder amount={amount} status={status} token={token} order={order} loadOrder={loadOrder} />

			<CancledOrder amount={amount} status={status} token={token} order={order} loadOrder={loadOrder} />
		</>
	);
};
