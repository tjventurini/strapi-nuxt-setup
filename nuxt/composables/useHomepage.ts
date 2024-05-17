import type { Homepage } from '@/types/homepage'

export function useHomepage() {
  const getHomepage = async function () {
    const { findOne } = useStrapi()
    const { data: homepage, pending } = await useAsyncData('homepage', () =>
      findOne<Homepage>('homepage', {
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
