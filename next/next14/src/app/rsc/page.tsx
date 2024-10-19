import Counter from '@/components/client/counter'
import DynamicContent from '@/components/server/delayed'
import Delayed from '@/components/server/delayed'
import TextBoard from '@/components/server/text-board'
import React, { Suspense } from 'react'

const RSC = () => {
    
  return (
    <div>
        {/* client */}
        <Counter serverComp={<TextBoard/>}  />


        {/* server */}
        <Suspense fallback={<>loading...</>}>
            <DynamicContent />
        </Suspense>
    </div>
  )
}

export default RSC