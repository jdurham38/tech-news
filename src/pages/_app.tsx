import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import posthog from "posthog-js"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  posthog.init('phc_Hx2VOCQg5vLEv6FAmUQoBLesHU4uymsgkn0yHXvPKPD',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
    }
)
  return (
    <>
          <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9456367246304075"
     crossOrigin="anonymous"></script></head>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
      </>
  )
}

export default App
