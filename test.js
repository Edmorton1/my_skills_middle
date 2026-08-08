let i = 0;

while (true) {
    i++;
    console.log(i);
    await new Promise((res) => setTimeout(res, 100));
}