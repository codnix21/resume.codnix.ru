<?php
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// Защита от CSRF (простая проверка Origin)
$allowedOrigins = ['http://localhost', 'https://resume.codnix.ru', 'http://resume.codnix.ru'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($origin) && !in_array($origin, $allowedOrigins)) {
    // Для локальной разработки разрешаем все
    if (strpos($origin, 'localhost') === false && strpos($origin, '127.0.0.1') === false) {
        echo json_encode(['success' => false, 'message' => 'Неразрешенный источник запроса']);
        exit;
    }
}

// Проверка метода запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Метод не поддерживается']);
    exit;
}

// Получение и санитизация данных из формы
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Валидация длины полей (защита от переполнения)
if (strlen($name) > 100) {
    echo json_encode(['success' => false, 'message' => 'Имя слишком длинное (максимум 100 символов)']);
    exit;
}

if (strlen($email) > 255) {
    echo json_encode(['success' => false, 'message' => 'Email слишком длинный']);
    exit;
}

if (strlen($subject) > 200) {
    echo json_encode(['success' => false, 'message' => 'Тема слишком длинная (максимум 200 символов)']);
    exit;
}

if (strlen($message) > 5000) {
    echo json_encode(['success' => false, 'message' => 'Сообщение слишком длинное (максимум 5000 символов)']);
    exit;
}

// Валидация обязательных полей
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Пожалуйста, заполните все обязательные поля']);
    exit;
}

// Валидация email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Пожалуйста, введите корректный email']);
    exit;
}

// Санитизация данных для безопасного использования
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Защита от email injection - удаляем опасные символы из email
$email = str_replace(["\r", "\n", "%0a", "%0d"], '', $email);

// Настройки email
$to = 'admin@irk138.ru'; // Ваш email
$email_subject = !empty($subject) ? $subject : "Новое сообщение от $name";
$email_body = "Имя: $name\nEmail: $email\n\nСообщение:\n$message";
$headers = "From: noreply@codnix.ru\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправка email
$mailSent = @mail($to, $email_subject, $email_body, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Сообщение успешно отправлено']);
} else {
    echo json_encode(['success' => false, 'message' => 'Ошибка при отправке сообщения']);
}
?>