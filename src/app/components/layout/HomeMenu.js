import Image from 'next/image'

export default function HomeMenu() {
    return(
        <section className="text-center">
            <div>
                <div className="h-48 relative">
                    <Image src="/sallad1.png" layout="fill" objectFit="contain" alt="sallad" />
                </div>
                <div className="h-48 relative">
                    <Image src="/sallad2.png" layout="fill" objectFit="contain" alt="sallad" />
                </div>
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-600 font-semibold">
                    Check out
                </h3>
                <h2 className="text-primary font-bold text-4xl italic">
                    Menu
                </h2>
            </div>
        </section>
    )
}
