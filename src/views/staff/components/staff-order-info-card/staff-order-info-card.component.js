import React from "react";
import { CancledStaffOrder } from "../cancled-staff-order/cancled-staff-order";
import { DeliveredStaffOrder } from "../delivered-staff-order/delivered-staff-order";
import { DispatchedStaffOrder } from "../dispatched-staff-order/dispatched-staff-order";
import { PendingStaffOrder } from "../pending-staff-order/pending-staff-order";

export const StaffOrderInfoCard = ({ staffOrder: { amount, status, token, customer_id, order, pay_type }, loadOrder }) => {
	return (
		<>
			<PendingStaffOrder pay_type={pay_type} order={order} amount={amount} status={status} token={token} customer_id={customer_id} loadOrder={loadOrder} />

			<DispatchedStaffOrder pay_type={pay_type} order={order} amount={amount} status={status} token={token} loadOrder={loadOrder} />

			<DeliveredStaffOrder order={order} amount={amount} status={status} token={token} loadOrder={loadOrder} />

			<CancledStaffOrder order={order} amount={amount} status={status} token={token} loadOrder={loadOrder} />
		</>
	);
};
