import React from "react";
import { SvgXml } from "react-native-svg";
import starGold from "../../../../../assets/star-gold";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { ItemCard, Info, LeftInfo, RightInfo, Icon, Unavailable } from "./item-info-card.styles";
import { format } from "../../../../components/utility/functions";
import { url } from "../../../../api/url";

export const ItemInfoCard = ({ item: { id, name, image, disabled_status, rates, price } }) => {
	return (
		<ItemCard elevation={5} key={id}>
			<Info>
				<LeftInfo>
					<Icon source={{ uri: url("vendor/images/", image) }} />
					<Text variant="tag">{name}</Text>
					<Spacer position="left" size="medium" />
					<Text variant="tag">₦{format(price)}</Text>
				</LeftInfo>
				<RightInfo>
					<SvgXml xml={starGold} width={15} height={15} />
					<Spacer position="left" size="medium" />
					<Text variant="tag">{rates.toFixed(1)}</Text>
					<Spacer position="left" size="medium" />
					{disabled_status == 1 && <Unavailable name="block" />}
				</RightInfo>
			</Info>
		</ItemCard>
	);
};
