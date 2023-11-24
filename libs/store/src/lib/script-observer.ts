function waitForGigya () {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            const gigya = (window as any).gigya as any;
            if (gigya && gigya.thisScript) {
                console.log('Gigya loaded 🥳');
                clearInterval(interval);
                resolve(gigya);
            }
        }, 100);
    });
}

export async function* GigyaScriptState() {
    yield 'loading';
    await waitForGigya()
    yield 'ready'; 
}