const generateMainBoard = function () {
    const tabella = document.querySelector(".board");
    for(i = 1; i <= 76; i++) {
        const cells = document.createElement("div");
        cells.classList.add = ("cell");
        cells.textContent = i 
        tabella.appendChild(cells);
        
    }
}

generateMainBoard()

const fillArray = function () {
    const nums = [];
    for(i = 1; i < 76; i++) {
        nums.push(i)
    }
    return nums
    
}

const getRandomNum = function (numbers) {
   return numbers = math.ceil(math.random()* 76)
}

const generateRandNumber = function () {
    // stampare il numero
    // associare la classe...
}

const generateUserBoards = function () {
    // genera e gestisce le tabelline
}