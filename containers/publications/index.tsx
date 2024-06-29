import Seperator from "@/components/seperator";
import { Center, Container } from "./styles";
import PublicationCard from "./publication-card";
import { PUBLICATIONS_LIST } from "@/constants/data";

const Publications = (): JSX.Element => {
    return <Container>
    <Center>
      <Seperator text="Publications" />
    </Center>
    {PUBLICATIONS_LIST.map(list => <PublicationCard key={list.id} title={list.title} date={list.date} articleLink={list.articleLink} />)}
    </Container>
};

export default Publications