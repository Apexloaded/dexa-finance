import { requestAddresses } from "viem/actions";

export const protectedRoutes = ["/home", "/welcome"];
export const publicRoutes = ["/login", "/signup", "/test", "/"];
export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  app: {
    home: "/home",
    payments: {
      index: "/payments",
      deposit: "/wallet/deposit",
      withdraw: "/wallet/withdraw",
    },
    bills: {
      index: "/bills",
    },
    savings: {
      index: "/savings",
      id: (id: string) => `/savings/${id}`,
    },
    transaction: {
      index: "/transactions",
      id: (id: string) => `/transactions/${id}`,
    },
    messages: {
      index: "/messages",
      message: (address: string) => `/messages/view?u=${address}`,
    },
    bookmarks: "/bookmarks",
    live: {
      index: "/live",
      desktop: "/live/streams/video",
      webcam: "/live/streams/webcam",
      event: "/live/streams/event",
      credential: "/live/streams/key",
    },
    watch: (id: string) => `/watch?v=${id}`,
    connections: "/connections",

    profile: (username: string) => `/profile?u=${username}`,
    mints: (postId: string) => `/mints?id=${postId}`,
    hashtag: {
      index: "/hashtag",
      hashtag: (hashtag: string) => `/hashtag/${hashtag}`,
    },
    search: (query: string) => `/search?q=${query}`,

    community: "/community",
    settings: "/settings",
  },
};
