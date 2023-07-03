import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {

    return (
            <Layout>
            <div className="grid grid-flow-row grid-cols-1">
                <div className="col-span-1">
                  <h1 className="w-full items-center text-center">Workona Readonly Public Export Tool</h1>
                </div>
            </div>
            <div class="grid grid-flow-row grid-cols-1">
                <ul className="list-disc">
                    <li key="/sample"><Link href="/sample">Sample</Link></li>
                </ul>
            </div>
      </Layout>
  )
}
