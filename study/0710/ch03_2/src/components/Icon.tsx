import type {FC,CSSProperties} from 'react'

export type IconProps = {
    name: string;
    style?: CSSProperties;
}

export const Icon: FC<IconProps> = ({name, style}) => {
    return <span className='material-icons' style={style}>{name}</span>
}