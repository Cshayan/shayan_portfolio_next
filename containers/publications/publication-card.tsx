import { GreenRegularText, WhiteRegularText } from "@/styles/global-styles";
import { HorizontalMarginDiv, SpaceAroundDiv, StyledPublicationCard } from "./styles";
import { IconComponent } from "../contact";

interface IPublicationCard {
    title: string;
    date: string;
    articleLink: string;
}


const PublicationCard = ({title, date, articleLink}: IPublicationCard): JSX.Element => {

    const onPublicationClick = (): void => {
       window.open(articleLink, '_blank')
    }

    return <StyledPublicationCard onClick={onPublicationClick}>
        <SpaceAroundDiv>
        <HorizontalMarginDiv>
          <IconComponent value="medium" />
          </HorizontalMarginDiv>
        <div>
        <WhiteRegularText >{title}</WhiteRegularText>
            <GreenRegularText style={{ fontSize: "1rem" }}>{date}</GreenRegularText>
        </div>
        </SpaceAroundDiv>
    </StyledPublicationCard>
};

export default PublicationCard;