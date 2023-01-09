const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.src = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
       element.classList.add('correct') 
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SBR3587.jpg?v=1647385762',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SR7149.jpg?v=1647387055',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP2507.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP2867.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP3076.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SP26001.jpg?v=1647386029',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SP24515.jpg?v=1647386028',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/B5021-10.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/B5042.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/BL2071.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1062-31-3451.jpg?v=1669633473',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/121-61A-01.jpg?v=1660690279',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1011-81-02.jpg?v=1667688152',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/036-64A-01.jpg?v=1661471839',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/096-62A-01.jpg?v=1660876971',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/022-31-01.jpg?v=1660365489',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/410-21-01w.jpg?v=1660608948',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-palm-tree-pendant-035-81-02-837323_3000x.jpg?v=1628652092',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-akoya-pearl-oyster-shell-pendant-226-21-31y-705359_3000x.jpg?v=1622499842',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opalite-naia-lovers-pendant-053-31-31-505117_3000x.jpg?v=1624506666',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-plumeria-bar-bracelet-with-engraving-1210030-179711_3000x.jpg?v=1630379918',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-nalu-diamond-ring-3mm-1310004050-905699_3000x.jpg?v=1630553897',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/turquoise-puuwai-naupaka-ring-0730245050-248905_3000x.jpg?v=1623547304',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-bangle-with-honu-engraving-506728_3000x.jpg?v=1626056570',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/turquoise-bar-pendant-343115_3000x.jpg?v=1624671639',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-heart-earrings-with-plumeria-engraving-720525-801474_3000x.jpg?v=1628559470',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-two-tone-barrel-pendant-720514-476811_3000x.jpg?v=1623302388',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-hanalei-pier-pendant-994-91-21-264068_3000x.jpg?v=1653611899',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-all-seeing-eye-earrings-990-92-11-490348_3000x.jpg?v=1653611801',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-universe-earrings-577120_3000x.jpg?v=1653611567',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-moana-teardrop-pendant-336923_3000x.jpg?v=1653611508',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-horizon-pendant-714-91-11-264611_3000x.jpg?v=1653611685',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/collections/alamea/products/larimar-aloha-kakou-necklace-yg?variant=34703105163400',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SOP1039.jpg?v=1647386028',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-pave-diamond-sunflower-pendant-837-21-01y-478345_3000x.jpg?v=1622500894',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pave-heliconia-pendant-457-11-01-234328_3000x.jpg?v=1666323651',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/abalone-fountain-pendant-307156_3000x.jpg?v=1671855629',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opalite-moon-star-sleek-bangle-888-34-31-271957_360x.jpg?v=1623280836',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-pave-sand-dollar-pendant-with-larimar-566-21-11y-298446_360x.jpg?v=1622686041',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/beachside-palm-tree-earrings-855-12-01-640275_360x.jpg?v=1623282153',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-aquamarine-larimar-ring-955574_360x.jpg?v=1622948523',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: '',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-compass-earrings-with-diamonds-846-22-01y-408392_360x.jpg?v=1622503661',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-gecko-pendant-007-21-01w-614003_360x.jpg?v=1628471502',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-hokuhele-eternity-pendant-502-21-01w-537265_360x.jpg?v=1628476451',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: '',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-larimar-cassiopeia-pendant-811-21-11y-182014_360x.jpg?v=1622501930',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-bangle-with-honu-engraving-443077_360x.jpg?v=1626056513',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/aloha-kaei-diamond-ring-720755050-108622_360x.jpg?v=1623738790',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-key-charm-821172_360x.jpg?v=1622500739',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/turquoise-nalu-channel-ring-758418_540x.jpg?v=1623640914',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-cross-charm-228154_360x.jpg?v=1622500318',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-heart-earrings-with-opal-333822_360x.jpg?v=1622502589',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-fleur-de-lis-pendant-720587-515688_360x.jpg?v=1625379558',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/aumakua-petroglyph-pendant-720709-278193_360x.jpg?v=1623302376',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: '',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-infinity-scroll-pendant-720519-273905_360x.jpg?v=1625617905',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/14k-pohai-charm-pendant-720546-988358_360x.jpg?v=1625617451',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: true },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-honu-infinity-pendant-184-91-11-777179_360x.jpg?v=1653611447',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-lava-flow-pendant-708-91-21-743505_360x.jpg?v=1653611763',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-pave-wave-pendant-237-91-21-498891_360x.jpg?v=1653611389',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-flippers-pendant-220-91-11-247101_360x.jpg?v=1653611437',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pearl-plumeria-cluster-pendant-211-91-11-146133_360x.jpg?v=1653612071',
        answers: [
            { text: 'Island Fine Jewelry', correct: true },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/abalone-eagle-ray-pendant-391364_360x.jpg?v=1671855339',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-hawaiian-canoe-pendant-104-31-01-235068_360x.jpg?v=1672454018',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/abalone-maui-fish-hook-pendant-057-51-31-172922_360x.jpg?v=1671855551',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opalite-aloha-heart-earrings-388-32-08s2-209442_360x.jpg?v=1669643121',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opalite-maile-leaf-earrings-428948_360x.jpg?v=1669643079',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/koa-wood-whale-tail-sleek-bangle-156894_360x.jpg?v=1661487453',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pink-opalite-sunflower-ring-with-larimar-1017-83-01-050-362072_360x.jpg?v=1669643062',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: false },
            { text: 'Alamea', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/B2279.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP2836.jpg?v=1647385684',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP2609.jpg?v=1647385683',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP3093.jpg?v=1647385684',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP3194.jpg?v=1647385684',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/ESP3196.jpg?v=1647385684',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/PP10404.jpg?v=1647385761',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SBR3568.jpg?v=1647385762',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SE17902.jpg?v=1647385763',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SE50801.jpg?v=1647385918',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SE28201.jpg?v=1647385918',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SE54106.jpg?v=1647385919',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SE56047.jpg?v=1647385919',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SE60207.jpg?v=1647386029',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SNL2325.jpg?v=1647386028',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SOP1044.jpg?v=1647386028',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SOP1005.jpg?v=1647386028',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SP33705.jpg?v=1647386137',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SP33401.jpg?v=1647386137',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SP32001.jpg?v=1647386136',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SP73601.jpg?v=1647386137',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SP80151.jpg?v=1647386138',
        answers: [
            { text: 'Island Fine Jewelry', correct: false },
            { text: 'Koa Nani', correct: false },
            { text: 'Hawaiian Jewel', correct: true },
            { text: 'Alamea', correct: false }
        ]
    },
]