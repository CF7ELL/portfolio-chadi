import { Divider, Typography } from "antd";

export default function Section({ children, title, id }: {children: any, title: string, id: string}) {
    return <>
        <div id={id} className='-mt-16 '/>
        <div className="max-w-7xl w-full flex flex-col gap-4">
            <Divider size='large' titlePlacement='start'>
                <Typography.Title>{title}</Typography.Title>
            </Divider>
            {children}
        </div>
    </>
}