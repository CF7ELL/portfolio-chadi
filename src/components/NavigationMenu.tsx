import { Button, Drawer } from "antd"
import { Menu } from "lucide-react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"


// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const MenuItem = ({ label, scrollToId, isOnTop, onClickExtra = undefined }: {label: string, scrollToId: string, isOnTop: boolean, onClickExtra?: Function}) => (<li>
    <Button
    onClick={() => {document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" }); onClickExtra?.();}}
    type="text"
    size='large'
    classNames={{ content: `text-2xl transition-all ${isOnTop ? 'text-white text-shadow-lg' : 'text-shadow-grey'}`, root: 'mx-2'}}
    >
    {label}
    </Button>
</li>)


export default function NavigationMenu() {    
    const [isOnTop, setIsOnTop] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const { scrollY } = useScroll({axis: 'y'})

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) setIsOnTop(false);
        else setIsOnTop(true);
    })

    const items = [
        { key: 'work-exp-btn', label: 'Work Experience', scrollToId: 'work-exp' },
        { key: 'work-portfolio-btn', label: 'Work Portfolio', scrollToId: 'work-portfolio' },
        { key: 'design-portfolio-btn', label: 'Design Portfolio', scrollToId: 'design-portfolio' },
        { key: 'artworks-btn', label: 'Artworks', scrollToId: 'artworks' },
    ];
    return <>
        <ul className={"hidden xl:flex divide-x " + (isOnTop ? 'divide-white' : 'divide-shadow-grey')}>
            {items.map(item => <MenuItem label={item.label} scrollToId={item.scrollToId} isOnTop={isOnTop}  key={item.key}/>)}
        </ul>
        <Button
            onClick={() => setIsOpen(v=>!v)}
            type="text"
            size='large'
            classNames={{ 
                icon: `text-2xl transition-all ${isOnTop ? 'text-white text-shadow-lg' : 'text-shadow-grey'}`,
                root: 'xl:hidden!',
            }}
            icon={<Menu />}
        />
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(v=>!v)}
            destroyOnHidden
        >
            <ul>
                {items.map(item => <li key={item.key}>
                    <MenuItem label={item.label} scrollToId={item.scrollToId} isOnTop={false} onClickExtra={() => setIsOpen(v=>!v)}/>
                </li>)}
            </ul>
        </Drawer>
    </>
}
