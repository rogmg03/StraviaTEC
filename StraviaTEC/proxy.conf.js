const PROXY_CONFIG = [
  {
    CONTEXT: [
      "/usuario",

    ],
    TARGET: "https://localhost:44388/api",
    SECURE: FALSE
  }
]

module.exports = PROXY_CONFIG;
