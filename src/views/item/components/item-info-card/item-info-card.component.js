import React from "react";
import { SvgXml } from "react-native-svg";
import starGold from "../../../../../assets/star-gold";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { ItemCard, ItemCardCover, Address, Info, Rating, Section, SectionEnd } from "./item-info-card.styles";
import { format } from "../../../../components/utility/functions";
import { url } from "../../../../api/url";

export const ItemInfoCard = ({ item: { name, image, disabled_status, rates, price } }) => {
	return (
		<ItemCard elevation={5}>
			<ItemCardCover key={name} source={{ uri: url("vendor/images/", image) }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Section>
					<Rating>
						<SvgXml xml={starGold} width={20} height={20} />
						<Spacer position="left" size="small" />
						<Text variant="label">{rates.toFixed(1)}</Text>
					</Rating>
					<SectionEnd>
						{disabled_status == 1 && <Text variant="error">CLOSED TEMPORARILY</Text>}
						<Spacer position="left" size="large">
							{disabled_status == 0 && <SvgXml xml={open} width={20} height={20} />}
						</Spacer>
					</SectionEnd>
				</Section>
				<Address>₦{format(price)}</Address>
			</Info>
		</ItemCard>
	);
};
