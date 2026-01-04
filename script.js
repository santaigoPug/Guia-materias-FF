// Datos de preguntas
const questionsData = {
    antropocentrismo: [
        {
            q: "¿Qué define principalmente al antropocentrismo?",
            options: ["La naturaleza como centro", "El ser humano como centro de todo", "Los dioses como regidores", "La economía como motor"],
            correct: 1
        },
        {
            q: "Según los apuntes, ¿qué se ubica en el ápice de la pirámide antropocentrista?",
            options: ["Animales domésticos", "Plantas e insectos", "Seres humanos", "Mamíferos grandes"],
            correct: 2
        },
        {
            q: "En el antropocentrismo, ¿qué valor se les da a los animales?",
            options: ["Igual al humano", "Son sagrados", "Instrumental o secundario", "No tienen valor"],
            correct: 2
        },
        {
            q: "¿A quién se le considera el 'padre de la filosofía' en los apuntes?",
            options: ["Platón", "Aristóteles", "Sócrates", "Protágoras"],
            correct: 2
        },
        {
            q: "¿Cómo murió Sócrates según la historia filosófica?",
            options: ["Vejez", "En batalla", "Bebiendo cicuta", "Exilio"],
            correct: 2
        },
        {
            q: "¿Qué es la 'Mayéutica'?",
            options: ["Arte de gobernar", "Arte de dar a luz a las ideas", "Estudio de las plantas", "Teoría del color"],
            correct: 1
        },
        {
            q: "¿Quién fue el maestro de Platón?",
            options: ["Sócrates", "Aristóteles", "Pitágoras", "Heráclito"],
            correct: 0
        },
        {
            q: "Doxa se define como:",
            options: ["Conocimiento científico", "Opinión o creencia", "Verdad absoluta", "Lógica pura"],
            correct: 1
        },
        {
            q: "Episteme se define como:",
            options: ["Opinión común", "Superstición", "Conocimiento/Saber justificado", "Mito"],
            correct: 2
        },
        {
            q: "¿Cuál de estos es un ejemplo de Episteme?",
            options: ["Los signos zodiacales", "La gravedad explica por qué caen las cosas", "Barrer los pies trae mala suerte", "Pasar bajo una escalera"],
            correct: 1
        },
        {
            q: "¿Qué filósofo dividió el mundo en 'Sensible' e 'Inteligible'?",
            options: ["Sócrates", "Platón", "Piaget", "Marx"],
            correct: 1
        },
        {
            q: "La alienación en los apuntes se asocia con:",
            options: ["Pérdida de identidad y desconexión", "Viajes espaciales", "Amistad profunda", "Estudio intensivo"],
            correct: 0
        },
        {
            q: "¿Qué impacto puede tener la alienación según los diagramas?",
            options: ["Mejor salud física", "Ansiedad y depresión", "Mayor productividad", "Felicidad extrema"],
            correct: 1
        },
        {
            q: "¿Qué significa que el humano sea el 'sujeto' en el antropocentrismo?",
            options: ["Que es esclavo", "Que es quien conoce y domina el objeto", "Que no tiene voluntad", "Que es parte del paisaje"],
            correct: 1
        },
        {
            q: "Jean Piaget es conocido por su teoría de:",
            options: ["La evolución de las especies", "El desarrollo cognitivo", "La economía política", "La mitología griega"],
            correct: 1
        },
        {
            q: "¿Cuál es la primera etapa del desarrollo según Piaget?",
            options: ["Operaciones formales", "Preoperacional", "Sensoriomotriz", "Concreta"],
            correct: 2
        },
        {
            q: "En los apuntes de 'Economía', ¿cómo se define esta ciencia?",
            options: ["Estudio de los astros", "Satisfacción de necesidades con recursos escasos", "Intercambio de cromos", "Cultivo de la tierra"],
            correct: 1
        },
        {
            q: "¿Qué implica la 'Interculturalidad' según los apuntes?",
            options: ["Aislamiento de culturas", "Interrelación y respeto entre culturas", "Dominio de una cultura sobre otra", "Extinción de lenguas"],
            correct: 1
        },
        {
            q: "En el diagrama de la pirámide, ¿quiénes están en la base?",
            options: ["Peces", "Insectos, plantas, bacterias", "Mamíferos", "Humanos"],
            correct: 1
        },
        {
            q: "¿Qué filósofo es retratado con barba y túnica roja en los dibujos?",
            options: ["Platón", "Sócrates", "San Agustín", "Marx"],
            correct: 0
        }
    ],
    estafas: [
        {
            q: "¿Qué es el Phishing?",
            options: ["Un virus de computadora", "Suplantación de identidad para robar datos", "Un tipo de monitor", "Una red social"],
            correct: 1
        },
        {
            q: "¿Cuál es una medida de protección básica en Internet?",
            options: ["Compartir la clave", "Usar contraseñas seguras y VPN", "Dejar sesiones abiertas", "No usar antivirus"],
            correct: 1
        },
        {
            q: "¿Qué técnica de lectura rápida consiste en buscar palabras clave?",
            options: ["Zapping", "Scanning", "Skimming", "Deep reading"],
            correct: 1
        },
        {
            q: "El Malware se refiere a:",
            options: ["Software educativo", "Software malicioso (virus, troyanos)", "Un tipo de teclado", "Una tienda online"],
            correct: 1
        },
        {
            q: "¿Qué es una 'Tienda Fraudulenta'?",
            options: ["Un supermercado caro", "Web que simula vender productos para estafar", "Una tienda de ropa usada", "Un sitio de subastas"],
            correct: 1
        },
        {
            q: "¿Para qué sirve una VPN?",
            options: ["Para limpiar el teclado", "Para cifrar la conexión y ocultar la IP", "Para ver fotos", "Para acelerar la descarga"],
            correct: 1
        },
        {
            q: "En un directorio empresarial, ¿qué elemento es esencial?",
            options: ["El color favorito del dueño", "Nombre de la empresa y dirección", "Lista de compras personal", "Horóscopo"],
            correct: 1
        },
        {
            q: "¿Qué es el 'Skimming' en lectura?",
            options: ["Lectura palabra por palabra", "Vistazo rápido para entender la idea general", "Memorizar el texto", "Ignorar el título"],
            correct: 1
        },
        {
            q: "¿Cómo se recomienda cerrar las cuentas en lugares públicos?",
            options: ["Solo cerrar la pestaña", "Cerrar sesión formalmente (Log out)", "Apagar el monitor", "Dejarla abierta"],
            correct: 1
        },
        {
            q: "Un disco SSD tiene como ventaja principal sobre un HDD:",
            options: ["Es más lento", "Es más ruidoso", "Mayor velocidad de acceso", "Es más grande físicamente"],
            correct: 2
        },
        {
            q: "¿Qué es el almacenamiento en la 'Nube'?",
            options: ["Guardar datos en el cielo", "Almacenamiento en servidores remotos vía internet", "Un tipo de USB", "Memoria RAM"],
            correct: 1
        },
        {
            q: "Una característica de las estafas BEC (Business Email Compromise) es:",
            options: ["Regalar dinero", "Atacar correos corporativos para desviar pagos", "Vender software", "Actualizar Windows"],
            correct: 1
        },
        {
            q: "¿Qué animal aparece en la infografía de comparación de datos?",
            options: ["Un gato", "Un perro", "Un conejo", "Un oso"],
            correct: 2
        },
        {
            q: "¿Qué es el 'Zapping' en técnicas de lectura?",
            options: ["Dormir leyendo", "Saltar entre párrafos buscando lo relevante", "Leer al revés", "Subrayar todo"],
            correct: 1
        },
        {
            q: "¿Qué información NO se debe compartir en redes sociales?",
            options: ["Nombre de tu mascota", "Ubicación en tiempo real y claves", "Libro favorito", "Deporte preferido"],
            correct: 1
        },
        {
            q: "¿Cuál es el objetivo principal de un antivirus?",
            options: ["Hacer la PC más lenta", "Detectar y eliminar software dañino", "Jugar solitario", "Editar fotos"],
            correct: 1
        },
        {
            q: "Las citas APA se utilizan para:",
            options: ["Comprar ropa", "Dar crédito a las fuentes de información", "Cocinar", "Pedir un taxi"],
            correct: 1
        },
        {
            q: "¿Qué indica el candado verde en la barra del navegador?",
            options: ["Que el sitio es 100% real", "Que la conexión está cifrada (HTTPS)", "Que no hay anuncios", "Que el sitio es gratis"],
            correct: 1
        },
        {
            q: "El término 'Cultura Digital' implica:",
            options: ["Solo usar Facebook", "Uso crítico y responsable de tecnologías", "Jugar todo el día", "No usar tecnología"],
            correct: 1
        },
        {
            q: "¿Qué es un USB?",
            options: ["Un tipo de disco duro", "Un dispositivo de almacenamiento portátil", "Una marca de monitor", "Un cable de luz"],
            correct: 1
        }
    ],
    recoleccion: [
        {
            q: "Si en una urna hay 5 canicas rojas y 5 azules, ¿cuál es la probabilidad de sacar una roja?",
            options: ["1/10", "5/10 (o 1/2)", "10/10", "0/10"],
            correct: 1
        },
        {
            q: "¿Qué es el muestreo en matemáticas?",
            options: ["Probar comida", "Seleccionar una parte representativa de una población", "Contar a todos uno por uno", "Hacer dibujos"],
            correct: 1
        },
        {
            q: "En los apuntes, ¿qué representa 'R' en el problema de canicas?",
            options: ["Color Rojo", "Canica con Rayas", "Radio", "Resultado"],
            correct: 1
        },
        {
            q: "¿Qué herramienta se usa para organizar datos recolectados?",
            options: ["Tabla de frecuencias", "Martillo", "Espejo", "Calculadora científica"],
            correct: 0
        },
        {
            q: "Una encuesta es una técnica de:",
            options: ["Dibujo", "Recolección de datos", "Cocina", "Limpieza"],
            correct: 1
        },
        {
            q: "¿Qué es una variable cualitativa?",
            options: ["La que se mide con números", "La que describe cualidades o categorías", "La que siempre es cero", "El peso de un objeto"],
            correct: 1
        },
        {
            q: "La probabilidad de un evento seguro es siempre:",
            options: ["0", "0.5", "1", "100"],
            correct: 2
        },
        {
            q: "¿Qué es un experimento aleatorio?",
            options: ["Uno donde se sabe el resultado exacto", "Uno donde el resultado depende del azar", "Uno que no se puede hacer", "Un examen"],
            correct: 1
        },
        {
            q: "¿Cómo se calcula la probabilidad clásica (Laplace)?",
            options: ["Casos favorables / Casos totales", "Casos totales + Casos favorables", "Dando una opinión", "Multiplicando por 100"],
            correct: 0
        },
        {
            q: "En los apuntes de probabilidad, ¿qué significa 'P(A)'?",
            options: ["Precio de A", "Probabilidad del evento A", "Punto A", "Peso de A"],
            correct: 1
        },
        {
            q: "Si P(A) = 0.6, ¿cuál es la probabilidad de que NO ocurra A?",
            options: ["0.6", "1.0", "0.4", "0.1"],
            correct: 2
        },
        {
            q: "¿Cuál es un método directo de recolección de datos?",
            options: ["Observación", "Adivinar", "Leer el horóscopo", "Soñar"],
            correct: 0
        },
        {
            q: "Un 'censo' se diferencia de un 'muestreo' porque:",
            options: ["Es más rápido", "Estudia a toda la población", "Es más barato", "Usa menos gente"],
            correct: 1
        },
        {
            q: "En estadística, ¿qué es el 'espacio muestral'?",
            options: ["Un lugar en el espacio", "Conjunto de todos los resultados posibles", "Una hoja de papel", "El tamaño de la muestra"],
            correct: 1
        },
        {
            q: "¿Cuál es una variable cuantitativa discreta?",
            options: ["Color de ojos", "Número de hijos", "Estatura", "Peso"],
            correct: 1
        },
        {
            q: "¿Qué es una variable cuantitativa continua?",
            options: ["Nacionalidad", "Número de coches", "Temperatura", "Género"],
            correct: 2
        },
        {
            q: "Si lanzas un dado de 6 caras, ¿qué probabilidad hay de sacar un 3?",
            options: ["1/6", "3/6", "6/6", "1/3"],
            correct: 0
        },
        {
            q: "En los apuntes, se menciona una 'urna'. ¿Para qué sirve comúnmente en probabilidad?",
            options: ["Para votar", "Para modelar experimentos de extracción", "Para guardar lápices", "Para cocinar"],
            correct: 1
        },
        {
            q: "¿Qué significa que dos eventos sean mutuamente excluyentes?",
            options: ["Que ocurren al mismo tiempo", "Que no pueden ocurrir simultáneamente", "Que son amigos", "Que son iguales"],
            correct: 1
        },
        {
            q: "El histograma es un gráfico para representar:",
            options: ["Nombres de personas", "Distribuciones de frecuencias", "Listas de compras", "Dibujos libres"],
            correct: 1
        }
    ],
    planvida: [
        {
            q: "¿Qué es un proyecto o plan de vida?",
            options: ["Un dibujo", "Guía para alcanzar metas personales y profesionales", "Una lista de supermercado", "Un horario de clases"],
            correct: 1
        },
        {
            q: "¿Qué es el autoconocimiento?",
            options: ["Conocer a los amigos", "Conocer mis propias fortalezas y debilidades", "Saber mucho de historia", "Saber usar el celular"],
            correct: 1
        },
        {
            q: "Una meta a corto plazo suele cumplirse en:",
            options: ["10 años", "Menos de un año", "Nunca", "20 años"],
            correct: 1
        },
        {
            q: "¿Qué son los valores personales?",
            options: ["El dinero que tengo", "Principios que guían mis acciones", "Mis notas escolares", "Mis juguetes"],
            correct: 1
        },
        {
            q: "La resiliencia es:",
            options: ["Rendirse pronto", "Capacidad de superar adversidades", "Ser grosero", "No sentir nada"],
            correct: 1
        },
        {
            q: "En un plan de vida, ¿por qué es importante la salud?",
            options: ["Para nada", "Es la base para poder realizar cualquier actividad", "Para verse bien", "Solo para deportistas"],
            correct: 1
        },
        {
            q: "¿Qué significa FODA?",
            options: ["Forma, Orden, Dato, Azar", "Fortalezas, Oportunidades, Debilidades, Amenazas", "Fin, Origen, Destino, Acción", "Fuego, Oro, Diamante, Arena"],
            correct: 1
        },
        {
            q: "Las 'Debilidades' en un FODA son factores:",
            options: ["Externos positivos", "Internos negativos a mejorar", "Externos negativos", "Internos positivos"],
            correct: 1
        },
        {
            q: "Las 'Oportunidades' en un FODA son factores:",
            options: ["Internos", "Externos que puedo aprovechar", "Mis miedos", "Mis defectos"],
            correct: 1
        },
        {
            q: "¿Qué es la empatía?",
            options: ["Ignorar a los demás", "Ponerse en el lugar del otro", "Sentir envidia", "Estar enojado"],
            correct: 1
        },
        {
            q: "¿Cuál es el primer paso para tomar una decisión responsable?",
            options: ["Actuar rápido", "Informarse y analizar opciones", "Dejarlo a la suerte", "Preguntar a un extraño"],
            correct: 1
        },
        {
            q: "Una meta SMART debe ser:",
            options: ["Tonta y lenta", "Específica, medible, alcanzable, relevante y temporal", "Solo para genios", "Imposible de hacer"],
            correct: 1
        },
        {
            q: "¿Qué papel juega la familia en el plan de vida?",
            options: ["Ninguno", "Puede ser una red de apoyo", "Solo dan dinero", "Son enemigos"],
            correct: 1
        },
        {
            q: "¿Qué es la motivación intrínseca?",
            options: ["La que viene de premios externos", "La que nace del interés propio y satisfacción", "La que me obligan a tener", "No existe"],
            correct: 1
        },
        {
            q: "El manejo de emociones sirve para:",
            options: ["No sentir nada", "Reaccionar de forma equilibrada", "Gritar siempre", "Ocultar lo que siento"],
            correct: 1
        },
        {
            q: "Para elegir una carrera, es vital considerar:",
            options: ["Solo el sueldo", "Intereses, aptitudes y valores", "Lo que digan los vecinos", "El color del uniforme"],
            correct: 1
        },
        {
            q: "¿Qué es el sentido de vida?",
            options: ["La dirección de una calle", "Propósito que nos da motivación y razón de ser", "Comer y dormir", "Tener muchos seguidores"],
            correct: 1
        },
        {
            q: "La perseverancia es importante porque:",
            options: ["Permite seguir intentando pese a obstáculos", "Es aburrido", "Te hace rico instantáneamente", "No sirve para nada"],
            correct: 0
        },
        {
            q: "¿Qué es un hábito?",
            options: ["Una ropa de monje", "Conducta repetida regularmente", "Algo que hago una vez al año", "Un error"],
            correct: 1
        },
        {
            q: "¿Por qué el plan de vida debe ser flexible?",
            options: ["Porque no importa", "Porque las circunstancias y nosotros cambiamos", "Porque es de goma", "No debe ser flexible"],
            correct: 1
        }
    ]
};

