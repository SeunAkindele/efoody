import React from "react";
import { PendingCustomerOrder } from "../pending-customer-order/pending-customer-order";
import { DispatchedCustomerOrder } from "../dispatched-customer-order/dispatched-customer-order";
import { DeliveredCustomerOrder } from "../delivered-customer-order/delivered-customer-order";
import { CancledCustomerOrder } from "../cancled-customer-order/cancled-customer-order";

export const CustomerOrderInfoCard = ({ customerOrder: { order, status, token, pay_type, customer_id }, loadOrder }) => {
	return (
		<>
			<PendingCustomerOrder pay_type={pay_type} order={order} status={status} token={token} customer_id={customer_id} loadOrder={loadOrder} />

			<DispatchedCustomerOrder pay_type={pay_type} order={order} status={status} token={token} loadOrder={loadOrder} />

			<DeliveredCustomerOrder order={order} status={status} token={token} loadOrder={loadOrder} />

			<CancledCustomerOrder order={order} status={status} token={token} loadOrder={loadOrder} />
		</>
	);
};
