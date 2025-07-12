===============================
 CRUD DE INVENTARIO DE MEDICAMENTOS
===============================

Aplicación web construida con Node.js, Express y Firestore (Firebase), para registrar, editar y eliminar medicamentos desde una interfaz moderna.

-------------------------------
📦 DEPENDENCIAS NECESARIAS
-------------------------------

Estas son las librerías que deben instalarse antes de ejecutar el proyecto:

1. express           → Framework web para Node.js
2. body-parser       → Middleware para procesar formularios
3. firebase-admin    → SDK para conectarse con Firestore (Firebase)

Para instalar todas, ejecuta en consola:

npm install express body-parser firebase-admin

-------------------------------
🚀 USO DEL PROYECTO
-------------------------------

1. Coloca tu archivo de credenciales `serviceAccountKey.json` en la raíz.
2. Asegúrate de que el archivo `firestore-config.js` esté configurado correctamente.
3. Ejecuta el servidor:

   node server.js

4. Abre tu navegador en:

   http://localhost:3000

-------------------------------
👨‍💻 Autor: Raúl Quintana – URP
-------------------------------

------------------------------------
CREDENCIALES DE FIRESTORE
--------------------------------------
{
  "type": "service_account",
  "project_id": "stalwart-camera-465705-q5",
  "private_key_id": "c42251492158022c57c2922211c65f4de316cd22",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClhP6bs47MBKYA\nKBg5kH8voxQfBDLHLBdUSXgNfV5IPNPNm8UB1qwPtQV+pgzgVQNk3kTwgu47vAna\ng4Hv+pniJluBFrWSZXi6wp5MUVt7BwbxrgDH2hPKX6WpFNsCAmTSpN7WK4IhozG6\nfCfr/c5xXVo/kTV3dR3mCIDxhVFIRyQJ6And+64R9VTLFH6xv/bR4Ysb5wBG0OFt\nFC5icduIoiFZN/obSkKSKfmZ+Dlr4GuY04FvdI30Sjqll9w3zU0UICkDXtK/7kTJ\naJIWj3xCsa2NjTJBQaafdd4zP6p6fbOW34qMfcOC0h8MOxWRw4kvzkT6ZZhjs2M1\nFqAlFHP3AgMBAAECggEAFgQyub3l6KKq/KpYo+Th22bzGOJovrAmtOzGLe/XHVS5\n95zDVRNGSnCRt97ufN3SAxYYUBrvsBJlsnh7otLP/+eKPwl+Qr2B6ZWpk2KJqzus\nDh75tkZTtj+IEY2B9Cp4BBeEwd2CWbxos52AJ0EuDKDrjY5gcPCrIXCldiV9l6y9\nOkmgWocOKktp3jyoSu8XHO7OVIQowLxOMRQs29LO+8XKKCSax+zBT+AjjLLSj67f\n7yk7aK9gjDdge2RjKsAa5VeHmVPEoOnD5RwNEP0BIsMY0Hc+AkYNd847M6wnHbc5\nY3SSvc3oP7DDnf2RcJR+BBUswS3cXM1rqf6dj7M2AQKBgQDeOtirV/3toRLUizUl\n+IruasvGIjBpGDnf/zn3H12rsUIKRjCLCUJE3lGl3FagYHRPrjsxNfr3FDoQfQKl\nW1OytEFaeIKSjjRWuRTd0c5ONi5TrhzK3gUFToiyYEQMclW0vEz24KXvPZeuONQc\nBfmpUtTzafjG+oXuBeb4lBdJ1wKBgQC+rAKa76aSHoh6K8oq2FCd2/ydLIrlCVJb\npHG7D2cxXvLoEeQHkPzVoLHGj1GV1q0ycw65GwIg1S4ZKXU6LPYb5fJRYCj6SAOO\n3sHnGe+OYPcRkKf4sGkyaWhYU9L4WS3RHptShlAYKJ1oU5Au7jVb5D3RBnEeeCk3\nGb19U+Ii4QKBgQCFH6VJxzVDE3lvP1EARQoc1nbpYvOzESMiTwcPRYfcYRwZgYB0\n2YAMN02b2Qk/m2gxj0LAMQD83+4EkI50NehGpfp8UrKNToiF5utcEeHPMl/AGw3+\nbM9/JVN333kEJ721vhMw1NQyI6hoYnyVqPKs/wS4KCQyNkLimkCJalUlEwKBgQCj\nuCzwfpCnbMJBLPKFwYHPWkJZbxLAQTXPbK8fMMWptd6a+Cm1eYAvqrCbTxp9r3y+\nEd91f8RfDs1rW5bF4i9cmyBrUUc+SLGNbqZOWo3A0m+zTGN+fXOGjs3C8g73ohNe\nOYqi3KNPayhlmUL3mSCGC8Ash/x/bivtnROA1pMY4QKBgGlD1+UwQJbCg9CTQwmg\niAZAOaZ6UBeRcB2WEWDlUzYF9vDaEru0ovP+JLAIe6ru3vLEb1J0G7zkYoBd2Lfj\n1aNZQpSd5JYzJPWssd6wXVPsILsgWG3fOgN2oRAg8KC6ITnRwyO9oT9PM0xHE+Lb\nB41yL9f+tiNyYhrSb6YIjHJ+\n-----END PRIVATE KEY-----\n",
  "client_email": "928365653422-compute@developer.gserviceaccount.com",
  "client_id": "100143121572214905016",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/928365653422-compute%40developer.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
