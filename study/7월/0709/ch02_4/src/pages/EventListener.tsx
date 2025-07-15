document.getElementById("root")?.addEventListener("click", (e:Event)=>{
    const {isTrusted, target, bubbles} = e;
    console.log("리스너클릭", isTrusted, target, bubbles)
})

document.getElementById("root")?.addEventListener("click", (e:Event)=>{
    const {isTrusted, target, bubbles} = e;
    console.log("리스너클릭2", isTrusted, target, bubbles)
})

export default function EventListener() {
    return <div>EventListener</div>
}