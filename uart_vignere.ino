const unsigned long BAUDRATE = 9600;
const int MAX_MSG_LEN = 48;
const int MAX_KEY_LEN = 12;

String normalizeUpper(const String &input) {
  String out = "";
  for (unsigned int i = 0; i < input.length(); i++) {
    char c = input[i];
    if (c >= 'a' && c <= 'z') {
      c = c - 'a' + 'A';
    }
    out += c;
  }
  return out;
}

bool isValidKey(const String &key) {
  if (key.length() == 0 || key.length() > MAX_KEY_LEN) {
    return false;
  }

  for (unsigned int i = 0; i < key.length(); i++) {
    char c = key[i];
    if (c < 'A' || c > 'Z') {
      return false;
    }
  }
  return true;
}

bool isValidMessage(const String &message) {
  if (message.length() > MAX_MSG_LEN) {
    return false;
  }

  for (unsigned int i = 0; i < message.length(); i++) {
    char c = message[i];
    if (c == ' ') {
      continue;
    }
    if (c < 'A' || c > 'Z') {
      return false;
    }
  }
  return true;
}

char encryptChar(char plainChar, char keyChar) {
  int p = plainChar - 'A';
  int k = keyChar - 'A';
  return char(((p + k) % 26) + 'A');
}

char decryptChar(char cipherChar, char keyChar) {
  int c = cipherChar - 'A';
  int k = keyChar - 'A';
  return char(((c - k + 26) % 26) + 'A');
}

String vigenereEncrypt(const String &message, const String &key) {
  String result = "";
  int keyIndex = 0;

  for (unsigned int i = 0; i < message.length(); i++) {
    char c = message[i];
    if (c == ' ') {
      result += ' ';
      continue;
    }

    char k = key[keyIndex % key.length()];
    result += encryptChar(c, k);
    keyIndex++;
  }

  return result;
}

String vigenereDecrypt(const String &message, const String &key) {
  String result = "";
  int keyIndex = 0;

  for (unsigned int i = 0; i < message.length(); i++) {
    char c = message[i];
    if (c == ' ') {
      result += ' ';
      continue;
    }

    char k = key[keyIndex % key.length()];
    result += decryptChar(c, k);
    keyIndex++;
  }

  return result;
}

int firstSeparator(const String &line) {
  return line.indexOf('|');
}

int secondSeparator(const String &line, int firstSep) {
  return line.indexOf('|', firstSep + 1);
}

void printError(const String &message) {
  Serial.print("ERR|");
  Serial.println(message);
}

void printOk(const String &message) {
  Serial.print("OK|");
  Serial.println(message);
}

void handleCommand(String line) {
  line.trim();
  if (line.length() == 0) {
    return;
  }

  int sep1 = firstSeparator(line);
  int sep2 = secondSeparator(line, sep1);

  if (sep1 == -1 || sep2 == -1) {
    printError("FORMATO_INVALIDO");
    return;
  }

  String command = normalizeUpper(line.substring(0, sep1));
  String key = normalizeUpper(line.substring(sep1 + 1, sep2));
  String message = normalizeUpper(line.substring(sep2 + 1));

  if (command == "PING") {
    Serial.println("PONG");
    return;
  }

  if (command == "INFO") {
    printOk("MODE=VIGENERE;MAX_MSG=48;MAX_KEY=12;CHARS=A-Z ESPACIO");
    return;
  }

  if (command != "ENC" && command != "DEC") {
    printError("COMANDO_INVALIDO");
    return;
  }

  if (message.length() > MAX_MSG_LEN) {
    printError("MENSAJE_MUY_LARGO");
    return;
  }

  if (!isValidKey(key)) {
    printError("CLAVE_INVALIDA");
    return;
  }

  if (!isValidMessage(message)) {
    printError("MENSAJE_INVALIDO");
    return;
  }

  if (command == "ENC") {
    printOk(vigenereEncrypt(message, key));
    return;
  }

  if (command == "DEC") {
    printOk(vigenereDecrypt(message, key));
    return;
  }
}

void setup() {
  Serial.begin(BAUDRATE);
}

void loop() {
  if (Serial.available() > 0) {
    String line = Serial.readStringUntil('\n');
    handleCommand(line);
  }
}
