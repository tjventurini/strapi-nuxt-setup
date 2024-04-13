import type { Homepage } from '@/types/homepage'

export function useHomepage() {
  const getHomepage = async function () {
    const { find } = useStrapi()
    const { data: homepage, pending } = await useAsyncData('homepage', () =>
      find<Homepage>('homepage', {
        populate: {
          sections: {
            populate: '*',
          },
        },
      })
    )
    return {
      homepage,
      pending,
    }
  }

  return {
    getHomepage,
  }
}
