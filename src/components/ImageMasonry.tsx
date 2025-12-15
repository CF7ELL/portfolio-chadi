import { Image, Masonry } from "antd";

const renderItem = ({ data }: {
    key: React.Key;
    column?: number;
    height?: number;
    children?: React.ReactNode;
    data: string;
}) => (
    <Image src={`${data}?w=523&auto=format`} className='w-full rounded-2xl drop-shadow-lg overflow-clip' classNames={{ cover: 'rounded-2xl overflow-clip' }} alt={data.split("/").at(-1)}/>
)
export default function ImageMasonry({ className = undefined, images }: { className?: string, images: Array<string>}) {
    return <Masonry
        className={className}
        columns={{ xs: 1, sm: 2, md: 3 }}
        gutter={{ xs: 8, sm: 12, md: 16 }}
        items={images.map((img, index) => ({
            key: `item-${index}`,
            data: img,
        }))}
        itemRender={renderItem}
    />
}
