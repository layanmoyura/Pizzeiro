export default function SectionHeader({subHeading, heading}) {
    return (
        <>
            <h3 className="uppercase text-gray-600 font-semibold leading-4">
                {subHeading}
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">
                {heading}
            </h2>
        </>
    );
}