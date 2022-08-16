import React from "react";
import { SvgXml } from "react-native-svg";
import starGold from "../../../../../assets/star-gold";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { MenuCard, MenuCardCover, Address, Info, Rating, Section, SectionEnd, Available, Unavailable } from "./menu-info-card-details.styles";
import { format } from "../../../../components/utility/functions";
import { url } from "../../../../api/url";

export const MenuInfoCardDetails = ({ menu: { id, name, image, disabled_status, rates, price } }) => {
	return (
		<MenuCard elevation={5} key={id}>
			<MenuCardCover source={{ uri: url("vendor/images/", image) }} />
			<Info>
				<Section>
					<Rating>
						<Text variant="label">{name}</Text>
						<Spacer position="left" size="small" />
						<SvgXml xml={starGold} width={20} height={20} />
						<Spacer position="left" size="small" />
						<Text variant="label">{rates.toFixed(1)}</Text>
					</Rating>
					<SectionEnd>
						<Spacer position="left" size="large" />
						<Address>₦{format(price)}</Address>
						{disabled_status == 1 && <Unavailable name="block" />}
					</SectionEnd>
				</Section>
			</Info>
		</MenuCard>
	);
};