// State variables
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let isVerified = false;

// DOM Elements
const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const categoryBtns = document.querySelectorAll('.category-btn');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const progressText = document.getElementById('progress-text');
const progressBarFill = document.getElementById('progress-bar-fill');
const verifyBtn = document.getElementById('verify-btn');
const nextBtn = document.getElementById('next-btn');
const backToMenuBtn = document.getElementById('back-to-menu');
const restartBtn = document.getElementById('restart-btn');
const resultSummary = document.getElementById('result-summary');
const finalScoreText = document.getElementById('final-score');
const performanceMsg = document.getElementById('performance-msg');

// Initialize Category Selection
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Categoría seleccionada:', btn.dataset.category);
        // Añadir clase de animación temporal para que coincida con la selección correcta
        btn.classList.add('selected-theme');
        setTimeout(() => btn.classList.remove('selected-theme'), 380);
        currentCategory = btn.dataset.category;
        startQuiz();
    });
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    isVerified = false;
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    isVerified = false;
    selectedOption = null;
    verifyBtn.disabled = true;
    verifyBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    
    const questions = questionsData[currentCategory];
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update progress
    questionNumber.innerText = `Pregunta #${currentQuestionIndex + 1}`;
    progressText.innerText = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;
    
    // Update text
    questionText.innerText = currentQuestion.q;
    
    // Render options
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index, element) {
    console.log('Opción seleccionada:', index);
    if (isVerified) return;
    
    // UI update
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    
    selectedOption = index;
    verifyBtn.disabled = false;
}

