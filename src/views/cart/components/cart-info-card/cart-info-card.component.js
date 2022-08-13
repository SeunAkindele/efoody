import React, { useContext } from "react";
import { url } from "../../../../api/url";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { format } from "../../../../components/utility/functions";
import { CartContext } from "../../context/cart.context";
import { Icon, IconInverse, CartCard, Info, LeftInfo, RightInfo, ArrowLeft, ArrowRight, Trash } from "./cart-info-card.styles";

export const CartInfoCard = ({ cart: { id, name, qty, amount, image, item_id }, loadCart }) => {
	const { updateCart, deleteCart } = useContext(CartContext);

	return (
		<CartCard elevation={5}>
			<Info>
				<LeftInfo>
					{!loadCart ? <Icon source={{ uri: url("vendor/images/", image) }} /> : <IconInverse name="ios-ellipsis-horizontal-circle" />}

					<Text variant="tag">{!loadCart ? name : "--- ---"}</Text>
					{!loadCart && (
						<>
							<ArrowLeft onPress={() => (qty > 1 ? updateCart(item_id, "minus") : deleteCart(id, item_id))} name="left" />
							<Text variant="caption">{!loadCart ? qty : "---"}</Text>
							<ArrowRight onPress={() => updateCart(item_id)} name="right" />
						</>
					)}
				</LeftInfo>
				<RightInfo>
					<Spacer position="right" size="large">
						<Text variant="caption">{!loadCart ? `₦${format(amount)}` : "---"}</Text>
					</Spacer>
					<Spacer position="right" size="small">
						{!loadCart ? <Trash onPress={() => deleteCart(id, item_id)} name="closecircle" /> : <Text variant="label">--</Text>}
					</Spacer>
				</RightInfo>
			</Info>
		</CartCard>
	);
};
