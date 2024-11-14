'use client'

import { usePathname } from 'next/navigation'

const Placeholder = () => {
  const path = usePathname()
  return <>{path}</>
}

export default Placeholder
