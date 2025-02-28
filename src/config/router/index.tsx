import { WordleContainer } from "@/containers/wordle";
import PageLayout from "@/layouts/PageLayout.tsx";
// can have as many items as needed for pages
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
