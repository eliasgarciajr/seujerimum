import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { EventPage } from "./pages/EventPage";
import { ContactPage } from "./pages/ContactPage";
import { ProducePage } from "./pages/ProducePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "evento/:slug", Component: EventPage },
      { path: "contato", Component: ContactPage },
      { path: "produza-seu-evento", Component: ProducePage },
    ],
  },
]);
