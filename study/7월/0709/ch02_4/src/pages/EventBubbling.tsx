import type { SyntheticEvent } from "react"

export default function EventBubbling() {

    const onDivClick = (e: SyntheticEvent) => {
        const{isTrusted, target, bubbles, currentTarget} = e;
        console.log("div클릭 버블", isTrusted, target, bubbles, currentTarget)
    }
    

const onButtonClick = (e: SyntheticEvent) => {
        const{isTrusted, target, bubbles, currentTarget} = e;
        console.log("버블링버튼눌림", isTrusted, target, bubbles, currentTarget)
    }

    return (
        <div onClick={onDivClick}>
            <p>버블링</p>
        <button onClick={onButtonClick}>버블링버튼</button>
        </div>
    )

}




