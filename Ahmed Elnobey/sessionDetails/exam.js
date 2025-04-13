document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
  const courseName = localStorage.getItem("examCourse");
  let examQuestions = JSON.parse(localStorage.getItem("examQuestions")) || {};
  if (!examQuestions[courseName]) {
    examQuestions[courseName] = [
      {
        id: 1,
        question: `What is the primary goal of ${courseName || "this course"}?`,
        options: [
          "To learn programming",
          "To improve communication",
          "To understand design",
          "To enhance teamwork",
        ],
        correctAnswer: "To learn programming",
      },
      {
        id: 2,
        question: "Which tool is most relevant for this course?",
        options: ["VS Code", "Photoshop", "Excel", "PowerPoint"],
        correctAnswer: "VS Code",
      },
      {
        id: 3,
        question: "What is the duration of this course?",
        options: ["1 month", "3 months", "6 months", "1 year"],
        correctAnswer: "6 months",
      },
    ];
    localStorage.setItem("examQuestions", JSON.stringify(examQuestions));
  }

  const questions = examQuestions[courseName] || [];
  const examQuestionsDiv = document.getElementById("examQuestions");
  const examResultDiv = document.getElementById("examResult");

  // Update header with course name
  document.querySelector("header h1").textContent = `Exam for ${courseName || "Unknown Course"}`;

  // If no questions are available, show a message
  if (questions.length === 0) {
    examQuestionsDiv.innerHTML = "<p>No questions available for this course.</p>";
    return;
  }

  // Create the exam form
  const form = document.createElement("form");
  form.id = "examForm";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "20px";

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question-card";
    questionDiv.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${q.question}</p>`;

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";
    q.options.forEach((option, i) => {
      const label = document.createElement("label");
      label.className = "option-label";
      label.innerHTML = `
        <input type="radio" name="question-${q.id}" value="${option}" required>
        <span>${option}</span>
      `;
      optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    form.appendChild(questionDiv);
  });

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Exam";
  submitButton.className = "session-button";
  form.appendChild(submitButton);

  examQuestionsDiv.appendChild(form);

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let score = 0;
    questions.forEach((q) => {
      const selectedOption = form.querySelector(`input[name="question-${q.id}"]:checked`);
      if (selectedOption && selectedOption.value === q.correctAnswer) {
        score++;
      }
    });

    // Determine result styling based on score
    const percentage = (score / questions.length) * 100;
    let resultColor = percentage >= 70 ? "#28a745" : percentage >= 50 ? "#ffc107" : "#dc3545"; // Green for 70+, yellow for 50-69, red for below 50

    // Display result
    examResultDiv.style.display = "block";
    examResultDiv.className = "result-card";
    examResultDiv.innerHTML = `
      <h3>Exam Result</h3>
      <p>You scored ${score} out of ${questions.length}.</p>
      <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;

    // Add "Back to Session" button
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Session";
    backButton.className = "session-button";
    backButton.addEventListener("click", () => {
      window.location.href = "./session.html";
    });
    examResultDiv.appendChild(backButton);

    form.style.display = "none"; // Hide the form after submission
  });

  // Apply styles (consistent with the project's design system)
  document.body.style.fontFamily = "'Circular Std', sans-serif";
  document.body.style.color = "#191818";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.minHeight = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.position = "relative";

  const backgroundLayer = document.querySelector(".background-layer");
  backgroundLayer.style.position = "fixed";
  backgroundLayer.style.top = "0";
  backgroundLayer.style.left = "0";
  backgroundLayer.style.width = "100%";
  backgroundLayer.style.height = "100%";
  backgroundLayer.style.backgroundImage = "url('https://identity.iti.gov.eg/images/ITI%20logo.png')";
  backgroundLayer.style.backgroundRepeat = "no-repeat";
  backgroundLayer.style.backgroundPosition = "center";
  backgroundLayer.style.backgroundSize = "contain";
  backgroundLayer.style.opacity = "0.1";
  backgroundLayer.style.zIndex = "-1";

  const header = document.querySelector('header');
  header.style.backgroundImage = 'linear-gradient(120deg, #ed10de 0%, #9405e7 100%)';
  header.style.color = 'white';
  header.style.padding = '20px';
  header.style.textAlign = 'center';
  header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

  const container = document.querySelector(".container");
  container.style.maxWidth = "600px";
  container.style.width = "90%";
  container.style.margin = "40px auto";
  container.style.padding = "20px";
  container.style.textAlign = "center";
  container.style.flex = "1";
  container.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";

  const footer = document.querySelector("footer");
  footer.style.textAlign = "center";
  footer.style.padding = "20px";
  footer.style.backgroundColor = "rgba(25, 24, 24, 0.95)";
  footer.style.color = "white";
  footer.style.marginTop = "auto";
  footer.style.fontSize = "14px";
  footer.style.boxShadow = "0 -2px 6px rgba(0, 0, 0, 0.1)";

  // Style question cards
  const questionCards = document.querySelectorAll(".question-card");
  questionCards.forEach((card) => {
    card.style.background = "#F9F9F9";
    card.style.border = "1px solid #036AFF";
    card.style.borderRadius = "8px";
    card.style.padding = "20px";
    card.style.marginBottom = "20px";
    card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.02)";
      card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    });
  });

  // Style question text
  const questionText = document.querySelectorAll(".question-card p");
  questionText.forEach((text) => {
    text.style.marginBottom = "15px";
    text.style.fontSize = "18px";
    text.style.lineHeight = "1.5";
  });

  // Style options container
  const options = document.querySelectorAll(".options");
  options.forEach((opt) => {
    opt.style.display = "flex";
    opt.style.flexDirection = "column";
    opt.style.gap = "10px";
    opt.style.marginTop = "10px";
  });

  // Style option labels
  const labels = document.querySelectorAll(".option-label");
  labels.forEach((label) => {
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.padding = "10px";
    label.style.backgroundColor = "#f1f3f5";
    label.style.borderRadius = "5px";
    label.style.cursor = "pointer";
    label.style.transition = "background-color 0.3s";

    const input = label.querySelector("input");
    const span = label.querySelector("span");

    input.style.marginRight = "10px";
    span.style.fontSize = "16px";

    label.addEventListener("mouseover", () => {
      label.style.backgroundColor = "#e9ecef";
    });
    label.addEventListener("mouseout", () => {
      label.style.backgroundColor = input.checked ? "#d0e7ff" : "#f1f3f5";
    });

    input.addEventListener("change", () => {
      labels.forEach((l) => {
        const i = l.querySelector("input");
        l.style.backgroundColor = i.checked ? "#d0e7ff" : "#f1f3f5";
      });
    });
  });

  // Style result card
  const resultCard = document.querySelector(".result-card");
  if (resultCard) {
    resultCard.style.background = "#F9F9F9";
    resultCard.style.border = `1px solid ${resultColor}`;
    resultCard.style.borderRadius = "8px";
    resultCard.style.padding = "20px";
    resultCard.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    resultCard.style.textAlign = "center";
    resultCard.style.marginTop = "20px";

    const h3 = resultCard.querySelector("h3");
    h3.style.color = resultColor;
    h3.style.marginBottom = "15px";

    const p = resultCard.querySelectorAll("p");
    p.forEach((para) => {
      para.style.fontSize = "16px";
      para.style.marginBottom = "10px";
    });
  }

  // Style buttons
  function applyButtonStyles(button) {
    button.style.backgroundColor = "#036AFF";
    button.style.color = "white";
    button.style.padding = "12px 24px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
    button.style.transition = "background-color 0.3s, transform 0.2s, box-shadow 0.2s";
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#024DBA";
      button.style.transform = "scale(1.05)";
      button.style.boxShadow = "0 6px 8px rgba(0,0,0,0.15)";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#036AFF";
      button.style.transform = "scale(1)";
      button.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    });
  }

  const sessionButtons = document.querySelectorAll(".session-button");
  sessionButtons.forEach(applyButtonStyles);

  // Responsive adjustments
  const mediaQuery = window.matchMedia("(max-width: 600px)");
  function handleResponsive(e) {
    if (e.matches) {
      container.style.padding = "15px";
      questionCards.forEach((card) => {
        card.style.padding = "15px";
      });
      labels.forEach((label) => {
        label.style.padding = "8px";
        label.querySelector("span").style.fontSize = "14px";
      });
      sessionButtons.forEach((button) => {
        button.style.padding = "10px 20px";
        button.style.fontSize = "14px";
      });
    }
  }
  mediaQuery.addListener(handleResponsive);
  handleResponsive(mediaQuery);
});