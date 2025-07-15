import type { SyntheticEvent } from "react"

export default function ReactOnCLick() {
    const OnClick = (e: SyntheticEvent) => {
        const{isTrusted, target, bubbles} = e;
        console.log("mouse click occurs on <button>", isTrusted, target, bubbles)
    }
    return <div>
        <p>ReactOnClick</p>
        <button onClick={OnClick}>온클릭버튼</button>
    </div>
}