verifyBtn.addEventListener('click', () => {
    if (selectedOption === null || isVerified) return;
    
    isVerified = true;
    const questions = questionsData[currentCategory];
    const correctIndex = questions[currentQuestionIndex].correct;
    const allOptions = document.querySelectorAll('.option-btn');
    
    allOptions.forEach((btn, index) => {
        btn.classList.add('disabled');
        if (index === correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedOption) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedOption === correctIndex) {
        score++;
        playSimpleSound(true);
    } else {
        playSimpleSound(false);
    }
    
    verifyBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    const questions = questionsData[currentCategory];
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    showScreen('result-screen');
    const totalQuestions = questionsData[currentCategory].length;
    const finalScore = Math.round((score / totalQuestions) * 100);
    
    resultSummary.innerText = `Has respondido correctamente ${score} de ${totalQuestions} preguntas.`;
    finalScoreText.innerText = finalScore;
    
    let msg = "";
    if (finalScore >= 90) msg = "¡Excelente trabajo! Dominas el tema.";
    else if (finalScore >= 70) msg = "¡Muy bien! Tienes buen conocimiento.";
    else if (finalScore >= 50) msg = "Regular. Te recomendamos repasar los apuntes.";
    else msg = "Necesitas estudiar más este tema.";
    
    performanceMsg.innerText = msg;
}

function showScreen(screenId) {
    [menuScreen, quizScreen, resultScreen].forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

backToMenuBtn.addEventListener('click', () => showScreen('menu-screen'));
restartBtn.addEventListener('click', () => showScreen('menu-screen'));

// Simple Audio Feedback using Web Audio API
function playSimpleSound(isCorrect) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(isCorrect ? 880 : 220, audioCtx.currentTime); // A5 for correct, A3 for wrong
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.2);
}