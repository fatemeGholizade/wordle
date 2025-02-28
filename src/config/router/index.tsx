import { WordleContainer } from "@/containers/wordle";
import PageLayout from "@/layouts/PageLayout.tsx";
const routerList = [
  {
    path: "/",
    component: (
      <PageLayout>
        <WordleContainer />
      </PageLayout>
    ),
    isPrivate: true,
  },
];

export default routerList;
