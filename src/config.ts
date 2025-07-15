export const config = {
  settings: {
    wsol_pc_mint: "So11111111111111111111111111111111111111112",
    inspect_url: "https://gmgn.ai/sol/token/",
    inspect_name: "👽 Open GMGN",
    inspect_url_wallet: "https://gmgn.ai/sol/address/",
    show_max_duplicates: 5,
    show_duplicate_min_holders: 3, // Minimum wallets that need to hold the token before showing it as duplicate
    fetch_interval_ms: 15000, // Minimum interval between API calls per wallet
  },
  db: {
    db_name_tracker_transfers: "src/db/holdings.db", // Sqlite Database location
  },
  wallets: [
    {
      name: "Wallet0",
      address: "GchNdch4w3L9SoRmHvD6G4zNYrNdQgpScLVF7DojMK4s",
      emoji: "👽",
      tags: [],
    },
    {
      name: "Wallet1",
      address: "KEN7s6mHAFpqmvppk7L9VaJW3htu3jz6z3dDjiaWdYT",
      emoji: "🀄️",
      tags: [],
    },
    {
      name: "Frank",
      address: "CRVidEDtEUTYZisCxBZkpELzhQc9eauMLR3FWg74tReL",
      emoji: "😂",
      tags: [],
    },
    {
      name: "Profit",
      address: "G5nxEXuFMfV74DSnsrSatqCW32F34XUnBeq3PfDS7w5E",
      emoji: "💰",
      tags: [],
    },
    {
      name: "DigBen",
      address: "UUAhspPgUdGuXUnokmxERH1VvNGNh1ouN3mfcbfV8yd",
      emoji: "🚀",
      tags: [],
    },
  ],
};
