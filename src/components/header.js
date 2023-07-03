import Link from 'next/link'

export default function Header() {
    return (
            <div className="w-full bg-sky-400">
                <div className="max-w border-solid border-thin mb-8">
                    <p className="pl-4"><Link href="/">Home</Link></p>
                </div>
            </div>
    )
}
