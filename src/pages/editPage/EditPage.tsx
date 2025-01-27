import { DataProvider } from './DataProvider'

export const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  return <DataProvider id={(await params).id} />
}
