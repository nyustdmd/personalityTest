let currentQuestion = 1;
let answers = [];

function startQuiz() {
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('question-heading').style.display = 'none';
    updateQuestion();
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        answers.push(selectedOption.value);
        currentQuestion++;
        if (currentQuestion <= 8) {
            updateQuestion();
        } else {
            showResult();
        }
    } else {
        alert('請選擇一個選項');
    }
}

function updateQuestion() {
    const questionHeading = document.getElementById('question-heading');
    const questionText = document.getElementById('question-text');
    const optionA = document.getElementById('option-a');
    const optionB = document.getElementById('option-b');

    questionHeading.textContent = `問題 ${currentQuestion}`;
    switch (currentQuestion) {
        case 1:
            questionText.textContent = '在處理問題時，你更傾向於：';
            break;
        case 2:
            questionText.textContent = '在社交場合，你更可能是：';
            break;
        case 3:
            questionText.textContent = '面對新環境，你更傾向於：';
            break;
        case 4:
            questionText.textContent = '在團隊中，你更可能是：';
            break;
        case 5:
            questionText.textContent = '在工作或學業中，你更注重：';
            break;
        case 6:
            questionText.textContent = '在閒暇時，你傾向於：';
            break;
        case 7:
            questionText.textContent = '在規劃事情時，你更注重：';
            break;
        case 8:
            questionText.textContent = '面對壓力，你的反應是：';
            break;
        default:
            break;
    }

    // 将option的文字对应到JavaScript中的变量
    optionA.nextSibling.textContent = optionA.labels[0].textContent;
    optionB.nextSibling.textContent = optionB.labels[0].textContent;

    // 重置选项
    optionA.checked = false;
    optionB.checked = false;
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    let personalityType = '';

    switch (answers.join('')) {
        case 'aaaaaaaa':
            personalityType = '靈感導航師';
            break;
        case 'bbbbbbbb':
            personalityType = '治愈魔法師';
            break;
        case 'abababab':
            personalityType = '光影探索者';
            break;
        // 添加更多的答案组合对应的人格类型
        case 'babababa':
            personalityType = '藝術創作者';
            break;
        case 'abbaabba':
            personalityType = '智慧探險家';
            break;
        // 添加更多的答案组合对应的人格类型
        default:
            personalityType = '混合型像素人格';
    }

    // 根据不同的人格类型显示相应的描述文本
    let resultDescription = '';
    switch (personalityType) {
        case '靈感導航師':
            resultDescription = '你是個強調追求完美和卓越，就像一位導航師一樣，細心觀察和調整，以確保事物處於最佳狀態';
            break;
        case '治愈魔法師':
            resultDescription = '你是個溫暖和富有同情心的人，就像一位治愈魔法師一樣，你的存在能給予人們力量和希望';
            break;
        case '光影探索者':
            resultDescription = '你是個勇於探索和尋找新奇的人，就像一位光影探索者一樣，你不斷尋找著未知的世界';
            break;
        // 添加更多的人格类型描述
        default:
            resultDescription = '無法確定你的人格類型';
    }

    resultText.textContent = personalityType;

    const resultDescriptionElement = document.createElement('p');
    resultDescriptionElement.textContent = resultDescription;
    resultDescriptionElement.id = 'result-description';
    resultContainer.appendChild(resultDescriptionElement);

    document.getElementById('quiz-container').style.display = 'none';
    resultContainer.style.display = 'block';
}
