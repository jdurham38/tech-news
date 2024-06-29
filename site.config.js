const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Josh",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Full Stack Engineer",
    bio: "Interested in all things tech",
    email: "joshswebdevelopment@gmail.com",
    linkedin: "joshuadurham38",
    github: "jdurham38",
    instagram: "j0shdurham",
  },
  projects: [
    {
      name: `Josh's Tech News`,
      href: "https://github.com/jdurham38/tech-news",
    },
    {
      name: `Josh's Personal Portfolio`,
      href: "https://portfolio-e051inhwl-jdurham38s-projects.vercel.app",
    },
    {
      name: `Josh's Freelance Portfolio`,
      href: "https://www.joshswebdevelopment.com",
    },
    

  ],
  // blog setting (required)
  blog: {
    title: "Josh's Tech News",
    description: "welcome to Josh's Tech News!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://www.joshstechnews.com",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
