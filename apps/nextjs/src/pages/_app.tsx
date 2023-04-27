import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const a: string = 4

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <img></img>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
