/**
 * async/ await : Promise를 더욱 쉽게 사용할 수 있도록 해준다.
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process01() {
    console.log('안녕하세요.');
    await sleep(1000);
    console.log('hello.');
    return true;
}

// process01().then(value => {
//     console.log(value);
// });

//
async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process02() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

console.log(123);
process02();