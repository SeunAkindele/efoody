import React from "react";
import { SvgXml } from "react-native-svg";
import starGold from "../../../../../assets/star-gold";
// import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { MenuCard, Info, LeftInfo, RightInfo, Icon, Available, Unavailable } from "./menu-info-card.styles";
import { format } from "../../../../components/utility/functions";
import { url } from "../../../../api/url";

export const MenuInfoCard = ({ menu: { id, name, image, disabled_status, rates, price } }) => {
	return (
		<MenuCard elevation={5} key={id}>
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
			{/* <MenuCardCover source={{ uri: url("vendor/images/", image) }} />
			<Info>
				
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
			</Info> */}
		</MenuCard>
	);
};
