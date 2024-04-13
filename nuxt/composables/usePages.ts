import type { Page } from '@/types/page'

export function usePages() {
  const getPages = async function () {
    const { find } = useStrapi()
    const { data: pages, pending } = await useAsyncData('pages', () =>
      find<Page>('pages')
    )
  }

  return {
    getPages,
  }
}
