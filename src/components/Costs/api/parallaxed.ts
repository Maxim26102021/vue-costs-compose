/* eslint-disable */
export function parallaxed(item: any, e: any): void {
    const amountMovedX = (e.clientX * -0.2) / 8;
    const amountMovedY = (e.clientY * -0.2) / 8;
    item.style.transform =
        "translate(" + amountMovedX + "px," + amountMovedY + "px)";
}

export function unParallax(item: any): void {
    item.value.style.transform = "translate(0, 0)"
} 