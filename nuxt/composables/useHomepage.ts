import type { Homepage } from '@/types/homepage'

export function useHomepage() {
  const getHomepage = async function () {
    const { find } = useStrapi()
    const { data: homepage } = await useAsyncData('homepage', () =>
      find<Homepage>('homepage')
    )
  }

  return {
    getHomepage,
  }
}
